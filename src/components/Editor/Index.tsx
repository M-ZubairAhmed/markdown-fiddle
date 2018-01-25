import * as React from 'react'
import { Input } from 'antd'
const { TextArea } = Input

interface Props {
  updateTextInPreviewer: (event: string) => void
}

const textareaStyle = {
  height: '98vh',
  padding: '10px',
  background: '#001529',
  color: '#e9e9e9',
  resize: 'none',
}

export default class Editor extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <TextArea
          style={textareaStyle}
          placeholder="Start writing your markdown...."
          onChange={e => this.props.updateTextInPreviewer(e.target.value)}
        />
      </div>
    )
  }
}
