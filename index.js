var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Coder",
    "Software Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// form validation
function setError(id, error) {
  // sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    // let x = document.forms["contactme_form"]['name'].value;
    let x= document.forms.contactme_form.name.value;
    if(x.length<=3){
       setError("name", "*Length of name is too sort")
        return false;
    }
 console.log(FormData);   
}

//dark-light mode
function dark_light_Function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }