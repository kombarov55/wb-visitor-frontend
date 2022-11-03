import isInt from "./isInt";

export default function(x) {
    return isInt(x) && x.toString().length === 6
}