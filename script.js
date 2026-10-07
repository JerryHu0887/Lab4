// Store the current state
let power = false;
let alarm = false;


// Turn on the power
function powerOn() {

    power = true;

    document.getElementById("status").innerHTML = "Power On";
    document.getElementById("message").innerHTML = "Now disable the alarm.";
}


// Disable the alarm
function alarmOff() {

    // Check if the power is on
    if (power == true) {

        alarm = true;

        document.getElementById("status").innerHTML = "Alarm Disabled";
        document.getElementById("message").innerHTML = "Now unlock the door.";
    }
}


// Unlock the door
function openDoor() {

    // Check if the power is on and the alarm is disabled
    if (power == true && alarm == true) {

        document.getElementById("status").innerHTML = "Door Unlocked";
        document.getElementById("message").innerHTML = "You escaped!";
    }
}


// 