import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ShceduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  return selectedDateTime ? (
    <ConfirmStep
      schedulingDate={selectedDateTime}
      onCancelScheduling={handleClearSelectedDateTime}
    />
  ) : (
    <CalendarStep onSelectDateTime={setSelectedDateTime} />
  )
}
