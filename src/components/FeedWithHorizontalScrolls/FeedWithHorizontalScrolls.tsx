import React from 'react'
import { Animated } from 'react-native'
import { useCollapsibleScene } from 'react-native-collapsible-tab-view'
import { Photo, Title } from './styled'

interface FeedWithHorizontalScrollsProps {
  routeKey: string
  images1: { key: number, image: string }[]
  images2: { key: number, image: string }[]
}

export const FeedWithHorizontalScrolls: React.FC<FeedWithHorizontalScrollsProps> = ({ routeKey, images1, images2 }) => {
  const scrollPropsAndRef = useCollapsibleScene(routeKey)

  const renderItem = ({ item }) => {
    return (
      <Photo source={{ uri: item.image }} />
    )
  }

  return (
    <Animated.ScrollView
    {...scrollPropsAndRef}
    >
      <Title>With ScrollView:</Title>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {images1.map(({ image }) => (
          <Photo source={{ uri: image }} />
        ))}
      </Animated.ScrollView>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {images2.map(({ image }) => (
          <Photo source={{ uri: image }} />
        ))}
      </Animated.ScrollView>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {images2.map(({ image }) => (
          <Photo source={{ uri: image }} />
        ))}
      </Animated.ScrollView>

      <Title>With FlatList:</Title>
      <Animated.FlatList
        horizontal
        data={images1}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      <Animated.FlatList
        horizontal
        data={images2}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
            <Animated.FlatList
        horizontal
        data={images2}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </Animated.ScrollView>
  )
}