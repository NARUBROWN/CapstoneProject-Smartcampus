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
import CampusCommunityView from "@/views/community/CampusCommunityView";
import AiCampusView from "@/views/community/AiCampusView";
import ArtCampusView from "@/views/community/ArtCampusView"
import FoundedCampusView from "@/views/community/FoundedCampusView"
import HumanitiesCampusView from "@/views/community/HumanitiesCampusView"
import NatureCampusView from "@/views/community/NatureCampusView"
import ImgEdit from "@/components/student/ImgEdit";

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
    component: ImgEdit
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
    path: '/ai-campus',
    name: 'ai-campus',
    component: AiCampusView
  },
  {
    path: '/art-campus',
    name: 'art-campus',
    component: ArtCampusView
  },
  {
    path: '/founded-campus',
    name: 'founded-campus',
    component: FoundedCampusView
  },
  {
    path: '/humanities-campus',
    name: 'humanities-campus',
    component: HumanitiesCampusView
  },
  {
    path: '/nature-campus',
    name: 'nature-campus',
    component: NatureCampusView
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: VuexTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
