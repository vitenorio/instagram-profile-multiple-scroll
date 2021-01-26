import { Image, Text } from 'react-native'
import styled from 'styled-components'

export const Photo = styled(Image)`
  width: 140px;
  height: 140px;
  margin: 16px;
  border-radius: 4px;
`
export const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: #1a1a1a;
  margin: 24px;
`