webpackJsonp([24],{240:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){return{copied:!1,review:0,source:0,codeHeight:0,height:0,more:!1,hasMore:!0}},props:{code:{type:String,required:!0},title:{type:String,required:!0},info:{type:String,required:!0},href:{type:String},type:{type:String,default:"html"}},mounted:function(){var e=this;setTimeout(function(){var t=e.$refs.review.$el.clientHeight;e.review=t+"px",e.codeHeight=e.$refs.code.$el.clientHeight,e.source="auto",e.height=e.review,e.hasMore=e.codeHeight>t},0)},methods:{moreClick:function(){this.height=this.more?this.review:this.source,this.more=!this.more}},components:{dCode:s.default.load("Dcode")}}},352:function(e,t,o){t=e.exports=o(153)(!1),t.push([e.i,".dcode{position:relative}.dcode-handle{position:absolute;right:8px;top:8px;font-size:12px;font-size:0}.dcode-handle-item{display:inline-block;font-size:12px;margin:0 4px}.dcode-type{position:absolute;left:8px;top:8px;font-size:12px;color:#999}",""])},376:function(e,t,o){var i=o(352);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o(154)("9d8255b4",i,!0)},424:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("emfe-row",{attrs:{className:"demo"}},[o("emfe-col",{ref:"review",attrs:{className:"demo",span:"12"}},[o("div",{staticClass:"demo-preview"},[e._t("default")],2),e._v(" "),o("div",{staticClass:"demo-info"},[o("header",{staticClass:"demo-header"},[o("span",{staticClass:"demo-title"},[e._v(e._s(e.title))])]),e._v(" "),o("p",{staticClass:"p demo-p"},[e._v(e._s(e.info))])])]),e._v(" "),o("emfe-col",{ref:"source",style:{height:""+e.height},attrs:{className:"demo",span:"12"}},[o("div",{staticClass:"demo-code-box"},[o("d-code",{ref:"code",attrs:{type:e.type,className:"demo",href:e.href}},[e._v(e._s(e.code))])],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.hasMore,expression:"hasMore"}],staticClass:"demo-more",on:{click:e.moreClick}},[o("emfe-icon",{class:{"demo-icon-active":e.more},attrs:{className:"demo",type:"gengduo"},on:{click:e.moreClick}})],1)])],1)},staticRenderFns:[]}},79:function(e,t,o){function i(e){o(376)}var s=o(16)(o(240),o(424),i,null,null);e.exports=s.exports}});