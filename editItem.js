import { storeData, retrieveData } from './fileSystem.js'
import { addItemRate } from './addItem.js'

const editItem = async (name, amount, emeraldValue) => {
  try {
    const list = await retrieveData('item-rates.json')
    const newList = list.filter(item => item.name !== name)
    await storeData('item-rates.json', newList)
    await addItemRate(name, amount, emeraldValue)
  } catch (err) {
    console.error('Error trying to edit item: ', err)
  }
}

const itemName = process.argv[2]
const itemAmount = process.argv[3]
const emeraldValue = process.argv[4]

if (itemName && itemAmount && emeraldValue) {
  if (isNaN(itemAmount)) {
    console.log('Item value should be a number!')
  } else if (isNaN(emeraldValue)) {
    console.log('Emerald value should be a number!')
  } else {
    editItem(itemName, itemAmount, emeraldValue)
  }
} else {
  console.log(
    "You did not provide all arguments, you should execute 'addItem.js <itemName> <itemAmound> <emeraldValue>'"
  )
}
