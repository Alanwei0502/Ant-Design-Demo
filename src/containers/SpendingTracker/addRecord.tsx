import { useState } from 'react'
import { Form, Select, Input, Radio, Card, Row, Col } from 'antd';
import { expenseCategory } from './fakeData';
import { getDataArray, getOptionArray } from 'utils/antdHelperFunction';
import NumberInput from 'components/InputNumber'

interface props {
  chooseDate: string;
}

const Income = { backgroundColor: '#4DB08A', borderRadius: '1rem 1rem 0 0' }
const Expense = { backgroundColor: '#E484AC', borderRadius: '1rem 1rem 0 0' }

const expensesOrIncome = [
  { label: '收入', value: 1 },
  { label: '支出', value: 0 }
];

const AddRecord: React.FC<props> = ({ chooseDate }) => {
  const [formStatus, setFormStatus] = useState(0);

  const onChange = (e: any) => {
    setFormStatus(e.target.value);
  }

  return (
    <Card
      title={<span className='font-black'>{formStatus ? '新增收入' : '新增支出'}</span>}
      className='rounded-2xl mr-4 mb-4 w-96'
      headStyle={formStatus ? Income : Expense}
    >
      <Form>
        <Form.Item label={'日期'}>{chooseDate}</Form.Item>

        <Row justify='space-between'>
          <Col span={10}>
            <Form.Item>
              <Radio.Group
                defaultValue={0}
                optionType="button"
                buttonStyle="solid"
                options={expensesOrIncome}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item label={'金額'}>
              <NumberInput className='w-full' min={0} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label={'類別'}>
          <Select>
            {getOptionArray(getDataArray(expenseCategory, 'id', 'type'))}
          </Select>
        </Form.Item>

        <Form.Item label={'備註'}>
          <Input.TextArea />
        </Form.Item>

      </Form>
    </Card>
  )
}

export default AddRecord
