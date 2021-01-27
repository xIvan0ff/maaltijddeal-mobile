import { createStyles } from "./createStyles"

export const elevation = (amount: number) => {
    const start = 10
    const step = 10

    const current = Math.min(start + (amount - 1) * step, 255)

    const color = `rgb(${current}, ${current}, ${current})`

    return {
        dark: {
            backgroundColor: color,
        },
        light: {
            elevation: amount,
        },
    }
}
