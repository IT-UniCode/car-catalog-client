import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    backgroundColor: '#FFF',
    border: '1px solid #949494',
    padding: '10px',
    maxWidth: '900px',
    width: '100%',

    '& .card_img': {
      maxWidth: '100px',
      maxHeight: '70px',
      width: '100%',
      height: '100%',
      marginRight: '10px',
    },

    '& .card_content': {
      maxWidth: '690px',
      width: '100%',

      '& .card_inner': {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto 10px',

        '& .content_column': {
          maxWidth: '400px',
          width: '100%',
        },
      },
    },
  },

  '& .card_btn': {
    margin: 'auto 10px',
  },
});

export default useStyles;
