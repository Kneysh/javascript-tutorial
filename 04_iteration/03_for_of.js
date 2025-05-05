// for-of
// not applicable for Object

const friends = ["Neha", "Aditya", "Ruhan", "Joy", "Ruhi", "Tanwi"];

for (const friend of friends) {
    // console.log(friend);
}

for (const char of "Neha") {
    // console.log(char);
}

const map = new Map();
map.set("Nh", "Neha");
map.set("Ad", "Aditya");
map.set("Rhn", "Ruhan");
map.set("Rh", "Ruhi");
map.set("Tn", "Tanwi");
map.set("Joy", "Joy");

for (const key of map) {
    // console.log(key);   // array of [ key, value ] pair
}
for (const [key, value] of map) {
    // console.log(key, ": ", value);
}