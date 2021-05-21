import React, { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

import { getCurrencyData } from '../../../API/currency';

import useStyles from './style';

interface ICurrency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

interface ICurrencyData {
  [key: string]: ICurrency;
}

interface ICustomsPrice {
  data: IVehicleData[] | undefined;
}

interface ICalcCustomsPrice {
  capacity: string;
  price: string;
  fuel: string;
  year: string;
}

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CustomsPrice: FC<ICustomsPrice> = () => {
  const classes = useStyles();
  const [form] = Form.useForm();

  const [currency, setCurrenccy] = useState<ICurrencyData>();

  const calcPrice = async (values: ICalcCustomsPrice) => {
    let rate: number = 0;

    if (values.fuel === 'Бензин') {
      if (Number(values.capacity) < 3) {
        rate = (50 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      } else if (Number(values.capacity) > 3) {
        rate = (100 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      }
    } else if (values.fuel === 'Дизель') {
      if (Number(values.capacity) < 3.5) {
        rate = (75 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      } else if (Number(values.capacity) > 3.5) {
        rate = (150 * Number(currency?.EUR.buy)) / Number(currency?.USD.buy);
      }
    }

    console.log('rate', rate);
    
    const customs: number = Number(values.price) * 0.1;

    const excise: number = rate * Number(values.capacity) * Number(values.year) * Number(values.capacity);

    const tax: number = (Number(values.price) + customs + excise) * 0.2;

    let pension_fund: number = 0;
    if (Number(values.price) < 374550) {
      pension_fund = Number(values.price) * 0.3;
    } else if (Number(values.price) > 374550 && Number(values.price) < 658300) {
      pension_fund = Number(values.price) * 0.4;
    } else if (Number(values.price) > 658300) {
      pension_fund = Number(values.price) * 0.5;
    }

    console.log('Мито', customs);
    console.log('Акциз', excise);
    console.log('ПДВ', tax);
    console.log('Пенсійний фонд', pension_fund);
    
  };

  useEffect(() => {
    getCurrencyData(11).then((res) => {
      let parsedResData: ICurrencyData = {};

      res.data.forEach((item: ICurrency) => {
        parsedResData[item.ccy] = item;
      });

      setCurrenccy(parsedResData);
    });
  }, []);

  console.log(currency);

  return (
    <div className={classes.root}>
      <h2>Стоимость растаможки авто</h2>

      <Form {...layout} form={form} name='customs-price' onFinish={calcPrice}>
        <Form.Item
          name='price'
          label='Стоимость авто'
          rules={[{ required: true }]}
        >
          <Input
            type='number'
            prefix={<DollarOutlined className='site-form-item-icon' />}
            suffix='USD'
          />
        </Form.Item>
        <Form.Item
          name='capacity'
          label='Объем двигателя, куб.см'
          rules={[{ required: true }]}
        >
          <Select allowClear>
            <Option value='capacity'>1.0</Option>
          </Select>
        </Form.Item>
        <Form.Item name='fuel' label='Тип топлива' rules={[{ required: true }]}>
          <Select allowClear>
            <Option value='gas'>Бензин</Option>
            <Option value='disel'>Дизель</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='year'
          label='Возраст автомобиля'
          rules={[{ required: true }]}
        >
          <Select allowClear>
            <Option value='1-and-smaller'>1 и меньше</Option>
            <Option value='1'>1</Option>
            <Option value='2'>2</Option>
            <Option value='3'>3</Option>
            <Option value='4'>4</Option>
            <Option value='5'>5</Option>
            <Option value='6'>6</Option>
            <Option value='7'>7</Option>
            <Option value='8'>8</Option>
            <Option value='9'>9</Option>
            <Option value='10'>10</Option>
            <Option value='11'>11</Option>
            <Option value='12'>12</Option>
            <Option value='13'>13</Option>
            <Option value='14'>14</Option>
            <Option value='15'>15</Option>
            <Option value='15-and-more'>15 и больше</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Рассчитать стоимость
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomsPrice;
