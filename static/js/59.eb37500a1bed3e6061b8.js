webpackJsonp([59,109],{245:function(t,e,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),r=u(n),a=o(25),s=u(a);e.default={data:function(){return{button:s.default,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"theme",desc:!1},desc:{text:"按钮主题，可选值为 default | primary",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"default",row:!1}},{attr:{text:"type",desc:!1},desc:{text:'<a class="link" href="/#/doc/icon">字体图标</a>的名字。',row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"disabled",desc:!1},desc:{text:"是否按钮禁用",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"statu",desc:!1},desc:{text:"在组合按钮中，statu 属性为 true 时，当前 emfe-button 为选中状态。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"index",desc:!1},desc:{text:"设置 index 索引属性，可以在点击事件中返回当前索引。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}],eventTh:[{title:"事件",key:"name"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{name:{text:"click",row:!1},desc:{text:"点击触发。并且是阻止冒泡。",row:!1},return:{text:"当前索引",row:!1}}]}},components:{dDemo:r.default.load("Ddemo")}}},25:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={white:"\n<emfe-button>白底</emfe-button>",whiteDisabled:'\n<emfe-button :disabled="true">白底</emfe-button>',blue:'\n<emfe-button theme="primary">蓝底</emfe-button>',icon:'\n<emfe-button type="fabu">图标按钮</emfe-button>',group:'\n<emfe-button-group>\n  <emfe-button :group="true" index="0" statu="true">1</emfe-button>\n  <emfe-button :group="true" index="1">20</emfe-button>\n  <emfe-button :group="true" index="2">40</emfe-button>\n  <emfe-button :group="true" index="3">60</emfe-button>\n  <emfe-button :group="true" index="4">80</emfe-button>\n  <emfe-button :group="true" index="5">100</emfe-button>\n</emfe-button-group>'}},417:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",[o("h2",{staticClass:"h2"},[t._v("Button 按钮")]),t._v(" "),o("p",{staticClass:"p"},[t._v("基础组件，作用于全局。")]),t._v(" "),o("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),o("d-demo",{attrs:{code:t.button.white,href:"http://output.jsbin.com/literel",title:"默认白色用法",info:"只需知道按钮内容即可"}},[o("emfe-button",[t._v("白底")])],1),t._v(" "),o("d-demo",{attrs:{code:t.button.whiteDisabled,href:"http://output.jsbin.com/lilapit",title:"默认白色禁用",info:"disabled 为 true 时"}},[o("emfe-button",{attrs:{disabled:!0}},[t._v("白底禁用")])],1),t._v(" "),o("d-demo",{attrs:{code:t.button.blue,href:"http://output.jsbin.com/sageti",title:"默认白色用法",info:"theme 为 primary"}},[o("emfe-button",{attrs:{theme:"primary"}},[t._v("蓝底")])],1),t._v(" "),o("d-demo",{attrs:{code:t.button.icon,href:"http://output.jsbin.com/tawehaw",title:"图标按钮",info:"type 为 icon 的具体名字。具体请参照字体图标。"}},[o("emfe-button",{attrs:{type:"fabu"}},[t._v("图标按钮")])],1),t._v(" "),o("d-demo",{attrs:{code:t.button.group,href:"http://output.jsbin.com/zuqosit",title:"按钮组合",info:"将多个 emfe-button 放入 emfe-button-group 内，可实现按钮组合的效果。emfe-button 必须设置 group 为 true 属性。并且 设置 index 索引属性，可以在点击事件中返回当前索引。statu 属性为 true 时，当前 emfe-button 为选中状态。"}},[o("emfe-button-group",[o("emfe-button",{attrs:{group:!0,index:"0",statu:"true"}},[t._v("1")]),t._v(" "),o("emfe-button",{attrs:{group:!0,index:"1"}},[t._v("20")]),t._v(" "),o("emfe-button",{attrs:{group:!0,index:"2"}},[t._v("40")]),t._v(" "),o("emfe-button",{attrs:{group:!0,index:"3"}},[t._v("60")]),t._v(" "),o("emfe-button",{attrs:{group:!0,index:"4"}},[t._v("80")]),t._v(" "),o("emfe-button",{attrs:{group:!0,index:"5"}},[t._v("100")])],1)],1),t._v(" "),o("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),o("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),o("h5",{staticClass:"h5"},[t._v("事件")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},85:function(t,e,o){var u=o(16)(o(245),o(417),null,null,null);t.exports=u.exports}});