import { Image, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar'
import { RadioButton, TextInput } from 'react-native-paper'
import ProgressBar from '../../components/ProgressBar'

const LandPage1 = () => {

    const [checked, setChecked] = React.useState('first');



    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
         style={{ flex: 1 }}>
            <TopBar />

            <ProgressBar title="1/4"/>

            <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 5, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

            </View>

            <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 5, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 8 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

            </View>

            <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center' }}>

                <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                    <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../../assets/images/land.png')} />
                    <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                </View>

            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <TextInput
                    mode='outlined'
                    label='Property Title'
                    selectionColor='#9e9e9e'
                    activeOutlineColor='#9e9e9e'
                    style={{ fontWeight: 'bold' }}
                    outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
            </View>

            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#d3d3d3' }}>Transaction Type</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignContent: 'center', marginRight: 20 }}>
                    <RadioButton
                        value='first'
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')} />
                    <Text style={{ alignSelf: 'center' }}>Sell</Text>
                </View>

                <View style={{ flexDirection: 'row', alignContent: 'center', marginRight: 20 }}>
                    <RadioButton
                        value='second'
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')} />
                    <Text style={{ alignSelf: 'center' }}>Rent</Text>
                </View>

                <View style={{ flexDirection: 'row', alignContent: 'center', marginRight: 20 }}>
                    <RadioButton
                        value='third'
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')} />
                    <Text style={{ alignSelf: 'center' }}>Lease</Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        mode='outlined'
                        label='Price'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ width: 230, fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />

                    <TextInput
                        mode='outlined'
                        label='/Hr'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ width: 100, fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
                </View>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <TextInput
                        mode='outlined'
                        label='Build Area'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ width: 230, fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />

                    <TextInput
                        mode='outlined'
                        label='/Hr'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ width: 100, fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
                </View>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <TextInput
                        mode='outlined'
                        label='Plote Area'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ width: 230, fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />

                    <TextInput
                        mode='outlined'
                        label='/Hr'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ width: 100, fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
                </View>

                <View style={{marginBottom: 50, paddingVertical: 5}}>
                    <TextInput
                        mode='outlined'
                        label='Seating Capacity'
                        selectionColor='#9e9e9e'
                        activeOutlineColor='#9e9e9e'
                        style={{ fontWeight: 'bold' }}
                        outlineStyle={{ backgroundColor: '#fff', borderColor: '#d3d3d3' }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default LandPage1