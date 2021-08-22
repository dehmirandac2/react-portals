export const getPopoverPosition = ({
  elemShowPopover,
}) => {
  const { x, y, height } =
    elemShowPopover?.current?.getBoundingClientRect() || {};

  const popoverHeight = 100

  let style = {
    left: `${x + 8}px`,
    top: `${y + popoverHeight - height}px`,
  };

  return style
};
