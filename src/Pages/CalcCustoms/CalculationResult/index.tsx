import React, { FC } from 'react';

import useStyles from './style';

interface ICalculationResultProps {
  data: ICustomsResult | undefined;
}

interface ICosts {
  title: string;
  cost: number;
}

const CalculationResult: FC<ICalculationResultProps> = ({ data }) => {
  const classes = useStyles();

  const costsInUSA: ICosts[] = [
    {
      title: 'Стоимость вашего авто на аукционе в США',
      cost: data!.vehicleCost,
    },
    {
      title: 'Страховка авто (3% от стоимости)',
      cost: data!.insurance ? 150 : 0,
    },
    {
      title: 'Аукционный сбор',
      cost: data!.auctionFee,
    },
    {
      title: 'Брокерские услуги в Америке',
      cost: 1000,
    },
    {
      title: `Доставка с аукциона в порт погрузки ${data!.port} *`,
      cost: data!.deliveryToPort,
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
      title: 'Доставка кораблем в Одессу',
      cost: data!.deliveryToOdessa,
    },
  ];

  const costsAtTheDestinationPort: ICosts[] = [
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

  const costsAtTheCustoms: ICosts[] = [
    {
      title: 'Пошлина',
      cost: data!.customsPrice,
    },
    {
      title: 'Акцизный сбор',
      cost: data!.excise,
    },
    {
      title: 'НДС',
      cost: data!.tax,
    },
  ];

  const anotherCosts: ICosts[] = [
    {
      title: 'Пенсионный фонд',
      cost: data!.pension_fund,
    },
    {
      title: 'Расходы на регистрацию',
      cost: data!.firstRegistration,
    },
  ];

  const getSum = (costs: ICosts[]) => {
    return Math.round(costs.reduce((sum, item) => item.cost + sum, 0));
  };

  const sumCostsInUsa = getSum(costsInUSA);
  const sumСostsAtTheDestinationPort = getSum(costsAtTheDestinationPort);
  const sumCustomsCosts = getSum(costsAtTheCustoms);
  const sumAnotherCosts = getSum(anotherCosts);

  return (
    <div id='priceList' className={classes.root}>
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
            <td colSpan={2}>Время доставки</td>
            <td>{data!.time} дней</td>
          </tr>
          <tr className='conclusion_row'>
            <td colSpan={2}>Итого</td>
            <td>{sumCostsInUsa} $</td>
          </tr>

          <tr className='title-row'>
            <td colSpan={3}>Затраты в порту назначения</td>
          </tr>
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
          <tr className='title-row'>
            <td colSpan={3}>Затраты на растаможку</td>
          </tr>
          {costsAtTheCustoms.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.cost} $</td>
            </tr>
          ))}
          <tr className='conclusion_row'>
            <td colSpan={2}>Итого</td>
            <td>{sumCustomsCosts} $</td>
          </tr>
          <tr className='title-row'>
            <td colSpan={3}>Дополнительный расходы</td>
          </tr>
          {anotherCosts.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.cost} $</td>
            </tr>
          ))}
          <tr className='conclusion_row'>
            <td colSpan={2}>Итого</td>
            <td>{sumAnotherCosts} $</td>
          </tr>
          <tr className='conclusion_row'>
            <td colSpan={2}>Всего стоимость авто</td>
            <td>
              {sumСostsAtTheDestinationPort +
                sumCostsInUsa +
                sumCustomsCosts +
                sumAnotherCosts}{' '}
              $
            </td>
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
    </div>
  );
};

export default CalculationResult;
