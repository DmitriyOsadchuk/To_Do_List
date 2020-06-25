'use strict' ;


function getType() {
    let selectValue = document.getElementById("inputState").value;
    let name = document.getElementById("inputName").value;
    let surname = document.getElementById("inputSurname").value;
    let inputSpecialization = document.getElementById("inputSpecialization").value;
    let inputJob = document.getElementById("inputJob").value;

    switch (selectValue) {
        case 'user':
            let user = new User(name, surname);
            console.log(user);
            hideTabs();
            user.openFormForUser();
            break;

        case 'student':
            let student = new Student(name, surname, inputSpecialization);
            console.log(student);
            hideTabs();
            student.openFormForStudent();
            break;

        case 'developer':
            let developer = new Developer(name, surname, inputSpecialization, inputJob);
            console.log(developer);
            hideTabs();
            developer.openFormForDeveloper();
            break;
        default:
            hideTabs();
            alert('Doesn`t have this value ');
    }
}

function hideTabs () {
    let tabSimpleTask = document.getElementById("tabSimpleTask");
    let tabHomeTask = document.getElementById("tabHomeTask");
    let tabProjectTask = document.getElementById("tabProjectTask");
    let simpleTask = document.getElementById("simpleTask");
    let homeTask = document.getElementById("homeTask");
    let projectTask = document.getElementById("projectTask");
    simpleTask.classList.remove("active");
    homeTask.classList.remove("active");
    projectTask.classList.remove("active");
    tabProjectTask.classList.add("d-none");
    tabSimpleTask.classList.add("d-none");
    tabHomeTask.classList.add("d-none");
}

function numbering () {
    let removeCount = document.getElementsByClassName("count");
    for (let i = removeCount.length - 1; i >= 0; --i) {
        removeCount[i].remove();
    }
    let count = document.getElementById("listView").childElementCount;
    let allChildren = document.getElementById("listView").children;
    for (let i = 0; i < count; i++) {
        let text = i+1;
        text = text.toString();
        let p = document.createElement("p");
        p.className = "count";
        p.appendChild(document.createTextNode(text));
        p.textContent += " - ";
        allChildren[i].appendChild(p);
    }
}
let simpleTask = function addSimpleTask () {
    let titleSimpleTask = document.getElementById("titleSimpleTask").value;
    let statusSimpleTask = document.getElementById("statusSimpleTask").value;
    let text1 = document.createTextNode(titleSimpleTask);
    let text2 = document.createTextNode(statusSimpleTask);
    let li = document.createElement("li");
    li.className = "list-task";
    li.textContent += "type: simple; ";
    li.textContent += "title: ";
    li.appendChild(text1);
    li.textContent += ";";
    li.textContent += " status: ";
    li.appendChild(text2);
    // console.log(li);
    addNewTask(li)
};

let homeTask = function addHomeTask() {
    let titleHomeTask = document.getElementById("titleHomeTask").value;
    let statusHomeTask = document.getElementById("statusHomeTask").value;
    let descriptionHomeTask = document.getElementById("descriptionHomeTask").value;
    let text1 = document.createTextNode(titleHomeTask);
    let text2 = document.createTextNode(statusHomeTask);
    let text3 = document.createTextNode(descriptionHomeTask);
    let li = document.createElement("li");
    li.className = "list-task";
    li.textContent += "type: home; ";
    li.textContent += "title: ";
    li.appendChild(text1);
    li.textContent += ";";
    li.textContent += " status: ";
    li.appendChild(text2);
    li.textContent += ";";
    li.textContent += " description: ";
    li.appendChild(text3);
    // console.log(li);
    addNewTask(li)
};

let ProjectTask = function addProjectTask() {
    let titleProjectTask = document.getElementById("titleProjectTask").value;
    let statusProjectTask = document.getElementById("statusProjectTask").value;
    let descriptionProjectTask = document.getElementById("descriptionProjectTask").value;
    let deadlineProjectTask = document.getElementById("deadlineProjectTask").value;
    let text1 = document.createTextNode(titleProjectTask);
    let text2 = document.createTextNode(statusProjectTask);
    let text3 = document.createTextNode(descriptionProjectTask);
    let text4 = document.createTextNode(deadlineProjectTask);
    let li = document.createElement("li");
    li.className = "list-task";
    li.textContent += "type: project; ";
    li.textContent += "title: ";
    li.appendChild(text1);
    li.textContent += ";";
    li.textContent += " status: ";
    li.appendChild(text2);
    li.textContent += ";";
    li.textContent += " description: ";
    li.appendChild(text3);
    li.textContent += ";";
    li.textContent += " deadline: ";
    li.appendChild(text4);
    // console.log(li);
    addNewTask(li)
};


//_____ Create a new list

function addNewTask(li) {
    document.getElementById("listView").appendChild(li);
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
            numbering ();
        }
    }
    numbering ();

}

let close = document.getElementsByClassName("close");










