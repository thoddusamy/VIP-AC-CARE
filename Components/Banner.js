import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Banner = () => {

    const Images = [
        require('../assets/images/image5.jpg'),
        require('../assets/images/image6.jpg'),
        require('../assets/images/image7.jpg'),
        require('../assets/images/image1.jpg'),
        require('../assets/images/image2.jpg'),
        require('../assets/images/image3.jpg'),
        require('../assets/images/image4.jpg'),
    ]

    return (
        <View style={styles.wrap}>
            <SliderBox images={Images} autoplay={true} autoplayInterval={3000} circleLoop sliderBoxHeight={250}
                dotStyle={{ width: 0.1, height: 0.1 }} activeOpacity={0.9999} />
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    wrap: {
        marginTop: 10,
        width: WIDTH,
        height: HEIGHT * .37
    },
})