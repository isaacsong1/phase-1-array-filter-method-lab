// Code your solution here
function findMatching(namesArr, string) {
    return namesArr.filter(match => match.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(namesArr, string) {
    return namesArr.filter(match => match[0] === string[0]);
}

function matchName(objArr, name) {
    return objArr.filter(match => match.name === name);
}