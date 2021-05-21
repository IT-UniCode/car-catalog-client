import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .vehicle_inner': {
      display: 'flex',
    },
  },
});

export default useStyles;
