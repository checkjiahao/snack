


(function(window){
    function Food(x,y,width,height,color){
        this.x = x || 0;
        this.y = y || 0 ;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color;   
                   
    }
        var lis = [];
    Food.prototype.render = function(map){
            remove();
        var div1 = document.createElement('div');
        this.x = Math.floor(Math.random()* map.offsetWidth/this.width)* this.width;
        this.y = Math.floor(Math.random()* (map.offsetHeight/this.height)) *this.height;
        div1.style.width=this.width+'px';
        div1.style.height= this.height+'px';
        div1.style.position = 'absolute';
        console.log(map.offsetHeight);
        div1.style.top=this.y+'px';
        div1.style.left = this.x +'px';
        this.color =colors();
        div1.style.backgroundColor = this.color;
        map.appendChild(div1);
        lis.push(div1);
    }
    function remove(){
        for(var i = 0 ; i < lis.length; i++){
            lis[i].parentNode.removeChild(lis[i]);
            lis.pop();
        }
    }
    function colors(){  
        var colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";  
        var colorArray = colorElements.split(",");  
        var color ="#";  
        for(var i =0;i<6;i++){  
            color+=colorArray[Math.floor(Math.random()*16)];  
        }  
        return color;  
    }  


    window.Food=Food;
}(window))