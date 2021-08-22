import { useState } from 'react'
import { Typography, Card, CardActions, Button, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '../Popover/index';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
}));

function MainCard() {
  const classes = useStyles();
  const [popoverIsOpen, togglePopover] = useState(false)

  const handlePopover = () => {
    togglePopover(!popoverIsOpen)
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be-nev-o-lent
          </Typography>
          <Typography color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <Popover
          isOpen={popoverIsOpen}
          actionComponent={
            <CardActions>
              <Button variant="contained" color="primary" onClick={handlePopover}>
                Learn More
              </Button>
            </CardActions>
          }
        >
          <Typography>The content of the Popover.</Typography>
        </Popover>


      </Card>
    </>
  );
}

export default MainCard;
