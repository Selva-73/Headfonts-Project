const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click',() => {
    // console.log("Clicking");
    password.type = password.type === 'password' ? 'text' : 'password';
    if (eye1.src.includes('eye-closed.png')) {
        eye1.src = './Assets/Images/eye-open.png';
    } else {
        eye1.src = './Assets/Images/eye-closed.png';
    }
})
document.getElementById('username').addEventListener('input', () => {
    const username = document.querySelector('#username')
    if (username.value === "") {
        console.log("----------");
        error1.innerHTML = "Invalid";
        error1.style.display = 'block';
    }
    else if(username.value.length > 12){
        error1.innerHTML = "Username should be lesser than 12 characters";
        error1.style.display = 'block';
    }
    else{
        error1.style.display = 'none';
    }
})

document.getElementById('password').addEventListener('input',() => {
    const password = document.querySelector('#password')
    if(password.value === ""){
        error2.innerHTML = "Invalid";
        error2.style.display = 'block';
    }
    else if(password.value.length > 10){
        error2.innerHTML = "Password should be lesser than 10 characters";
        error2.style.display = 'block';
    }
    else{
        error2.style.display = 'none';
    }
})

// button.addEventListener('submit',(e) = >{
//     if(!validateInputs()){
//         e.preventDefault();
//     }
// })

// function validateInputs(){
//     const username = document.querySelector('#username')
//     const password = document.querySelector('#password')
    
//     let validate = true;
//     if(!(username.value == password.value)){
//         validate = false;
//     }

//     return validate;
// }

