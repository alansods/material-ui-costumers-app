import { useState } from "react";
import axios from "axios";

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

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () => {
    let hasError = false
    let newFormState = {
      ...form,
    }

    if(!form.name.value) {
      hasError = true

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Preencha o campo corretamente'
      }
    }

    if(!form.job.value) {
      hasError = true

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Preencha o campo corretamente'
      }
    }

    if(hasError) {
      return setForm(newFormState)
    }

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value,
    })
  }

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ''}
          label="Digite seu nome"
          variant="outlined"
          name="name"
          value={form.name.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          error={form.job.error}
          helperText={form.job.error ? form.job.helperText : ''}
          label="Digite seu cargo"
          variant="outlined"
          name="job"
          value={form.job.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={handleRegisterButton}>
          Cadastrar
        </Button>
      </div>
    </>
  );
}
