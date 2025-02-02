const validArr = ["Introduction"]
export const isValid = (val: string) => {
    return validArr.some((value: string) => val === value);
}