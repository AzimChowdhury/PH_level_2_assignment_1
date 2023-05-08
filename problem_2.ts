interface person {
    name: string,
    age: number
}

function filter(input: person[]): person[] {
    const newArray: person[] = [];
    input.map(obj => obj.age >= 18 && newArray.push(obj))
    return newArray;
}

const arrayOfPersons: person[] = [
    { name: 'person1', age: 50 },
    { name: 'person2', age: 20 },
    { name: 'person3', age: 11 },
    { name: 'person4', age: 14 },
    { name: 'person5', age: 18 }
]


const result =  filter(arrayOfPersons);
console.log(result);