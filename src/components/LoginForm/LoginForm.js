import React from "react";
import { View, Text } from "react-primitives";
import styled from "styled-components";
import { colors, spacing } from "./../../branding/designSystem";
import { Button } from "./../Button/Button";
import Input from "./../form/Input/Input";
import Radio from "./../form/Radio/Radio";
import Checkbox from "./../form/Checkbox/Checkbox";

const FormBlockWrapperStyle = {
    marginBottom: spacing.xs
};

export const LoginForm = () => (
    <View
        name="LoginForm"
        style={{
            backgroundColor: colors.grey98,
            paddingTop: spacing.m,
            paddingBottom: spacing.m,
            paddingLeft: spacing.l,
            paddingRight: spacing.l,
            margin: spacing.s,
            width: 460,
            boxSizing: "border-box"
        }}
    >
        <Input label="Name" value="" state="empty" placeholder="Santa Claus" />
        <Input
            label="Email"
            value=""
            state="empty"
            placeholder="Santa@example.com"
        />
        <View style={FormBlockWrapperStyle}>
            <Radio value="test option" name="group">
                I believe in Santa
            </Radio>

            <Radio value="test option2" name="group" state="checkedDisabled">
                I don't believe in Santa
            </Radio>
        </View>

        <Checkbox value="test option2" name="group" state="checkedDisabled">
            I want to hear more about the Elf Factory
        </Checkbox>

        <Button value="Submit" />
        <Button value="Cancel" isInverted="true" />
    </View>
);

export default LoginForm;
