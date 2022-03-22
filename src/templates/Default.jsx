import Header from "../partials/Header/Header";

import Container from "@material-ui/core/Container"


import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    padding: '25px',
  }
}))

export default function Default({ children }) {

  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  );
}
