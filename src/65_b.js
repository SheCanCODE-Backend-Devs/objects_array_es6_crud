function weekDayDefiner(num) {
    var day = "";
    switch (num) {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;    
        default:
            day = "Sunday"
            break;
    }
    return day;
}

console.log(weekDayDefiner(4));