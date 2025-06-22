import { addItemRate } from './addItem.js'
import { deleteItem } from './deleteItem.js'

const editItem = async (name, amount, emeraldValue) => {
  try {
    await deleteItem(name)
    await addItemRate(name, amount, emeraldValue)
    console.log(`Successfully updated ${name} in item-rates.js`)
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
    "You did not provide all arguments, you should execute 'addItem.js <itemName> <itemAmound> <emeraldValue>' or the item does not exist"
  )
}
