/* @flow */
import React from "react";
import { View, Text } from "react-sketchapp";

// A color is defined as an object that has
// - a name
// - a hex value or rgba value

// A color swatch should have:
// - shape with a color fill
// - a paragraph/header/label: color name
// - a paragraph/header/label: color hex value
// - a paragraph/header/label: color rgba value

const SWATCH_WIDTH = 100;

const Swatch = ({ color, name }) => (
    <View
        name={`swatch-${name}`}
        style={{
            margin: 20,
            borderWidth: 1,
            borderColor: "#000",
            width: 350,
            flexDirection: "row"
        }}
    >
        <View
            name="color-chips"
            style={{
                borderRightColor: "#000",
                borderRightWidth: 1
            }}
        >
            <View
                name="color-base"
                style={{
                    width: SWATCH_WIDTH,
                    height: SWATCH_WIDTH,
                    backgroundColor: color.base
                }}
            />

            <View
                style={{
                    width: SWATCH_WIDTH,
                    height: SWATCH_WIDTH / 2,
                    flexDirection: "row"
                }}
            >
                <View
                    style={{
                        width: SWATCH_WIDTH / 2,
                        height: SWATCH_WIDTH / 2,
                        backgroundColor: color.lighter
                    }}
                />

                <View
                    style={{
                        width: SWATCH_WIDTH / 2,
                        height: SWATCH_WIDTH / 2,
                        backgroundColor: color.darker
                    }}
                />
            </View>
        </View>
        <View
            name="labels"
            style={{
                paddingLeft: 20,
                paddingTop: 20
            }}
        >
            <Text
                style={{
                    fontColor: "#000",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Arial",
                    marginBottom: 10
                }}
            >
                {name}
            </Text>
            <Text
                style={{
                    fontColor: "#000",
                    fontWeight: "regular",
                    fontSize: 12,
                    fontFamily: "Arial",
                    marginBottom: 10
                }}
            >
                Base color: {color.base}
            </Text>
            <Text
                style={{
                    fontColor: "#000",
                    fontWeight: "regular",
                    fontSize: 12,
                    fontFamily: "Arial",
                    marginBottom: 10
                }}
            >
                {name}.lighter: {color.lighter}
            </Text>
            <Text
                style={{
                    fontColor: "#000",
                    fontWeight: "regular",
                    fontSize: 12,
                    fontFamily: "Arial"
                }}
            >
                {name}.darker: {color.darker}
            </Text>
        </View>
    </View>
);

export default Swatch;
