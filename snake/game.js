var that =null;
(function(window){
    function Game(map){
        this.food=new Food();
        this.snack =new Snack();
        this.map =map; 
        that =this;
    }

    Game.prototype.start=function(){
        this.food.render(this.map);
       this.snack.render(this.map);
       runsnack()
    //    console.log(this.snack.body)
       bindkey();


    }

    function bindkey(){
        document.addEventListener('keydown',function(e){
            e = e || window.event;
            console.log(e.keyCode);
            switch (e.keyCode){
                case 37:
                this.snack.direction='left';
                break;
                case 38:
                this.snack.direction = 'top';
                break;
                case 40:
                this.snack.direction ='bottom';
                break;
                case 39:
                this.snack.direction = 'right';
                break;
            }
        }.bind(that))
    }

    function runsnack(){
        var timeid = setInterval(function(){
            this.snack.move();
            this.snack.render(this.map);
            var headx = this.snack.body[0].x*this.snack.width;
            var heady = this.snack.body[0].y*this.snack.height;
            var foodx = this.food.x;
            var foody = this.food.y;
            if(headx >= map.offsetWidth || headx< 0){
               clearInterval(timeid);
               alert('gameover');
           }
           if(heady >= map.offsetHeight||heady < 0 ){
            clearInterval(timeid);
            alert('gameover');
        }
        console.log(foodx);
        if(headx == foodx && heady == foody){
                var obj =this.snack.body[this.snack.body.length-1];
                this.snack.body.push({
                    x:obj.x,
                    y:obj.y,
                    backgroundColor:this.food.color
                })
            this.food.render(this.map);
           
        }
           }.bind(that),300)
    }

    window.game = Game;
}(window))

