import React, { FC, useEffect, useState } from 'react';

import CalcForm from './CalcForm';
import CalculationResult from './CalculationResult';
import { getCurrencyData } from '../../API/currency';
import { getData } from '../../API/catalog';
import { getDeliveryData } from '../../API/delivery';
import { FuelType } from '../../utils/enums';

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

  const calcExcise = (
    fuelType: string,
    engineCapacity: number,
    year: number
  ) => {
    if (fuelType === FuelType.hybrid) {
      return (100 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
    }

    if (fuelType === FuelType.electric) {
      return (
        engineCapacity * (Number(currency?.EUR.buy) / Number(currency?.USD.buy))
      );
    }

    let rate: number = 0;

    if (fuelType === FuelType.gas) {
      if (engineCapacity < 3) {
        rate = (50 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      } else {
        rate = (100 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      }
    }

    if (fuelType === FuelType.diesel) {
      if (engineCapacity < 3.5) {
        rate = (75 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      } else {
        rate = (150 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      }
    }

    return rate * year * engineCapacity;
  };

  const calcPrice = (values: ICalcCustomsPrice) => {
    const pension_coeff: number = findPensionCoeff(values.price);

    const excise: number = calcExcise(
      values.fuel,
      Number(values.capacity),
      Number(values.year)
    );

    const customs: number =
      values.price *
      (values.fuel === FuelType.electric || values.fuel === FuelType.hybrid
        ? 1
        : 0.1);

    const tax: number =
      (values.price + customs + excise) *
      (values.fuel === FuelType.electric || values.fuel === FuelType.hybrid
        ? 1
        : 0.2);

    const pension_fund: number = values.price * pension_coeff;

    const location = values.location.split('-');
    
    getDeliveryData(location[0].trim(), location[1].trim()).then((res) => {
      setCustomsResult({
        deliveryToOdessa: res.data.deliveryToOdessa,
        deliveryToPort: res.data.deliveryToPort,
        deliveryTotalPrice: res.data.deliveryTotalPrice,
        port: res.data.port,
        firstRegistration: Math.round(convertUAHToUSD(760)),
        insurance: checkInsurance,
        vehicleCost: values.price,
        customsPrice: Math.round(customs),
        excise: Math.round(excise),
        tax: Math.round(tax),
        pension_fund: Math.round(pension_fund),
      });
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
