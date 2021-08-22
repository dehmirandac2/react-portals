import { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';

import { getPopoverPosition } from '../../helpers/getPopoverPosition';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    border: '1px solid #ccc',
    bottom: 48,
    left: 8,
    padding: '5px 8px',
    background: 'white',
    borderRadius: 5,
    height: 20
  },
}));

function Popover({ isOpen, actionComponent }) {
  const classes = useStyles();

  const [position, setPosition] = useState({});

  const holdPopover = useRef();
  const elemShowPopover = useRef();

  useEffect(() => {
    isOpen ? setPopoverPosition() : hidePopover();
  }, [isOpen]);

  const hidePopover = () => {
    setPosition({
      posY: undefined,
      posX: undefined,
      position: {},
    });
  };

  const setPopoverPosition = () => {
    const popoverPosition = getPopoverPosition({
      elemShowPopover,
      holdPopover,
    });
    setPosition(popoverPosition);
  };

  return (
    <div>
      {ReactDOM.createPortal(
        <div className={classes.root} style={{ ...position, opacity: isOpen ? 1 : 0 }}
          ref={holdPopover}>
          <span>Popover text</span>
        </div>,
        document.body
      )
      }

      <div ref={elemShowPopover}>{actionComponent}</div>
    </div>
  );
}

export default Popover;
