import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .vehicle_inner': {
      display: 'flex',

      '& .image_carusel-wrapper': {
        maxWidth: '600px',
        width: '100%',
      },

      '& .image_carusel': {
        width: '100%',

        '& .image_block img': {
          width: '100%',
        },
      },

      '& .vehicle_charateristic': {
        margin: '0 20px',
        padding: '10px',
        width: '100%',
        backgroundColor: '#FFF',
      },
    },
  },
});

export default useStyles;
