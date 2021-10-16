import { forwardRef, useEffect, useState, useRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { CSSTransition } from 'react-transition-group';
import { styled } from '~/stitches.config';
import { imagePreloader } from '~/utils';

const TRANSITION_DURATION = 300;
const TRANSITION_STYLES = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};
const DEFAULT_STYLE = {
  transition: `opacity ${TRANSITION_DURATION}ms`,
  opacity: 0,
};

export type ImageProps = React.ComponentProps<typeof ImageContainer>;

type ImageComponent = Polymorphic.ForwardRefComponent<'img', ImageProps>;

const ImageContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
  variants: {
    size: {
      sm: {
        width: '3rem',
        height: '3rem',
      },
      md: {
        width: '4rem',
        height: '4rem',
      },
      lg: {
        width: '5rem',
        height: '5rem',
      },
    },
    rounded: {
      true: {
        borderRadius: '50%',
      },
      false: {
        borderRadius: '0.5rem',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: false,
  },
});

const StyledImage = styled('img', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: '$grey-100',
});

const ImagePlaceholder = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: '$grey-100',
});

const Image = forwardRef(function Image(
  { src, ...rest },
  forwardedRef
) {
  const [isLoading, setLoadState] = useState(true);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!src) return;
    setLoadState(true);
    imagePreloader(src)
      .then(() => setLoadState(false))
      .catch((error) => {
        console.error('@Image::image load failed:', error?.message ?? 'unknown error');
      });
  }, [src]);

  return (
    <ImageContainer
      {...rest}
      ref={forwardedRef}
    >
      <StyledImage src={src} />
      <CSSTransition nodeRef={placeholderRef} in={!isLoading} timeout={TRANSITION_DURATION}>
        {(state: keyof typeof TRANSITION_STYLES) =>
          <ImagePlaceholder ref={placeholderRef} style={{
            ...DEFAULT_STYLE,
            ...TRANSITION_STYLES[state]
          }} />
        }
      </CSSTransition>
    </ImageContainer>
  );
}) as ImageComponent;


export default Image;
