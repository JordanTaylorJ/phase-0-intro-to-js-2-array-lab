// Write your solution here!

const cats = ["Milo" , "Otis" , "Garfield"]


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(){
    appendCat = [...cats, "Broom"]
    return appendCat;
}


function prependCat() {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat(){
    const removeLastCat = cats.slice(0,-1);
    return removeLastCat;
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
} 

