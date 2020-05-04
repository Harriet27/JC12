module.exports = {
    map : (arr, fn) => {
        let output = [];
        for (let i = 0; i < arr.length; i++) {
            output.push(fn(arr[i]));
        }
        return output;
    },
    first : (arr) => {
        return arr[0];
    }
}