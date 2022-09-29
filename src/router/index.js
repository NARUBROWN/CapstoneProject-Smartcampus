import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NoticeView from "@/views/NoticeView";
import StudentInformationView from "@/views/StudentInformationView";
import MealInformationView from "@/views/MealInformationView";
import ReadView from "@/views/ReadView";
import SchoolIntroductionView from "@/views/SchoolIntroductionView";
import AcademicScheduleView from "@/views/AcademicScheduleView";
import BusScheduleView from "@/views/BusScheduleView";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
