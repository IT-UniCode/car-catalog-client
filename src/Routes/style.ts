import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    maxWidth: '1200px',
    width: '100%',
    minHeight: 'calc(100vh - 64px - 70px)',
    padding: '30px 40px',
    margin: '0 auto',
  },
});

export default useStyles;
