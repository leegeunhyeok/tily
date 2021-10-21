import type * as Polymorphic from '@radix-ui/react-polymorphic';
import React, { useRef, useEffect } from 'react';
import { TextSelection } from 'prosemirror-state';
import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { styled } from '~/stitches.config';
import { ignoreEventBubbling } from '~/utils';

import { Indent } from './extentions/indent';
import lowlight from './languages';
import { Box, Button, Input, INPUT_STYLE } from '~/components/atoms';
import { CodeBlock } from '~/components/molecules';

export type EditorProps = {
  initialData?: {
    title: string;
    content: string;
  };
  onClose?: () => void;
  onSave?: (data: EditorData) => void;
};

export type EditorData = {
  title: string;
  content: string;
};

type EditorComponent = Polymorphic.ForwardRefComponent<
  typeof Box,
  EditorProps
>;

const Container = styled(Box, {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$white',
});

const TitleArea = styled(Box, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  paddingRight: '1rem',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
});

const TitleButton = styled(Button, {
  marginLeft: '0.5rem',
});

const StyledEditor = styled(EditorContent, {
  ...INPUT_STYLE,
  paddingTop: 0,
  marginTop: '4.5rem',
});

const Editor = ({ initialData, onClose, onSave }: EditorProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: '내용을 작성해주세요..',
      }),
      CodeBlockLowlight
        .extend({
          addNodeView: () => ReactNodeViewRenderer(CodeBlock),
        })
        .configure({ lowlight }),
      Indent,
    ],
    content: initialData?.content ?? '',
  });

  useEffect(() => {
    if (initialData?.title && titleRef.current) {
      titleRef.current.value = initialData.title;
    }
  }, [initialData]);

  const handleClickEditor = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!editor) return;
    const { view, isFocused } = editor;
    if (!isFocused) {
      event.preventDefault();
      view.dispatch(view.state.tr.setSelection(TextSelection.near(view.state.doc.resolve(view.state.doc.content.size))));
      view.focus();
    }
  };

  const handleClickCancelButton = () => onClose?.();
  const handleClickSaveButton = () => {
    if (!editor) return;
    onSave?.({
      title: titleRef.current?.value ?? '',
      content: editor.getHTML(),
    });
  };

  return (
    <Container onClick={handleClickEditor}>
      <TitleArea onClick={ignoreEventBubbling}>
        <Input ref={titleRef} placeholder="제목" />
        <TitleButton size="sm" color="secondary" onClick={handleClickCancelButton}>취소</TitleButton>
        <TitleButton size="sm" onClick={handleClickSaveButton}>저장</TitleButton>
      </TitleArea>
      <StyledEditor
        editor={editor}
        spellCheck={false}
        autoCapitalize="off"
      />
    </Container>
  );
};


export default React.memo(Editor) as EditorComponent;

