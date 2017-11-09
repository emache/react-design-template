/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import Button from "./../Button/Button";
import Textbox from "./../Textbox/Textbox";

export const LoginForm = () => (
    <View
        name="LoginForm"
        style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 20,
            margin: 20
        }}
    >
        <Textbox label="Label example" value="Placeholder" state="focus" />
        <Button value="button link" />
    </View>
);

export default LoginForm;