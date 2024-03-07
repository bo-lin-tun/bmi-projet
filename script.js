const weightInput = document.getElementsByClassName("weightInput")[0];
const feetInput = document.getElementsByClassName("feetInput")[0];
const inchesInput = document.getElementsByClassName("inchesInput")[0];
const button = document.getElementsByClassName("btn")[0];
const answer = document.getElementsByClassName("answer")[0];

const myfunction = () => {
  answer.innerHTML = "";
  const weight = parseInt(weightInput.value);
  const feet = parseInt(feetInput.value);
  const inches = parseInt(inchesInput.value);
  const tolalHeight = feet * 12 + inches;
  const height = parseInt(tolalHeight * tolalHeight);
  const BMI = 703 * (weight / parseInt(height));
  if (BMI < 18.4) {
    answer.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည်  နည်း နေပါသည်။");
    answer.style.color = "#FFC374";
  } else if (BMI >= 18.4 && BMI < 25) {
    answer.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည် ပုံမှန် ဖြစ်ပါသည်။");
  } else if (BMI >= 25 && BMI <= 30) {
    answer.style.color = "#FFC374";
    answer.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန် များ နေပါသည်။");
  } else if (BMI > 30) {
    answer.style.color = "red";
    answer.append("လူကြီးမင်း၏ ကိုယ်အလေးချိန်သည် အလွန်များ နေပါသည်။");
  }
};

button.addEventListener("click", myfunction);
