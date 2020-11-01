module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error();
    }
    let result = [];
    for(let i = 0 ;i < arr.length;i++)
    {
        if(arr[i] == '--discard-next') {
            if(arr.length-1 == i) continue;
            i++;
            continue;
        }
        else if(arr[i] == '--discard-prev') {
            if(i == 0) continue;
            result.pop();
        }
        else if(arr[i] == '--double-next') {
            if(arr.length-1 == i) continue;
            result.push(arr[i+1]);
        }
        else if(arr[i] == '--double-prev') {
            if(i == 0) continue;
            result.push(arr[i-1]);
        }
        else result.push(arr[i]);
    }
    return result;
};
