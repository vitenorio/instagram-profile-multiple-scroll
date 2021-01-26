import React from 'react'
import { Text } from 'react-native'
import { Avatar, Button, CenterContainer, CounterContainer, HeaderContainer, NameContainer, Title, TitleContainer } from './styled'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    // IMPORTANT: set pointerEvents="none" to allow scroll on header
    <HeaderContainer pointerEvents="none">
      <CenterContainer>
        <Avatar source={{ uri: `https://avatars3.githubusercontent.com/u/37668315?v=4` }} />
        <CounterContainer>
          <CenterContainer>
            <TitleContainer>
              <Title>180</Title>
              <Text>posts</Text>
            </TitleContainer>
            <TitleContainer>
              <Title>130</Title>
              <Text>followers</Text>
            </TitleContainer>
            <TitleContainer>
              <Title>200</Title>
              <Text>following</Text>
            </TitleContainer>
          </CenterContainer>
        </CounterContainer>
      </CenterContainer>

      <NameContainer>
        <Title>Vitória Tenório</Title>
      </NameContainer>
      <CenterContainer>
        <Button onPress={() => {}}>
          <Text>Edit Profile</Text>
        </Button>
      </CenterContainer>
    </HeaderContainer>
  )
}