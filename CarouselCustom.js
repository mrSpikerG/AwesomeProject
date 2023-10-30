import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class CarouselCustom extends Component {
    constructor(props) {
        super(props);

        // Initialize the component's state
        this.state = {
            currentPicture: 0,
            imageList: [
                'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg',
                'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
                'https://b1.filmpro.ru/c/547295.700xp.jpg'
            ]
        };
    }

    addCount = ()=> {
        console.log(this.state);
        if (this.state.currentPicture == this.state.imageList.length - 1) {
            this.setState({ currentPicture: 0 })
        }
        this.setState({ currentPicture: this.state.currentPicture + 1 })
    }
    removeCount = () =>{
        console.log(this.state);
        if (this.state.currentPicture == 0) {

            this.setState({ currentPicture: this.state.imageList.length - 1 })
        }
        this.setState({ currentPicture: this.state.currentPicture - 1 })
    }

    render() {
        return (
            <View>

                <Image style={styles.tinylogo}
                    source={{
                        uri: this.state.imageList[this.state.currentPicture]
                    }} />
                <TouchableOpacity onPress={this.removeCount} style={styles.left} >
                    <Text> ◄  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.addCount} style={styles.right} >
                    <Text> ►  </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    left: {
        width: 30,
        height: 30,
        position: "absolute",
        top: 150,
        left: 40,
        backgroundColor: "gray"

    },
    right: {
        width: 30,
        height: 30,
        position: "absolute",
        left: 300,
        top: 150,
        backgroundColor: "gray"
    },
    tinylogo: {
        width: 400,
        height: 300
    }
});

export default CarouselCustom;