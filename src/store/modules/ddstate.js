/**
 * Created by lzl on 17/2/14.
 */
import base from '@/api/baseConfig'
import ding from '@/lib/ding'
const localStorage = global.localStorage;
const AUTH_DDCONFIG = 'auth.ddconfig';
const AUTH_DINGTALKCODE = 'auth.dingtalkcode';

export default {
  state: {
    ddConfig: localStorage.getItem(AUTH_DDCONFIG) || null,
    ddConfigStatus: null,
    ddConfigCode: null,
    ddUserID: '',
    ddConfigPath: '' || base.baseURL,
    ddAddress: '',
    loginStatus: false,
    itemIndex: 1,
    dingtalk_code: localStorage.getItem(AUTH_DINGTALKCODE) || null
  },
  actions: {
    dcSuccess({commit}, config) {
      commit('DDCONFIG_SUCCESS', config);
    },
    saveDingTalkCode({commit}) {
      let code = ding.parseParam(window.location.href, 'dingtalk_code') || ''
      commit('SAVE_DINGTALK_CODE', code);
    },
    saveURL({commit}, url) {
      commit('SAVE_URL', url);
    },
    saveLoginStatus({commit}, status) {
      commit('SAVE_LOGIN_STATUS', status);
    },
    saveItemIndex({commit}, index) {
      commit('SAVE_ITEM_INDEX', index);
    },
    dcFail({commit}) {
      commit('DDCONFIG_FAIL');
    },
    updateCode({commit}, code) {
      commit('UPDATE_CODE', code);
    },
    updateUserID({commit}, userid) {
      commit('UPDATE_USERID', userid);
    },
    updateAddress({commit}, address) {
      commit('UPDATE_ADDRESS', address);
    }
  },
  mutations: {
    'DDCONFIG_SUCCESS'(state, config) {
      state.ddConfig = config
      state.ddConfigStatus = true
      localStorage.removeItem(AUTH_DDCONFIG);
      localStorage.setItem(AUTH_DDCONFIG, JSON.stringify(config));
    },
    'DDCONFIG_FAIL'(state) {
      state.ddConfig = null
      state.ddConfigStatus = false
    },
    'UPDATE_CODE'(state, code) {
      state.ddConfigCode = code
    },
    'UPDATE_USERID'(state, userid) {
      state.ddUserID = userid
    },
    'SAVE_URL'(state, url) {
      state.ddConfigPath = url
    },
    'UPDATE_ADDRESS'(state, address) {
      state.ddAddress = address
    },
    'SAVE_LOGIN_STATUS'(state, status) {
      state.loginStatus = status
    },
    'SAVE_ITEM_INDEX'(state, index) {
      state.itemIndex = index
    },
    'SAVE_DINGTALK_CODE'(state, code) {
      state.dingtalk_code = code
      localStorage.removeItem(AUTH_DINGTALKCODE);
      localStorage.setItem(AUTH_DINGTALKCODE, code);
    }
  },
  getters: {
    getddConfig: state => state.ddConfig,
    getddConfigCode: state => state.ddConfigCode,
    getddConfigPath: state => state.ddConfigPath,
    getddUserID: state => state.ddUserID,
    getddAddress: state => state.ddAddress,
    getLoginStatus: state => state.loginStatus,
    getItemIndex: state => state.itemIndex,
    getDingTalkCode: state => state.dingtalk_code
  }
}
