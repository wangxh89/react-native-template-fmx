import React from 'react';
import {Content, Button, Container} from '@ztesoft/fmx';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
            <Button rounded info style={{marginTop: 20, alignSelf:'center'}} >welcome to fmx</Button>
        </Content>
      </Container>
    );
  }
}