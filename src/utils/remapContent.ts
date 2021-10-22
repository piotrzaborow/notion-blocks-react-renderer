import { IBlock } from "./UtilsInterfaces"

const remapContent = (content: Array<IBlock>) => {
	let result: Array<IBlock> = []
	const isNumberedListItem = (block: IBlock) =>
		block.type === "numbered_list_item"
	const isBulletedListItem = (block: IBlock) =>
		block.type === "bulleted_list_item"

	const createNumberedList = (index: number) => {
		let numbered: Array<IBlock | IBlock[]> = []

		numbered.push(content[index])
		if (isNumberedListItem(content[index + 1])) {
			numbered.push(createNumberedList(index + 1))
		}

		return numbered.flat()
	}

	const createBulletedList = (index: number) => {
		let bulleted: Array<IBlock | IBlock[]> = []

		bulleted.push(content[index])
		if (isBulletedListItem(content[index + 1])) {
			bulleted.push(createBulletedList(index + 1))
		}

		return bulleted.flat()
	}

	for (let index = 0; index < content.length - 1; index++) {
		const block = content[index]
		if (!isBulletedListItem(block) && !isNumberedListItem(block)) {
			result.push(block)
		}

		if (isNumberedListItem(block)) {
			const numbered = createNumberedList(index)

			result.push({
				has_children: true,
				type: "numbered_list",
				list: numbered,
			})

			index = index + numbered.length
		}

		if (isBulletedListItem(block)) {
			let bulleted = createBulletedList(index)

			result.push({
				has_children: true,
				type: "bulleted_list",
				list: bulleted,
			})
			index = index + bulleted.length
		}
	}

	return result
}

export default remapContent
