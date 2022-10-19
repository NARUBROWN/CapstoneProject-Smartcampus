<template>
  <div class="page-scroll">
    <ul>
      <li @click="changeFocus(`campusCommunity`)" id="main">메인</li>
      <li @click="changeFocus(`aiCampus`)">AI</li>
      <li @click="changeFocus(`humanitiesCampus`)">인문</li>
      <li @click="changeFocus(`natureCampus`)">자연</li>
      <li @click="changeFocus(`artCampus`)">예술</li>
      <li @click="changeFocus(`foundedCampus`)">창업</li>
    </ul>
  </div>
  <div>
    <div v-if="pageFocus.campusCommunity">
      <CampusCommunity></CampusCommunity>
    </div>
    <div v-if="pageFocus.aiCampus">
      <AiCampus></AiCampus>
    </div>
    <div v-if="pageFocus.humanitiesCampus">
      <HumanitiesCampus></HumanitiesCampus>
    </div>
    <div v-if="pageFocus.natureCampus">
      <NatureCampus></NatureCampus>
    </div>
    <div v-if="pageFocus.artCampus">
      <ArtCampus></ArtCampus>
    </div>
    <div v-if="pageFocus.foundedCampus">
      <FoundedCampus></FoundedCampus>
    </div>
  </div>

</template>

<script>
import CampusCommunity from "@/components/community/CampusCommunity.vue";
import AiCampus from "@/components/community/AiCampus";
import HumanitiesCampus from "@/components/community/HumanitiesCampus";
import NatureCampus from "@/components/community/NatureCampus";
import ArtCampus from "@/components/community/ArtCampus";
import FoundedCampus from "@/components/community/FoundedCampus";

export default {
  name: "CampusCommunityView",
  components: {
    CampusCommunity,
    AiCampus,
    HumanitiesCampus,
    NatureCampus,
    ArtCampus,
    FoundedCampus
  },
  data() {
    return {
      pageFocus: {
        campusCommunity: null,
        aiCampus: null,
        humanitiesCampus: null,
        natureCampus: null,
        artCampus: null,
        foundedCampus: null
      }
    }
  },
  created() {
    this.pageFocus.campusCommunity = true
  },
  mounted() {
    // 템플릿이 render 된 직후 DOM 요소를 사용하여 클래스 부여
    document.getElementById("main").className = "selected"
  },
  beforeUpdate() {
    // 템플릿이 render 된 이후 액션이 발생하면 부여된 클래스를 삭제
    document.getElementById("main").className = ""
  },
  methods: {

    changeFocus(key) {
      let changedObject = new Object();
      const objectKeys = Object.keys(this.pageFocus)

      for (let i = 0; i < objectKeys.length; i++) {
        if (objectKeys[i] === key) {
          objectKeys.splice(i, 1)
        }
      }

      objectKeys.forEach((object) => {
        changedObject[object] = false
      })
      changedObject[key] = true
      this.pageFocus = changedObject
    }
  }
}

</script>

<style scoped>
h1 {
  margin: 15% 0 15% 0;
  text-align: center;
  color: var(--text-color)
}

.page-scroll {
  width: 100%;
  height: 51px;
  background: var(--card);
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 auto;
}

.page-scroll ul {
  margin: 0;
  padding: 0;
}

.page-scroll ul li {
  display: inline-block;
  font-size: 18px;
  width: 110px;
  line-height: 47px;
  text-align: center;
}

.page-scroll ul li:hover {
  border-bottom: 4px solid var(--blue-card);
}

.page-scroll::-webkit-scrollbar {
  display: none;
}

.selected {
  border-bottom: 4px solid var(--blue-card);
}
</style>