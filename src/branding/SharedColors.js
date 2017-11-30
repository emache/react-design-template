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

export const brandColors = {
    Night: colorShades("#333A41", "#47535F"),
    Sur: colorShades("#96DBE4"),
    Peach: colorShades("#EFADA0", "", "#984838"),
    Sky: colorShades("#5BCCFF", "#97DFFF", "#47BAEE"),
    Tomato: colorShades("#FF7761", "#FF8E7C", "#ED533A"),
    Pear: colorShades("#85D266", "#9DE381", "#65AF47"),
    Lemon: colorShades("#FFC961", "#FFDA92", "#F7AB18"),
    Pink: colorShades("#E989DE", "#F2ACEA", "#D561C8"),
    Lilac: colorShades("#A889E9", "#BFA2FA", "#926BE4"),
    Aquamarine: colorShades("#6670D2", "#828AD8", "#555FC1")
};

export const greyScale = {
    Grey45: "#626772",
    Grey59: "#828897",
    Grey78: "#B3B9C7",
    Grey84: "#C3C9D7",
    Grey91: "#DCE0E9",
    Grey95: "#E8EBF2",
    Grey98: "#F7F8FB",
    White: "#FFFFFF"
};
