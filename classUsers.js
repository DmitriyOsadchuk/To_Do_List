class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    openFormForUser () {
        let tabSimpleTask = document.getElementById("tabSimpleTask");
        tabSimpleTask.classList.remove("d-none");
        tabSimpleTask.classList.add("active");
        let simpleTask = document.getElementById("simpleTask");
        simpleTask.classList.add("active");
    }
}
class Student extends User{
    constructor(name, surname, specialization) {
        super(name, surname,);
        this.specialization = specialization;
    }

    openFormForStudent () {
        this.openFormForUser();
        let tabHomeTask = document.getElementById("tabHomeTask");
        tabHomeTask.classList.remove("d-none");
    }
}

 class Developer extends Student{
    constructor(name, surname, specialization, job) {
        super(name, surname, specialization);
        this.job = job;
    }

    openFormForDeveloper () {
        this.openFormForStudent();
        let tabProjectTask = document.getElementById("tabProjectTask");
        tabProjectTask.classList.remove("d-none");
    }
}

