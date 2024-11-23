const { generateService } = require("@umijs/openapi");

generateService({
    //导入的是自己定义@/libs/request下的requese.ts请求文件 @表示src目录
    requestLibPath: "import request from '@/libs/request'",
    //自己后端的swagg接口文档地址
    schemaPath: "http://localhost:8101/api/v2/api-docs",
    //生成的代码的目录在src下
    serversPath: "./src",
});
