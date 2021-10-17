import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';

const DEFAULT_TAG = 'span';

export type DotProps = React.ComponentProps<typeof StyledDot>;

type DotComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  DotProps
>;

const StyledDot = styled(DEFAULT_TAG, {
  display: 'inline-block',
  borderRadius: '50%',
  variants: {
    size: {
      sm: {
        width: '0.5rem',
        height: '0.5rem',
      },
      md: {
        width: '1rem',
        height: '1rem',
      },
      lg: {
        width: '1.5rem',
        height: '1.5rem',
      },
    },
    on: {
      true: {
        backgroundColor: '$grey-900'
      },
      false: {
        backgroundColor: '$grey-300'
      },
    },
  },
  defaultVariants: {
    size: 'md',
    on: false,
  },
});

const Dot = forwardRef(function Dot(
  props,
  forwardedRef
) {
  return (
    <StyledDot
      {...props}
      ref={forwardedRef}
    />
  );
}) as DotComponent;


export default Dot;
