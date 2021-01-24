export const match = <T extends string, K>(
    expr: T,
    cases: {
        [key in T]?: K;
    },
    defaultValue?: T,
) => {
    return cases[expr] || cases[defaultValue as NonNullable<T>];
};