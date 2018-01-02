webpackJsonp([76],{61:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:"\n<template>\n  <emfe-select :datas=\"radio\"></emfe-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        radio: [\n          {\n            name: '可用',\n            disabled: false,\n          },\n          {\n            name: '可用',\n            disabled: false,\n          },\n          {\n            name: '禁用',\n            disabled: true,\n          },\n        ],\n      };\n    },\n  },\n<\/script>",checkbox:"\n<template>\n  <emfe-select :datas=\"checkbox\" type=\"checkbox\" :check-vals=\"checkboxVals\"></emfe-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checkboxVals: ['可选并选中', '不可选并选中'],\n        checkbox: [\n          {\n            name: '可选并选中',\n            checked: true,\n          },\n          {\n            name: '可选并未选中',\n          },\n          {\n            name: '不可选并未选中',\n            disabled: true,\n          },\n          {\n            name: '不可选并选中',\n            checked: true,\n            disabled: true,\n          },\n        ],\n      };\n    },\n  },\n<\/script>",error:'\n<template>\n  <emfe-button @click="isError = true;">点击报错</emfe-button>\n  <br>\n  <br>\n  <emfe-select :err-ok="isError" :datas="error">\n    <div slot="error">错误提示</div>\n  </emfe-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        isError: false,\n        error: [\n          {\n            name: \'报错文字1\',\n          },\n          {\n            name: \'报错文字2\',\n          },\n        ],\n      };\n    },\n  },\n<\/script>',news:"\n<template>\n  <emfe-select :datas=\"news\" news @add=\"add\"></emfe-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        news: [\n          {\n            name: '新建文字1',\n          },\n          {\n            name: '新建文字2',\n          },\n        ],\n      };\n    },\n    methods: {\n      add(nData) {\n        this.news.push({\n          name: nData,\n        });\n      },\n    },\n  },\n<\/script>",tips:'\n<template>\n  <emfe-select :datas="tips" tip="提示文字" placement="right"></emfe-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        tips: [\n          {\n            name: \'提示文字1\',\n          },\n          {\n            name: \'提示文字2\',\n          },\n        ],\n      };\n    },\n  },\n<\/script>',disabled:'\n<emfe-select :datas="[]" :disabled="true"></emfe-select>',direction:"\n<template>\n  <emfe-select :datas=\"direction\" direction=\"top\"></emfe-select>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        direction: [\n          {\n            name: '向上文字1',\n          },\n          {\n            name: '向上文字2',\n          },\n        ],\n      };\n    },\n  },\n<\/script>"}}});