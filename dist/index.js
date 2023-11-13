"use strict";
// let a=20
const auth = {
    name: 'sameer',
    password: 123123,
    isAdmin: true,
    login(name, password) { }
};
const login = (user) => {
    console.log(user);
    return user;
};
console.log(login(auth));
