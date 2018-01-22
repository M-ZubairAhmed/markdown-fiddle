import * as React from 'react';

interface Props {
  inputText: string;
}

const rootStyle = {
  height: '98vh',
  padding: '10px',
  background: '#fff',
  margin: '5px',
  borderRadius: '5px',
};

export default class Editor extends React.Component<Props, {}> {
  render() {
    return <div style={rootStyle}>{this.props.inputText}</div>;
  }
}
