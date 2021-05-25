import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    maxWidth: '600px',
    width: '100%',
    maxHeight: '450px',

    '& .image_carusel': {
      width: '100%',

      '& .image_block img': {
        width: '100%',
        height: '100%',
        maxHeight: '450px',
      },
    },
  },
});

export default useStyles;
