import React from  "react";


class User {
    constructor(email, name, dob, picture) {
        this.email = email;
        this.name = name.first;
        this.lastname = name.last;
        this.dob = dob;
        this.picture = picture;
    }
    getDate() {
 
            const date = new Date(this.dob);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
    
            return `${year}-${month}-${day}`;
        
    }
    getEmail () {
        const monkey = this.email.indexOf('@');
        const string = this.email.substring(0,monkey) + '...';
        return string;
    }
}


// const createUsers = (usersData) => {
//     return new User(usersData.email, usersData.name, usersData.lastname, usersData.dob, usersData.picture);
    
// };


export  default User;