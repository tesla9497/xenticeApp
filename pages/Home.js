import React, { Component } from "react"
import { View, Text, Image, ImageBackground, ScrollView, TextInput, FlatList } from 'react-native'
import TopBar from "../components/TopBar"


export default class Home extends Component {

    state = {
        data: [],
    };


    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("http://api.xentice.com/api/postadSelect");
        const json = await response.json();
        this.setState({ data: json });
        console.log("responces : ", response);
    };

    render() {
        return (
            <ScrollView style={{ flex: 1 }} s>
                <TopBar />

                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{
                        width: '100%', height: 40, flexDirection: 'row', borderRadius: 5,
                        borderWidth: 1, borderColor: '#d3d3d3', alignItems: 'center', paddingHorizontal: 20
                    }}>
                        <Image style={{ tintColor: '#9e9e9e' }} source={require('../assets/images/search.png')} />
                        <TextInput
                            style={{ paddingHorizontal: 20 }}
                            placeholder="Search"
                            placeholderTextColor={'#9e9e9e'}
                            selectionColor={'#7f7f7f'} />
                    </View>
                </View>

                <View style={{ width: '100%', height: 50, flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', elevation: 1, borderWidth: 0.5, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                        <Text style={{ fontWeight: 'bold', marginTop: -1, color: '#000', paddingHorizontal: 20, paddingVertical: 5 }}>Property</Text>
                    </View>

                    <View style={{ width: 80, height: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                        <Text style={{ fontWeight: 'bold', marginTop: -1 }}>Sevices</Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingHorizontal: 20 }}>

                    <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 5 }}>
                        <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../assets/images/land.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                    </View>

                    <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 5 }}>
                        <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../assets/images/land.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                    </View>

                    <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 5 }}>
                        <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../assets/images/land.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                    </View>

                    <View style={{ width: 75, height: 75, backgroundColor: '#fff', elevation: 1, borderWidth: 0.8, borderColor: '#d3d3d3', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 2, margin: 5 }}>
                        <Image style={{ width: 38, height: 38, tintColor: '#51515f' }} source={require('../assets/images/land.png')} />
                        <Text style={{ fontSize: 12, textAlign: 'center', fontWeight: '700', padding: 2 }}>Industrial land</Text>
                    </View>

                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Commercial Office</Text>
                    <Text style={{ color: '#9e9e9e', alignSelf: 'flex-end' }}>see all</Text>
                </View>

                <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginVertical: 10 }}>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) =>

                            <View style={{ width: 170, height: 160, borderRadius: 5, backgroundColor: '#fff', elevation: 1, margin: 5 }}>
                                <View>
                                    <ImageBackground style={{ width: 170, height: 100 }} imageStyle={{ borderRadius: 5 }} source={require('../assets/images/plote.jpeg')}>
                                        <View style={{ width: 24, height: 24, borderRadius: 12, alignSelf: 'flex-end', margin: 5, backgroundColor: '#bebebe', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image style={{ width: 16, height: 16, tintColor: '#fff' }} source={require('../assets/images/favorite.png')} />
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>{item.details.title}</Text>
                                        <Text style={{ fontSize: 12, color: '#D0312D', fontWeight: 'bold' }}>Rs.250000</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center' }}>
                                        <Image style={{ width: 24, height: 24, tintColor: '#4caf50' }} source={require('../assets/images/location.png')} />
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000' }}>{item.location.city}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />

                </View>


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Commercial Office</Text>
                    <Text style={{ color: '#9e9e9e', alignSelf: 'flex-end' }}>see all</Text>
                </View>

                <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginVertical: 10 }}>



                    <View style={{ width: 170, height: 160, borderRadius: 5, backgroundColor: '#fff', elevation: 1, margin: 5 }}>
                        <View>
                            <ImageBackground style={{ width: 170, height: 100 }} imageStyle={{ borderRadius: 5 }} source={require('../assets/images/plote.jpeg')}>
                                <View style={{ width: 24, height: 24, borderRadius: 12, alignSelf: 'flex-end', margin: 5, backgroundColor: '#bebebe', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ width: 16, height: 16, tintColor: '#fff' }} source={require('../assets/images/favorite.png')} />
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>Rent</Text>
                                <Text style={{ fontSize: 12, color: '#D0312D', fontWeight: 'bold' }}>Rs.250000</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24, tintColor: '#4caf50' }} source={require('../assets/images/location.png')} />
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000' }}>Thrissur</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Commercial Office</Text>
                    <Text style={{ color: '#9e9e9e', alignSelf: 'flex-end' }}>see all</Text>
                </View>

                <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginVertical: 10 }}>



                    <View style={{ width: 170, height: 160, borderRadius: 5, backgroundColor: '#fff', elevation: 1, margin: 5 }}>
                        <View>
                            <ImageBackground style={{ width: 170, height: 100 }} imageStyle={{ borderRadius: 5 }} source={require('../assets/images/plote.jpeg')}>
                                <View style={{ width: 24, height: 24, borderRadius: 12, alignSelf: 'flex-end', margin: 5, backgroundColor: '#bebebe', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ width: 16, height: 16, tintColor: '#fff' }} source={require('../assets/images/favorite.png')} />
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>land</Text>
                                <Text style={{ fontSize: 12, color: '#D0312D', fontWeight: 'bold' }}>Rs.2500</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24, tintColor: '#4caf50' }} source={require('../assets/images/location.png')} />
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#000' }}>Thrissur</Text>
                            </View>
                        </View>
                    </View>
                </View>



            </ScrollView>
        )
    }
}