import { keyframes, styled } from '~/stitches.config';

const animation = keyframes({
  from: {
    transform: 'scale(0)',
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
});

const LoadingIndicator = styled('div', {
  width: '4rem',
  height: '4rem',
  maxWidth: '200px',
  borderRadius: '50%',
  backgroundColor: '$grey-900',
  animation: `${animation} 500ms alternate infinite`
});

export default LoadingIndicator;
