// import * as API from '@/api/http'
import * as trade from '@/api/trade'
import * as types from './types'

export const eventos = ({ commit }, params) => {
  commit(types.SET_EVENTO, params)
}
export const syncTradesAction = ({ commit, rootState }) => {

console.log(rootState.usuario.usuario._id)

    trade.sync('/' + rootState.usuario.usuario._id)
        .then((response) => {
            const { data } = response;

            commit(types.SYNC_TRADES, data);
        })
        .catch((r)=>{
            console.log('teste', r);
        });
}

export const countAction = ({ commit }) => {

    trade.count()
        .then((response) => {
            const { data } = response;
            commit(types.SYNC_TRADES_COUNT, data);
        })
        .catch((r)=>{
            console.log('teste', r);
        });
}

export const insertAction = ({ commit }, params) => {

    trade.insert(params)
        .then(() => {

            commit(types.INSERT_TRADE, params);
        })
        .catch((r)=>{
            console.log('teste', r);
        });
}

export const updateAction = ({ commit }, params) => {
    console.log(params)
    trade.update(params)
        .then(() => {
            commit(types.UPDATE_CATEGORY, params)
        })
        .catch((r)=>{
            console.log('teste', r);
        });
}

export const removeAction = ({ commit }, params) => {
    trade.remove(params._id)
        .then(() => {
              commit(types.REMOVE_TRADE, params)
        })
        .catch((r)=>{
            console.log('teste', r);
        });

}
export const removeAllAction = ({ commit }) => {
  commit(types.REMOVE_ALL_TRADES)
}

export const insertSessionAction = ({ commit }, params) => {
  commit(types.INSERT_SESSION, params)
}

export const removeAllSessionAction = ({ commit }) => {
  commit(types.REMOVE_ALL_SESSION)
}

export const insertImportCEIAction = ({ commit }, params) => {
    console.log('insertImportCEIAction', params)
    trade.insertImportCEI(params)
        .then(() => {
            commit(types.UPDATE_CATEGORY, params)
        })
        .catch((r)=>{
            console.log('teste', r);
        });
}
