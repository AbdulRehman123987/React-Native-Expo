import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href="/about">Go to Abbout</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})