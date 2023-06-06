const person = {
    name: "'John'",
    className: "'Warrior'",
    jobName: "Juggernauts",
    exp : 9000,
    location: {
        server_id: 30,
        server_name: "Azzule"
    }

}

const json = JSON.stringify(person);
console.info(json);
const ObjectJson = JSON.parse(json);
console.info(ObjectJson);
