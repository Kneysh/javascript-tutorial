// select by ID
const paragraph = document.getElementById("para");

const innerHTML = paragraph.innerHTML;      // everything inside including inner HTML elements
const innerText = paragraph.innerText;      // only visible text
const textContent = paragraph.textContent;  // all the text

// console.log(innerHTML);     // This webpage is for <span class="display: none">DOM Manipulation</span>
// console.log(innerText);     // This webpage is for
// console.log(textContent);   // This webpage is for DOM Manipulation


// select by className
const boxes = document.getElementsByClassName("box");   // returns an HTML-collection [doesn't have any loop method]
const boxesArr = Array.from(boxes);    // converts to Array to use all the array methods


// select with querySelector() and querySelectorAll()   [can use all kinds of css selectors]
const boxOne = document.querySelector(".box");    // selects only the first element
const allBox = document.querySelectorAll(".box");   // selects all the elements with the class name and returns a NodeList [only has forEach()]


// create and set Attribute [overrides existing Attribute]
paragraph.setAttribute("class", "subtitle");    // [creates and sets a new attribute-node]

const att = document.createAttribute("class");
att.value = "title";
const h1 = document.querySelector("h1");
h1.setAttributeNode(att);   // [sets already created attribute-node]



// parent-child relation
const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);   // HTML collection of all the child elements
// console.log(parent.children[2].innerText);
// console.log(parent.childNodes);    // everything is a node
// console.log(parent.firstChild);    // first node (line-break => text node)
// console.log(parent.lastChild);     // last node (line-break => text node)
// console.log(parent.firstElementChild.innerText);    // first element
// console.log(parent.lastElementChild.innerText);     // last element

const dayOne = document.querySelector(".day");  // only selects the first ".day" element
// console.log(dayOne);
// console.log(dayOne.innerText);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextSibling);    // next node
// console.log(dayOne.nextElementSibling.innerText);    // next element



// create and append new elements
const newDiv = document.createElement("div");
newDiv.className = "js-created";
newDiv.setAttribute("id", "artificial");
newDiv.style.backgroundColor = "orange";
newDiv.style.padding = "30px";
newDiv.style.marginTop = "30px";
newDiv.style.textAlign = "center";
// newDiv.innerText = "Created by JavaScript";
const newDivText = document.createTextNode("Created by JavaScript");
newDiv.appendChild(newDivText);

document.body.appendChild(newDiv);



// Edit and Remove elements

// basic
function addLang(language) {
    li = document.createElement("li");
    li.innerHTML = `${language}`;
    document.querySelector("ul").appendChild(li);
}
addLang("Python");
addLang("Rust");

// optimised
function addLangOptimised(language) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(`${language}`));    // create text-node and append it as a child
    document.querySelector("ul").appendChild(li);
}
addLangOptimised("GoLang");
addLangOptimised("Java");


// Edit
const thirdLang = document.querySelector("li:nth-child(3)");
// console.log(thirdLang.textContent);

// [process 01]
thirdLang.innerHTML = "Kotlin"

// [process 02]
const lastLang = document.querySelector("li:last-child");
const newli = document.createElement("li");
newli.textContent = "Mojo";
lastLang.replaceWith(newli);

// [process 03]
document.querySelector("li:first-child").outerHTML = "<li>TypeScript</>";


// Remove
document.querySelector("li:nth-last-child(2)").remove();