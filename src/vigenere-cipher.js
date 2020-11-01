class VigenereCipheringMachine {
    constructor (type){
        this.type=type;
    }
    encrypt(message, key) {
        
        return this.crypt(message,key,true);
       
    }

    decrypt(encryptedMessage, key) {
        return this.crypt(encryptedMessage,key,false);
       
    }

    crypt(m, k, t){
        if (!m||!k){throw Error}
        var alf=[];
        for (let i = 0;i < 26;i++){
            alf.push(i+65);
        }
        alf=String.fromCharCode(...alf);
        var kr="";
        var mr="";
        while (kr.length<m.length){kr+=k}
        kr=kr.toUpperCase();
        var j=-1;
        for (let i=0;i<m.length;i++){
            let ind;
            if (alf.indexOf(m[i].toUpperCase())!=-1){
                j++;
            }
            if (t==true){
                ind=alf.indexOf(kr[j])+alf.indexOf(m[i].toUpperCase());
                ind=ind%26;
            }
            else{
                ind=-alf.indexOf(kr[j])+alf.indexOf(m[i].toUpperCase());
                if (ind<0){ind=26+ind;}
            }
            if (alf.indexOf(m[i].toUpperCase())!=-1){
                mr+=alf[ind];
            } else {
                mr+=m[i];
            }
        }
       
        if (this.type===false){mr=mr.split("").reverse().join("");}
        return mr;
    }
    
}

module.exports = VigenereCipheringMachine;
