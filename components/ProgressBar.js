import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class ProgressBar extends Component {

    static defaultprops = {
        title: "1/4"
    }

    render() {
        return (
            <View style={{ width: '100%', height: 70, flexDirection: 'row', paddingHorizontal: 40, backgroundColor: '#d3d3d3', alignItems: 'center', marginBottom: 10, elevation: 1}}>
                <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>{this.props.title}</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Property</Text>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#000' }}>Progress Details </Text>
                </View>
            </View>
        )
    }
}

export default ProgressBar