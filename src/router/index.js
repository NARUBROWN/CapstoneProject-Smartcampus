import {createRouter, createWebHistory} from 'vue-router'

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

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticeView
  },
  {
    path: '/student-information',
    name: 'student-information',
    component: StudentInformationView
  },
  {
    path: '/student-information-edit',
    name: 'student-information-edit',
    component: studentInformationEditView
  },
  {
    path: '/student-profile-img-edit',
    name: 'student-profile-img-edit',
    component: StudentImgEditView
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
