// Question1 
let DATA = "secret information"
class User {
    constructor(name,email) {
        this.name = name;
        this.email= email;
    }

    viewData() {
        console.log("Data:", DATA);
    }
}

const student1 = new User("Shreya","abc@gmail.com");
const student2 = new User("Mihir", "cde@gmail.com");
const teacher1 = new User("Dean", "dean@gmail.com");
console.log("Question one:");
console.log(student1);
console.log(student2);
console.log(teacher1);

student1.viewData();

// Question two
class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData() {
        DATA = "some new value";
        console.log("data:",DATA);
    }
}

const admin1 = new Admin("admin", "admin@college.com");
console.log("Question two:");
console.log(admin1);
admin1.editData();

