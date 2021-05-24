import React, { FC, useEffect, useState } from 'react';

import CalcForm from './CalcForm';
import CalculationResult from './CalculationResult';
import { getCurrencyData } from '../../API/currency';
import { getData } from '../../API/catalog';

import useStyles from './style';

interface ICustomsPriceProps {
  data: IVehicleData[] | undefined;
}

interface ICurrency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

interface ICurrencyData {
  [key: string]: ICurrency;
}

interface ICalcCustomsPrice {
  location: string;
  capacity: number;
  price: number;
  fuel: string;
  year: string;
}

const CustomsPrice: FC<ICustomsPriceProps> = ({ data }) => {
  const classes = useStyles();

  const [currency, setCurrenccy] = useState<ICurrencyData>();
  const [customsResult, setCustomsResult] = useState<ICustomsResult>();
  const [locations, setLocations] = useState<string[]>();
  const [checkInsurance, setCheckInsurance] = useState<boolean>(false);
  const [showResut, setShowResult] = useState<boolean>(false);

  const convertUAHToUSD = (total: number) => {
    return total / Number(currency!.USD.buy);
  };

  const findPensionCoeff = (cost: number) => {
    if (cost < convertUAHToUSD(374550)) {
      return 0.03;
    } else if (cost > convertUAHToUSD(658300)) {
      return 0.05;
    } else {
      return 0.04;
    }
  };

  const calcRate = (fuelType: string, engineCapacity: number) => {
    if (fuelType === 'GAS') {
      if (engineCapacity < 3) {
        return (50 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      } else {
        return (100 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      }
    } else {
      if (engineCapacity < 3.5) {
        return (75 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      } else {
        return (150 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      }
    }
  };

  const calcPrice = (values: ICalcCustomsPrice) => {
    const pension_coeff: number =
      values.fuel === 'ELECTRIC' ? 1 : findPensionCoeff(Number(values.price));

    const rate: number =
      values.fuel === 'ELECTRIC'
        ? 1
        : calcRate(values.fuel, Number(values.fuel));

    const customs: number =
      Number(values.price) * (values.fuel === 'ELECTRIC' ? 1 : 0.1);

    const excise: number = rate * values.capacity * Number(values.year);

    const tax: number =
      (Number(values.price) + customs + excise) *
      (values.fuel === 'ELECTRIC' ? 1 : 0.2);

    const pension_fund: number = Number(values.price) * pension_coeff;

    setCustomsResult({
      insurance: checkInsurance,
      vehicleCost: Number(values.price),
      customsPrice: customs,
      excise: excise,
      tax: tax,
      pension_fund: pension_fund,
    });

    setShowResult(true);
  };

  useEffect(() => {
    getCurrencyData(11).then((res) => {
      let parsedResData: ICurrencyData = {};

      res.data.forEach((item: ICurrency) => {
        parsedResData[item.ccy] = item;
      });

      setCurrenccy(parsedResData);
    });

    getData({ page: 0 }).then((res) => {
      let result: string[] = [];
      res.data.data.results.facetFields[7].facetCounts.forEach((item: any) => {
        result.push(item.displayName.toUpperCase());
      });

      setLocations(result);
    });
  }, []);

  return (
    <div className={classes.root}>
      <h2>Стоимость растаможки авто</h2>
      <CalcForm
        calcPrice={calcPrice}
        vehicleData={data}
        checkInsurance={checkInsurance}
        setCheckInsurance={setCheckInsurance}
        locations={locations}
      />
      {showResut && <CalculationResult data={customsResult} />}
    </div>
  );
};

export default CustomsPrice;
