webpackJsonp([83],{50:function(n,p,e){"use strict";Object.defineProperty(p,"__esModule",{value:!0}),p.default={base:'\n<template>\n  <emfe-iscroll ref="iscroll" class="iscroll-wrap" :options="config">\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n  </emfe-iscroll>\n</template>\n<style>\n.iscroll-wrap {\n  border: 1px solid #dcdcdc;\n  position: relative;\n  height: 100px;\n  overflow: hidden;\n}\n</style>\n<script>\n  export default {\n    data() {\n      config: {\n        scrollbars: true,\n        mouseWheel: true,\n        click: false,\n        preventDefault: true,\n      },\n    },\n  },\n<\/script>',act:'\n<template>\n  <emfe-iscroll ref="iscroll2" class="iscroll-wrap" :options="config">\n    <p>\n      <br>\n      <emfe-button @click="scrollToTop">点击滚动到 这里</emfe-button>\n      <br>\n      <br>\n    </p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p><span style="color: #f00;">这里</span></p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n    <p>一些不必要的内容</p>\n  </emfe-iscroll>\n</template>\n<style>\n.iscroll-wrap {\n  border: 1px solid #dcdcdc;\n  position: relative;\n  height: 100px;\n  overflow: hidden;\n}\n</style>\n<script>\n  export default {\n    data() {\n      config: {\n        scrollbars: true,\n        mouseWheel: true,\n        click: false,\n        preventDefault: true,\n      },\n    },\n    methods: {\n      scrollToTop() {\n        const myScroll = this.$refs.iscroll2;\n        const scrollEle = myScroll.$el;\n        myScroll.scrollToElement(scrollEle.querySelector(\'p:nth-child(11)\'), null, null, true);\n      },\n    },\n  },\n<\/script>',showhide:'\n<template>\n  <div>\n    <emfe-button @click="tipBtn">点击我出现弹出框的滚动</emfe-button>\n    <emfe-modal :show="tipShow" title="我是提示框" @close="tipClose" @cancel="tipClose" @ok="tipClose" okText="保存" :cancelFlg="false" :tip="true">\n      <div slot="modal-main">\n        <emfe-button @click="showHide">{{lang ? \'隐藏\' : \'展开\'}}不必要的内容</emfe-button>\n        <br>\n        <br>\n        <br>\n        <emfe-iscroll ref="iscroll3" class="iscroll-wrap" :options="config">\n          <div v-show="lang">\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n          </div>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <p>一些不必要的内容</p>\n          <div v-show="lang">\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n            <p>新增的很多不必要的很容</p>\n          </div>\n        </emfe-iscroll>\n      </div>\n    </emfe-modal>\n  </div>\n</template>\n<style>\n.iscroll-wrap {\n  border: 1px solid #dcdcdc;\n  position: relative;\n  height: 100px;\n  overflow: hidden;\n}\n</style>\n<script>\n  export default {\n    data() {\n      tipShow: false,\n      tipIndex: 1,\n      lang: false,\n      config: {\n        scrollbars: true,\n        mouseWheel: true,\n        click: false,\n        preventDefault: true,\n      },\n    },\n    methods: {\n      tipBtn() {\n        this.tipShow = true;\n        this.tipIndex = 3;\n      },\n      tipClose() {\n        this.tipShow = false;\n        this.tipIndex = 1;\n      },\n      showHide() {\n        this.lang = !this.lang;\n        this.refresh();\n      },\n      refresh() {\n        this.$refs.iscroll3.refresh();\n      },\n    },\n  },\n<\/script>'}}});