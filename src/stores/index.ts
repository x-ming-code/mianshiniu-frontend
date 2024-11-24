import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./loginUser";

const store = configureStore({
    reducer: {
        //reducer这是一个对象，其中的每个键值对表示一个 reducer 函数。
        // 在本例中，loginUser 是一个 reducer 函数，它负责管理用户的登录状态。
        //loginUser: 这是一个 reducer 函数，通常从同一个目录下的文件中导入。
        //这里的loginUser是同级目录下加入的的loginUser
        loginUser,
    },
});


// 用于类型推断和提示
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
