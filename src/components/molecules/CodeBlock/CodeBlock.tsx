import React from 'react';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import { styled } from '~/stitches.config';
import { ignoreEventBubbling } from '~/utils';

import { Box } from '~/components/atoms';

const StyledWrapper = styled(NodeViewWrapper, {
  position: 'relative',
});

const LanguageSelector = styled('select', {
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '$02',
});

const StyledPre = styled(Box, {
  padding: '$02',
  borderRadius: '$default',
  backgroundColor: '#1e1e1e',
  color: '#dcdcdc',
});

const CodeBlock = ({
  updateAttributes,
  extension
}: {
  updateAttributes: any;
  extension: any;
}) => {
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateAttributes({ language: event.target.value });
  };

  return (
    <StyledWrapper>
      <LanguageSelector
        contentEditable={false}
        defaultValue="null"
        onClick={ignoreEventBubbling}
        onChange={handleChangeLanguage}
      >
        <option value="null">자동</option>
        <option disabled>—</option>
        {extension.options.lowlight.listLanguages().map((language: string, index: number) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </LanguageSelector>
      <StyledPre as="pre">
        <NodeViewContent as="code" />
      </StyledPre>
    </StyledWrapper>
  );
};

export default React.memo(CodeBlock);
