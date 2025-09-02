// forEach(callbackfn)
// built-in iterator method for arrays
// not applicable for Object
// not applicable for String

const friends = ["Neha", "Aditya", "Ruhan", "Joy", "Ruhi", "Tanwi"];

friends.forEach((item) => {
    // console.log(item);
})

const map = new Map();
map.set("Nh", "Neha");
map.set("Ad", "Aditya");
map.set("Rhn", "Ruhan");
map.set("Rh", "Ruhi");
map.set("Tn", "Tanwi");
map.set("Joy", "Joy");

map.forEach((key, value) => {
    // console.log(key, ": ", value);
})


// most use-case
const languages = [
    {
        langName: "Python",
        fileExtension: ".py"
    },
    {
        langName: "JavaScript",
        fileExtension: ".js"
    },
    {
        langName: "C++",
        fileExtension: ".cpp"
    },
    {
        langName: "Kotlin",
        fileExtension: ".kt"
    }
]

languages.forEach((language) => {
    const {langName: name} = language;  // object destructuring
    const {fileExtension: ext} = language;  // object destructuring
    
    console.log(`The file extension for ${name} is '${ext}'`);
})