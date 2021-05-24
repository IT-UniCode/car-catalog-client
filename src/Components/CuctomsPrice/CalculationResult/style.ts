import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#FFF',
    marginTop: '20px',

    '& .result-table': {
      width: '100%',
      fontSize: '18px',
      marginBottom: '20px',
      
      '& tbody': {
        '& tr:nth-child(2n)': {
          backgroundColor: '#a1d2ff',
        },
      },

      '& tfoot': {
        fontSize: '16px',
        fontWeight: '500',
      },

      '& td, th': {
        padding: '5px 10px',

        '&:nth-child(2)': {
          width: '100%',
        },
      },

      '& .first-row': {
        backgroundColor: '#1890ff',
        color: '#FFF',
      },

      '& .title-row': {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '500',
      },
      '& .conclusion_row': {
        fontWeight: '700',
      },
    },
  },
});

export default useStyles;
