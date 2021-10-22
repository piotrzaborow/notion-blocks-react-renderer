import React from "react"
import { IRichText } from "./UtilsInterfaces"

const TextRenderer = (text: Array<IRichText>) => {
	return text.map((textItem) => {
		if (textItem.href) {
			return <a href={textItem.href}>{textItem.text.content}</a>
		} else {
			return <span> {textItem.text.content}</span>
		}
	})
}

export default TextRenderer
