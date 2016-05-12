(
    function(){
        //匿名函数内部私有函数，获取某对象
        function $(id){
            return document.getElementById(id);
        }
        //匿名函数内部私有函数，用于改变某对象属性
        function __addClass(id,className,classValue){
            switch(className){
                case 'background':{
                    $(id).style.background=classValue;
                    break;
                }
                case 'color':{
                    $(id).style.color=classValue;
                    break;
                }
                case 'fontSize':{
                    $(id).style.fontSize=classValue+'px';
                    break;
                }
                case 'fontWeight':{
                    $(id).style.fontWeight =classValue;
                    break;
                }
            }

        }
        //往window对象中添加mySpace属性
        window['mySpace']={};
        window['mySpace']['addClass']=__addClass;
        //1.建立自己的对象
        var personObj = {
            name:"sam",
            age:18,
            setAge:function(){var ar=arguments;this.age=ar[0]},
            getAge:function(){alert("My age is "+this.age);},
            getName:function(id){
                if($(id).value!="" && $(id).value!=" ") this.name=$(id).value;
                alert("My name is "+this.name+" "+this.age+" old!!");
            }
        };
        //把自己的对象挂靠到window中
        window["person"]=personObj;
    }
)();