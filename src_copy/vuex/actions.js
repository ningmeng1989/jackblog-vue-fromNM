/**
 * Created by JIANBO on 2016/11/3.
 */
import api from '../api'
import * as types from './types'
import {saveCookie,singOut} from '../utils/authService'
import img from '../assets/images/shanghai.jpg'

export const showMsg=({dispatch},content,type='error')=>{
    dispatch(types.SHOW_MSG,{content:content,type:type})
};

export const hideMsg=({dispatch})=>{
    dispatch(types.HIDE_MSG)
};

export const changeStyleMode=({dispatch})=>{
    dispatch(types.CHANGE_STYLE_MODE)
};

export const getCaptchaUrl=({dispatch})=>{
    dispatch(types.GET_CAPTCHAURL)
};

export const getIndexImage=({dispatch})=>{
    api.getIndexImage().then(response=>{
        if(!response.ok){
            return dispatch(types.GET_INDEX_IMG,{indexImg:img})
        }
        dispatch(types.GET_INDEX_IMG,{indexImg:response.data.img})
    },response=>{
        dispatch(types.GET_INDEX_IMG,{indexImg:img})
    })
};

export const logout=({dispatch,router})=>{
    singOut();
    dispatch(types.LOGOUT_USER);
    window.location.pathname='/';
};

export const getSnsLogins=({dispatch})=>{
    api.getSnsLogins().then(response=>{
        if(!response.ok){
            return dispatch(types.FAILURE_GET_SNSLOGINS);
        }
        dispatch(types.SUCCESS_GET_SNSLOGINS,response.data.data)
    },response=>{
        dispatch(types.FAILURE_GET_SNSLOGINS)
    })
};

export const localLogin=(store,userInfo)=>{
    api.localLogin(userInfo).then(response=>{
        if(!response.ok){
            getCaptchaUrl(store);
            return showMsg(store,response.data.error_msg||'登录失败')
        }
        const token=response.data.token;
        saveCookie('token',token);
        getUserInfo(store);
    },response=>{

    })
};


















