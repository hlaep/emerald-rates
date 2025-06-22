import { storeData, retrieveData } from './fileSystem.js'

const addItemRate = async (name, amount, emeraldValue) => {
  try {
    const items = await retrieveData('item-rates.json')
    const updatedItems = [...items, { name, amount, emeraldValue }]
    await storeData('item-rates.json', updatedItems)
  } catch (err) {
    console.error('Error trying to add a new item rate: ', err)
  }
}

const itemName = process.argv[2]
const itemAmount = process.argv[3]
const emeraldValue = process.argv[4]

if (itemName && itemAmount && emeraldValue) {
  if (isNaN(itemAmount)) {
    console.log('Item value should be a number!')
  } else if (isNaN(emeraldValue)) {
    console.log('Value should be a number!')
  } else {
    addItemRate(itemName, itemAmount, emeraldValue)
  }
} else {
  console.log(
    "You did not provide all arguments, you should execute 'addItem.js <itemName> <itemAmound> <emeraldValue>'"
  )
}
