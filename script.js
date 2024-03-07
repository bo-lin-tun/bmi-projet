const weightInput = document.getElementsByClassName("weightInput")[0];
const feetInput = document.getElementsByClassName("feetInput")[0];
const inchesInput = document.getElementsByClassName("inchesInput")[0];
const button = document.getElementsByClassName("btn")[0];
const answer = document.getElementsByClassName("answer")[0];
const first = document.getElementsByClassName("first")[0];
const second = document.getElementsByClassName("second")[0];
const third = document.getElementsByClassName("third")[0];

const myfunction = () => {
first.innerHTML="";
third.innerHTML="";
  second.innerHTML = "";
  const weight = parseInt(weightInput.value);
  const feet = parseInt(feetInput.value);
  const inches = parseInt(inchesInput.value);


  const tolalHeight = feet * 12 + inches;
  const height = parseInt(tolalHeight * tolalHeight);
  const BMI = 703 * (weight / parseInt(height));
  if (BMI < 18.4) {
    first.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည်");
    second.append("နည်း");
    second.style.color = "orange";
    third.append("နေပါသည်။");
  } else if (BMI >= 18.4 && BMI < 25) {
 first.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည်");
    second.append("ပုံမှန်");
third.append("ဖြစ်ပါသည်။");
    second.style.color = "green";
  } else if (BMI >= 25 && BMI <= 30) {
    first.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည်");
    second.append("များ");
third.append("နေပါသည်။");
    second.style.color = "orange";
  } else if (BMI > 30) {
    first.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည်");
    second.append("အလွန်များ");
third.append("နေပါသည်။");
    second.style.color = "red";
  }

};

button.addEventListener("click", myfunction);
