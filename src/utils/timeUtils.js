export const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
};

export const regions = {
    "Melbourne": "https://www.timeapi.io/api/Time/current/zone?timeZone=Australia/Melbourne",
    "Tokyo": "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo",
    "Seoul": "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul",
    "Hong Kong": "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Hong_Kong",
    "London": "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/London",
    "Paris": "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris",
    "Berlin": "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Berlin",
    "Moscow": "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Moscow",
    "Los Angeles": "https://www.timeapi.io/api/Time/current/zone?timeZone=America/Los_Angeles",
    "New York": "https://www.timeapi.io/api/Time/current/zone?timeZone=America/New_York"
};

export function convertMinutesToSeconds(minutes) {
    let seconds = minutes * 60;
    return seconds;
}

// Format time meant for the pomodoro clock when calculating time
// if more than 3600 seconds then wtf do we do 
export function formatTime(remainingTime) {
    let time;
    if (remainingTime >= 3600) {
        //let hourDisplay = (totalMinutes - minutesDisplay) / 60;
    } else {
        let mins = Number.parseInt((remainingTime / 60) % 60, 10);
        let secs = Number.parseInt(remainingTime % 60, 10);
   
        time = `${mins >= 10 ? mins : '0' + mins} : ${secs >= 10 ? secs : '0' + secs}`; 

    }
    return time;    
}

// Gets the local time of the user
export function getUserTime(currentDate) {
    let hours = currentDate.getHours();
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    let mins = currentDate.getMinutes();

    // boolean or thing here chooses the first statement if it is true and chooses the latter otherwise
    return `${hours % 12 || 12} : ${mins >= 10 ? mins : '0' + mins} ${meridiem}`
}

//Gets local date of user
export function getUserDate(currentDate) {
    let day = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
}

export function getWorldTime(data) {
    let hours = data.hour;
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    let mins = data.minute;

    // boolean or thing here chooses the first statement if it is true and chooses the latter otherwise
    return `${hours % 12 || 12} : ${mins >= 10 ? mins : '0' + mins} ${meridiem}`
}