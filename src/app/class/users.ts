export class User {
    username: string;
    birthday: string;
    age: number;
    email: string;
    password: string;
    valid: boolean;

    constructor(username: string = "", birthday: string = "", age: number = 0, email: string = "", password: string = "", valid: boolean = false) {
        this.username = username;
        this.birthday = birthday;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

