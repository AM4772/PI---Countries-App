
// Controller that normalizes arguments to avoid/minimize inconsistencies.

const dbParser = (arg, id = false) => {
    if(id) {
        return arg.toUpperCase();
    }

    if(typeof arg === 'string') {
        let str = arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();        
        return str;
    }

    if(Array.isArray(arg)) {
        let parsedArray = [];
        for(let i = 0; i < arg.length; i++) {
            let str = arg[i].charAt(0).toUpperCase() + arg[i].slice(1).toLowerCase();
            parsedArray.push(str);
        }
        return parsedArray;
    }

    if(typeof arg === 'number') {
        return arg.toString();
    }
}

module.exports = { dbParser };