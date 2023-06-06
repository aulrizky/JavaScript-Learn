const map = new Map();
map.set("name", "aul1");
map.set("job","warrior");

console.info(map);
console.info(map.get("name"));
console.info(map.get("job"));

// for (const element of map){
//     console.info(element);
// }

map.forEach((value,key) => console.info(`${key}:${value}`));