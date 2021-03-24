
let dateObject = new Date()

function getFormattedDate(dateObject) {
   let dat = dateObject.getDate()// делаем вызов даты через .getDate()
    if (dat < 10) dat = '0'+dat // если дата меньше 10 добавляем через склеивание строки 0
    let month = dateObject.getMonth()+1// берем месяц и добавляем +1 так как все считаеться с 0
    if (month < 10) month = '0'+month // так же проверяем и добавлем 0 в случае совпадения
    let year = dateObject.getFullYear()// берем полный год 
    let hour = dateObject.getHours()// берем часы
    if (hour < 10) hour = '0'+hour // добавляем нолик в случае без нуля 
    let minute = dateObject.getMinutes() // добавляем время 
    if (minute < 10) minute = '0'+minute// + 0 
    let weekday = new Array(7)// создаем массив по дням недели 
  weekday[0] = "Sunday"
  weekday[1] = "Monday"
  weekday[2] = "Tuesday"
  weekday[3] = "Wednesday"
  weekday[4] = "Thursday"
  weekday[5] = "Friday"
  weekday[6] = "Saturday"

  let n = weekday[dateObject.getDay()]//
    return `${dat}. ${month}. ${year}. ${hour}:${minute} ${n}`// не забывать ставить обратный апостроф
    
}
