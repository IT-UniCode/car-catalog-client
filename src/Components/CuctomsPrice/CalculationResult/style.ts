import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#FFF',
    marginTop: '20px',

    '& .result-table': {
      width: '100%',
      fontSize: '18px',

      '& td, th': {
        padding: '5px 10px',
      },

      '& .first-row': {
        backgroundColor: '#1890ff',
        color: '#FFF',
      },

      '& .title-row': {
        textAlign: 'center',
        fontSize: '24px',
      },
    },
  },
});

export default useStyles;
