import * as React from 'react'
import { Layout, Row, Col } from 'antd'
import Editor from './components/Editor/Index'
import Previewer from './components/Previewer/Index'

const { Header, Content } = Layout

interface State {
  inputText: string
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
          <Header>as</Header>
          <Content>
            <Row>
              <Col span={12}>
                <Editor updateTextInPreviewer={this.updateTextInPreviewer} />
              </Col>
              <Col span={12}>
                <Previewer inputText={this.state.inputText} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
