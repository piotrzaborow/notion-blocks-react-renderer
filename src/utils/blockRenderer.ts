import { appendKeyToElement } from "./appendKeyToElement"
import { IBlock, RenderNode } from "./UtilsInterfaces"

const blockRenderer = (block: IBlock, renderers?: RenderNode) => {
	// console.log(block.type)
	return appendKeyToElement(renderers[block.type](block), block.id)
}

export default blockRenderer
