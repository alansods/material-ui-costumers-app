import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(3),
  }
}));

export default function Register() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
          id="outlined-basic"
          label="Digite seu nome"
          variant="outlined"
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          id="outlined-basic"
          label="Digite seu cargo"
          variant="outlined"
        />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </>
  );
}
