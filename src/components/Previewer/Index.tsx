import * as React from 'react'
import * as marked from 'marked'

interface Props {
  inputText: string
}

const rootStyle = {
  height: '98vh',
  padding: '10px',
  background: '#fff',
  borderRadius: '5px',
}
const markedOptions = {
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: true,
  smartypants: false,
}

export default class Editor extends React.Component<Props, {}> {
  render() {
    return (
      <div style={rootStyle}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(this.props.inputText, markedOptions),
          }}
        />
      </div>
    )
  }
}
