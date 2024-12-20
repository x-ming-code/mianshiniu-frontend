import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AccessEnum from "@/access/accessEnum";


// 默认用户
const DEFAULT_USER: API.LoginUserVO = {
    userName: "未登录",
    userProfile: "暂无简介",
    userAvatar: "/assets/notLoginUser.png",
    userRole: AccessEnum.NOT_LOGIN,
};

/**
 * 登录用户全局状态
 */
export const loginUserSlice = createSlice({
    name: "loginUser",
    initialState: DEFAULT_USER, //全局状态的默认值
    reducers: {
        setLoginUser: (state, action: PayloadAction<API.LoginUserVO>) => {
            return {
                ...action.payload,
            };
        },
    },
});

// 修改状态
export const { setLoginUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
