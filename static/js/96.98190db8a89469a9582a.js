webpackJsonp([96],{38:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:"\n<template>\n  <emfe-edit :one-list=\"oneList\" :add-one-obj=\"addOneObj\" one-placeholder=\"一级选项提示\" two-placeholder=\"二级选项提示\" :add-two-obj=\"addTwoObj\"></emfe-edit>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        oneList: [\n          {\n            name: '李红星',\n            sub_choices: [\n              {\n                name: '男',\n              },\n              {\n                name: '天秤座',\n              },\n            ],\n          },\n          {\n            name: '李偶得',\n            sub_choices: [\n              {\n                name: '男',\n              },\n              {\n                name: '射手座',\n              },\n            ],\n          },\n        ],\n        addOneObj: {\n          name: '一级选项',\n          sub_choices: [\n            {\n              name: '二级选项',\n            },\n            {\n              name: '二级选项',\n            },\n          ],\n        },\n        addTwoObj: {\n          name: '二级选项',\n        },\n      };\n    },\n  },\n<\/script>"}}});