import { IBlock } from "./UtilsInterfaces"
import TextRenderer from "./TextRenderer"
import BLOCKS from "./blocks"

const blockToText = (block: IBlock) => {
	switch (block.type) {
		case BLOCKS.PARAGRAPH:
			return TextRenderer(block.paragraph.text)
		case BLOCKS.HEADING1:
			return TextRenderer(block.heading_1.text)
		case BLOCKS.HEADING2:
			return TextRenderer(block.heading_2.text)
		case BLOCKS.HEADING3:
			return TextRenderer(block.heading_3.text)
		case BLOCKS.BULLETEDLISTITEM:
			return TextRenderer(block.bulleted_list_item.text)
		case BLOCKS.NUMBEREDLISTITEM:
			return TextRenderer(block.numbered_list_item.text)
		case BLOCKS.QUOTE:
			return TextRenderer(block.quote.text)
		case BLOCKS.CODE:
			return TextRenderer(block.code.text)
	}
}

export default blockToText
