import { Select } from 'antd'

const { Option } = Select;

export const getDataArray = (dataList: any[] = [], value?: string, label?: string) => {
  return dataList.map((item: any) => {
    return {
      value: !value ? item : item[value],
      label: !label ? item : item[label]
    };
  });
}

export const getOptionArray = (dataList: any[] = [], disabledOptionValue: any = []) => {
  return dataList.map(({ label, value }: any, index: number) => {
    const isDisabled = disabledOptionValue.indexOf(value.toString()) > -1;
    return (
      <Option key={index} value={value} disabled={isDisabled}>
        {label}
      </Option>
    );
  });
}