import { ReactElement } from "react"

export interface IBlock {
	object?: string
	id?: string
	type: string
	created_time?: string
	last_edited_time?: string
	has_children: boolean
	paragraph?: IBlockContent
	heading_1?: IBlockContent
	heading_2?: IBlockContent
	heading_3?: IBlockContent
	bulleted_list_item?: IBlockContent
	numbered_list_item?: IBlockContent
	quote?: IBlockContent
	code?: IBlockContent
	image?: IAsset
	audio?: IAsset
	video?: IAsset
	list?: Array<IBlock>
	children?: Array<IBlock>
}

interface IAsset {
	file: {
		url: string
	}
}

interface IBlockContent {
	text: Array<IRichText>
}

export interface IRichText {
	plain_text: string
	href?: string
	annotations: IAnnotation
	type: string
	text?: IText
}

interface IText {
	content: string
	link?: object
}

interface IAnnotation {
	bold: boolean
	italic: boolean
	strikethrough: boolean
	underline: boolean
	code: boolean
	color: string
}

export interface RenderNode {
	[k: string]: NodeRenderer
}

export interface NodeRenderer {
	(block?: IBlock, list?: Array<IBlock>): ReactElement
}
