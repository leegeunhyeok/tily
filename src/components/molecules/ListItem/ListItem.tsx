import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';
import { useTouch } from '~/hooks';

import { Box } from '~/components/atoms';

export type ListItemProps = React.ComponentProps<typeof StyledListItem>;

type ListItemComponent = Polymorphic.ForwardRefComponent<
  typeof Box,
  ListItemProps
>;

const StyledListItem = styled(Box, {
  display: 'inline-block',
  width: '100%',
  padding: '$06 $04',
  borderBottom: '1px solid $grey-100',
  color: '$grey-900',
  listStyle: 'none',
  variants: {
    active: {
      true: {
        backgroundColor: '$grey-100',
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});

const ListItem = forwardRef<HTMLDivElement, ListItemProps>(function ListItem(
  props,
  forwardedRef
) {
  const touchProps = useTouch();

  return (
    <StyledListItem
      {...touchProps}
      {...props}
      ref={forwardedRef}
    />
  );
}) as ListItemComponent;


export default ListItem;
