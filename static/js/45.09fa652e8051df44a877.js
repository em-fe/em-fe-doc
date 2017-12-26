webpackJsonp([45,81],{113:function(t,e,s){var r=s(16)(s(273),s(429),null,null,null);t.exports=r.exports},273:function(t,e,s){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),l=r(a),o=s(52),n=r(o);e.default={data:function(){return{link:n.default,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"tag",desc:!1},desc:{text:"设置渲染出来的标签。必须结合 routers 使用。如果是正常的 Vue 的 Router 跳转属性，才能正常渲染 tag 设置的标签。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"routers",desc:!1},desc:{text:"设置跳转，支持router里面的属性，外跳属性是 url",row:!1},type:{text:"String",row:!1},must:{text:"true",row:!1},default:{text:"-",row:!1}},{attr:{text:"click",desc:!1},desc:{text:"点击事件",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function(){}",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}],eventTh:[{title:"事件名",key:"attr"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{attr:{text:"click",desc:!1},desc:{text:"点击触发",row:!1},return:{text:"-",row:!1}}]}},components:{dDemo:l.default.load("Ddemo")}}},429:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"link"},[s("h2",{staticClass:"h2"},[t._v("Link 链接")]),t._v(" "),s("p",{staticClass:"p"},[t._v("用于整个网站的公共超级链接。")]),t._v(" "),s("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),s("d-demo",{attrs:{code:t.link.base,href:"http://output.jsbin.com/jojoteb",title:"基本用法",info:"routers 的属性里面配置路由。"}},[s("emfe-link",{attrs:{routers:{name:"Font"}}},[t._v("去 EM-FE 的字体")])],1),t._v(" "),s("d-demo",{attrs:{code:t.link.url,href:"http://output.jsbin.com/valaxem",title:"外链用法",info:"routers 中设置 url 属性即可"}},[s("emfe-link",{attrs:{routers:{url:"https://www.evente.cn"}}},[t._v("去活动易")])],1),t._v(" "),s("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),s("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),s("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[s("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return s("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),s("h5",{staticClass:"h5"},[t._v("事件")]),t._v(" "),s("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[s("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return s("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},52:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:"\n<emfe-link :routers=\"{ name: 'Font' }\">去 EM-FE 的字体</emfe-link>",url:"\n<emfe-link :routers=\"{ url: 'https://www.evente.cn' }\">去活动易</emfe-link>"}}});