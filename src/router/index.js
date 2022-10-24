import {createRouter, createWebHistory} from 'vue-router'
import {store} from "@/store";

import HomeView from '../views/HomeView.vue'
import NoticeView from "@/views/NoticeView";
import StudentInformationView from "@/views/StudentInformationView";
import MealInformationView from "@/views/MealInformationView";
import ReadView from "@/views/ReadView";
import SchoolIntroductionView from "@/views/SchoolIntroductionView";
import AcademicScheduleView from "@/views/AcademicScheduleView";
import BusScheduleView from "@/views/BusScheduleView";
import LoginView from "@/views/LoginView";
import SignUpView from "@/views/SignUpView";
import VuexTest from "@/views/VuexTest";
import studentInformationEditView from "@/views/StudentInformationEditView";
import CampusNavigatorView from "@/views/CampusNavigatorView";
import CampusCommunityView from "@/views/CampusCommunityView";
import StudentImgEditView from "@/views/StudentImgEditView";
import ErrorView from "@/views/ErrorView";
import WriteView from "@/views/WriteView";
import EditView from "@/views/EditView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticeView
  },
  {
    path: '/student-information',
    name: 'student-information',
    component: StudentInformationView,
    beforeEnter: (to, from, next) => {
      // Vuex State 에서 로그인 상태 가지고 옴
      if (store.state.user_data['login_state'] === true) {
        // 로그인 되어으면, 정상 이동
        next();
      } else {
        // 로그인 되어 있지 않으면, 에러페이지로 이동
        next('/error');
      }
    }
  },
  {
    path: '/student-information-edit',
    name: 'student-information-edit',
    component: studentInformationEditView,
    beforeEnter: (to, from, next) => {
      // Vuex State 에서 로그인 상태 가지고 옴
      if (store.getters.getUserLoginState === true) {
        // 로그인 되어으면, 정상 이동
        next();
      } else {
        // 로그인 되어 있지 않으면, 에러페이지로 이동
        next('/error');
      }
    }
  },
  {
    path: '/student-profile-img-edit',
    name: 'student-profile-img-edit',
    component: StudentImgEditView,
    beforeEnter: (to, from, next) => {
      // Vuex State 에서 로그인 상태 가지고 옴
      if (store.getters.getUserLoginState === true) {
        // 로그인 되어으면, 정상 이동
        next();
      } else {
        // 로그인 되어 있지 않으면, 에러페이지로 이동
        next('/error');
      }
    }
  },
  {
    path: '/meal-information',
    name: 'meal-information',
    component: MealInformationView
  },
  {
    path: '/read-contents',
    name: 'read-contents',
    component: ReadView
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: SchoolIntroductionView
  },
  {
    path: '/academic-schedule',
    name: 'academic-schedule',
    component: AcademicScheduleView
  },
  {
    path: '/bus-schedule',
    name: 'bus-schedule',
    component: BusScheduleView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/campus-navigator',
    name: 'campus-navigator',
    component: CampusNavigatorView
  },
  {
    path: '/campus-community',
    name: 'campus-community',
    component: CampusCommunityView
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: VuexTest
  },
  {
    path: '/write-contents',
    name: 'write-contents',
    component: WriteView,
    beforeEnter: (to, from, next) => {
      // Vuex State 에서 로그인 상태 가지고 옴
      if (store.getters.getUserLoginState === true) {
        // 로그인 되어으면, 정상 이동
        next();
      } else {
        // 로그인 되어 있지 않으면, 에러페이지로 이동
        next('/error');
      }
    }
  },
  {
    path: '/edit-contents',
    name: 'edit-contents',
    component: EditView,
    beforeEnter: (to, from, next) => {
      // Vuex State 에서 로그인 상태 가지고 옴
      if (store.getters.getUserLoginState === true) {
        // 로그인 되어으면, 정상 이동
        next();
      } else {
        // 로그인 되어 있지 않으면, 에러페이지로 이동
        next('/error');
      }
    }
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {top: 0}
  },
  routes
})

export default router
