import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    maxWidth: '300px',
    width: '100%',

    '& .filter_item': {
      display: 'block',
      cursor: 'pointer'
    }
  }
});

export default useStyles;
