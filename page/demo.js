/**
 * Created by caiqing on 2017/7/19.
 */
    $(document).ready(function(){
            var pageBar = new Vue({
                el: '#page',
                data: {
                    taburl:'./tabData.html',
                    currentcode:"01",
                    mainObj:{
                        value:"01"
                    },
                    all: 1, //总页数
                    cur: 1,//当前页码
                    msg:"切换分页获取的数据",
                    mainlist:[]
                },
                components:{
                    'vue-nav':pagenav,
                    'vue-tab':tabNav
                },
                watch: {
                    cur: function(oldValue , newValue){

                    }
                },
                methods:{
                    listenDate:function(data){
                        this.cur = data;
                        var currentIndex=this.currentcode.slice(1)-1;
                        var currentTab=this.mainlist[currentIndex].name;
                        this.msg = '你点击了'+currentTab+'下的'+data+ '页';
                    },
                    mainDate:function(code){
                        this.mainObj={
                            value:code
                        };
                        this.currentcode=code;
                        this.all= this.mainObj.value.slice(1);
                        var currentIndex=this.currentcode.slice(1)-1;
                        this.cur=1;
                        var currentTab=this.mainlist[currentIndex].name;
                        this.msg = '你点击了'+currentTab+'下的'+1+ '页';
                    },
                    change:function(){
                        var self=this;
                        $.get("tabData.html",function(data){
                            self.mainlist=$.parseJSON(data);
                        });
                    }
                },
                created:function(){
                    this.change();
                }
            });
    });
