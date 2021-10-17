import React, { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';

import { Box } from '~/components/atoms';
import { ListItem } from '~/components/molecules';

export type ListItemGroupProps = React.ComponentProps<typeof StyledListItemGroup> & {
  items: {
    label: string;
    value: string;
  }[],
  onItemClick?: (value: string) => void;
};

type ListItemGroupComponent = Polymorphic.ForwardRefComponent<
  typeof Box,
  ListItemGroupProps
>;

const PADDING_HORIZONTAL = '1.5rem';

const StyledListItemGroup = styled(Box, {
  position: 'relative',
  height: '300px',
  borderTop: '1px solid $grey-100',
  borderBottom: '1px solid $grey-100',
});

const ScrollArea = styled(Box, {
  width: '100%',
  height: '100%',
  overflowX: 'auto',
});

const Gradient = styled(Box, {
  position: 'absolute',
  left: 0,
  width: '100%',
  height: PADDING_HORIZONTAL,
  background: 'rgba(255, 255, 255, 0)',
  pointerEvents: 'none',
  variants: {
    position: {
      top: {
        top: 0,
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
      },
      bottom: {
        bottom: 0,
        background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
});


const ListItemGroup = forwardRef(function ListItemGroup(
  {
    items,
    onItemClick,
    ...rest
  },
  forwardedRef
) {
  return (
    <StyledListItemGroup {...rest} ref={forwardedRef}>
      <Gradient position="top" />
      <ScrollArea>
        {items.map(({ label, value }) => {
          return <ListItem onClick={() => onItemClick?.(value)} key={value}>{label}</ListItem>;
        })}
      </ScrollArea>
      <Gradient position="bottom" />
    </StyledListItemGroup>
  );
}) as ListItemGroupComponent;


export default React.memo(ListItemGroup);
