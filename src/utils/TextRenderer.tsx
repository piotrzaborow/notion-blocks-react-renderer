import React from "react"
import { IRichText } from "./UtilsInterfaces"

const mapAnnotations = (textItem:IRichText) => {
	const { bold, italic, underline, code, strikethrough } = textItem.annotations

	if(bold && italic && underline && strikethrough){
		return <b><i><u><del>{textItem.text.content}</del></u></i></b>
	}
	else if(bold && italic && underline){
		return <b><i><u>{textItem.text.content}</u></i></b>
	}
	else if(bold && italic && strikethrough){
		return <b><i><del>{textItem.text.content}</del></i></b>
	}
	else if(bold && underline && strikethrough){
		return <b><u><del>{textItem.text.content}</del></u></b>
	}
	else if(italic && underline && strikethrough){
		return <i><u><del>{textItem.text.content}</del></u></i>
	}
	else if(bold && italic){
		return <b><i>{textItem.text.content}</i></b>
	}
	else if(bold && underline){
		return <b><u>{textItem.text.content}</u></b>
	}
	else if(bold && strikethrough){
		return <b><del>{textItem.text.content}</del></b>
	}
	else if(italic && underline){
		return <i><u>{textItem.text.content}</u></i>
	}
	else if(italic && strikethrough){
		return <i><del>{textItem.text.content}</del></i>
	}
	else if(underline && strikethrough){
		return <u><del>{textItem.text.content}</del></u>
	}
	else if(bold){
		return <b>{textItem.text.content}</b>
	}
	else if(italic){
		return <i>{textItem.text.content}</i>
	}
	else if(underline){
		return <u>{textItem.text.content}</u>
	}
	else if(strikethrough){
		return <del>{textItem.text.content}</del>
	}
	else if(code){
		return <code>{textItem.text.content}</code>
	}
	else{
		return <span>{textItem.text.content}</span>
	}
}

const TextRenderer = (text: Array<IRichText>) => {
	return React.Children.toArray(
		text.map((textItem) => {

			if (textItem.href) {
				return <a href={textItem.href}>{textItem.text.content}</a>
			}
			else {
				return mapAnnotations(textItem)	
			}
		})
	)
}

export default TextRenderer
