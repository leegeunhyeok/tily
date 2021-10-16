import { useCallback, useState } from 'react';

export type UseTouchParams = {
  onMouseEnter?: MouseHandler;
  onMouseLeave?: MouseHandler;
  onTouchStart?: TouchHandler;
  onTouchEnd?: TouchHandler;
};

type MouseHandler = (event: React.MouseEvent) => void;
type TouchHandler = (event: React.TouchEvent) => void;
type MouseAndTouchEvent = React.TouchEvent | React.MouseEvent;

const eventTriggerHelper = (event: MouseAndTouchEvent, mouseHandler?: MouseHandler, touchHandler?: TouchHandler) => {
  'touches' in event
    ? touchHandler?.(event)
    : mouseHandler?.(event);
};

export const useTouch = (params?: UseTouchParams) => {
  const { onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd } = params || {};
  const [isActivated, setActiveState] = useState(false);

  const handleActivation = useCallback((event: MouseAndTouchEvent) => {
    setActiveState(true);
    eventTriggerHelper(event, onMouseEnter, onTouchStart);
  }, [onMouseEnter, onTouchStart]);

  const handleDeactivation = useCallback((event: MouseAndTouchEvent) => {
    setActiveState(false);
    eventTriggerHelper(event, onMouseLeave, onTouchEnd);
  }, [onMouseLeave, onTouchEnd]);

  return {
    active: isActivated,
    onMouseEnter: handleActivation,
    onMouseLeave: handleDeactivation,
    onTouchStart: handleActivation,
    onTouchEnd: handleDeactivation,
  };
};
