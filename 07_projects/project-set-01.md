# Projects related to DOM

## Project link: [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-uxaaqyjd?file=index.html)

# Solution code </>

## project 01:

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = `${this.id}`; // [cannot use 'this' with arrow function]
    // body.style.backgroundColor = `${button.id}`;
    // body.style.backgroundColor = `${e.target.id}`;
  });
});
```

## project 02:

```javascript
// const height = Number(document.querySelector("#height").textContent);
// const weight = Number(document.querySelector("#weight").textContent);
// [accessing the value before 'submit' will give empty value when page is loaded]

const form = document.querySelector('form');

function bmiCalculate(height, weight) {
  const BMI = weight / (height * height);
  return BMI.toFixed(1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); // [prevents form submitting]

  const height = Number(document.querySelector('#height').value); // ['value' because this is an input field]
  const weight = Number(document.querySelector('#weight').value); // ['value' because this is an input field]
  const heightInMeters = height / 100;
  const resultText = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    return (resultText.innerHTML = 'Please give a valid number');
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    return (resultText.innerHTML = 'Please give a valid number');
  }
  
  const result = bmiCalculate(heightInMeters, weight);
  resultText.innerHTML = result;
});
```

## project 03:

```javascript
const clockDisplay = document.getElementById('clock');

// run after every one second
setInterval(() => {
  const date = new Date();
  const localTime = date.toLocaleTimeString();
  const timeZone = date.toDateString();
  clockDisplay.innerText = `${timeZone}\n${localTime}`;
}, 1000);
```

## project 04:

```javascript

```