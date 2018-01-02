webpackJsonp([12,96],{105:function(e,t,s){function l(e){s(390)}var o=s(16)(s(267),s(449),l,null,null);e.exports=o.exports},267:function(e,t,s){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),a=l(o),r=s(42),i=l(r);t.default={data:function(){return{grid:i.default,rowTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],rowTd:[{attr:{text:"gutter",desc:!1},desc:{text:"栅格间距，单位 px ，左右平分。范围： 0 ~ 48 。",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"8",row:!1}},{attr:{text:"basin",desc:!1},desc:{text:"垂直栅格间距，单位 px ，上下平分。范围： 0 ~ 48 。",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"0",row:!1}},{attr:{text:"type",desc:!1},desc:{text:"布局模式，可选值为 Flex 或不选。 Flex 在现代浏览器下有效。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"align",desc:!1},desc:{text:"Flex 布局下的垂直对齐方式，可选值为 top 、 middle 、 bottom 。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"justify",desc:!1},desc:{text:"Flex 布局下的水平排列方式，可选值为 start 、 end、center 、 space-around、  space-between 。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}],colTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],colTd:[{attr:{text:"span",desc:!1},desc:{text:"栅格的占位格数，可选值为 0 ~ 24 的整数，为 0 时，相当于 display: none。",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"tag",desc:!1},desc:{text:"自定义标签名字。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"div",row:!1}},{attr:{text:"offset",desc:!1},desc:{text:"栅格左侧的间隔格数，间隔内不可以有栅格。",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"push",desc:!1},desc:{text:"栅格向右移动格数。",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"pull",desc:!1},desc:{text:"栅格向左移动格数。",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"xs",desc:!1},desc:{text:"< 768px 响应式栅格，可为栅格数或一个包含其他属性的对象。",row:!1},type:{text:"Number | Object",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"md",desc:!1},desc:{text:"≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象 。",row:!1},type:{text:"Number | Object",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"lg",desc:!1},desc:{text:"≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 。",row:!1},type:{text:"Number | Object",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"xl",desc:!1},desc:{text:"≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 。",row:!1},type:{text:"Number | Object",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}]}},components:{dDemo:a.default.load("Ddemo")}}},366:function(e,t,s){t=e.exports=s(157)(!1),t.push([e.i,".grid-blue{background:#1996f9;color:#fff;padding:24px}.grid-lightblue{background:#50affa;color:#fff;padding:24px}",""])},390:function(e,t,s){var l=s(366);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);s(158)("f194e542",l,!0)},42:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={base:'\n<emfe-row>\n  <emfe-col span="8">\n    <div class="grid-blue">col-8</div>\n  </emfe-col>\n  <emfe-col span="8">\n    <div class="grid-lightblue">col-8</div>\n  </emfe-col>\n  <emfe-col span="8">\n    <div class="grid-blue">col-8</div>\n  </emfe-col>\n</emfe-row>',interval:'\n<emfe-row :gutter="16">\n  <emfe-col span="12">\n    <div class="grid-blue">col-12</div>\n  </emfe-col>\n  <emfe-col span="12">\n    <div class="grid-lightblue">col-12</div>\n  </emfe-col>\n</emfe-row>',order:'\n<emfe-row>\n  <emfe-col span="6" order="4">\n    <div class="grid-blue">1 | order-4</div>\n  </emfe-col>\n  <emfe-col span="6" order="3">\n    <div class="grid-lightblue">2 | order-3</div>\n  </emfe-col>\n  <emfe-col span="6" order="2">\n    <div class="grid-blue">3 | order-2</div>\n  </emfe-col>\n  <emfe-col span="6" order="1">\n    <div class="grid-lightblue">4 | order-1</div>\n  </emfe-col>\n</emfe-row>',flex:'\n<emfe-row type="flex">\n  <emfe-col span="12">\n    <div class="grid-blue">col-12</div>\n  </emfe-col>\n  <emfe-col span="12">\n    <div class="grid-lightblue">col-12</div>\n  </emfe-col>\n</emfe-row>',align:'\n<emfe-row type="flex" justify="center" align="middle">\n  <emfe-col span="4">\n    <p class="grid-blue" style="height: 80px">col-4</p>\n  </emfe-col>\n  <emfe-col span="4">\n    <p class="grid-lightblue" style="height: 30px">col-4</p>\n  </emfe-col>\n  <emfe-col span="4">\n    <p class="grid-blue" style="height: 100px">col-4</p>\n  </emfe-col>\n  <emfe-col span="4">\n    <p class="grid-lightblue" style="height: 60px">col-4</p>\n  </emfe-col>\n</emfe-row>',sort:'\n<emfe-row>\n  <emfe-col span="18" pull="6">\n    <div class="grid-blue">col-18 | pull-6</div>\n  </emfe-col>\n  <emfe-col span="6" push="18">\n    <div class="grid-lightblue">col-6 | push-18</div>\n  </emfe-col>\n</emfe-row>',deviation:'\n<emfe-row>\n  <emfe-col span="6" offset="8">\n    <div class="grid-blue">col-6 | offset-8</div>\n  </emfe-col>\n  <emfe-col span="6" offset="4">\n    <div class="grid-lightblue">col-6 | offset-4</div>\n  </emfe-col>\n</emfe-row>',array:'\n<emfe-row type="flex" justify="start" align="top">\n  <emfe-col span="4">\n    <p class="grid-blue">col-4</p>\n  </emfe-col>\n  <emfe-col span="4">\n    <p class="grid-lightblue">col-4</p>\n  </emfe-col>\n  <emfe-col span="4">\n    <p class="grid-blue">col-4</p>\n  </emfe-col>\n  <emfe-col span="4">\n    <p class="grid-lightblue">col-4</p>\n  </emfe-col>\n</emfe-row>',response:'\n<emfe-row>\n  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">\n    <div class="grid-blue">col-1</div>\n  </emfe-col>\n  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">\n    <div class="grid-lightblue">col-2</div>\n  </emfe-col>\n  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">\n    <div class="grid-blue">col-3</div>\n  </emfe-col>\n  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">\n    <div class="grid-lightblue">col-4</div>\n    </emfe-col>\n</emfe-row>',other:'\n<emfe-row>\n  <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">\n    <div class="grid-blue">col</div>\n  </emfe-col>\n  <emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">\n    <div class="grid-lightblue">col</div>\n  </emfe-col>\n  <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">\n    <div class="grid-blue">col</div>\n  </emfe-col>\n</emfe-row>'}},449:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"grid"},[s("h2",{staticClass:"h2"},[e._v("Grid 栅格")]),e._v(" "),s("p",{staticClass:"p"},[e._v("在多数业务情况下，EMFE 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。")]),e._v(" "),s("p",{staticClass:"p"},[e._v("划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。")]),e._v(" "),s("h4",{staticClass:"h4"},[e._v("概述")]),e._v(" "),s("p",{staticClass:"p"},[e._v("我们定义了两个概念，行row和列col，具体使用方法如下：")]),e._v(" "),e._m(0,!1,!1),e._v(" "),s("h4",{staticClass:"h4"},[e._v("Flex 布局")]),e._v(" "),s("p",{staticClass:"p"},[e._v("我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。")]),e._v(" "),s("p",{staticClass:"p"},[e._v("Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。")]),e._v(" "),s("h4",{staticClass:"h4"},[e._v("代码示例")]),e._v(" "),s("d-demo",{attrs:{code:e.grid.base,href:"http://output.jsbin.com/pamijoj",title:"基本用法",info:"水平排列的布局。emfe-col 必须放在 emfe-row 里面。"}},[s("emfe-row",[s("emfe-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-blue"},[e._v("col-8")])]),e._v(" "),s("emfe-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-8")])]),e._v(" "),s("emfe-col",{attrs:{span:"8"}},[s("div",{staticClass:"grid-blue"},[e._v("col-8")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.interval,href:"http://output.jsbin.com/hocuva",title:"区块间隔",info:"通过给 emfe-row 添加 gutter 属性，可以给下属的 emfe-col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。"}},[s("emfe-row",{attrs:{gutter:16}},[s("emfe-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-blue"},[e._v("col-12")])]),e._v(" "),s("emfe-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-12")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.sort,href:"http://output.jsbin.com/qayugiw",title:"栅格排序",info:"通过设置 push 和 pull 来改变栅格的顺序。"}},[s("emfe-row",[s("emfe-col",{attrs:{span:"18",pull:"6"}},[s("div",{staticClass:"grid-blue"},[e._v("col-18 | pull-6")])]),e._v(" "),s("emfe-col",{attrs:{span:"6",push:"18"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-6 | push-18")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.deviation,href:"http://output.jsbin.com/vuqurev",title:"左右偏移",info:"通过设置 offset 属性，将列进行左右偏移，偏移栅格数为 offset 的值。"}},[s("emfe-row",[s("emfe-col",{attrs:{span:"6",offset:"8"}},[s("div",{staticClass:"grid-blue"},[e._v("col-6 | offset-8")])]),e._v(" "),s("emfe-col",{attrs:{span:"6",offset:"4"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-6 | offset-4")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.flex,href:"http://output.jsbin.com/gofaju",title:"Flex 用法",info:"支持 Flex 布局"}},[s("emfe-row",{attrs:{type:"flex"}},[s("emfe-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-blue"},[e._v("col-12")])]),e._v(" "),s("emfe-col",{attrs:{span:"12"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-12")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.order,href:"http://output.jsbin.com/kebosiy",title:"Flex 顺序",info:"通过 Flex 布局的order来改变栅格的顺序。"}},[s("emfe-row",{attrs:{type:"flex"}},[s("emfe-col",{attrs:{span:"6",order:"4"}},[s("div",{staticClass:"grid-blue"},[e._v("1 | order-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"6",order:"3"}},[s("div",{staticClass:"grid-lightblue"},[e._v("2 | order-3")])]),e._v(" "),s("emfe-col",{attrs:{span:"6",order:"2"}},[s("div",{staticClass:"grid-blue"},[e._v("3 | order-2")])]),e._v(" "),s("emfe-col",{attrs:{span:"6",order:"1"}},[s("div",{staticClass:"grid-lightblue"},[e._v("4 | order-1")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.array,href:"http://output.jsbin.com/cocuxec",title:"Flex 排列",info:"通过给 emfe-row 设置参数 justify 为不同的值，来定义子元素的排布方式。在 Flex 模式下有效。"}},[s("emfe-row",{attrs:{type:"flex",justify:"start",align:"top"}},[s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-blue"},[e._v("col-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-lightblue"},[e._v("col-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-blue"},[e._v("col-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-lightblue"},[e._v("col-4")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.align,href:"http://output.jsbin.com/xoqoden",title:"Flex 对齐",info:"通过给 emfe-row 设置参数 align 为不同的值，来定义子元素在垂直方向上的排布方式。在 Flex 模式下有效。"}},[s("emfe-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-blue",staticStyle:{height:"80px"}},[e._v("col-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-lightblue",staticStyle:{height:"30px"}},[e._v("col-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-blue",staticStyle:{height:"100px"}},[e._v("col-4")])]),e._v(" "),s("emfe-col",{attrs:{span:"4"}},[s("p",{staticClass:"grid-lightblue",staticStyle:{height:"60px"}},[e._v("col-4")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.response,href:"http://output.jsbin.com/tipaxo",title:"响应式布局",info:"参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs md lg xl。"}},[s("emfe-row",[s("emfe-col",{attrs:{xl:3,lg:5,md:8,xs:12,span:"24"}},[s("div",{staticClass:"grid-blue"},[e._v("col-1")])]),e._v(" "),s("emfe-col",{attrs:{xl:3,lg:5,md:8,xs:12,span:"24"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-2")])]),e._v(" "),s("emfe-col",{attrs:{xl:3,lg:5,md:8,xs:12,span:"24"}},[s("div",{staticClass:"grid-blue"},[e._v("col-3")])]),e._v(" "),s("emfe-col",{attrs:{xl:3,lg:5,md:8,xs:12,span:"24"}},[s("div",{staticClass:"grid-lightblue"},[e._v("col-4")])])],1)],1),e._v(" "),s("d-demo",{attrs:{code:e.grid.other,href:"http://output.jsbin.com/tipaxo",title:"响应式布局",info:"span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs='6' 相当于 :xs='{ span: 6 }'。"}},[s("emfe-row",[s("emfe-col",{attrs:{xs:{span:5,offset:1},lg:{span:6,offset:2}}},[s("div",{staticClass:"grid-blue"},[e._v("col")])]),e._v(" "),s("emfe-col",{attrs:{xs:{span:11,offset:1},lg:{span:6,offset:2}}},[s("div",{staticClass:"grid-lightblue"},[e._v("col")])]),e._v(" "),s("emfe-col",{attrs:{xs:{span:5,offset:1},lg:{span:6,offset:2}}},[s("div",{staticClass:"grid-blue"},[e._v("col")])])],1)],1),e._v(" "),s("h4",{staticClass:"h4"},[e._v("API")]),e._v(" "),s("h5",{staticClass:"h5"},[e._v("emfe-row 的 属性")]),e._v(" "),s("emfe-table",{staticClass:"table",attrs:{columns:e.rowTh,data:e.rowTd}},[s("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),e._v(" "),e._l(e.rowTd,function(e,t){return s("emfe-table-body",{key:t,attrs:{slot:"body",ind:t,dataList:e},slot:"body"})})],2),e._v(" "),s("h5",{staticClass:"h5"},[e._v("emfe-col 的 属性")]),e._v(" "),s("emfe-table",{staticClass:"table",attrs:{columns:e.colTh,data:e.colTd}},[s("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),e._v(" "),e._l(e.colTd,function(e,t){return s("emfe-table-body",{key:t,attrs:{slot:"body",ind:t,dataList:e},slot:"body"})})],2)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"ul"},[s("li",{staticClass:"li"},[e._v("使用 row 在水平方向创建一行")]),e._v(" "),s("li",{staticClass:"li"},[e._v("将一组 col 插入在 row 中")]),e._v(" "),s("li",{staticClass:"li"},[e._v("在每个 col 中，键入自己的内容")]),e._v(" "),s("li",{staticClass:"li"},[e._v("通过设置 col 的 span 参数，指定跨越的范围，其范围是 1 到 24")]),e._v(" "),s("li",{staticClass:"li"},[e._v("每个 row 中的 col 总和应该为 24")])])}]}}});