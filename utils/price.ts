export const price = (number: number) => {
    if (number === null || typeof number === undefined) {
        console.trace()
    }
    return `€${number.toFixed(2).replace(".", ",")}`
}
