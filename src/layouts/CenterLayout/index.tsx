import { styled } from '~/stitches.config';
import { Box } from '~/components/atoms';

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
});

export const CenterLayout = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};
