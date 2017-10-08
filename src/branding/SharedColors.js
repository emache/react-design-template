// Define base colors
import chroma from 'chroma-js'


const colorShades = (baseColor, brightenValue=2, darkenValue=3) => {
    return {
        base: baseColor,
        brighter: chroma(baseColor).brighten(brightenValue).css(),
        darker: chroma(baseColor).darken(darkenValue).css()
    }
}

const brandColors = {
    Night: colorShades('#000'),
    Night_brighter: colorShades('#5A89A8'),
    Night_darker: colorShades('#071F2E'),
    Sur: colorShades('#96DBE4',1,1),
    Peach: colorShades('#EFADA0',1,1),
    Tomato: colorShades('#E37059'),
    Pear: colorShades('#93DAAB',1,1),
    Lemon: colorShades('#F8D61B'),
    Black: colorShades('#2F3137'),
    Grey70: colorShades('rgba(47,49,55,0.70)'),
    Grey30: colorShades('rgba(47,49,55,0.30)'),
    Grey10: colorShades('rgba(47,49,55,0.10)'),
    Grey3: colorShades('rgba(47,49,55,0.50)'),
    White: colorShades('#FFFFFF')
}

export default brandColors;
