import { userService } from "../service/usersService";



class User {
    constructor(email, name, dob, picture,gender) {
        this.email = email;
        this.name = name.first;
        this.lastname = name.last;
        this.dob = dob;
        this.picture = picture;
        this.gender = gender;
    }
    getDate(dob) {
            const date = new Date(this.dob);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
    
            return `Birth date: ${day}.${month}.${year}`;
        
    }
    getEmail (email) {
        // const monkey = this.email.indexOf('@')-3;
        const string = this.email.substring(0,2) + '...' + this.email.substring(5, this.email.length) ;
        return string;
    }
    getGender() {
        if (this.gender === 'female') {
            return 'red lighten-5';
        } 
    }
 
}

export  default User;