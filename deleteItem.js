import { storeData, retrieveData } from './fileSystem.js'

export const deleteItem = async name => {
  try {
    const list = await retrieveData('item-rates.json')
    const newList = list.filter(item => item.name !== name)
    await storeData('item-rates.json', newList)
    console.log(`Successfully deleted ${name} from item-rates.json`)
  } catch (err) {
    console.error('Error deleting item: ', err)
  }
}

const itemName = process.argv[2]

deleteItem(itemName)
