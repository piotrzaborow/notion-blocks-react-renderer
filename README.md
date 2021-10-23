# Notion-React-Renderer

React Renderer for @notionhq/client blocks

## How to install?

```
npm install notion-blocks-react-renderer
```

## How to use Notion React Renderer?

```

import { blocksToReactComponents } from 'notion-blocks-react-renderer'

const Component = () => {
    const [blocks, setBlocks] = useState([])
    useEffect(() => {
        const blocks = fetchFromNotionAPI()
    },[])

    return <>
        {blocksToReactComponents(blocks)}
    </>
}
```

You can add your own renderers (Components) for Notion Blocks by creating new object and passing it to `blocksToReactComponents` function as a second parameter:

```
import { blockToText, blocksToReactComponents, BLOCKS, blockRenderer } from 'notion-blocks-react-renderer'

const renderers = {
    [BLOCKS.PARAGRAPH]: (block) => <p>{ blockToText(block) }</p>,
    [BLOCKS.HEADING1]: (block) => <h1>{ blockToText(block) }</h1>,
    [BLOCKS.HEADING2]: (block) => <h2>{ blockToText(block) }</h2>,
    [BLOCKS.HEADING3]: (block) => <h3>{ blockToText(block) }</h3>,
    [BLOCKS.BULLETEDLISTITEM]: (block) => <li>{ blockToText(block) }</li>,
    [BLOCKS.BULLETEDLIST]: (block) => <ul>{ block.list.map((listItem) => blockRenderer(listItem, renderers)) }</ul>,
    [BLOCKS.NUMBEREDLISTITEM]: (block) => <li>{ blockToText(block) }</li>,
    [BLOCKS.NUMBEREDLIST]: (block) => <ol>{ block.list.map((listItem) => blockRenderer(listItem, renderers)) }</ol>,
    [BLOCKS.QUOTE]: (block) => <blockquote>{ blockToText(block) }</blockquote>,
    [BLOCKS.CODE]: (block) => <code>{ blockToText(block) }</code>,
    [BLOCKS.IMAGE]: (block) => <img src={ block.image.file.url } />,
    [BLOCKS.AUDIO]: (block) => <audio controls preload='none' src={ block.audio.file.url } />
}

const Component = () => {
    const [blocks, setBlocks] = useState([])
    useEffect(() => {
        const blocks = fetchFromNotionAPI()
    },[])

    return <>
        {blocksToReactComponents(blocks, renderers)}
    </>
}

```
