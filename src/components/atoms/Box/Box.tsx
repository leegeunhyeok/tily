import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';

const DEFAULT_TAG = 'div';

export type BoxProps = React.ComponentProps<typeof StyledBox>;

type BoxComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  BoxProps
>;

const StyledBox = styled(DEFAULT_TAG, {
  boxSizing: 'border-box',
});

const Box = forwardRef(function Box(
  props,
  forwardedRef
) {
  return (
    <StyledBox
      {...props}
      ref={forwardedRef}
    />
  );
}) as BoxComponent;


export default Box;
