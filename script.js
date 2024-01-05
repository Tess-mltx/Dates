let now = new Date()

let anchorage = new Date(now.setHours(now.getHours() - 9))
now = new Date()
let reykjavik = new Date(now.setHours(now.getHours() - 1))
now = new Date()
let stPetersburg = new Date(now.setHours(now.getHours() + 3))
let bxl = new Date()


function displayDates() {
    let sct = document.querySelector('.stcDatesTimeZones-wrapper')
    sct.innerHTML = ''
    let date1 = document.createElement('p')
    let date2 = document.createElement('p')
    let date3 = document.createElement('p')
    let date4 = document.createElement('p')

    date1.classList.add('stcDatesTimeZones-wrapper-dates')
    date2.classList.add('stcDatesTimeZones-wrapper-dates')
    date3.classList.add('stcDatesTimeZones-wrapper-dates')
    date4.classList.add('stcDatesTimeZones-wrapper-dates')

    
    sct.append(date1)
    sct.append(date2)
    sct.append(date3)
    sct.append(date4)
    
    date1.append(document.createTextNode("The time at Anchorage : " + anchorage.toString()))
    date2.append(document.createTextNode("The time at Reykjavik : " + reykjavik))
    date3.append(document.createTextNode("The time at St Petersburg : " + stPetersburg))
    date4.append(document.createTextNode("The time at Bruxelles : " + bxl))
}
setInterval(displayDates, 1000)