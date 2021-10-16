import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { styled } from '~/stitches.config';

import { Box, Button, ButtonProps } from '~/components/atoms';
import { IconProps } from '~/assets/icons';

export type IconButtonProps = ButtonProps & {
  icon: (props: IconProps) => React.ReactElement;
  iconProps?: IconProps;
};

type IconButtonComponent = Polymorphic.ForwardRefComponent<
  typeof Box,
  IconButtonProps
>;

const StyledIconButton = styled(Button, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconArea = styled(Box, {
  marginRight: '$02',
});

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  {
    children,
    icon: Icon,
    iconProps,
    ...rest
  },
  forwardedRef
) {
  return (
    <StyledIconButton ref={forwardedRef} {...rest} >
      <IconArea>{Icon(iconProps ?? {})}</IconArea>
      {children}
    </StyledIconButton>
  );
}) as IconButtonComponent;

export default IconButton;
