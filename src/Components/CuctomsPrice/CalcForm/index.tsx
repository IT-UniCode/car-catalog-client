import React, { FC, useEffect, useState } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

import useStyles from './style';

interface ICalcFormProps {
  calcPrice: (values: any) => void;
  checkInsurance: boolean;
  setCheckInsurance: React.Dispatch<React.SetStateAction<boolean>>;
  vehicleData: any;
}

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CalcForm: FC<ICalcFormProps> = ({ calcPrice, vehicleData, checkInsurance, setCheckInsurance }) => {
  const classes = useStyles();
  const [form] = Form.useForm();

  useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <Form {...layout} form={form} name='customs-price' onFinish={calcPrice}>
        <Form.Item
          name='price'
          label='Стоимость авто'
          initialValue={vehicleData?.la}
          rules={[{ required: true, pattern: /^[0-9]*[.,]?[0-9]+$/ }]}
        >
          <Input
            prefix={<DollarOutlined className='site-form-item-icon' />}
            suffix='USD'
          />
        </Form.Item>
        <Form.Item name='insurance' label='Застраховать авто'>
          <Checkbox
            checked={checkInsurance}
            onChange={() => setCheckInsurance((prev) => !prev)}
          />
          <span> (3% от стоимости авто, но не менее 150 $)</span>
        </Form.Item>
        <Form.Item
          name='capacity'
          label='Объем двигателя, л'
          initialValue={vehicleData.egn && parseFloat(vehicleData.egn)}
          rules={[
            { required: true, pattern: /^[0-9]{0,2}([.,]{1}[0-9]{1})?$/ },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='fuel'
          label='Тип топлива'
          initialValue={vehicleData.ft}
          rules={[{ required: true }]}
        >
          <Select allowClear>
            <Option value='GAS'>Бензин</Option>
            <Option value='DIESEL'>Дизель</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='year'
          label='Возраст автомобиля'
          initialValue={new Date().getFullYear() - vehicleData?.lcy}
          rules={[{ required: true }]}
        >
          <Select allowClear>
            <Option value='0'>1 и меньше</Option>
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

export default CalcForm;
