import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';
import { useTouch } from '~/hooks';

const DEFAULT_TAG = 'button';

export type ButtonProps = React.ComponentProps<typeof StyledButton>;

type ButtonComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  ButtonProps
>;

const StyledButton = styled(DEFAULT_TAG, {
  boxSizing: 'border-box',
  border: 'none',
  borderRadius: '$default',
  overflow: 'hidden',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  lineHeight: 1,
  '&[disabled]': {
    opacity: '0.5',
    pointerEvents: 'none',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$grey-900',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$grey-300',
        color: '$grey-900'
      },
    },
    size: {
      sm: {
        height: '2.25rem',
        paddingLeft: '$03',
        paddingRight: '$03',
        fontSize: '$size-sm',
      },
      md: {
        height: '2.75rem',
        paddingLeft: '$04',
        paddingRight: '$04',
        fontSize: '$size-md',
      },
      lg: {
        height: '3.5rem',
        paddingLeft: '$06',
        paddingRight: '$06',
        fontSize: '$size-lg',
      },
    },
    full: {
      true: {
        width: '100%',
      },
      false: {
        width: 'unset',
      },
    },
    active: {
      true: {
        opacity: 0.5,
      },
      false: {},
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    full: false,
    active: false,
  },
});

const Button = forwardRef(function Button(
  props,
  forwardedRef
) {
  const touchProps = useTouch();

  return (
    <StyledButton
      {...touchProps}
      {...props}
      ref={forwardedRef}
    />
  );
}) as ButtonComponent;


export default Button;
