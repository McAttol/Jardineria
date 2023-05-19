import DayLink from "./DayLink"

function CalendarHandmade() {

  const actualYear = new Date().getFullYear()
  const locale = 'es-Es'

  function renderedWeekDays() {
    const weekdays = [...Array(7).keys()]
    const intlWeekDays = new Intl.DateTimeFormat(locale, {weekday:'long'})
  
    const weekDaysNames = weekdays.map(weekDayIndex => {
      const date = new Date(2021, 10, weekDayIndex + 1) //usamos este mes pq dia 1 conincide en lunes
      const weekDayName = intlWeekDays.format(date)
      return weekDayName
    })

    return weekDaysNames.map((weekDayName, i)=> (<li className='day-name' key={weekDayName + i}>{weekDayName}</li>))  
  }

  function renderMonths() {
    const months = [...Array(12).keys()]
    const intlMonths = new Intl.DateTimeFormat(locale, {month: 'long'})
    return months.map(monthKey => {
      const nextMonthIndex = monthKey + 1;
      const monthName = intlMonths.format(new Date(actualYear, monthKey))
      const daysOfMonth = new Date(actualYear, nextMonthIndex, 0).getDate()
      let startsOn = new Date(actualYear, monthKey, 1).getDay();
      const days = [...Array(daysOfMonth).keys()]
      const renderedDays = days.map((day, i) => (<DayLink style={i===0?{'gridColumnStart':`${startsOn === 0? 7: startsOn}`}:{}} key={monthName + i} value={day+1} year={actualYear} month={monthKey}></DayLink>))
      return <>
                <h2>{monthName} {actualYear}</h2>
                <ol>{renderedWeekDays()} {renderedDays}</ol>
              </>
    })

  }
 
  function renderCalendar() {
    return  <>
              {renderMonths()}
            </>
  }
  
  return (
    <div className="Calendar">
      {renderCalendar()}
    </div>
  );
}

export default CalendarHandmade;