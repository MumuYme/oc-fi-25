import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state (){
        return{
            labName: 'Web工学',
            labDescription: 'インターネットでは、ブログやTwitter(X)、Wikipediaのように参加者自身がコンテンツを作成・公開していくことができます。このような大量のコンテンツの中から、利用者が必要としている情報を抽出・推薦・分類・統合して活用するための研究を行っています。'
        }
    },
    plugins: [
        createPersistedState(),
    ]
})