import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';
import View_Slider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');



function App() {

    const data = [
        {
            image: require("../Images/slide0.jpeg"),
            text: "Is Value-Based Hybrid Learning the Solution to Current Global Crisis?",
        },
        {
            image: require("../Images/slide1.jpeg"),
            text: "Challenge for change in Kenya",
        },
        {
            image: require("../Images/slide2.png"),
            text: "Solving Global Challenges",
        },
        {
            image: require("../Images/slide3.jpeg"),
            text: "BREAKING: Challenge 18",
        },
        {
            image: require("../Images/slide4.jpeg"),
            text: "The 17-Goals trails & Future of Humanity",
        }
    ]

    return (
        <View style={styles.body}>
            <Text style={styles.title}>- Latest News -</Text>
            <View_Slider
                renderSlides = {
                    <>
                        <View style={styles.viewBox}>
                            <Image source={data[0].image} style={styles.img}/>
                            <Text style={styles.text}>{data[0].text}</Text>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={data[1].image} style={styles.img}/>
                            <Text style={styles.text}>{data[1].text}</Text>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={data[2].image} style={styles.img}/>
                            <Text style={styles.text}>{data[2].text}</Text>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={data[3].image} style={styles.img}/>
                            <Text style={styles.text}>{data[3].text}</Text>
                        </View>
                        <View style={styles.viewBox}>
                            <Image source={data[4].image} style={styles.img}/>
                            <Text style={styles.text}>{data[4].text}</Text>
                        </View>
                    </>
                }

                style={styles.slider}     //Main slider container style
                height = {280}    //Height of your slider
                slideCount = {data.length}    //How many views you are adding to slide
                dots = {true}     // Pagination dots visibility true for visibile
                dotActiveColor = 'blue'     //Pagination dot active color
                dotInactiveColor = 'gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide = {false}    //The views will slide automatically
                slideInterval = {10000}    //In Miliseconds
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center'
    },
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 200
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    dotContainer: {
        backgroundColor: 'transparent',
    },
    img: {
        height: 200, width
    },
    text: {
        fontSize: 20
    },
    title: {
        fontSize: 25
    }
});

export default App;
