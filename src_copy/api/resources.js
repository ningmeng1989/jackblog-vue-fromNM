/**
 * Created by JIANBO on 2016/11/3.
 */
import Vue from 'vue';
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'
import {getCookie,signOut} from '../utils/authService'

Vue.use(VueResource);

Vue.http.options.crossOrigin=true;
Vue.http.options.credentials=true;

Vue.http.interceptors.push((request,next)=>{
    request.headers=request.headers||{};
    if(getCookie('token')){
        request.headers.Authorization='Bearer'+getCookie('token').replace(/(^\")|(\"$)/g,'');
    }
    next((request)=>{
        if(request.status===401){
            signOut();
            window.location.pathname='/login';
        }
    });
});

export const UserResource=Vue.resource(API_ROOT+'users{/id}');
export const AuthResource=Vue.resource(API_ROOT+'auth{/id}');
export const ArticleResource=Vue.resource(API_ROOT+'article{/id}{/controller}')
export const TagResource=Vue.resource(API_ROOT+'tags{/id}');
export const CommentResource=Vue.resource(API_ROOT+'comment{/id}{/controller}')
export const MobileResource=Vue.resource(API_ROOT+'mobile{/id}');