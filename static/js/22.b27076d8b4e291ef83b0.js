webpackJsonp([22,108],{204:function(t,e,a){"use strict";function s(t,e,a){var s=void 0===typeof t?500:t,o=void 0===typeof e?1e4:e,n=void 0===typeof a||a,r=Math.random()*o+s;return n?Math.floor(r):r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s},246:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(204),n=s(o),r=a(1),u=s(r),c=a(26),l=s(c);e.default={data:function(){return{changecount:l.default,base:(0,n.default)(100,1e7),propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"count",desc:!1},desc:{text:"最大值。",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"0",row:!1}},{attr:{text:"Number",desc:!1},desc:{text:"数字运动时间。",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"0.3",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}]}},components:{dDemo:u.default.load("Ddemo")}}},26:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:'\n<template>\n  <emfe-changecount :count="base"></emfe-changecount>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        base: 1998,\n      };\n    },\n  },\n<\/script>'}},437:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"changecount"},[a("h2",{staticClass:"h2"},[t._v("Changecount 数字动效")]),t._v(" "),a("p",{staticClass:"p"},[t._v("通过上下滚动改变数字。")]),t._v(" "),a("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),a("d-demo",{attrs:{code:t.changecount.base,href:"http://output.jsbin.com/nuxope",title:"基本用法",info:"用 count 设置个数。"}},[a("emfe-changecount",{attrs:{count:t.base}})],1),t._v(" "),a("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),a("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),a("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[a("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return a("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},86:function(t,e,a){var s=a(16)(a(246),a(437),null,null,null);t.exports=s.exports}});