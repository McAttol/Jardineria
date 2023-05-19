/* const actualYear = new Date().getFullYear()
  const locale = 'es-ES'

  const weekdays = [...Array(7).keys()]
  const intlWeekDays = new Intl.DateTimeFormat(locale, {weekday:'long'})

  const weekDaysNames = weekdays.map(weekDayIndex => {
    const date = new Date(2021, 10, weekDayIndex + 1) //usamos este mes pq dia 1 conincide en lunes
    const weekDayName = intlWeekDays.format(date)
    return weekDayName
  })

  const renderedWeekDays = weekDaysNames.map(weekDayName => `<li>${weekDayName}</li>`).join('')

  const months = [...Array(12).keys()]
  const intlMonths = new Intl.DateTimeFormat(locale, {month:'long'})

  
  
  function renderCalendar() {
    months.map(monthKey => {
    const monthName = intlMonths.format(new Date(actualYear, monthKey))
    const nextMonthIndex = monthKey + 1;
    const daysOfMonth = new Date(actualYear, nextMonthIndex, 0).getDate()
    const startsOn = new Date(actualYear, monthKey, 1).getDay()
    return{
      monthName,
      daysOfMonth,
      startsOn,
    }
  }
  
  /* {calendar.map(({daysOfMonth, monthName})=>{
    const days = [...Array(daysOfMonth).keys()]
    const renderedDays = days.map(day => `<li>${day + 1}</li>`).join('')
    return `<h1>${monthName} ${actualYear}</h1>${renderedWeekDays}<ol>${renderedDays}</ol>`
  })}  */