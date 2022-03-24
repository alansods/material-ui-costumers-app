import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  container: {
    padding: '25px',
  }
}))

export default function Page({ title, Component }) {

  const classes = useStyles()

  return (
    <>
      <Typography variant="h2">
        {title}
      </Typography>
      <Component />
    </>
  );
}
