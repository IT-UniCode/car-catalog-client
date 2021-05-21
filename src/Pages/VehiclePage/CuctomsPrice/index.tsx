import React, { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

import { getCurrencyData } from '../../../API/currency';

import useStyles from './style';

interface ICurrency {
  ccy: string;
  buy: number;
}

interface ICustomsPrice {
  data: IVehicleData[] | undefined;
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

  const [currency, setCurrenccy] = useState<ICurrency[]>();

  const onFinish = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    getCurrencyData(5).then((res) => {
      setCurrenccy(res.data)
    });
  }, []);

  return (
    <div className={classes.root}>
      <h2>Стоимость растаможки авто</h2>

      <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
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
          name='volume'
          label='Объем двигателя, куб.см'
          rules={[{ required: true }]}
        >
          <Select allowClear>
            <Option value='volume'>1.0</Option>
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
