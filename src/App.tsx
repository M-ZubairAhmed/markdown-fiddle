import * as React from 'react'
import { Layout, Row, Col } from 'antd'
const { Header, Content } = Layout

import HeaderComponent from './components/Header/Index'
import Editor from './components/Editor/Index'
import Previewer from './components/Previewer/Index'

interface State {
  inputText: string
}

const contentStyles = {
  margin: 10,
}

export default class App extends React.Component<{}, State> {
  state: State = {
    inputText: '',
  }

  updateTextInPreviewer = (changedText: string) => {
    this.setState({
      inputText: changedText,
    })
  }

  render() {
    return (
      <Layout>
        <Layout>
          <Header>
            <HeaderComponent />
          </Header>
          <Content style={contentStyles}>
            <Row gutter={8}>
              <Col md={24} lg={12}>
                <Editor updateTextInPreviewer={this.updateTextInPreviewer} />
              </Col>
              <Col md={24} lg={12}>
                <Previewer inputText={this.state.inputText} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
