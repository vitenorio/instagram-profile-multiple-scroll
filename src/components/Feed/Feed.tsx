import React from 'react'
import { Animated } from 'react-native'
import { useCollapsibleScene } from 'react-native-collapsible-tab-view'
import { Photo } from './styled'

interface FeedProps {
  routeKey: string
  images: { key: number, image: string }[]
}

export const Feed: React.FC<FeedProps> = ({ routeKey, images }) => {
  const scrollPropsAndRef = useCollapsibleScene(routeKey)

  const renderItem = ({ item }) => {
    return (
      <Photo source={{ uri: item.image }} />
    )
  }

  return (
    <Animated.FlatList
      data={images}
      renderItem={renderItem}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      {...scrollPropsAndRef}
    />
  )
}