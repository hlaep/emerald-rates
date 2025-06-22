import { retrieveData } from './fileSystem.js'

export const getList = async () => {
  try {
    const list = await retrieveData('item-rates.json')
    console.log(list)
    return list
  } catch (err) {
    console.error('Error trying to show the list: ', err)
  }
}

getList()
