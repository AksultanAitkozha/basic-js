module.exports = class DepthCalculator {

        calculateDepth(arr) {
            let deep= [1];
            for(let i = 0; i < arr.length; i++){
                if(arr[i] instanceof Array){
                    deep.push(this.calculateDepth(arr[i])+1);
                }
            }
            return Math.max(...deep);
        }
    };
    
