<template>
  <h1>AI학부</h1>
  <div v-if="writePermission">
    <WriteButton></WriteButton>
  </div>
  <div class="card" v-if="serverState">
    <h1>{{ pageNumLocal }}번째 페이지</h1>
    <div v-if="loading">로딩</div>
    <dl>
      <!-- JSON 객체를 받아와서 v-for 로 데이터를 씌워줌-->
      <div class="listDeco" v-for="key in contents" v-bind:key="key">
        <!-- v-bind 를 통해서 속성에도 값을 넣어줄 수 있음-->
        <!--<div class="articleType" v-bind:style="notice.color"><a>{{ notice.tag }}</a></div>-->
        <dt>
          <a @click="inValues(key.id)">{{ key.title }}</a>
        </dt>
        <dd>{{ key.date }}</dd>
      </div>
    </dl>
  </div>
  <div class="underButtonsArea" v-if="serverState">
    <div class="underButtons">
      <button @click="page_rest" v-if="pageNumLocal > 1">첫 페이지</button>
      <button @click="back()" v-if="pageNumLocal > 1">이전 페이지</button>
      <button @click="plus()">다음 페이지</button>
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
    name: "AiCampus",
    components: {
      WriteButton
    },
    data() {
      return {
        table: 'CampusBoard_AI',
        contents: [{
          id: null,
          title: null,
          user: null,
          date: null
        }],
        pageNumLocal: 1,
        serverState: true,
        errorComponent: false,
        loading: false,
        writePermission: false
      };
    },
    created() {
      axios.get(process.env.VUE_APP_IP + "/community/list/" + this.table)
          .then(res => {
            this.contents = res.data
          })
          .catch(err => {
            // 오류 코드 출력
            console.log(err);
          });
      // 권한 따라서 보이게 그 글 쓰기 버튼 보이게 하기
      if (this.$store.getters.getUserStore.department === "AI컴퓨터정보과" || this.$store.getters.getUserStore.stu_rank === "관리자") {
        this.writePermission = true;
      } else {
        this.writePermission = false;
      }
    },
    methods: {
      inValues(a) {
        this.$router.push(`/read-contents?type=community&table=${this.table}&number=${a}`);
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
}

.articleType {
  float: left;
  border-radius: 10px;
  margin: 0 3% 0 3%;
  padding: 5px 0 5px 0;
  width: 30px;
  height: 20px;
  text-align: center;
}

.articleType > a {
  width: 100%;
  height: 100%;
  font-size: 8pt;
  color: var(--blue-card-text);
  font-weight: bolder;
}

.card > dl {
  margin: 0 auto;
  width: 90%;
  text-decoration-color: #454545;
  font-weight: normal;
}

.card > dl > .listDeco {
  margin: 5px;
  padding: 3% 0 3% 0;
  border-radius: 10px;
  background: var(--notice-list-background);
}

.card > dl > .listDeco > dt {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10pt;
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
  margin: 10px 5px 0 5px;
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
</style>