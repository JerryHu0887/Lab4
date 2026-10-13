// Store the current state of the room
let power = false;
let alarmDisabled = false;
let door = false;


// Restore the power
function restorePower() {

    // Check if the player has already escaped
    if (door === true) {

        document.getElementById("message").innerHTML =
            "Escape already completed.";

    } else if (power === false) {

        power = true;

        document.getElementById("powerStatus").innerHTML = "ON";

        document.getElementById("status").innerHTML = "POWER ONLINE";

        document.getElementById("message").innerHTML =
            "Power restored. Disable the alarm next.";

        document.getElementById("powerStatus").style.color =
            "lightgreen";

        document.getElementById("status").style.color =
            "#ffcc66";

        document.getElementById("message").style.color =
            "#ffcc66";

    } else {

        document.getElementById("message").innerHTML =
            "Power is already online.";
    }
}


// Disable the alarm
function disableAlarm() {

    // Check if the player has already escaped
    if (door === true) {

        document.getElementById("message").innerHTML =
            "Escape already completed.";

    } else if (power === true && alarmDisabled === false) {

        alarmDisabled = true;

        document.getElementById("alarmStatus").innerHTML =
            "DISABLED";

        document.getElementById("status").innerHTML =
            "SECURITY DISABLED";

        document.getElementById("message").innerHTML =
            "Alarm disabled. The exit can now be unlocked.";

        document.getElementById("alarmStatus").style.color =
            "lightgreen";

        document.getElementById("status").style.color =
            "#ffcc66";

        document.getElementById("message").style.color =
            "#ffcc66";

    } else if (power === false) {

        document.getElementById("status").innerHTML =
            "ERROR";

        document.getElementById("message").innerHTML =
            "Restore power before disabling the alarm.";

        document.getElementById("status").style.color =
            "#ff5555";

        document.getElementById("message").style.color =
            "#ff5555";

    } else {

        document.getElementById("message").innerHTML =
            "The alarm is already disabled.";
    }
}


// Unlock the door
function unlockDoor() {

    // Check if the door is already unlocked
    if (door === true) {

        document.getElementById("message").innerHTML =
            "Escape already completed.";

    } else if (power === true && alarmDisabled === true) {

        door = true;

        document.getElementById("doorStatus").innerHTML =
            "UNLOCKED";

        document.getElementById("status").innerHTML =
            "ESCAPED";

        document.getElementById("message").innerHTML =
            "ESCAPE SUCCESSFUL";

        document.getElementById("doorStatus").style.color =
            "lightgreen";

        document.getElementById("status").style.color =
            "lightgreen";

        document.getElementById("message").style.color =
            "lightgreen";

    } else if (power === true && alarmDisabled === false) {

        document.getElementById("status").innerHTML =
            "WARNING";

        document.getElementById("message").innerHTML =
            "The alarm is still active.";

        document.getElementById("status").style.color =
            "#ffcc66";

        document.getElementById("message").style.color =
            "#ffcc66";

    } else {

        document.getElementById("status").innerHTML =
            "ERROR";

        document.getElementById("message").innerHTML =
            "The door has no power.";

        document.getElementById("status").style.color =
            "#ff5555";

        document.getElementById("message").style.color =
            "#ff5555";
    }
}


// Reset the system
function resetSystem() {

    power = false;
    alarmDisabled = false;
    door = false;

    document.getElementById("powerStatus").innerHTML =
        "OFF";

    document.getElementById("alarmStatus").innerHTML =
        "ACTIVE";

    document.getElementById("doorStatus").innerHTML =
        "LOCKED";

    document.getElementById("status").innerHTML =
        "LOCKED";

    document.getElementById("message").innerHTML =
        "Restore power to begin.";

    document.getElementById("powerStatus").style.color =
        "white";

    document.getElementById("alarmStatus").style.color =
        "white";

    document.getElementById("doorStatus").style.color =
        "white";

    document.getElementById("status").style.color =
        "#ff5555";

    document.getElementById("message").style.color =
        "#ffcc66";
}