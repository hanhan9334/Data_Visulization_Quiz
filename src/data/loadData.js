import { json } from "d3"

export const loadData = async (fileName) => {
	const data = await json(`${fileName}.json`)

	// Have a look at the attributes available in the console!
	console.log(data[0])

	return data
}
