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

console.log(Math.floor(myAgeInDays) + ' days have passed betweeen my birthday and now')

function displayAge() {
    let sct = document.querySelector('.sctMyAgeInDay-wrapper')
    let date1 = document.createElement('p')
    date1.classList.add('sctMyAgeInDay-wrapper-dates')

    sct.append(date1)
    date1.append(document.createTextNode(Math.floor(myAgeInDays) + ' days have passed betweeen my birthday and now'))
}
displayAge()

