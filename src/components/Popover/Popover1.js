import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    border: '1px solid #ccc',
    padding: '5px 8px',
    background: 'white',
    borderRadius: 5,
    height: 20,
    bottom: 48,
    left: 8
  },
}));

function Popover({ isOpen, actionComponent }) {
  const classes = useStyles();

  return (
    <>
      {isOpen ? (
        <div className={classes.root}>
          Popover text
        </div>
      ) : null}

      <div>{actionComponent}</div>
    </>
  );
}

export default Popover;
