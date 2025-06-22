import { promises as fs } from 'fs'

export const storeData = async (fileName, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2)

    await fs.writeFile(fileName, jsonData)

    console.log(`Data stored successfully in ${fileName}`)
    return true
  } catch (err) {
    console.error('Error storing data: ', err)
    return false
  }
}

export const retrieveData = async fileName => {
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8')
    return JSON.parse(fileContent)
  } catch (err) {
    console.error('Error retrieving data: ', err)
  }
}
