import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components'

export const HeaderContainer = styled(View)`
  padding: 16px;
`

export const Icon = styled(Image)`
  width: 16px;
  height: 16px;
`

export const Avatar = styled(Image)`
  width: 84px;
  height: 84px;
  border-radius: 100px;
`

export const CenterContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  align-self: center;
`

export const CounterContainer = styled(View)`
  flex-direction: column; 
`

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: #1a1a1a;
`

export const TitleContainer = styled(View)`
  margin: 8px 16px;
  align-items: center;
`

export const NameContainer = styled(View)`
  flex-direction: row;
  align-self: flex-start;
  margin: 8px 16px;
`

export const Button = styled(TouchableOpacity)`
  width: 350px;
  margin: 8px 16px;
  padding: 4px;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`