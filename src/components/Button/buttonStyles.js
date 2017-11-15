import { colors, spacing } from "../../branding/designSystem";
import tinycolor from "tinycolor2";

export const primaryButtonColor = colors.primary.base;
export const primaryButtonBgColorHover = colors.primary.darker;
export const primaryButtonBgColorActive = tinycolor(
    primaryButtonBgColorHover
).darken(10);

export const secondaryButtonColor = colors.secondary.base;
export const secondaryButtonBgColorHover = colors.secondary.darker;
export const secondaryButtonBgColorActive = tinycolor(
    secondaryButtonBgColorHover
).darken(10);

export const buttonBgColorDisabled = colors.grey30;

const baseButtonStyle = `
    min-width: 300px;
    height: 50px;
    box-sizing: border-box;
    padding: ${spacing.xs}px;
    text-align: center;
    align-items: center;
    margin: ${spacing.xs}px 0;
    border: 2px solid;

    &:hover {
        cursor: pointer;
    }

    &:active {
        position: relative;
        top: 1px;
    }

    &:disabled {
        background-color: ${buttonBgColorDisabled};
        color: ${colors.grey70}
    }
`;

export const buttonStyle = props => {
    let buttonColor = props.isSecondary
        ? secondaryButtonColor
        : primaryButtonColor;

    let buttonHoverColor = props.isSecondary
        ? secondaryButtonBgColorHover
        : primaryButtonBgColorHover;

    let buttonActiveColor = props.isSecondary
        ? secondaryButtonBgColorActive
        : primaryButtonBgColorActive;

    return `
        ${baseButtonStyle};

        background-color: ${props.isInverted ? "transparent" : buttonColor};
        border-color: ${buttonColor};
        color: ${props.isInverted ? buttonColor : colors.white};

        &:hover {
            background-color: ${props.isInverted
                ? buttonColor
                : buttonHoverColor};
            border-color: ${props.isInverted ? buttonColor : buttonHoverColor};
            color: ${colors.white};
        }

        &:active {
            background-color: ${buttonActiveColor};
            border-color: ${buttonActiveColor};
            color: ${colors.white};
        }
    `;
};
