import React from 'react'

const NotionRenderer = (blockList) => {
	return blockList.map((block) => {
		switch (block.type)
		{
			case 'paragraph':
				if (block.paragraph.text.length > 0)
				{
					return (
						<p key={ block.id }>
							{ block.paragraph.text.map((text) =>
								TextRenderer(text)
							) }
						</p>
					)
				} else
				{
					return <></>
				}

			case 'heading_1':
				return (
					<h1 key={ block.id }>
						{ block.heading_1.text.map((text) => TextRenderer(text)) }
					</h1>
				)

			case 'heading_2':
				return (
					<h2 key={ block.id }>
						{ block.heading_2.text.map((text) => TextRenderer(text)) }
					</h2>
				)
			case 'heading_3':
				return (
					<h3 key={ block.id }>
						{ block.heading_3.text.map((text) => TextRenderer(text)) }
					</h3>
				)
			case 'bulleted_list_item':
				return (
					<ul>
						<li key={ block.id }>
							{ block.bulleted_list_item.text.map((text) =>
								TextRenderer(text)
							) }
						</li>
					</ul>
				)
			case 'numbered_list_item':
				return (
					<ol>
						<li key={ block.id }>
							{ block.numbered_list_item.text.map((text) =>
								TextRenderer(text)
							) }
						</li>
					</ol>
				)
		}
	})
}


const TextRenderer = (text) => {
	if (text.href)
	{
		return <a href={ text.href }>{ text.text.content }</a>
	} else
	{
		return <span> { text.text.content }</span>
	}
}

module.exports = {
	TextRenderer: TextRenderer,
	default: NotionRenderer
}
