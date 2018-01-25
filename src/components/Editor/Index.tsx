import * as React from "react"
import { Input } from "antd"

interface Props {
  updateTextInPreviewer: (event: any) => void
}

const { TextArea } = Input
const textareaStyle = {
  height: "98vh",
  padding: "10px",
  background: "#3d455c",
  color: "#e9e9e9",
  margin: "5px",
  resize: "none",
}

export default class Editor extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <TextArea
          style={textareaStyle}
          onChange={e => this.props.updateTextInPreviewer(e.target.value)}
        />
      </div>
    )
  }
}
