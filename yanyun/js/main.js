
//page1----------------------------------------------------------
var p1=Vue.extend({
    template:"#rout1"
});

//page2-----------------------------------------------------------
var p2=Vue.extend({
    data:function(){
        return{
            title:"产品列表",
            product_list:null
        }
    },
    //页面初始化
    created:function(){
        this.onload();
        
    },
    methods:{
        onload:function(){
            this.$http.get('data.json').then(
                function(data){
                    console.log(data.body);
                    this.product_list=data.body;
                },
                function(){
                    alert("连接失败！");
                }
            )
        }
    },
    template:"#rout2"
});

//page3--------------------------------------------------
var p3=Vue.extend({
    data:function(){
        return{
            form_data:{
                "company":"",
                "name":"",
                "sex":"",
                "tel":"",
                "email":"",
                "address":"",
                "cont":""
            }
        }
    },
    methods:{
        post:function(){
            //表单数据
            console.log(this.form_data);
            //发送到后台
//          this.$http.post('do.php',{cont:this.form_data},
//                  {emulateJSON:true}).then(
//              function(data){
//                  console.log(data.body);
//              },
//              function(){
//                  alert("连接失败！");
//              }
//          )
        }
    },
    template:"#rout3"
});

//详情页------------------------------------------------------------
var detail=Vue.extend({
    template:"#detail",
});

//配置路由--------------------------------------------------------------
var res=new VueRouter({
    routes:[
        {
            path: '/',   //默认页面
            redirect:"/p1"  //默认模块
        }, 
        {
            path:"/p1",
            component:p1
        },
        {
            path:"/p2",
            component:p2
        },
        {
            path:"/p3",
            component:p3
        },
        {
            path:"/detail",
            component:detail
        }
    ]
});
            
            
//全局组件 底部tabbar-----------------------------------------------            
Vue.component("tabBar",{
    template:"#tabBar"
})

//vue实例化------------------------------------------------------
let app = new Vue({
    "el": "#app",
    router:res
})