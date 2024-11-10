const dayElt = document.getElementById('days')
const hourElt = document.getElementById('hours')
const minElt = document.getElementById('mins')
const secElt = document.getElementById('secs')
const dateTxt = document.getElementById('dateInput')
const dateBtn = document.getElementById('dateBtn')
const h1Txt = document.getElementById('h1')

let dateIn = ''

dateBtn.onclick = () => {
    dateIn = dateTxt.value
    const datee = new Date()
    h1Txt.innerHTML = `${dateIn}`
    countdown(dateIn)   
    
}


let refreshCount = (dateIn) => {
   let num = 1
   while(num == 10){
    console.log(`num = ${num}`)   
    num++
   }
}

let countdown = (dateIn) => {
    const myDate = new Date(dateIn)
    const currentDate = new Date()

    const totalSec = (myDate - currentDate) / 1000

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

// countdown()

