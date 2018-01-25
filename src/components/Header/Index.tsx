import * as React from 'react'
import { Menu, Icon } from 'antd'

interface Props {
  inputText: String
}

export default class HeaderComponent extends React.Component<Props, {}> {
  render() {
    return (
      <Menu mode="horizontal" theme="dark">
        <Menu.Item>Markdown Fiddle</Menu.Item>
        <Menu.Item disabled={true}>
          <Icon type="upload" />
          Upload
        </Menu.Item>
        <Menu.Item disabled={true}>
          <Icon type="download" />
          Download
        </Menu.Item>
        <Menu.Item disabled={true}>
          <Icon type="save" />
          Copy
        </Menu.Item>
        <Menu.Item key="github" style={{ float: 'right' }}>
          <Icon
            type="github"
            onClick={() => window.open('https://github.com/M-ZubairAhmed/markdown-fiddle', '_blank')}
          />
        </Menu.Item>
      </Menu>
    )
  }
}
