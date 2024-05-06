// check:
// 1. if arguments and arguments are numbers
// first argument: 
//     2. if argument
//     3. if argument is negative number
//     4. if argument > arr length
// last argument:
//     5. if argument
//     6. if argument is negative number
// 7. if first > last

Array.prototype.mySlice = function(first, last) {

    if(arguments.length === 0) return this;
    if((typeof first !== 'number' || isNaN(first)) || (typeof last !== 'number' && isNaN(last))) return 'one of argument is NaN';

    let startIdx = first ? first < 0 ? this.length - 1 - Math.abs(first) : first : 0;
    if(startIdx >= this.length) return 'first element > array length';

    let lastIdx = last ? last < 0 ? this.length - 1 - Math.abs(last) : last : this.length - 1;
    if(startIdx > lastIdx) return [];

    return this.reduce((acc, curr, idx) => {
        if(idx >= startIdx && idx < lastIdx) {
            acc.push(curr)
            return acc;
        }
        return acc;
    },[])
}


//console.log([1,2,3,4,5,6,7].mySlice(1, 4))
//console.log([1,2,3,4,5,6,7].mySlice(1, 'a'))
//console.log([1,2,3,4,5,6,7].mySlice(4, 0))
console.log([1,2,3,4,5,6,7].mySlice(-1,4))
console.log([1,2,3,4,5,6,7].slice(-1,4))

