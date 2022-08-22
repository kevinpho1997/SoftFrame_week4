export class User {
    username: string;
    birthday: string;
    age: number;
    email: string;
    password: string;
    valid: boolean;

    constructor(username: string, birthday: string, age: number, email: string, password: string, valid: boolean) {
        this.username = username;
        this.birthday = birthday;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

let user1 = new User("kevinpho", "18/07/1997", 25, "kevin.pho@", "yep", false);
let user2 = new User("yeji", "01/01/2000", 22, "yeji@email.com", "nope", false);
let user3 = new User("dahyun", "01/01/1998", 24, "dahyun@email.com", "maybe", false);

let users = [user1, user2, user3];