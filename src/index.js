// const data = require("../db/database");
var { teachers, users } = require("../db/database");

/**
 * 
 * CRUD
 * C: Create
 * R: Read
 * U: Update
 * D: Delete
 * 
 * */

const add = (user) => {
    var usersBeforeSaving = users.length;
    if (!user) {
        console.log("Oops! No data to add");
    } else { 
        users.push(user);
        let usersAfterSaving = users.length;
        if (usersBeforeSaving < usersAfterSaving) {
            console.log("Added!!");
        }
    }
}

const list = () => {
    // Answer
    console.log(users);
    
    // Listing users one by one using for each 
    users.forEach(user => {
        console.log(user);
    });
    
    // Listing users one by one using for in 
    for (const user in users) {
        console.log(users[user]);
    }
}

const updateData = (nationalId, key, value) => {
    const foundUser = users.find(user => user.nationalId === nationalId);
    console.log("Found User: \n");
    console.log(foundUser);

    if (!foundUser) {
        console.log("User not found!");
    } else {
        // foundUser["email"] = "joyingabire@gmail.com";
        foundUser[key] = value;
        console.log("\nUpdated!");
        console.log("\nUpdated User\n");
        console.log(foundUser);
    };
};



const updateMarks = (nationalId, subject, value) => {
    const foundUser = users.find(user => user.nationalId === nationalId);
    console.log("Found User: \n");
    console.log(foundUser);

    if (!foundUser) {
        console.log("User not found!");
    } else {
        foundUser.marks.forEach(element => {
            if (element.subject === subject) {
                element.grade = value;
            }
        });

        console.log("\nMarks Updated!");
        console.log("\nUpdated User\n");
        console.log(foundUser);
    };
};

const remove = (email) => {
    var remainingUsers = users.filter(user => user.email !== email);
    users = remainingUsers;

    console.log("Deleted");
    console.log("Remainig Users\n");
    console.log(users);

}

const findByEmail = (email) => {

}

module.exports = { 
    add, 
    list, 
    findByEmail, 
    remove, 
    updateData,
    updateMarks 
}