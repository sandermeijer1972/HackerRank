// TIME CONVERSION

// Je krijgt een tijd in 12-uurs notatie
// zet dit om in 24-uurs notatie

function timeConversion(s) {
    const hour = s.charAt(0)+s.charAt(1);
    //console.log(hour);
    const minutes = s.charAt(3)+s.charAt(4);
    //console.log(minutes);
    const seconds = s.charAt(6)+s.charAt(7);
    //console.log(seconds); 
    const amOrPm = s.charAt(8);
    //console.log(amOrPm);
    let newHour;
    if (amOrPm == "P") {
        if (parseInt(hour) < 12) {
            newHour = parseInt(hour) + 12;
        } else {
            newHour = "12";
        };
    } else {
        if (parseInt(hour) < 12) {
            newHour = hour;
        } else {
            newHour = "00";
        };
    };
    //console.log(newHour);
    const newTime = (newHour + ":" + minutes + ":" + seconds);
    console.log(newTime);
};

timeConversion("12:23:34AM");
timeConversion("04:12:56PM");
timeConversion("12:01:00PM");
timeConversion("10:55:44AM");
