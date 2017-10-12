



(function(window){
    var lis =[];
    function Snack(width,height,direction){
        this.width = width ||20;
        this.height = height ||20;
        this.direction = direction ||'right';
        this.body = [
            {x:3,y:1,backgroundColor:'red'},
            {x:2,y:1,backgroundColor:'purple'},
            {x:1,y:1,backgroundColor:'orange'}
        ]
    }
    
    Snack.prototype.render=function(map){
            remove();

        for(var i = 0; i <this.body.length; i++){
            var part = this.body[i];
            var div2 = document.createElement('div');
            div2.style.position='absolute';
            div2.style.width = this.width+'px';
            div2.style.height = this.height+'px';
            div2.style.left = part.x*this.width+'px';
            div2.style.top = part.y*this.height +'px';
            div2.style.backgroundColor = part.backgroundColor;
            map.appendChild(div2);
            // console.log(div2);
            lis.push(div2);
            
        }

       
    }
    function remove(){
        
        for(var i = lis.length-1;i>=0;i--){
            lis[i].parentNode.removeChild(lis[i]);
            lis.pop();
        }
    }
    Snack.prototype.move=function(){
        for(var i = this.body.length-1;i>0;i--){
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        switch(this.direction){
            case 'left':
            this.body[0].x--;
            break;
            case 'right':
            this.body[0].x++;
            break;
            case 'top':
            this.body[0].y--;
            break;
            case 'bottom':
            this.body[0].y++;
            break;
        }
    }


    window.Snack = Snack;
}(window))