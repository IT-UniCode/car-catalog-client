import React, { FC } from 'react';

import useStyles from './style';

interface ICalculationResultProps {
  data: ICustomsResult | undefined;
}

const CalculationResult: FC<ICalculationResultProps> = ({ data }) => {
  const classes = useStyles();

  const costsInUSA = [
    {
      title: 'Стоимость вашего авто на аукционе в США',
      cost: data!.vehicleCost,
    },
    {
      title: 'Страховка авто (3% от стоимости)',
      cost: data?.insurance ? 150 : 0,
    },
    {
      title: 'Аукционный сбор',
      cost: 0,
    },
    {
      title: 'Брокерские услуги в Америке',
      cost: 1000,
    },
    {
      title: 'Доставка с аукциона в выбранный Вами порт погрузки*',
      cost: 0,
    },
    {
      title: 'Погрузка в контейнер',
      cost: 150,
    },
    {
      title: 'Отправка документов',
      cost: 50,
    },
    {
      title: 'Доставка кораблем в порт выгрузки',
      cost: 0,
    },
  ];

  const costsAtTheDestinationPort = [
    {
      title: 'Экспедирование',
      cost: 400,
    },
    {
      title: 'Услуги брокера',
      cost: 350,
    },
    {
      title: 'Стонка в порту',
      cost: 50,
    },
  ];

  const sumCostsInUsa = costsInUSA.reduce((sum, item) => item?.cost + sum, 0);
  const sumСostsAtTheDestinationPort = costsAtTheDestinationPort.reduce(
    (sum, item) => item?.cost + sum,
    0
  );

  console.log(data);

  return (
    <div className={classes.root}>
      <table className='result-table'>
        <thead>
          <tr className='first-row'>
            <th>№</th>
            <th>Наименование</th>
            <th>Стоимость</th>
          </tr>
          <tr className='title-row'>
            <td colSpan={3}>Затраты в США</td>
          </tr>
        </thead>
        <tbody>
          {costsInUSA.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.cost} $</td>
            </tr>
          ))}
          <tr className='conclusion_row'>
            <td colSpan={2}>Итого</td>
            <td>{sumCostsInUsa} $</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>* + 100$, если автомобиль не на ходу</td>
          </tr>
          <tr>
            <td colSpan={3}>
              + 50$, если автомобиль крупногабаритный (внедорожник, кроссовер и
              т.д.)
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              В расчете не учтена стоимость перевода денег в банке
            </td>
          </tr>
        </tfoot>
      </table>

      <table className='result-table'>
        <thead>
          <tr className='first-row'>
            <th>№</th>
            <th>Наименование</th>
            <th>Стоимость</th>
          </tr>
          <tr className='title-row'>
            <td colSpan={3}>Затраты в порту назначения</td>
          </tr>
        </thead>
        <tbody>
          {costsAtTheDestinationPort.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.cost} $</td>
            </tr>
          ))}
          <tr className='conclusion_row'>
            <td colSpan={2}>Итого</td>
            <td>{sumСostsAtTheDestinationPort} $</td>
          </tr>
          <tr className='conclusion_row'>
            <td colSpan={2}>Всего стоимость авто</td>
            <td>{sumСostsAtTheDestinationPort + sumCostsInUsa} $</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculationResult;
