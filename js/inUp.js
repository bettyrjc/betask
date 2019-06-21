const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// EXPRESSION
// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('emailIn').addEventListener('blur', validateEmailIn);
document.getElementById('emailUp').addEventListener('blur', validateUp);
document.getElementById('passwordIn').addEventListener('blur', validatepasswordIn);
document.getElementById('passwordUp').addEventListener('blur', validatepasswordUp);

function validateName(){
  const name = document.getElementById('name');
  const re = / [a-zA-Z]{2,10}$/;

  if(!re.test(name.value))
  {
    name.style.color ='red'
  }else{
    name.style.color ='black'
  }
}
function validateEmailIn(){
  const email = document.getElementById('emailIn');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value))
  {
    email.style.color ='red'
  }else{
    email.style.color ='black'
  }
}
function validateUp(){
  const email = document.getElementById('emailUp');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value))
  {
    email.style.color ='red'
 }else{
      email.style.color ='black'
  }
}
function validatepasswordIn(){
  const password = document.getElementById('passwordIn');
  const re = /^([A-Z]+)([a-z_\-\.]+)([0-9]{2,3})$/;

  if(!re.test(password.value))
  {
    password.style.color ='red'
}else{
  password.style.color ='black'
}
}
function validatepasswordUp(){
  const password = document.getElementById('passwordUn');
  const re = /^([A-Za-z_\-\.]+)([0-9]{2,3})$/;

  if(!re.test(password.value))
  {
    password.style.color ='red'
  }else{
    password.style.color ='black'
  }
}
