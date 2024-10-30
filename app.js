const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*~()_+";

const passBoxEl = document.querySelector("#pass-box");
const totalCharEl = document.querySelector("#total-char");
const upperSetEl = document.querySelector("#upper-case");
const lowerSetEl = document.querySelector("#lower-case");
const numberSetEl = document.querySelector("#numbers");
const symbolSetEl = document.querySelector("#symbols");
const btnEl = document.querySelector("#btn");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];   
}

const generatePassword = (password = "") => {
    if(upperSetEl.checked) {
        password += getRandomData(upperSet);
    }
    if(lowerSetEl.checked) {
        password += getRandomData(lowerSet);
    }
    if(numberSetEl.checked) {
        password += getRandomData(numberSet);
    }
    if(symbolSetEl.checked) {
        password += getRandomData(symbolSet);
    }
    if(password.length < totalCharEl.value){
        return generatePassword(password);
    }
    passBoxEl.innerText = truncateString(password,totalCharEl.value);
}

btnEl.addEventListener("click",() => {
    generatePassword();
});

const truncateString = (str,num) => {
    if(str.length > num) {
        let subStr = str.subString(0, num);
        return subStr;
    }
    else {
        return str;
    }
}
