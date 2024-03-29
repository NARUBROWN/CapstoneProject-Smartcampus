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
                code: 0,
                table: null,
                massage: null
            }
        }
    },
    getters: {
        getUserLoginState: state => {
            return state.user_data.login_state
        },
        getUserStore: state => {
            return state.user_data
        }
    },
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

            // 학부에 따라서 테이블 부여 *이 테이블은 글 작성시 사용됨
            if (user_info['department'] === "AI학부") {
                state.user_data["table"] = "CampusBoard_AI"
            } else if (user_info['department'] === "인문사회계열") {
                state.user_data["table"] = "CampusBoard_Human"
            } else if (user_info['department'] === "자연과학계열") {
                state.user_data["table"] = "CampusBoard_Nature"
            } else if (user_info['department'] === "예술디자인계열") {
                state.user_data["table"] = "CampusBoard_Art"
            } else if (user_info['department'] === "미래창업학부") {
                state.user_data["table"] = "CampusBoard_Founded"
            }
        },
        login_fail: function (state, user_info) {
            state.user_data["login_state"] = false
            state.user_data["massage"] = user_info["massage"]
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
            state.user_data["table"] = null
        },
        contents(state, content_info) {
            state.contents = content_info
        },
        reset_contents(state) {
            state.contents = [{
                id: null,
                title: null,
                user: null,
                date: null,
                content: null,
                image: null,
                stu_id: null
            }]
        }
    },
    actions: {
        async login(context, payload) {
            try {
                // 백엔드에 요청된 데이터를 가져오기
                let user = await axios({
                    method: "post",
                    // 새로운 URL 테스트
                    url: process.env.VUE_APP_IP + "/user/login",
                    data: {
                        stu_num: payload.stu_num,
                        password: payload.password
                    }
                })

                //로그인 로직 수행
                if (user['data']['code'] === 0) {
                    console.log(user.data);
                    context.commit('login_fail', user.data);
                } else if (user['data']['code'] === 1) {
                    console.log(user.data);
                    context.commit('login_fail', user.data);
                } else if (user['data']['code'] === 2) {
                    console.log(user.data);
                    context.commit('login_fail', user.data);
                } else if (user['data']['code'] === 3) {
                    // user.data를 state로 커밋
                    context.commit('login', user.data);
                    // 페이지 프로필을 새로 고치기 위해서 로컬스토리지에 값을 주고 Create시에 그 값이 확인되면 메인 페이지로 로드
                    // 1. 로컬스토리지에 키 저장
                    localStorage.setItem('loginLogic', '1');
                    // 2. 페이지 새로고침
                    location.reload();
                    this.$router.push('/');
                }
            } catch (e) {
                console.log("새로운 데이터를 불러오지 못했습니다. " + e);
            }
        },
        logout(context) {
            // logout mutations 호출
            context.commit('logout');
        },
        async update(context, payload) {
            try {
                // 백엔드에 요청된 데이터를 가져오기
                let user = await axios({
                    method: "post",
                    url: process.env.VUE_APP_IP + "/user/login",
                    data: {
                        stu_num: payload.stu_num,
                        password: payload.password
                    }
                })

                //로그인 로직 수행
                if (user['data']['code'] === 0) {
                    console.log("아무것도 입력 안됨");
                } else if (user['data']['code'] === 1) {
                    console.log("학번 틀림");
                } else if (user['data']['code'] === 2) {
                    console.log("비밀번호 틀림");
                } else if (user['data']['code'] === 3) {
                    // user.data를 state로 커밋
                    context.commit('login', user.data);
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