import React from 'react'
import User from './../ent/User'

class UserService {
   
    fetchUsers() {
        return fetch("https://randomuser.me/api/?results=15")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                let usersData = data.results;
                console.log(usersData);
                
                return usersData.map((user) => {
                        return new User(user.email, user.name, user.dob, user.picture)
                    })
            });
    }

    // getData() {
        
    //     return usersData.map((user) => {
    //         return new User(user.email, user.name, user.dob, user.picture)
    //     })
    // }
}

export const userService = new UserService();