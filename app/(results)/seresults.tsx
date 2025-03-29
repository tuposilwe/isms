import { View, Text } from 'react-native'
import React from 'react'
import useFilter from '@/hooks/useFilter';

const Seresults = () => {
  const { params } = useFilter();
  return (
    <View>
      <Text>seresults: {params.tab}</Text>
    </View>
  )
}

export default Seresults