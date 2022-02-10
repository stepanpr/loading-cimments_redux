const faker = require('faker')

const generateComments = (amount, cursor) => {
  const generateIdArray = (len) => {
    const arr = []
    for (let i = 0; i < len; i++) {
      arr.push(faker.datatype.uuid())
    }
    return arr
  }
  const idArray = generateIdArray(amount) /* генерация массива id */

  const getRandomParentId = (index) => {
    const randomId = Math.floor(Math.random() * amount)
    const parentId = idArray[randomId]
    if (index < randomId) {
      //если индекс родительского комментария в массиве больше чем индекс дочернего комментария, то return null
      return null
    }
    if (idArray[index] === parentId) {
      //если ID комментария равен рандомно выбранному комментарию, то возвразщаем null, так как комментарий не может быть родителем самого себя
      return null
    }
    return parentId
  }

  const commentsMaker = () => {
    const result = []
    for (let i = 0; i < amount; ++i) {
      result.push({
        id: idArray[i],
        parentId: getRandomParentId(i),
        user: faker.name.findName(),
        text: faker.lorem.text(),
      })
    }
    return result
  }

  return commentsMaker()
}

module.exports = generateComments