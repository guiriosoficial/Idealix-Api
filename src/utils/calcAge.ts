export default function calcAge(time = new Date) {
  const nowDate = new Date()
  const yearNow = nowDate.getFullYear() 
  const monthNow = nowDate.getMonth() + 1
  const dateNow = nowDate.getDate()

  const timeDate = new Date(time)
  const yearTime = timeDate.getFullYear()
  const monthTime = timeDate.getMonth() + 1
  const dateTime = timeDate.getDate()

  let yearAge = yearNow - yearTime
  let monthAge: number, dateAge: number
  if (monthNow >= monthTime) {
      monthAge = monthNow - monthNow
  } else {
      yearAge--
      monthAge = 12 + monthNow - monthNow
  }

  if (dateNow >= dateTime) {
      dateAge = dateNow - dateTime
  } else {
      monthAge--
      dateAge = 31 + dateNow - dateTime
      if (monthAge < 0) {
          monthAge = 11
          yearAge--
      }
  }

  return (yearAge * 12) + monthAge
  // return ~~(((Date.now() - +new Date(time)) / 31557600000) * 12)
}
