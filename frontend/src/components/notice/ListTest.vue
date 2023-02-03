<template>
  <div class="card">
    <h1>유저 리스트</h1>
    <dl>
      <!-- JSON 객체를 받아와서 v-for 로 데이터를 씌워줌-->
      <div class="listDeco" v-for="notice in user_data" v-bind:key="notice">
        <!-- v-bind 를 통해서 속성에도 값을 넣어줄 수 있음-->
        <div class="articleType" v-bind:style="notice.color"><a>{{ notice.id }}</a></div>
        <dt>
          <a @click="inValues(notice.code)">{{ notice.name }} {{ notice.stu_rank }}</a>
        </dt>
        <dd>{{ notice.department }}</dd>
      </div>
    </dl>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ListTest",
  data() {
    return {
      user_data: [{
        id: 0,
        name: "",
        department: "",
        stu_rank: "",
        stu_number: 0
      }],
      pageNumLocal: 1
    };
  },
  created() {
    this.req_data();
  },
  methods: {
    // 백엔드에 데이터 요청하는 메소드
    async req_data() {
      try {
        let user = await axios.get(process.env.VUE_APP_IP + '/profile_list');
        this.user_data = user.data;
      } catch {
        console.log("실패")
      }
    }
  }
}
</script>

<style scoped>

.card {
  margin: 10px auto;
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
  margin: 2px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10pt;
}

.card > dl > .listDeco > dt > a {
  font-weight: bold;
}

.card > dl > .listDeco > dd {
  margin: 1px 0 0 40px;
  font-size: 9pt;
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
  font-family: inherit;
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