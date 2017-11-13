/* @flow */
import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { Button } from "./../Button/Button";
import Input from "./../Input/Input";
import Radio from "./../Radio/Radio";
import Checkbox from "./../Checkbox/Checkbox";

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
        <Input
            label="Label example"
            value="Filled text"
            state="empty"
            placeholder="Placeholder"
        />
        <Button value="button primary" />
        <Button value="button primary inv" isInverted="true" />
        <Button value="button secondary" isSecondary="true" />
        <Button
            value="button secondary inv"
            isSecondary="true"
            isInverted="true"
        />
        <Radio value="test option" name="group2">
            Test Radio button
        </Radio>
        <Radio value="test option2" name="group" state="checkedDisabled">
            Test Radio button2
        </Radio>
        <Checkbox value="test option2" name="group" state="checkedDisabled">
            Test Checkbox button2
        </Checkbox>
    </View>
);

export default LoginForm;
