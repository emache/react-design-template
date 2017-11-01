// Define base colors
import tinycolor from "tinycolor2";

const colorShades = (baseColor, lighterColor, darkerColor) => {
    let lighter, darker;
    if (!lighterColor) {
        lighterColor = tinycolor(baseColor)
            .lighten(10)
            .toString();
    }
    if (!darkerColor) {
        darkerColor = tinycolor(baseColor)
            .darken(10)
            .toString();
    }

    return {
        base: baseColor,
        lighter: lighterColor,
        darker: darkerColor
    };
};

export default {
    Night: colorShades("#2F3137"),
    Night_brighter: colorShades("#5A89A8"),
    Night_darker: colorShades("#071F2E"),
    Sur: colorShades("#96DBE4"),
    Peach: colorShades("#EFADA0", "", "#984838"),
    Tomato: colorShades("#E37059", "#E2806D", "#B53117"),
    Pear: colorShades("#93DAAB", "#B1DFC1"),
    Lemon: colorShades("#F8D61B"),
    Pink: colorShades("#FF10B6"),
    Black: colorShades("#000000"),
    Grey70: colorShades("rgba(47,49,55,0.70)"),
    Grey30: colorShades("rgba(47,49,55,0.30)"),
    Grey10: colorShades("rgba(47,49,55,0.10)"),
    Grey3: colorShades("rgba(47,49,55,0.50)"),
    White: colorShades("#FFFFFF")
};
