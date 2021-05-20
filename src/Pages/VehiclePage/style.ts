import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .vehicle_inner': {
      display: 'flex',

      '& .image_carusel-wrapper': {
        maxWidth: '600px',
        width: '100%',
        maxHeight: '450px',
      },

      '& .image_carusel': {
        width: '100%',

        '& .image_block img': {
          width: '100%',
          height: '100%',
        },
      },

      '& .vehicle_charateristic': {
        margin: '0 20px',
        padding: '10px',
        width: '100%',
        backgroundColor: '#FFF',

        '& .charateristic_item': {
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #000',
          padding: '5px',

          '& .charateristic_item-key': {
            fontWeight: '500',
          },

          '& .charateristic_item-value': {},
        },
      },
    },
  },
});

export default useStyles;
