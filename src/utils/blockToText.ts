import { IBlock } from "./UtilsInterfaces"
import TextRenderer from "./TextRenderer"
import BLOCKS from "./blocks"

const blockToText = (block: IBlock) => {
	console.log(block.type)
	console.log(block)
	switch (block.type) {
		case BLOCKS.PARAGRAPH:
			return TextRenderer(block.paragraph.rich_text)
		case BLOCKS.HEADING1:
			return TextRenderer(block.heading_1.rich_text)
		case BLOCKS.HEADING2:
			return TextRenderer(block.heading_2.rich_text)
		case BLOCKS.HEADING3:
			return TextRenderer(block.heading_3.rich_text)
		case BLOCKS.BULLETEDLISTITEM:
			return TextRenderer(block.bulleted_list_item.rich_text)
		case BLOCKS.NUMBEREDLISTITEM:
			return TextRenderer(block.numbered_list_item.rich_text)
		case BLOCKS.QUOTE:
			return TextRenderer(block.quote.rich_text)
		case BLOCKS.CODE:
			return TextRenderer(block.code.rich_text)
	}
}

export default blockToText
