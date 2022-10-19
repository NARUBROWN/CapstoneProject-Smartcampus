import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from "axios";

axios.defaults.withCredentials = true;

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            user_data: {
                login_state: false,
                id: null,
                name: null,
                stu_number: null,
                department: null,
                stu_rank: null,
                password: null,
                img: null,
                code: null
            }
        }
    },
    getters: {},
    mutations: {
        login: function (state, user_info) {
            state.user_data["login_state"] = true
            state.user_data["id"] = user_info["id"]
            state.user_data["name"] = user_info["name"]
            state.user_data["stu_number"] = user_info["stu_number"]
            state.user_data["department"] = user_info["department"]
            state.user_data["stu_rank"] = user_info["stu_rank"]
            state.user_data["password"] = user_info["password"]
            state.user_data["img"] = user_info["img"]
            state.user_data["code"] = user_info["code"]
        },
        logout(state) {
            state.user_data["login_state"] = false
            state.user_data["id"] = null
            state.user_data["name"] = null
            state.user_data["stu_number"] = null
            state.user_data["department"] = null
            state.user_data["stu_rank"] = null
            state.user_data["password"] = null
            state.user_data["img"] = null
            state.user_data["code"] = null
        }
    },
    actions: {
        async login(context, payload) {
            try {
                // 백엔드에 요청된 데이터를 가져오기
                let user = await axios({
                    method: "post",
                    url: process.env.VUE_APP_IP + "/post/login",
                    data: {
                        stu_num: payload.stu_num,
                        password: payload.password
                    }
                })

                // user.data를 state로 커밋
                context.commit('login', user.data)

                //로그인 로직 수행
                if (context.state.user_data['code'] === 0) {
                    this.$toast.warning('아무것도 입력되지 않았습니다.', {
                        position: 'bottom'
                    });
                } else if (context.state.user_data['code'] === 1) {
                    // 학번 틀림
                } else if (context.state.user_data['code'] === 2) {
                    // 비밀번호 틀림
                } else if (context.state.user_data['code'] === 3) {
                    // 페이지 프로필을 새로 고치기 위해서 로컬스토리지에 값을 주고 Create시에 그 값이 확인되면 메인 페이지로 로드
                    // 1. 로컬스토리지에 키 저장
                    localStorage.setItem('loginLogic', '1');
                    // 2. 페이지 새로고침
                    location.reload();
                }
            } catch (e) {
                console.log("새로운 데이터를 불러오지 못했습니다. " + e);
            }
        },
        async update(context, payload) {
            try {
                // 백엔드에 요청된 데이터를 가져오기
                let user = await axios({
                    method: "post",
                    url: process.env.VUE_APP_IP + "/post/login",
                    data: {
                        stu_num: payload.stu_num,
                        password: payload.password
                    }
                })

                // user.data를 state로 커밋
                context.commit('login', user.data)

                //로그인 로직 수행
                if (context.state.user_data['code'] === 0) {
                    // 아무것도 입력 안됨
                } else if (context.state.user_data['code'] === 1) {
                    // 학번 틀림
                } else if (context.state.user_data['code'] === 2) {
                    // 비밀번호 틀림
                } else if (context.state.user_data['code'] === 3) {
                    // 페이지 새로 고침
                    location.reload();
                }
            } catch (e) {
                console.log("새로운 데이터를 불러오지 못했습니다. " + e);
            }
        }

    },
    plugins: [
        createPersistedState()
    ]
})