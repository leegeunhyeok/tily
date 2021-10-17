import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';
import { HISTORY_DOT_COUNT } from '~/constants';

import { Box, Dot } from '~/components/atoms';

export type HistoryProps = React.ComponentProps<typeof StyledHistory> & {
  history: boolean[],
};

type CardComponent = Polymorphic.ForwardRefComponent<
  typeof Box,
  HistoryProps
>;

const StyledHistory = styled(Box, {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  padding: '$02 0',
  overflowX: 'auto',
});

const EMPTY_HISTORY = new Array(HISTORY_DOT_COUNT).fill(false);

const Card = forwardRef(function Card(
  {
    history,
    ...rest
  },
  forwardedRef
) {
  return (
    <StyledHistory
      {...rest}
      ref={forwardedRef}
    >
      {EMPTY_HISTORY.map((value, idx) => <Dot on={history[idx] ?? value} key={idx} />)}
    </StyledHistory>
  );
}) as CardComponent;


export default Card;
