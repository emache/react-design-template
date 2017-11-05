/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import Button from "./Button/Button";
import Textbox from "./Textbox/Textbox";

export const LoginForm = () => (
    <View>
        <Textbox label="Label example" value="Placeholder" />
        <Button value="button link" />
    </View>
);

export default LoginForm;
