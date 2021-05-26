import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .main': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .offer_wrapper': {
        maxWidth: '400px',
        width: '100%',

        '& .offer_title': {
          marginTop: '60px',
          fontSize: '36px',
        },
        '& .offer_text': {
          fontSize: '18px',
        },
      },

      '& .img_wrapper': {
        maxWidth: '700px',
        width: '100%',

        '& img': {
          paddingTop: '60px',
          width: '100%',
        },
      },
    },
  },
});

export default useStyles;
