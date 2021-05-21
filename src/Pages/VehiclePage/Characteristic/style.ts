import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
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
    },
  },
});

export default useStyles;
