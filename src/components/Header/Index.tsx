import * as React from 'react'
import { Menu, Icon } from 'antd'

export default class HeaderComponent extends React.Component<{}, {}> {
  render() {
    return (
      <Menu
        mode="horizontal"
        theme="dark"
        onClick={e => window.open('https://github.com/M-ZubairAhmed/markdown-fiddle', '_blank')}
      >
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
        <Menu.Item key="github" style={{ float: 'right' }} onClick={() => alert('a')}>
          <Icon type="github" />View on github
        </Menu.Item>
      </Menu>
    )
  }
}
