const chainMaker = {
  array : [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if(value !== undefined) this.array.push(value)
    else this.array.push('');
    return this;
  },
  removeLink(position) {
    if (typeof(position) != "number" || position - 1 < 0 || position > this.array.length){
       this.array = [];
       throw Error();
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    for(let i=0;i < this.array.length;i++) {
      str = str+'( '+this.array[i]+' )~~';
    }
    this.array = [];
    return str.slice(0, -2);
  }
};

module.exports = chainMaker;
