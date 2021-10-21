import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';
import { useTouch } from '~/hooks';

const DEFAULT_TAG = 'input';
export const INPUT_STYLE = {
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  padding: '$04',
  border: 'none',
  borderRadius: '$default',
  backgroundColor: '$white',
  color: '$grey-900',
  fontSize: '$size-md',
  '&:focus': {
    backgroundColor: '$grey-100',
  },
} as const;

export type InputProps = React.ComponentProps<typeof StyledInput>;

type InputComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  InputProps
>;

const StyledInput = styled(DEFAULT_TAG, {
  ...INPUT_STYLE,
  variants: {
    active: {
      true: {
        backgroundColor: '$grey-100',
      },
      false: {},
    }
  },
  defaultVariants: {
    active: false,
  },
});

const Input = forwardRef(function Input(
  props,
  forwardedRef
) {
  const touchProps = useTouch();

  return (
    <StyledInput
      {...touchProps}
      {...props}
      spellCheck={false}
      ref={forwardedRef}
    />
  );
}) as InputComponent;


export default Input;
