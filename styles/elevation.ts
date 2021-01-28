import { createStyles } from "./createStyles"

export const elevation = (amount: number) => {
    const interpolate = (
        i: number,
        a: number,
        b: number,
        a2: number,
        b2: number
    ) => {
        return ((i - a) * (b2 - a2)) / (b - a) + a2
    }
    const start = 10
    const step = 10

    const current = Math.min(start + (amount - 1) * step, 255)

    const color = `rgb(${current}, ${current}, ${current})`

    const shadowOpacity = parseFloat(
        interpolate(amount - 1, 1, 24, 0.2, 0.6).toFixed(2)
    )
    const shadowRadius = parseFloat(
        interpolate(amount, 1, 38, 1, 16).toFixed(2)
    )

    const shadowHeight = amount === 1 ? 1 : Math.floor(amount / 2)
    return {
        dark: {
            backgroundColor: color,
        },
        light: {
            elevation: amount,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: shadowHeight,
            },
            shadowOpacity: shadowOpacity,
            shadowRadius: shadowRadius,
        },
    }
}
