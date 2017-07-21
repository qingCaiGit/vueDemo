/**
 * Created by caiqing on 2017/7/20.
 */
var tabHtml = '<div class="nav-bar page-bar">'+
    '<ul>'+
    '<li v-for="tab in mainlist"  v-bind:class="{ active: tab.code == currentcode}">'+
    '<a v-on:click="tabClick(tab.code)">{{tab.name}}</a>'+
    '</li>'+
    '</ul>'+
    '</div>';
var tabBar = Vue.extend({
    template:tabHtml,
    props:['taburl'],
   data:function(){
       return {
           mainlist:[],
           currentcode:"01"
       }
   },
    mounted:function(){
            var self=this;
            $.get(self.taburl,function(data){
                self.mainlist= $.parseJSON(data);
            });
    },
    methods: {
        tabClick: function(code){
            if(code != this.currentcode){
                this.currentcode = code;
                this.$emit('tab-click',code);
            }
        }
    }
});
window.tabNav = tabBar;