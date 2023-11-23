const { 
    add, 
    findByEmail, 
    list, 
    remove, 
    updateData,
    updateMarks
} = require("./index");

var newUser = {
    "first name":"Aline Uwera",
    "email":"uwaline@gmail.com",
    "phone":"0784347414",
    "nationalId":"1444123212321232"
};

// Adding 
// add(newUser);

// List 
// list();

// Updating 
// updateData(
//     "1232003212321232", 
//     "email", 
//     "joyingabire@gmail.com"
// );

// updateMarks()
// updateMarks(
//     "1233123212321232",  
//     "English",
//     85
// );

//Deleting
remove("beccatoni@gmail.com");