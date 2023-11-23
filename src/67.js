// a 
var user = {
    id: "34343",
    fullName: "Jane Doe",
    email: "jane@gmail.com"
}

for (const key in user) {
    console.log(key);
}

for (const key in user) {
    console.log(user[key]);
}

function searchForKey(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : 'key not found';
}

console.log(searchForKey(user, 'fullName'));