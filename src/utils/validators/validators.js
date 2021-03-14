export const required = value => {
    if (value) {
        return undefined;
    }
    return "Field is required";
}
export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) {
        return `max length should be less than ${maxLength} simbols`;
    }
    return undefined;
}
// export const minLength4 = value => {
//     if (value && value.length < 4){
//         return "min length should be more than 4 simbols";
//     }
//     return undefined;
// }