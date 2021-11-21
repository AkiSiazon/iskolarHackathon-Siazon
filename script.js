/*Set a Username for User*/
function setUsername() {
    var username = document.getElementById("username").value;
    document.getElementById('greeting').innerHTML = "Good Day, " + username + ". Welcome. ";
}

/*Close Warning or Notifications*/
function closeNotice() {
    document.getElementById('notice').style.display = 'none';
}
/*Show or Hide preferences*/
    /*Show All*/
function showAll() {
    var allStudents = document.getElementsByClassName("student");
    var allTeachers = document.getElementsByClassName("teacher");
    var students = 0;
    var teachers = 0;
    while(students < allStudents.length){
    allStudents[students].style.display = "inline-block"; 
        students = students + 1;
    }
    while(teachers < allTeachers.length){
    allTeachers[teachers].style.display = "inline-block"; 
        teachers = teachers + 1;
    }
}

/*Show Students Only*/
function showStudent() {
    var allStudents = document.getElementsByClassName("student");
    var allTeachers = document.getElementsByClassName("teacher");
    var students = 0;
    var teachers = 0;
    while(students < allStudents.length){
    allStudents[students].style.display = "inline-block"; 
        students = students + 1;
    }
    while(teachers < allTeachers.length){
    allTeachers[teachers].style.display = "none"; 
        teachers = teachers + 1;
    }
}

/*Show Teachers Only*/
function showTeacher() {
    var allStudents = document.getElementsByClassName("student");
    var allTeachers = document.getElementsByClassName("teacher");
    var students = 0;
    var teachers = 0;
    while(students < allStudents.length){
    allStudents[students].style.display = "none"; 
        students = students + 1;
    }
    while(teachers < allTeachers.length){
    allTeachers[teachers].style.display = "inline-block"; 
        teachers = teachers + 1;
    }
}

/*Expand Info of Teachers*/
    /*Teacher 1*/
function on() {
    var on = document.getElementsByClassName("overlay");
    on[0].style.display = "block";
}

function off() {
    var off = document.getElementsByClassName("overlay");
    off[0].style.display = "none";
}

function expandInfo() {
    var expand = document.getElementsByClassName("exinfo");
    expand[0].style.display = "block";
}


    /*Teacher 2*/
function on2() {
    var on2 = document.getElementsByClassName("overlay");
    on2[1].style.display = "block";
}

function off2() {
    var off2 = document.getElementsByClassName("overlay");
    off2[1].style.display = "none";
}

function expandInfo2() {
    var expand2 = document.getElementsByClassName("exinfo");
    expand2[1].style.display = "block";
}


    /*Teacher 3*/
function on3() {
    var on3 = document.getElementsByClassName("overlay");
    on3[2].style.display = "block";
}

function off3() {
    var off3 = document.getElementsByClassName("overlay");
    off3[2].style.display = "none";
}

function expandInfo3() {
    var expand3 = document.getElementsByClassName("exinfo");
    expand3[2].style.display = "block";
}

/*Expand Info of Students*/
    /*Student 1*/
function on4() {
    var on4 = document.getElementsByClassName("overlay");
    on4[3].style.display = "block";
}

function off4() {
    var off4 = document.getElementsByClassName("overlay");
    off4[3].style.display = "none";
}

function expandInfo4() {
    var expand4 = document.getElementsByClassName("exinfo");
    expand4[3].style.display = "block";
}


    /*Student 2*/
function on5() {
    var on5 = document.getElementsByClassName("overlay");
    on5[4].style.display = "block";
}

function off5() {
    var off5 = document.getElementsByClassName("overlay");
    off5[4].style.display = "none";
}

function expandInfo5() {
    var expand5 = document.getElementsByClassName("exinfo");
    expand5[4].style.display = "block";
}


    /*Student 3*/
function on6() {
    var on6 = document.getElementsByClassName("overlay");
    on6[5].style.display = "block";
}

function off6() {
    var off6 = document.getElementsByClassName("overlay");
    off6[5].style.display = "none";
}

function expandInfo6() {
    var expand6 = document.getElementsByClassName("exinfo");
    expand6[5].style.display = "block";

}