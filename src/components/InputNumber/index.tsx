import React from 'react'
import { InputNumber } from 'antd'


const NumberInput: React.FC<any> = (props) => {
  return (
    <InputNumber formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} {...props} />
  )
}

export default NumberInput
