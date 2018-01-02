webpackJsonp([30,67],{134:function(t,e,a){var r=a(16)(a(296),a(394),null,null,null);t.exports=r.exports},296:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),o=r(s),l=a(70),n=r(l);e.default={data:function(){return{textarea:n.default,textareaModel:"EM-FE",propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"blur",desc:!1},desc:{text:"失去焦点触发。返回当前值。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function(){}",row:!1}},{attr:{text:"focus",desc:!1},desc:{text:"获取焦点触发。返回当前值。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function(){}",row:!1}},{attr:{text:"change",desc:!1},desc:{text:"变化触发。返回当前值。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function(){}",row:!1}}],eventTh:[{title:"事件名",key:"attr"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{attr:{text:"focus",desc:!1},desc:{text:"获取焦点触发。",row:!1},return:{text:"当前值",row:!1}},{attr:{text:"blur",desc:!1},desc:{text:"失去焦点触发。",row:!1},return:{text:"当前值",row:!1}},{attr:{text:"change",desc:!1},desc:{text:"变化触发",row:!1},return:{text:"当前值",row:!1}}]}},components:{dDemo:o.default.load("Ddemo")}}},394:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"textarea"},[a("h2",{staticClass:"h2"},[t._v("Textarea 多行文本")]),t._v(" "),a("p",{staticClass:"p"},[t._v("用 Vue 对 Textarea 的二次封装。")]),t._v(" "),a("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),a("d-demo",{attrs:{code:t.textarea.base,href:"http://output.jsbin.com/gaseraz",title:"数据绑定",info:"只需加上 v-model 属性即可。"}},[a("emfe-textarea",{model:{value:t.textareaModel,callback:function(e){t.textareaModel=e},expression:"textareaModel"}}),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.textareaModel,expression:"textareaModel"}],staticClass:"p"},[t._v("您的输入："+t._s(t.textareaModel))])],1),t._v(" "),a("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),a("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),a("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[a("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return a("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),a("h5",{staticClass:"h5"},[t._v("方法")]),t._v(" "),a("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[a("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return a("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},70:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:"\n<template>\n  <emfe-textarea v-model=\"textareaModel\"></emfe-textarea>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        textareaModel: 'EM-FE',\n      };\n    },\n  },\n<\/script>"}}});