import { IBlock, RenderNode } from "./UtilsInterfaces"

const blockRenderer = (block: IBlock, renderers?: RenderNode) => {
	return renderers[block.type](block)
}

export default blockRenderer
