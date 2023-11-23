const user = {
    name: "Ikirezi Ines",
    email: "ines@gmail.com",
    age: 23,
    gender: 'female',
};

const objectManipulator = (obj, operation) => {
    var outcome;
    switch (operation) {
        case "display":
            outcome = user;
            break;
        case "show properties":
            outcome = [];
            for (var key in obj) {
                outcome.push(key);
            }
            break;
        case "show values":
            outcome = [];
            for (var key in obj) {
                outcome.push(`${key} -> ${obj[key]}`);
            };
            break;
        default:
            break;
    }
    return outcome;
}

console.log(objectManipulator(user, 'display'));
console.log(objectManipulator(user, 'show properties'));
console.log(objectManipulator(user, 'show values'));


