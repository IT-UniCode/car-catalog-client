import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {

    '& .vehicle_wrapper': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& .vehicle_inner': {
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        marginBottom: '30px'
      },
    },
  },
});

export default useStyles;
