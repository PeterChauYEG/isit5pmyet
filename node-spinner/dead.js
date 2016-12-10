"use strict"

var moment = require('moment')
var timezone = require('moment-timezone')
var CLI = require('clui'),
    Spinner = CLI.Spinner

// var
let n = 0

// init
const zone = 'America/Edmonton'
timezone.tz.setDefault(zone)

const remaining = howLong()
const countdown = new Spinner(`is it 5:00 PM yet? ${remaining}`)

// start
countdown.start()
droll()

function humanPlz(fivePM) {
    const remaining = moment().diff(fivePM, 'seconds');
    let remainingformatted

    if (remaining <= -3600) {
        remainingformatted = formatter(fivePM, 'hours')
    } else if (remaining < -60 && remaining > -3600) {
        remainingformatted = formatter(fivePM, 'minutes')
    } else if (remaining >= -60 && remaining < 0) {
        remainingformatted = formatter(fivePM, 'seconds')
    } else {
        return `go home`
    }
    
    return `${remainingformatted}`
}

function formatter(remaining, format) {
    return `${moment().diff(remaining, `${format}`)} ${format}` 
}

function howLong() {
    const fivePM = moment().hour(0).minute(56).second(0)
    const remaining = humanPlz(fivePM)
    return remaining
}

function droll() {
    setInterval(() => {
        const remaining = howLong()
        
        if (remaining == 'go home') {
            countdown.stop()
            console.log(`go home 🎉`)
            process.stdout.write('\n');
            process.exit(0);
            return
        }  
        
        countdown.message(`is it 5:00 PM yet? ${remaining}`)
    })
}
