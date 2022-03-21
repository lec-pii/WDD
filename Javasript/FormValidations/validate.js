const form = document.getElementById("FormOne");
const hlooho = document.getElementById("head");

/* 
    we can add an eventListener to any element that we have, these event listener may listen
    to a lot of events and then execute certain pieces of code upon that event happening.

    some of the common events include "click", "change", "mouseover", "mouseleave" to have aloot at more
    checkout https://www.w3schools.com/jsref/dom_obj_event.asp

    to add an eventListener we may use an anonymous function as the 2nd argument or simply reference a function 
    that is defined elsewhere in your code
 */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validator();
}); //using and annonymous Function


/* 
  edit the code below to add an eventlistener such that when resetting the form the 
  warning messages are removed and the form looks just like when the page was loaded
 */

form.addEventListener("", () => {}); //edit and add code here

hlooho.addEventListener("click", doSomething); //using a defined function

function doSomething() {
  alert("You clicked the header!");
}

const validator = () => {
  fname_field = document.getElementById("fName");
  lname_field = document.getElementById("lName");
  email_field = document.getElementById("email");
  password_field = document.getElementById("password");
  cpassword_field = document.getElementById("fpassword");

/* 
  you may add more validations here, like whether the 2 passwords are the same,
  cheking the length of mobile numbers, check whether the email is a valid one...etc  
  ofcourse to do some other validations you would to add more fields in the HTML document
  for some validation checks you will to have knowledge about some string functions in javascript,
  so I highly encourage you do so 
 */


  //   Name Field Validator
  if (fname_field.value.trim() == "") {
    fname_field.style.border = "2px Solid red";
    document.getElementById("fname-warning").classList.remove("rdisplay");
    document.getElementById("fname-warning-img").classList.remove("rdisplay");
  } else {
    fname_field.style.border = "2px Solid green";
    document.getElementById("fname-warning").classList.add("rdisplay");
    document.getElementById("fname-warning-img").classList.add("rdisplay");
    document.getElementById("fname-pass").classList.remove("rdisplay");
  }

  //   Last name field Validator
  if (lname_field.value.trim() == "") {
    lname_field.style.border = "2px Solid red";
    document.getElementById("lname-warning").classList.remove("rdisplay");
    document.getElementById("lname-warning-img").classList.remove("rdisplay");
  } else {
    lname_field.style.border = "2px Solid green";
    document.getElementById("lname-warning").classList.add("rdisplay");
    document.getElementById("lname-warning-img").classList.add("rdisplay");
    document.getElementById("lname-pass").classList.remove("rdisplay");
  }

  //   Email field Validator
  if (email_field.value.trim() == "") {
    email_field.style.border = "2px Solid red";
    document.getElementById("email-warning").classList.remove("rdisplay");
    document.getElementById("email-warning-img").classList.remove("rdisplay");
  } else {
    email_field.style.border = "2px Solid green";
    document.getElementById("email-warning").classList.add("rdisplay");
    document.getElementById("email-warning-img").classList.add("rdisplay");
    document.getElementById("email-pass").classList.remove("rdisplay");
  }

  //   Password Field validator
  if (password_field.value.trim() == "") {
    password_field.style.border = "2px Solid red";
    document.getElementById("pass-warning").classList.remove("rdisplay");
    document.getElementById("pass-warning-img").classList.remove("rdisplay");
  } else {
    password_field.style.border = "2px Solid green";
    document.getElementById("pass-warning").classList.add("rdisplay");
    document.getElementById("pass-warning-img").classList.add("rdisplay");
    document.getElementById("pass-pass").classList.remove("rdisplay");
  }

  //   Password Confirmation field validator
  if (cpassword_field.value.trim() == "") {
    cpassword_field.style.border = "2px Solid red";
    document.getElementById("cpass-warning").classList.remove("rdisplay");
    document.getElementById("cpass-warning-img").classList.remove("rdisplay");
  } else {
    cpassword_field.style.border = "2px Solid green";
    document.getElementById("cpass-warning").classList.add("rdisplay");
    document.getElementById("cpass-warning-img").classList.add("rdisplay");
    document.getElementById("cpass-pass").classList.remove("rdisplay");
  }
};


