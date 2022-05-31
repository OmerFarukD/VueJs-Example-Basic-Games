new Vue({
    el:"#app",
    data:{
        player_heal:100,
        monster_heal:100,
        game_is_on:false,
        logs:[{turn:"",text:""}]
    },
    methods:{
        start_game:function(){
            this.game_is_on=!this.game_is_on
        },
        attack:function(){
            let point=Math.ceil(Math.random()*10)
            this.monster_heal-=point;
            this.add_log({turn:"p",text:"Oyuncunun sırası=  ("+point+") damage"})
            this.monster_attack();
            

        },
        ulti:function(){
            let point=Math.ceil(Math.random()*20)
            this.monster_heal-=point;
            this.add_log({turn:"p",text:"Oyuncunun sırası=  ("+point+") ulti damage"})
            this.monster_attack();
        },
        heal_up:function(){
            let point=Math.ceil(Math.random()*10)
            this.player_heal+=point;
            this.monster_attack();
            this.add_log({turn:"p",text:"Oyuncunun sırası=  ("+point+") heal "})
        },
        give_up:function(){
            this.player_heal=0;
            this.add_log({turn:"p",text:"Oyunu kayebeden  ---Oyuncu---"})
        },
        monster_attack:function(){
            let point=Math.ceil(Math.random()*10)
            this.player_heal-=point;
            this.add_log({turn:"m",text:"Canavarın sırası=  ("+point+") damage"})
        },
        add_log:function(data){
            this.logs.push(data);
        }
    },
    watch:{
        player_heal:function(value){
            if(value<=0){
                this.player_heal=0;
                this.logs=[];
                if (confirm("Oyunu kaybettin tekrar başlamak ister misin ?")) {
                    this.player_heal=100
                    this.monster_heal=100
                }
            }
            else if(value>=100){
                this.player_heal=100;
            }
        },
        monster_heal: function(value){
            if (value<=0) {
                this.monster_heal=0
                this.logs=[];
                if (confirm("Oyunu kazandın tekrar başlamak ister misin ?")) {
                    this.player_heal=100
                    this.monster_heal=100
                   
                }
            }
            else if(value>=100){
                this.monster_heal=100
            }
        }
    }
})