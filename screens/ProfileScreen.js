import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#870086'}}>
        <Header style={{backgroundColor: '#870086'}} />
        <Content >
          <Card  >
            <CardItem  >
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
                <Body >
                  <Text>Alejandro Fuentes</Text>
                  <Text note>Propietario de Thor</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg?cs=srgb&dl=abstract-abstract-expressionism-art-2505693.jpg&fm=jpg'}} style={{height: 300, width: null, flex: 1}}/>
              

            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>6 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Messages</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}