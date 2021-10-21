import { useState } from 'react'
import { format } from 'date-fns'
import Calendar from 'components/Calendar'


interface props {
  setChooseDate: (value: string) => void;
}

const SpendingCalendar: React.FC<props> = ({ setChooseDate }) => {

  const onSelectCalendar = (date: any) => {
    setChooseDate(format(date, 'yyyy-MM-dd EEEE'));
  }

  return (
    <Calendar
      className='px-4 mr-4 mb-4 w-80 rounded-2xl'
      fullscreen={false}
      onSelect={onSelectCalendar}
    />
  )
}

export default SpendingCalendar
