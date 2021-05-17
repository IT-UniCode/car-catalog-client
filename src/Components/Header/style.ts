import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .container': {
      maxWidth: '1200px',
      width: '100%',
      padding: '0 40px',
      margin: '0px auto',
    },
  },
});

export default useStyles;
