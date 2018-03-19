// fetchUsers() {
//     return fetch("https://randomuser.me/api/?results=15")
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data);
//             let usersData = data.results;
//             return usersData.map((user) => {
//                 return new User(user.email, user.name, user.dob, user.picture)
//             })
//         });
// }