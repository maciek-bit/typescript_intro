
//Objects
const person: {
    name: string;
    age: number;
} = {
    name: "Maciej",
    age: 36
};

//Better notation. TS infers types from values
const person2 = {
    name: "Maciej",
    age: 36,
    hobbies: ["sport", "computers"]
};
//Arrays
console.log(person2.name);
for(let h of person2.hobbies){
    console.log(h.toUpperCase());
}

let newHobbies: string[];
newHobbies = ["ice-skating", "swimming"];
for(let h of newHobbies){
    console.log(h.toUpperCase());
}

//Tuples
let characteristics: [number, string, boolean];
characteristics = [1, "colour", false];
console.log(characteristics);

//Enums
enum Role {ADMIN, READER, WRITER};
console.log(Role.WRITER);