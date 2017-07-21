/**
 * Created by caiqing on 2017/7/19.
 */
    $(document).ready(function(){
            var pageBar = new Vue({
                el: '#page',
                data: {
                    taburl:'./tabData.html',
                    currentcode:"01",
                    mainObjValue:"",
                    all: 1, //总页数
                    cur: 1,//当前页码
                    msg:"切换分页获取的数据显示的位置",
                    mainlist:[],
                    contentList:[]
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
                        var currentIndex=data-1;
                        var self=this;
                        $.get("projectData.html",function(data){
                            self.mainObjValue=$.parseJSON(data)[currentIndex].content;
                        });
                    },
                    mainDate:function(code){
                        this.currentcode=code;
                        this.all= code.slice(1)==4?5:1;
                        this.cur=1;
                        var currentIndex=this.currentcode.slice(1)-1;
                        this.mainObjValue=this.contentList[currentIndex].value;
                    },
                    change:function(){
                        var self=this;
                        $.get("tabData.html",function(data){
                            self.mainlist=$.parseJSON(data);
                        });
                    },
                    obtainMainData:function(){
                        var self=this;
                        $.get("tabMainData.html",function(data){
                            self.contentList=$.parseJSON(data);
                            self.mainObjValue=self.contentList[0].value;
                        });
                    }
                },
                created:function(){
                    this.change();
                    this.obtainMainData();
                }
            });
    });
