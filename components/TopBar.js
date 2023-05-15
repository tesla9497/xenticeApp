import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class TopBar extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: 80, elevation: 1 }}>
                <View style={{ backgroundColor: '#fff', flex: 3, flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View style={{ alignSelf: 'center', paddingRight: 20 }}>
                        <TouchableOpacity>
                            <Image style={{ width: 38, height: 24, tintColor: '#003d80' }} source={require('../assets/images/menu.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginTop: -10 }}>
                        <Text style={{ color: '#0062cc', textAlign: 'left', fontSize: 42, fontWeight: '400' }}>xentice</Text>
                    </View>
                    <View style={{ borderRadius: 10, alignSelf: 'center' }}>
                        <Image style={{ width: 40, height: 40, alignSelf: 'flex-end' }} source={require('../assets/images/man.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

export default TopBar