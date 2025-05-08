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

```

## project 03:

```javascript

```

## project 04:

```javascript

```