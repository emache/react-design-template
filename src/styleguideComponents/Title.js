import React from "react";
import { Text, View } from "react-sketchapp";
import { spacing, colors, typeSizes } from "../branding/brandName";

const Title = ({ children }) => (
    <View
        name="Title"
        style={{
            width: 1200,
            paddingBottom: spacing.s,
            marginBottom: spacing.s,
            marginTop: spacing.m,
            borderBottomWidth: 2,
            borderColor: colors.grey70
        }}
    >
        <Text
            style={{
                color: colors.grey70,
                fontWeight: "bold",
                fontSize: typeSizes.xl,
                fontFamily: "Arial"
            }}
            name="Title-text"
        >
            {children}
        </Text>
    </View>
);

export default Title;
