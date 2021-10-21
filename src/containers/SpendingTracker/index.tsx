import { useState } from 'react'
import { Row } from 'antd'
import { format } from 'date-fns'
import SpendingCalendar from './spendingCalendar'
import AddRecord from './addRecord'

const SpendingTracker = () => {
  const [chooseDate, setChooseDate] = useState<string>(format(new Date(), 'yyyy-MM-dd EEEE'));

  return (
    <div className='p-4'>
      <Row className='flex'>
        <SpendingCalendar setChooseDate={setChooseDate} />
        <AddRecord chooseDate={chooseDate} />
      </Row>
    </div>
  )
}

export default SpendingTracker
