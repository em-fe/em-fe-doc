webpackJsonp([87],{47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={base:"\n<template>\n  <emfe-imgcode :src=\"src\" v-model=\"model\" @click=\"click\"></emfe-imgcode>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        model: '',\n        src: 'https://static.evente.cn/evente/img/flag/v1/mlxy.jpg',\n      };\n    },\n    methods: {\n      click() {\n        this.src = 'https://static.evente.cn/evente/img/flag/v1/de.jpg';\n      },\n    },\n  },\n<\/script>"}}});