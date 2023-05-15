import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import TopBar from '../../components/TopBar'
import ProgressBar from '../../components/ProgressBar'
import { TextInput } from 'react-native-paper'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const LandPage2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <ProgressBar title="3/4" />

      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <TextInput
          mode='outlined'
          label='India'
          style={{ fontWeight: 'bold' }}
          outlineStyle={{ backgroundColor: '#9e9e9e', borderColor: '#d3d3d3' }} />
      </View>

      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <TextInput
          mode='outlined'
          label='City'
          selectionColor='#9e9e9e'
          activeOutlineColor='#9e9e9e'
          style={{ fontWeight: 'bold' }}
          outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
      </View>

      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <TextInput
          mode='outlined'
          label='Locality'
          selectionColor='#9e9e9e'
          activeOutlineColor='#9e9e9e'
          style={{ fontWeight: 'bold' }}
          outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
      </View>

      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <TextInput
          mode='outlined'
          label='Street'
          selectionColor='#9e9e9e'
          activeOutlineColor='#9e9e9e'
          style={{ fontWeight: 'bold' }}
          outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
      </View>

      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: 220}}
        region={{
          latitude: 9.931233,
          longitude: 76.267303,
          latitudeDelta: 0,
          longitudeDelta: 0.4,
        }}>
          <Marker
  coordinate={{latitude: 9.931233, longitude: 76.267303}}
/>
        </MapView>
      </View>

      <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
        <TouchableHighlight style={{width: 140, height: 40, backgroundColor: '#fff', borderWidth: 1, borderColor: '#003166', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 16, color: '#003166', fontWeight: 'bold'}}>Back</Text>
        </TouchableHighlight>

        <TouchableHighlight style={{width: 140, height: 40, backgroundColor: '#003166', borderWidth: 1, borderColor: '#00254D', borderRadius: 5 , alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Continue</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

export default LandPage2