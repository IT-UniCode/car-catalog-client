import React, { FC, useEffect, useState } from 'react';

import { getData } from '../../API/catalog';

import useStyles from './style';

interface IContent {
  ld: string;           //Год, название

  ln: number;           //№ лота
  fv: string;           //VIN
  locState: string;     //Тип документа
  td: string;           //+Тип документа
  orr: number;          //Одометр
  lcd: string;          //Основные моменты
  ord: string;          //Тип пробега
  dd: string;           //Основные повреждения
  bstl: string;         //Тип кузова
  vehTypDesc: string;   //Классификация
  clr: string;          //Цвет
  egn: string;          //Тип двигателя
  cy: string;           //Количество цилиндров
  tmtp: string;         //Коробка передач
  drv: string;          //Привод
  ft: string;           //Топливо
  hk: string;           //Ключи
  
  
  hb: number;           //Текущяя ставка
  bnp: number;          //Минимальная ставка для покупки лота
  syn: string;          //Местонахождение лота
  ad: number;           //Дата продажи(мс)

  al: string;           //Участок(Очередь)
  aan: number;          //№ позиции
  gr: string;           //сетка/ряд

  lu: number;           //Последнее обновление(мс)
  brand: string;        //COPART
  
  cuc: string;          //Валюта
}

const Catalog: FC = () => {
  const classes = useStyles();
  const [content, setContent] = useState<IContent[]>();

  useEffect(() => {
    getData().then((res) => {
      setContent(res.data.data.results.content);
    });
  }, []);

  console.log(content);

  return (
    <div className={classes.root}>
      {content?.map((item, index) => (
        <div key={index}>
          <p>{item.ld}</p>
        </div>
      ))}
    </div>);
};

export default Catalog;
