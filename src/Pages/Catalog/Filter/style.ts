import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    maxWidth: '300px',
    width: '100%',
    paddingRight: '20px',
    
    '& .filter_item': {
      margin: '10px 0',
      display: 'block',
      cursor: 'pointer',

      '&:hover': {
        textDecoration: 'underline',
      },
    }
  }
});

export default useStyles;
