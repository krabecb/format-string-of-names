function list(names){
  let namesList = []
  if(names.length === 0) return ''
  if(names.length === 1) {
    namesList.push(names[0].name)
    return namesList.toString()
  }
  for(let i = 0; i < names.length; i++) {
    if(i === names.length - 1) {
      namesList.push(names[i].name)
    } else if(i === names.length - 2) {
      namesList.push(`${names[i].name} `)
    } else if(names.length === 1) {
      namesList.push(names[i].name)
      return namesList
    } else {
      namesList.push(`${names[i].name}, `)
    }
  }
  namesList.splice(namesList.length - 1, 0, "& ")
  return namesList.join('')
}