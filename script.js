const dayElt = document.getElementById('days')
const hourElt = document.getElementById('hours')
const minElt = document.getElementById('mins')
const secElt = document.getElementById('secs')

const myBD = '2 Dec 2024'

let countdown = () => {
    const myBdate = new Date(myBD)
    const currentDate = new Date()

    const totalSec = (myBdate - currentDate) / 1000

    const day = Math.ceil(totalSec / 3600 / 24)

    const hour = Math.floor(totalSec/ 3600) % 24

    const min = Math.ceil(totalSec/ 60) % 60

    const sec = Math.ceil(totalSec) % 60

    dayElt.innerText = formatDate(day);
    hourElt.innerText = formatDate(hour);
    minElt.innerText = formatDate(min);
    secElt.innerText = formatDate(sec);
}

const formatDate = (time) => {
    return time < 10 ? (`0${time}`) : time
}

countdown()

setInterval(countdown,1000)
