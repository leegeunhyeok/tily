import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';

const DEFAULT_TAG = 'p';

export type TextProps = React.ComponentProps<typeof StyledText>;

type TextComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  TextProps
>;

const StyledText = styled(DEFAULT_TAG, {
  display: 'inline',
  variants: {
    color: {
      primary: {
        color: '$grey-900',
      },
      secondary: {
        color: '$grey-500',
      },
    },
    size: {
      sm: {
        fontSize: '$size-sm',
      },
      md: {
        fontSize: '$size-md',
      },
      lg: {
        fontSize: '$size-lg',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  props,
  forwardedRef
) {
  return (
    <StyledText
      {...props}
      ref={forwardedRef}
    />
  );
}) as TextComponent;


export default Text;
