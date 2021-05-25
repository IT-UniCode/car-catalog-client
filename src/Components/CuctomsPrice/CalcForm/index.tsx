import React, { FC, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox, InputNumber } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

import {
  DIESEL_TYPES,
  GAS_TYPES,
  HYBRID_TYPES,
} from '../../../utils/constants';
import { FuelType } from '../../../utils/enums';

import useStyles from './style';

interface ICalcFormProps {
  calcPrice: (values: any) => void;
  checkInsurance: boolean;
  setCheckInsurance: React.Dispatch<React.SetStateAction<boolean>>;
  locations: string[] | undefined;
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

const CalcForm: FC<ICalcFormProps> = ({
  calcPrice,
  vehicleData,
  checkInsurance,
  setCheckInsurance,
  locations,
}) => {
  const classes = useStyles();
  const [form] = Form.useForm();

  const checkFuelType = (fuelType: string) => {
    if (GAS_TYPES.includes(fuelType)) {
      return FuelType.gas;
    }
    if (DIESEL_TYPES.includes(fuelType)) {
      return FuelType.diesel;
    }
    if (HYBRID_TYPES.includes(fuelType)) {
      return FuelType.hybrid;
    }

    return FuelType.electric;
  };

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
        <Form.Item label='Застраховать авто'>
          <Checkbox
            checked={checkInsurance}
            onChange={() => setCheckInsurance((prev) => !prev)}
          />
          <span> (3% от стоимости авто, но не менее 150 $)</span>
        </Form.Item>
        <Form.Item
          name='capacity'
          label='Объем двигателя, л | кВт'
          initialValue={vehicleData.egn && parseFloat(vehicleData.egn)}
          rules={[
            { required: true, pattern: /^[0-9]{0,4}([.,]{1}[0-9]{1})?$/ },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='fuel'
          label='Тип топлива'
          initialValue={checkFuelType(vehicleData.ft)}
          rules={[{ required: true }]}
        >
          <Select allowClear>
            <Option value={FuelType.gas}>Бензин</Option>
            <Option value={FuelType.diesel}>Дизель</Option>
            <Option value={FuelType.electric}>Електро</Option>
            <Option value={FuelType.hybrid}>Гибрид</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='year'
          label='Возраст автомобиля'
          initialValue={new Date().getFullYear() - vehicleData?.lcy}
          rules={[{ required: true, pattern: /^[0-9]{0,3}$/ }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name='location'
          label='Выберите площадку аукциона'
          initialValue={vehicleData?.syn}
          rules={[{ required: true }]}
        >
          <Select allowClear>
            {locations?.map((item: string, index: number) => (
              <Option value={item} key={index}>
                {item}
              </Option>
            ))}
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
