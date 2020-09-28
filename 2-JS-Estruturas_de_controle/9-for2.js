const grade = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i in grade) {
    console.log(`The index is [${i}] and your value is = ${grade[i]}`)
}

const people = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    weight: 64
}

for (attribute in people) {
    console.log(`Key and Attribute: ${attribute} = ${people[attribute]}`)
} 