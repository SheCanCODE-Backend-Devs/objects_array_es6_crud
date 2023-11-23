function grader(num) {
    var grade = "";
    switch (true) {
        case (num <= 100 && num >= 90):
            grade = "A"
            break;
        case (num < 90 && num >= 80):
            grade = "B"
            break;
        case (num < 80 && num >= 70):
            grade = "c"
            break;
        case (num < 70 && num >= 60):
            grade = "D"
            break;   
        default:
            grade = "E"
            break;
    }
    return grade;
}

console.log(grader(90));