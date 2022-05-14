export const add = (a, b) => {
    return a + b;
};

export const sub = (a, b) => {
    return a - b;
};


export const mul = (a, b) => {
    return a * b;
};


export const name = 'vinod';
// module.exports.add1 = add;                    //add 1 k jagh kuch bhi likh skte h as add 1 m hum add ko export kr rhe h to add1 export hoga and use krne k lye add1 word he use krna hoga dusre jagh 

// module.exports = { add, mul, sub ,name };                // shortcut method upper wala longcut h
export default { add, mul, sub ,name };                // shortcut method upper wala longcut h