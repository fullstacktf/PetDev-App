import React, { Component } from "react";
import { Container, Header, Content, Accordion, View, Fab, Button, Icon } from "native-base";
const dataArray = [
  { title: "Message from Sara", content: "Gracias por tu tiempo!!" },
  { title: "Message from Carlos", content: "Recomendado al 100%" },
  { title: "Message from Bea", content: "El mejor cuidador de todos!!" }
];
export default class AccordionIconExample extends Component {
  render() {
    return (
      
      <Container style={{backgroundColor: '#870086'}}>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} icon="add" headerStyle style={{backgroundColor: '#f3b9fa'}} expandedIcon="remove" />
        </Content>
      </Container>
    );
  }
  
}  

