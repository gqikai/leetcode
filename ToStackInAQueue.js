var stack1 = [];
var stack2 = [];


var StackQ = function () {
    this.stackIn = [];
    this.stackOut = [];

    this.push = function (data) {
        if(!data){
            throw new Error('data cannot be null');
        }else{
            this.stackIn.push(data);
        }
    }

    this.pop = function () {
        var length = this.stackIn.length;
        for(var i = 0;i < length; i ++){
            this.stackOut.push(this.stackIn.pop());
        }
        var ret = this.stackOut.pop();
        for(var i = 0;i < length - 1; i ++){
            this.stackIn.push(this.stackOut.pop());
        }
        return ret;
    }
}

var stack = new StackQ();

stack.push('123');
stack.push('hello');
console.log(stack.pop());
console.log(stack.pop());