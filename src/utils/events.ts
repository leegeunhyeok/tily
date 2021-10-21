export const ignoreEventBubbling = <Event extends React.MouseEvent | React.KeyboardEvent>(event: Event) => {
  event.stopPropagation();
};
