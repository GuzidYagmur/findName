const names = [
    {
        id:1,
        name:"Yağmur"
    },
    {
        id:2,
        name:"Sevde"
    },
    {
        id:3,
        name:"Furkan"
    },
    {
        id:4,
        name:"Orhan"
    }
];

function findName(namesArray){
    const found = namesArray.find(name => name.name==="Yağmur");

    return found;
}

console.log(findName(names));
