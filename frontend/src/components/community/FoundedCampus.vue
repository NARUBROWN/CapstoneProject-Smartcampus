<template>
  <h1>미래창업학부</h1>
  <div v-if="writePermission">
    <WriteButton></WriteButton>
  </div>
  <div class="card" v-if="serverState">
    <h1>{{ pageNumLocal + 1 }}번째 페이지</h1>
    <div v-if="loading">로딩</div>
    <dl>
      <!-- JSON 객체를 받아와서 v-for 로 데이터를 씌워줌-->
      <div class="listDeco" v-for="key in contents" v-bind:key="key">
        <!-- v-bind 를 통해서 속성에도 값을 넣어줄 수 있음-->
        <!--<div class="articleType" v-bind:style="notice.color"><a>{{ notice.tag }}</a></div>-->
        <dt>
          <a @click="inValues(key.id)">{{ key.title }}</a>
        </dt>
        <dt>{{ key.user }}</dt>
        <dt>{{ key.date }}</dt>
      </div>
    </dl>
  </div>
  <div class="underButtonsArea" v-if="serverState">
    <div class="numberBtn" v-for="page in contentPage" v-bind:key="page">
      <a @click="getPage(page)">{{ page }}</a>
    </div>
    <div class="underButtons">
      <button @click="page_rest" v-if="pageNumLocal > 0">첫 페이지</button>
      <button @click="back" v-if="pageNumLocal > 0">이전 페이지</button>
      <button @click="plus()" v-if="pageNumLocal < contentPage - 1">다음 페이지</button>
    </div>
  </div>
  <div class="errorCard" v-if="errorComponent">
    <h1>연결을 확인해주세요. 서버와 통신할 수 없습니다.</h1>
  </div>
</template>

<script>

import axios from "axios";
import WriteButton from "@/components/community/WriteButton";

export default {
  name: "FoundedCampus",
  components: {
    WriteButton
  },
  data() {
    return {
      table: 'CampusBoard_Founded',
      contents: [{
        id: null,
        title: null,
        user: null,
        date: null
      }],
      contentRow: null,
      contentPage: null,
      pageNumLocal: 0,
      serverState: true,
      errorComponent: false,
      loading: false,
      writePermission: false
    };
  },
  created() {
    this.getPage();
    // 권한 따라서 보이게 글 쓰기 버튼 보이게 하기
    this.writePermission = this.$store.getters.getUserStore.department === "미래창업학부" || this.$store.getters.getUserStore.stu_rank === "관리자";
  },
  methods: {
    inValues(a) {
      this.$router.push(`/read-contents?type=community&table=${this.table}&number=${a}`);
    },
    plus() {
      this.pageNumLocal += 1;
      this.getPage();
    },
    async getPage(e) {
      // parameter가 입력되지 않으면, 첫번째 페이지 로드
      if (e === undefined) {
        try {
          let page = await axios.get(process.env.VUE_APP_IP + "/community/list/" + this.table + "/" + this.pageNumLocal);
          // 11번째에 배열에 있는 정보를 가져온다. (페이징을 위한 정보)
          this.contentRow = page.data.slice(-1)[0].contentRow;
          this.contentPage = page.data.slice(-1)[0].contentPage;
          // 11번째 배열을 삭제한다.
          page.data.pop();
          this.contents = page.data;
        } catch {
          //
        }
      } else {
        let pageNum = e - 1;
        try {
          let page = await axios.get(process.env.VUE_APP_IP + "/community/list/" + this.table + "/" + pageNum);
          // 11번째 배열을 삭제한다.
          page.data.pop();
          this.contents = page.data;
        } catch {
          //
        }
        // pageNumLocal에  파라미터 값 입력
        this.pageNumLocal = pageNum;
      }
    },
    page_rest() {
      this.pageNumLocal = 0;
      this.getPage();
    },
    back() {
      this.pageNumLocal -= 1;
      this.getPage();
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


.card {
  margin: 0 auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: var(--card);
  color: var(--text-color);
}

.card > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
  text-align: left;
}

.card > dl {
  margin: 0 auto;
  width: 90%;
  text-decoration-color: #454545;
  font-weight: normal;
}

.card > dl > .listDeco {
  margin: 5px;
  padding: 3% 3% 3% 3%;
  border-radius: 10px;
  background: var(--notice-list-background);
}

.card > dl > .listDeco > dt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10pt;
  display: inline-block;
  vertical-align: middle;
}

.card > dl > .listDeco > dt:first-of-type {
  width: 49%;
  font-size: 12pt;
  margin-right: 5%;
}

.card > dl > .listDeco > dt:nth-of-type(2) {
  margin-right: 10px;
}

.card > dl > .listDeco > dt:nth-of-type(3) {
  margin-top: 1px;
  float: right;
}

.card > dl > .listDeco > dt > a {
  font-weight: bold;
}

.card > dl > .listDeco > dd {
  margin: 3px 0 0 40px;
  font-size: 8pt;
}

.underButtonsArea {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

.underButtons > button {
  margin: 20px 5px 0 5px;
  width: 27%;
  height: 30px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  color: var(--blue-card-text);
  background: var(--blue-card);
  font-weight: bolder;
  font-size: 13px;
}

.errorCard {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: #FF3B30;
}

.errorCard > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
  color: #ffffff;
}

.numberBtn {
  display: inline-block;
  width: 4%;
  padding: 5px;
  border-radius: 8px;
  font-weight: bold;
  background: var(--blue-card);
  margin: 20px 15px 0 15px;
  transition-duration: 0.3s;
}

.numberBtn:active {
  margin-left: 10px;
  margin-top: 10px;
  box-shadow: none;
}

.numberBtn a:first-of-type {
  color: var(--blue-card-text);
}
</style>