import { getList } from './getFullList.js'

const getRate = async name => {
  try {
    const list = await getList()
    const item = list.filter(item => item.name === name)
    return console.log(`/clear @p ${item[0].name} ${item[0].amount}
      /give @p ${item[0].name} ${item[0].emeraldValue}`)
  } catch (err) {
    console.err(`Error getting ${name} from item-rates.js`)
  }
}

const name = process.argv[2]

if (name) {
  getRate(name)
} else {
  console.log('This item does not exist.')
}
