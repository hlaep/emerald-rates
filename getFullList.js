import { retrieveData } from './fileSystem.js'

const showList = async () => {
  try {
    const list = await retrieveData('item-rates.json')
    console.log(list)
  } catch (err) {
    console.error('Error trying to show the list: ', err)
  }
}

showList()
