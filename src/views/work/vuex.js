const state = {
    isCollapse: true,
    isLevelOneCollapse: true,
    isLevelTwoCollapse: false,
    upDate: '',
    }
    const getters = {
    getUpDate: state => state.upDate,
    }
    const mutations = {
    SET_ISCOLLAPSE(state, isCollapse) {
    state.isCollapse = isCollapse
    },
    SET_IS_LEVEL_ONE_COLLAPSE(state, isCollapse) {
    state.isLevelOneCollapse = isCollapse
    },
    SET_IS_LEVEL_TWO_COLLAPSE(state, isCollapse) {
    state.isLevelTwoCollapse = isCollapse
    },
    UPDATE_DATE(state, isCollapse) {
    state.upDate = isCollapse
    },
    }
    const actions = {}
    
    export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    }
    
    