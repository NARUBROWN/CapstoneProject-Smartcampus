<template>
  <div class="card">
    <h1>공지사항</h1>
    <router-link to="/notice" class="more">더보기 +</router-link>
    <dl v-if="serverState">
      <!-- JSON 객체를 받아와서 v-for 로 데이터를 씌워줌-->
      <div class="listDeco" v-for="notice in notices" v-bind:key="notice">
        <!-- v-bind 를 통해서 속성에도 값을 넣어줄 수 있음-->
        <div class="articleType" v-bind:style="notice.color"><a>{{ notice.tag }}</a></div>
        <dt>
          <a @click="inValues(notice.code)">{{ notice.title }}</a>
        </dt>
        <dd>{{ notice.writeday }}</dd>
      </div>
    </dl>
    <div class="errorCard" v-if="errorComponent">
      <h1>연결을 확인해주세요. 서버와 통신할 수 없습니다.</h1>
    </div>
    <div class="loadingCard" v-if="loading">
      <h1>서버에서 데이터를 불러오고 있습니다.</h1>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "NoticeSection",
  data() {
    return {
      notices: [{
        tag: "",
        title: "",
        code: 0,
        writeday: ""
      }],
      number: 0,
      serverState: false,
      errorComponent: false,
      loading: false
    };
  },
  created() {
    this.req_data();
  },
  methods: {
    // inValues 함수를 정의 Parameter 로 code를 받아 게시판 code 정보를 가지고 옴
    inValues(a) {
      this.$router.push('/read-contents?type=notice&number=' + a);
    },
    async req_data() {
      this.loading = true

      try {
        let notice = await axios.get(process.env.VUE_APP_IP + '/crawling/notice-list/1');
        this.notices = notice.data.splice(0, 5);
        this.serverState = true;
        this.errorComponent = false;
      } catch {
        this.serverState = false;
        this.errorComponent = true;
      }
      // 로딩화면 끄기
      this.loading = false
    }
  },
}


</script>

<style scoped>

.card {
  margin: 0 auto;
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
  font-weight: normal;
  color: #ffffff;
}

.loadingCard {
  margin: 10px auto;
  border-radius: 10px;
  width: 95.56%;
  padding: 10px 0 10px 0;
  background-color: #FF9500;
}

.loadingCard > h1 {
  margin: 10px 0 15px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: normal;
  color: #ffffff;
}
</style>