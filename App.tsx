import React, { useState } from 'react'
import { Route, SafeAreaView, StatusBar } from 'react-native'
import { CollapsibleTabView } from 'react-native-collapsible-tab-view'
import { SceneMap } from 'react-native-tab-view'
import { gridIcon, horizontalIcon, userIcon } from './src/assets'
import { Feed } from './src/components/Feed/Feed'
import { FeedWithHorizontalScrolls } from './src/components/FeedWithHorizontalScrolls/FeedWithHorizontalScrolls'
import { Header } from './src/components/Header/Header'
import { Icon } from './src/components/Header/styled'
import { imagesFirstFeed } from './src/mocks/imagesFirstFeed'
import { imagesSecondFeed } from './src/mocks/imagesSecondFeed'

const FirstFeed = () => <Feed routeKey={'grid'} images={imagesFirstFeed}/>
const SecondFeed = () => <Feed routeKey={'user'} images={imagesSecondFeed} />
const ThirdFeed = () => <FeedWithHorizontalScrolls routeKey={'horizontal'} images1={imagesFirstFeed} images2={imagesSecondFeed}/>

const renderScene = SceneMap({
  grid: FirstFeed,
  user: SecondFeed,
  horizontal: ThirdFeed,
})

const App = () => {
  const [index, setIndex] = useState(0)

  const [routes] = React.useState<Route[]>([
    // { key: 'grid', title: 'Fotos' }, or
    { key: 'grid', icon: gridIcon },
    { key: 'user', icon: userIcon },
    { key: 'horizontal', icon: horizontalIcon }
  ])

  const handleIndexChange = (index: number) => {
    setIndex(index);
  }

  const renderIcon = ({ route, focused }) => (
    // <Icon source={{ uri: route.icon }} /> or
    <Icon source={route.icon} style={focused && { tintColor: '#0099ff'}} />
  )

  const tabBarProps = {
    style: {
      backgroundColor: 'white',
    }, 
    indicatorStyle: { 
      backgroundColor: '#0099ff',
    },
    renderIcon: renderIcon,
  }

  return (
    <CollapsibleTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      renderHeader={() => <Header/>}
      disableSnap
      tabBarProps={tabBarProps}
    />
  )
}

export default App
