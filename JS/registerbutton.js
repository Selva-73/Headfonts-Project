const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const birthdate = document.querySelector('#dob');
const age = document.querySelector('#age');
const mobile = document.querySelector('#num');
const gender = document.querySelector('#gender');
const profile = document.querySelector('#profile');
const url = document.querySelector('#url');
const price = document.querySelector('#volumeControl');
const priceDisplay = document.querySelector('#volumeValue');
const reset = document.querySelector('#reset');
const resetVal = price.value;
const togglePassword = document.querySelectorAll('.toggle-password')


togglePassword.forEach((button, index) => (
    button.addEventListener('click', () => {
           const eye1 = document.getElementById('eye1');
           const eye2 = document.getElementById('eye2');
        // console.log(`${index}`);
        if (index === 0) {
            password.type = password.type === 'password' ? 'text' : 'password';
            if (eye1.src.includes('eye-closed.png')) {
                eye1.src = './Assets/Images/eye-open.png';
            } else {
                eye1.src = './Assets/Images/eye-closed.png';
            }
            // eye1.src = eye1.src.includes('eye-closed.png') === true ? eye1.src = './Assets/Images/eye-open.png': eye1.src = './Assets/Images/eye-closed.png';
        }
        else{
            cpassword.type = cpassword.type === 'password' ? 'text' : 'password';
            if (eye2.src.includes('eye-closed.png')) {
                eye2.src = './Assets/Images/eye-open.png';
            } else {
                eye2.src = './Assets/Images/eye-closed.png';
            }
        }
        // console.log(password.type);
        // console.log(cpassword.type);
    })
));
form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
})

birthdate.addEventListener('input', () => {
    const ageVal = updateAge();
    if (ageVal <= 0) {
        setError(birthdate, 'Select a valid age');
    }
    else {
        setSuccess(birthdate);
    }
});

gender.addEventListener('input', () => {
    validateGender();
})
function validateInputs() {
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const birthday = birthdate.value;
    const mobileVal = mobile.value;
    const ageVal = age.value;

    let success = true;

    if (firstnameVal === '') {
        success = false;
        setError(firstname, 'required')
    }
    else {
        setSuccess(firstname);
    }

    if (lastnameVal === '') {
        success = false;
        setError(lastname, 'required')
    }
    else {
        setSuccess(lastname);
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email);
    }
    if (mobileVal === '') {
        success = false;
        setError(mobile, 'required')
    }
    else if (!validateMobileNumber(mobileVal)) {
        success = false;
        setError(mobile, 'Please enter a valid mobile number')
    }
    else {
        setSuccess(mobile);
    }

    if (birthday === '') {
        success = false;
        setError(dob, 'Select your birthdate');
    }
    else {
        setSuccess(dob);
    }

    if (ageVal === "") {
        success = false;
        setError(age, 'required');
        setError(birthdate, 'Select your birthdate')
    }
    else if (ageVal <= 0) {
        success = false;
        setError(age, 'Invalid age');
        setError(birthdate, 'Select correct birthdate');
    }
    else {
        setSuccess(age);
    }


    if (passwordVal === '') {
        success = false;
        setError(password, 'required')
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be atleast 8 characters long');
    }
    else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'required');
    }
    else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Password does not match');
    }
    else {
        setSuccess(cpassword)
    }

    return success;
}
function updateAge() {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const dob = new Date(dobInput.value);
    const today = new Date();
    console.log(dob);

    if (isNaN(dob)) {
        ageInput.value = "";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    ageInput.value = age;
    return age;
}

function validateGender() {
    if (gender.value === "") {
        setError(gender, 'Select a gender');
    }
    else {
        success = false;
        setSuccess(gender);
    }
}
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}


function validateEmail(email) {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validateMobileNumber(mobileNumber) {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobileNumber);
}

profile.addEventListener('change', () => {
    const file = profile.files[0];
    if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const valid = ['jpg', 'jpeg', 'png'];

        if (valid.includes(fileExtension)) {
            setSuccess(profile);
        }
        else {
            setError(profile, 'Select only jpg and png files');
        }
    }
});

price.addEventListener('input', () => {
    priceDisplay.textContent = price.value;

})

reset.addEventListener('click', () => {
    priceDisplay.textContent = resetVal;
})

