const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'Chewbacca', species: 'Wookiee' }
]

const humanCharacters = []

for (let i = 0; i < characters.length; i++) {
  if (characters[i].species === 'Human') {
    humanCharacters.push(characters[i])
  }
}

console.log(humanCharacters)
