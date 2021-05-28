import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    maxWidth: '300px',
    width: '100%',
    paddingRight: '20px',
    
    '& .filter_item': {
      margin: '10px 0',
      cursor: 'pointer',
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      width: '100%',
      textAlign: 'left',
      
      '&:hover': {
        textDecoration: 'underline',
      },
    }
  }
});

export default useStyles;
