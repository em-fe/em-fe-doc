webpackJsonp([32,67],{128:function(t,e,s){var o=s(16)(s(288),s(403),null,null,null);t.exports=o.exports},288:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=o(n),l=s(66),r=o(l);e.default={data:function(){return{switchCode:r.default,switchModel:!0,interceptor:!1,modal:!1,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"value",desc:!1},desc:{text:"初始状态为开启时，设置 value 为 true。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"disabled",desc:!1},desc:{text:"禁用",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"change",desc:!1},desc:{text:"开关改变。返回：开关状态。 1.3.0 新增。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function(){}",row:!1}}],eventTh:[{title:"事件名",key:"attr"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{attr:{text:"change",desc:!1},desc:{text:"开关改变。 1.3.0 新增。",row:!1},return:{text:"开关状态",row:!1}},{attr:{text:"toggle",desc:!1},desc:{text:"开关改变。 1.3.0 开始建议使用 change",row:!1},return:{text:"开关状态",row:!1}}]}},methods:{interceptorChange:function(){this.openModal()},openModal:function(){this.modal=!0},closeModal:function(){this.modal=!1},modalCancel:function(){this.interceptor=!1,this.closeModal()},modalOk:function(){var t=this;this.interceptor=!0,this.closeModal(),setTimeout(function(){t.interceptor=!1},201)}},components:{dDemo:a.default.load("Ddemo")}}},403:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"switch"},[s("h2",{staticClass:"h2"},[t._v("Switch 开关")]),t._v(" "),s("p",{staticClass:"p"},[t._v("在两种状态间切换时用到的开关选择器。")]),t._v(" "),s("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),s("d-demo",{attrs:{code:t.switchCode.base,href:"http://output.jsbin.com/tipexey",title:"数据绑定",info:"只需加上 v-model 属性即可。 v-model： 1.3.0 新增。"}},[t._v("\n    "+t._s(t.switchModel?"开":"关")+"\n    "),s("emfe-switch",{model:{value:t.switchModel,callback:function(e){t.switchModel=e},expression:"switchModel"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1),t._v(" "),s("d-demo",{attrs:{code:t.switchCode.disabled,href:"http://output.jsbin.com/tubisu",title:"禁用",info:"只需加上 disabled 属性即可。"}},[s("emfe-switch",{attrs:{disabled:!0}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])])],1),t._v(" "),s("d-demo",{attrs:{code:t.switchCode.interceptor,href:"http://output.jsbin.com/fefaqay",title:"拦截器",info:"只需加上 interceptor 属性可控制是否改变。注意在改变同意之后的 200 秒要恢复 interceptor 为 false，不然会有问题。"}},[s("emfe-switch",{attrs:{interceptor:t.interceptor},on:{toggle:t.interceptorChange}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("ON")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("OFF")])]),t._v(" "),s("emfe-modal",{attrs:{show:t.modal,title:"拦截一下"},on:{close:t.modalCancel,cancel:t.modalCancel,ok:t.modalOk}},[s("div",{attrs:{slot:"modal-main"},slot:"modal-main"},[t._v("吃了么？")])])],1),t._v(" "),s("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),s("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),s("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[s("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return s("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),s("h5",{staticClass:"h5"},[t._v("方法")]),t._v(" "),s("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[s("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return s("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},66:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:'\n<template>\n  <div>\n    {{switchModel ? \'开\' : \'关\'}}\n    <emfe-switch v-model="switchModel">\n      <span slot="open">ON</span>\n      <span slot="close">OFF</span>\n    </emfe-switch>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        switchModel: true,\n      };\n    },\n  },\n<\/script>',interceptor:'\n<template>\n  <div>\n    <emfe-switch :interceptor="interceptor" @toggle="interceptorChange">\n      <span slot="open">ON</span>\n      <span slot="close">OFF</span>\n    </emfe-switch>\n    <emfe-modal :show="modal" title="拦截一下" @close="modalCancel" @cancel="modalCancel" @ok="modalOk">\n      <div slot="modal-main">吃了么？</div>\n    </emfe-modal>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        interceptor: false,\n        modal: false,\n      };\n    },\n    methods: {\n      interceptorChange() {\n        this.openModal();\n      },\n      openModal() {\n        this.modal = true;\n      },\n      closeModal() {\n        this.modal = false;\n      },\n      modalCancel() {\n        this.interceptor = false;\n        this.closeModal();\n      },\n      modalOk() {\n        this.interceptor = true;\n        this.closeModal();\n        // 恢复\n        setTimeout(() => {\n          this.interceptor = false;\n        }, 201);\n      },\n    },\n  },\n<\/script>',disabled:'\n<emfe-switch :disabled="true">\n  <span slot="open">ON</span>\n  <span slot="close">OFF</span>\n</emfe-switch>'}}});