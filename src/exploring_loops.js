var filteredArray = [-1,2,-3,4,5,6].filter(element => element<0);
// console.log(filteredArray);

var foundElement = 0; 
foundElement = [-1,2,-3,4,5,6].find(element => element===2);
// console.log(foundElement);

var doesItInclude = [-1,2,-3,4,5,6].includes(4);
// console.log(doesItInclude);


const users = [
    {
        "first name":"Celine Jacky",
        "email":"celinej@gmail.com",
        "phone":"0784343434",
        "marks": [
            {
                "subject":"Math",
                "marks":100,
            },
            {
                "subject":"English",
                "marks":80,
            },
            {
                "subject":"Biology",
                "marks":90,
            },
        ],
        "nationalId":"1232123212321232"
    },
    {
        "first name":"Rebecca Mutoni",
        "email":"beccatoni@gmail.com",
        "phone":"0784343414",
        "nationalId":"1244123212321232",
        "marks": [
            {
                "subject":"Math",
                "marks":80,
            },
            {
                "subject":"English",
                "marks":90,
            },
            {
                "subject":"Biology",
                "marks":50,
            },
        ]
    },
    {
        "first name":"Pierrine Muhorakeye",
        "email":"pierrinem@gmail.com",
        "phone":"0784343424",
        "nationalId":"1233123212321232",
        "marks": [
            {
                "subject":"Math",
                "marks":90,
            },
            {
                "subject":"English",
                "marks":78,
            },
            {
                "subject":"Biology",
                "marks":89,
            },
        ],
    },
    {
        "first name":"Joy Ingabire",
        "email":"joying@gmail.com",
        "phone":"0784343410",
        "nationalId":"1232003212321232",
        "marks": [
            {
                "subject":"Math",
                "marks":99.9,
            },
            {
                "subject":"English",
                "marks":80,
            },
            {
                "subject":"Biology",
                "marks":10,
            },
        ],
    }
];

var foundUser = users.find(user => user.phone === '0784343434');
// console.log(foundUser["first name"]);

// var isUserAvailable = users.includes(user => user.email: "joying@gmail.com");
var isUserAvailable = users.some(user => Object.values(user).includes("joying@gmail.com"));
console.log(isUserAvailable);

const anotherUser = {
    "first name":"Joy Ingabire",
    "email":"joying@gmail.com",
    "phone":"0784343410",
    "nationalId":"1232003212321232"
}

var arr = Object.values({"name":"Lilian", "email":"lilian@gmail.com"});
console.log(arr.find(el => el === 'lilian@gmail.com'));

var arr2 = Object.keys({"name":"Lilian", "email":"lilian@gmail.com"});
console.log(arr2);

