import React from "react"
import BLOCKS from "./utils/blocks"
import { IBlock, RenderNode } from "./utils/UtilsInterfaces"
import { blockRenderer, blockToText, remapContent } from "./utils"

const defaultRenderers: RenderNode = {
	[BLOCKS.PARAGRAPH]: (block: IBlock) => <p>{blockToText(block)}</p>,
	[BLOCKS.HEADING1]: (block: IBlock) => <h1>{blockToText(block)}</h1>,
	[BLOCKS.HEADING2]: (block: IBlock) => <h2>{blockToText(block)}</h2>,
	[BLOCKS.HEADING3]: (block: IBlock) => <h3>{blockToText(block)}</h3>,
	[BLOCKS.BULLETEDLISTITEM]: (block: IBlock) => <li>{blockToText(block)}</li>,
	[BLOCKS.NUMBEREDLISTITEM]: (block: IBlock) => <li>{blockToText(block)}</li>,
	[BLOCKS.BULLETEDLIST]: (block: IBlock) => (
		<ul>
			{block.list.map((listItem) => blockRenderer(listItem, defaultRenderers))}
		</ul>
	),
	[BLOCKS.NUMBEREDLIST]: (block: IBlock) => (
		<ol>
			{block.list.map((listItem) => blockRenderer(listItem, defaultRenderers))}
		</ol>
	),
	[BLOCKS.QUOTE]: (block: IBlock) => (
		<blockquote>{blockToText(block)}</blockquote>
	),
	[BLOCKS.CODE]: (block: IBlock) => <code>{blockToText(block)}</code>,
	[BLOCKS.IMAGE]: (block: IBlock) => <img src={block.image.file.url} />,
	[BLOCKS.AUDIO]: (block) => (
		<audio controls preload='none' src={block.audio.file.url} />
	),
	[BLOCKS.VIDEO]: (block) => (
		<video controls preload='none' src={block.video.file.url} />
	),
	[BLOCKS.CALLOUT]: (block: IBlock) => <div>{blockToText(block)}</div>,
}

const blocksToReactComponents = (
	blockList: Array<IBlock>,
	renderers: RenderNode
) => {
	const remappedContent = remapContent(blockList)

	return React.Children.toArray(
		remappedContent.map((block: IBlock) => {
			return blockRenderer(block, renderers)
		})
	)
}

export default blocksToReactComponents
