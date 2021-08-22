import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header/index'
import Card from './components/Card/index'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid xs={4} key={value} item>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
