import { appendKeyToElement } from "./appendKeyToElement"
import BLOCKS from "./blocks"
import { IBlock, RenderNode } from "./UtilsInterfaces"

const blockRenderer = (block: IBlock, renderers?: RenderNode) => {
	switch (block.type) {
		case BLOCKS.PARAGRAPH:
			return appendKeyToElement(renderers[BLOCKS.PARAGRAPH](block), block.id)
		case BLOCKS.HEADING1:
			return appendKeyToElement(renderers[BLOCKS.HEADING1](block), block.id)
		case BLOCKS.HEADING2:
			return appendKeyToElement(renderers[BLOCKS.HEADING2](block), block.id)
		case BLOCKS.HEADING3:
			return appendKeyToElement(renderers[BLOCKS.HEADING3](block), block.id)
		case BLOCKS.BULLETEDLISTITEM:
			return appendKeyToElement(
				renderers[BLOCKS.BULLETEDLISTITEM](block),
				block.id
			)
		case BLOCKS.NUMBEREDLISTITEM:
			return appendKeyToElement(
				renderers[BLOCKS.NUMBEREDLISTITEM](block),
				block.id
			)
		case BLOCKS.BULLETEDLIST:
			return appendKeyToElement(renderers[BLOCKS.BULLETEDLIST](block), block.id)
		case BLOCKS.NUMBEREDLIST:
			return appendKeyToElement(renderers[BLOCKS.NUMBEREDLIST](block), block.id)
		case BLOCKS.QUOTE:
			return appendKeyToElement(renderers[BLOCKS.QUOTE](block), block.id)
		case BLOCKS.CODE:
			return appendKeyToElement(renderers[BLOCKS.CODE](block), block.id)
		case BLOCKS.IMAGE:
			return appendKeyToElement(renderers[BLOCKS.IMAGE](block), block.id)
	}
}

export default blockRenderer
