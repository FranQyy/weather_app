// var getUser = (id, callback) => {
//     var user = {
//         id: id,
//         name: 'Lukasz'
//     };
//     callback(user);
// };

// getUser(31, (userObject) => {
//     console.log(userObject);
// });

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Lukasz'
    };
    
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});