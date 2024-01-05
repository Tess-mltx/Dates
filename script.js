let now = new Date()

let anchorage = new Date(now.setHours(now.getHours() - 9))
now = new Date()
let reykjavik = new Date(now.setHours(now.getHours() - 1))
now = new Date()
let stPetersburg = new Date(now.setHours(now.getHours() + 3))
let bxl = new Date()


function displayDates() {
    let sct = document.querySelector('.sctDatesTimeZones-wrapper')
    sct.innerHTML = ''
    let date1 = document.createElement('p')
    let date2 = document.createElement('p')
    let date3 = document.createElement('p')
    let date4 = document.createElement('p')

    date1.classList.add('sctDatesTimeZones-wrapper-dates')
    date2.classList.add('sctDatesTimeZones-wrapper-dates')
    date3.classList.add('sctDatesTimeZones-wrapper-dates')
    date4.classList.add('sctDatesTimeZones-wrapper-dates')


    sct.append(date1)
    sct.append(date2)
    sct.append(date3)
    sct.append(date4)

    date1.append(document.createTextNode("The time at Anchorage : " + anchorage))
    date2.append(document.createTextNode("The time at Reykjavik : " + reykjavik))
    date3.append(document.createTextNode("The time at St Petersburg : " + stPetersburg))
    date4.append(document.createTextNode("The time at Bruxelles : " + bxl))
}
setInterval(displayDates, 1000)
// ---------------------------------------

let myBirthday = new Date('1994-05-16')
let toNow = new Date()
let myAgeInDays = (toNow.getTime() - myBirthday.getTime()) / (1000 * 60 * 60 * 24)

function displayAge() {
    let sct = document.querySelector('.sctMyAgeInDay-wrapper')
    let date1 = document.createElement('p')
    date1.classList.add('sctMyAgeInDay-wrapper-dates')

    sct.append(date1)
    date1.append(document.createTextNode(Math.floor(myAgeInDays) + ' days have passed betweeen my birthday and now'))
}
displayAge()

// ----------------------------------------

let now1 = new Date()
let future = prompt("how many hours in the fuure ?")

let dateFuture = new Date(now1.setHours(now1.getHours() + parseInt(future)))

function displayDateInFuture() {
    let sct = document.querySelector('.sctDateInFuture-wrapper')
    let date1 = document.createElement('p')
    date1.classList.add('sctDateInFuture-wrapper-dates')

    sct.append(date1)
    date1.append(document.createTextNode("In " + parseInt(future) + " hours, the date will be " + dateFuture))
}
displayDateInFuture()

// ----------------------------------------

function displayClock() {
    let today = new Date();
    let dayWeek = today.getDay();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let secondes = today.getSeconds();
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"];
    console.log(dayNames[dayWeek])
    console.log(day);
    console.log(monthNames[month]);
    console.log(year);
    console.log(hours + ":" + minutes + ":" + secondes);

    let sct = document.querySelector('.sctDateToday-wrapper');
    sct.innerHTML = ""

    let calDiv = document.createElement('div');
    let calDayWeek = document.createElement('p');
    let calDay = document.createElement('p');
    let calMonth = document.createElement('p');
    let calYear = document.createElement('p');

    let clockDiv = document.createElement('div');
    let clockHour = document.createElement('p');
    let clockMin = document.createElement('p');
    let clockSec = document.createElement('p');

    calDiv.classList.add("sctDateToday-wrapper-calendar")
    calDayWeek.classList.add("sctDateToday-wrapper-calendar-dayWeek")
    calDay.classList.add("sctDateToday-wrapper-calendar-day")
    calMonth.classList.add("sctDateToday-wrapper-calendar-month")
    calYear.classList.add("sctDateToday-wrapper-calendar-year")

    clockDiv.classList.add("sctDateToday-wrapper-clock")
    clockHour.classList.add("sctDateToday-wrapper-clock-hourMin")
    clockSec.classList.add("sctDateToday-wrapper-clock-sec")

    sct.appendChild(calDiv);
    calDiv.appendChild(calDayWeek)
    calDiv.appendChild(calDay)
    calDiv.appendChild(calMonth)
    calDiv.appendChild(calYear)
    calDayWeek.append(document.createTextNode(dayNames[dayWeek]))
    calDay.append(document.createTextNode(day))
    calMonth.append(document.createTextNode(monthNames[month]))
    calYear.append(document.createTextNode(year))


    sct.appendChild(clockDiv);
    clockDiv.appendChild(clockHour)
    clockDiv.appendChild(clockSec)
    clockHour.append(document.createTextNode(hours + ":" + minutes + ":"))
    clockSec.append(document.createTextNode(secondes))


}
setInterval(displayClock, 1000)




// if (hours > 12) {
//     hours -= 12;
// } else if (hours === 0) {
//     hours = 12;
// }