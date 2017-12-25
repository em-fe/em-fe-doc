webpackJsonp([43,78],{116:function(t,e,o){var a=o(16)(o(276),o(394),null,null,null);t.exports=a.exports},276:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=o(1),s=a(l),n=o(55),d=a(n);e.default={data:function(){return{modal:d.default,modalShow:!1,modalIndex:1,tipShow:!1,tipIndex:1,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"show",desc:!1},desc:{text:"控制遮罩层显示隐藏。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"width",desc:!1},desc:{text:"弹出框的宽度。不带 px 。",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"440",row:!1}},{attr:{text:"title",desc:!1},desc:{text:"标题。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"cancelText",desc:!1},desc:{text:"弹出框取消按钮文案。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"取消",row:!1}},{attr:{text:"okText",desc:!1},desc:{text:"弹出框取消按钮文案。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"确定",row:!1}},{attr:{text:"cancelFlg",desc:!1},desc:{text:"是否显示取消按钮。",row:!1},type:{text:"String | Boolean",row:!1},must:{text:"false",row:!1},default:{text:"true",row:!1}},{attr:{text:"okFlg",desc:!1},desc:{text:"是否显示取消按钮。",row:!1},type:{text:"String | Boolean",row:!1},must:{text:"false",row:!1},default:{text:"true",row:!1}},{attr:{text:"tip",desc:!1},desc:{text:"内容是否只是一行提示文字。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}],eventTh:[{title:"事件名",key:"attr"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{attr:{text:"cancel",desc:!1},desc:{text:"点击关闭按钮触发。",row:!1},return:{text:"-",row:!1}},{attr:{text:"cancel",desc:!1},desc:{text:"点击取消按钮触发。",row:!1},return:{text:"-",row:!1}},{attr:{text:"ok",desc:!1},desc:{text:"点击确认按钮触发。",row:!1},return:{text:"-",row:!1}}]}},methods:{modalBtn:function(){this.modalShow=!0,this.modalIndex=3},modalClose:function(){this.modalShow=!1,this.modalIndex=1},tipBtn:function(){this.tipShow=!0,this.tipIndex=3},tipClose:function(){this.tipShow=!1,this.tipIndex=1}},components:{dDemo:s.default.load("Ddemo")}}},394:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"modal"},[o("h2",{staticClass:"h2"},[t._v("Modal 对话框")]),t._v(" "),o("p",{staticClass:"p"},[t._v("简单的滑动提示。")]),t._v(" "),o("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),o("d-demo",{style:{"z-index":t.modalIndex},attrs:{code:t.modal.base,href:"http://output.jsbin.com/badohuj",title:"基本用法",info:"提示内容可以嵌套任何东西。"}},[o("emfe-button",{on:{click:t.modalBtn}},[t._v("我是弹框")]),t._v(" "),o("emfe-modal",{attrs:{show:t.modalShow,title:"我是提示框",okText:"保存"},on:{close:t.modalClose,cancel:t.modalClose,ok:t.modalClose}},[o("div",{attrs:{slot:"modal-main"},slot:"modal-main"},[o("div",{staticClass:"emfe-modal-main-input"},[o("h6",{staticClass:"emfe-modal-main-input-title"},[t._v("标题")]),t._v(" "),o("emfe-input",{attrs:{placeholder:"表单标题"}})],1)])])],1),t._v(" "),o("d-demo",{style:{"z-index":t.tipIndex},attrs:{code:t.modal.tip,href:"http://output.jsbin.com/yufisar",title:"基本用法",info:"提示内容可以嵌套任何东西。"}},[o("emfe-button",{on:{click:t.tipBtn}},[t._v("我是弹框")]),t._v(" "),o("emfe-modal",{attrs:{show:t.tipShow,title:"我是提示框",okText:"保存",cancelFlg:!1,tip:!0},on:{close:t.tipClose,cancel:t.tipClose,ok:t.tipClose}},[o("div",{attrs:{slot:"modal-main"},slot:"modal-main"},[t._v("\n        这是一段很长的提示，他真的很长很长很长。确认删除表单数据？\n      ")])])],1),t._v(" "),o("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),o("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),o("h5",{staticClass:"h5"},[t._v("方法")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},55:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:'\n<template>\n  <emfe-button @click="modalBtn">我是弹框</emfe-button>\n  <emfe-modal :show="modalShow" title="我是提示框" @close="modalClose" @cancel="modalClose" @ok="modalClose" okText="保存">\n    <div slot="modal-main">\n      <div class="emfe-modal-main-input">\n        <h6 class="emfe-modal-main-input-title">标题</h6>\n        <emfe-input placeholder="表单标题"></emfe-input>\n      </div>\n    </div>\n  </emfe-modal>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        modalShow: false,\n        modalIndex: 1,\n      };\n    },\n    methods: {\n      modalBtn() {\n        this.modalShow = true;\n        this.modalIndex = 3;\n      },\n      modalClose() {\n        this.modalShow = false;\n        this.modalIndex = 1;\n      },\n    },\n  },\n<\/script>',tip:'\n<template>\n  <emfe-button @click="tipBtn">我是弹框</emfe-button>\n  <emfe-modal :show="tipShow" title="我是提示框" @close="tipClose" @cancel="tipClose" @ok="tipClose" okText="保存" :cancelFlg="false" :tip="true">\n    <div slot="modal-main">\n      这是一段很长的提示，他真的很长很长很长。确认删除表单数据？\n    </div>\n  </emfe-modal>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tipShow: false,\n        tipIndex: 1,\n      };\n    },\n    methods: {\n      tipBtn() {\n        this.tipShow = true;\n        this.tipIndex = 3;\n      },\n      tipClose() {\n        this.tipShow = false;\n        this.tipIndex = 1;\n      },\n    },\n  },\n<\/script>'}}});