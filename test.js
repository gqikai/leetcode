var obj={

    i:10,

    valueOf:function(){

        console.log('执行了valueOf()');

        return this.i+20

    },

    toString:function(){

        console.log('执行了toString()');

        return this.valueOf()+20
    }
}

//当我们调用的时候： 

console.log( obj )    //50       执行了toString() 执行了valueOf() 
console.log( +obj )    //30       执行了valueOf() 
console.log( obj>40 )    //false       执行了valueOf() 
console.log( obj==30 )    //true       执行了valueOf() 
console.log( obj===30 )    //false 