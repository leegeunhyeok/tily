import { styled } from '~/stitches.config';
import { Box } from '~/components/atoms';
import { PropsWithChildren } from 'react';

export type CenterLayoutProps = React.ComponentProps<typeof Layout>;

const Layout = styled(Box, {
  width: '100%',
  padding: '0 $04',
  margin: '0 auto',
  '@md': {
    maxWidth: '500px'
  },
  '@lg': {
    maxWidth: '700px'
  },
  variants: {
    flexCenter: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
      false: {},
    },
  },
  defaultVariants: {
    flexCenter: false,
  },
});

export const CenterLayout = ({ children, ...rest }: PropsWithChildren<CenterLayoutProps>) => {
  return (
    <Layout {...rest}>
      {children}
    </Layout>
  );
};
