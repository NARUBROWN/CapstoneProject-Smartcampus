<template>
  <div class="card" v-if="serverState">
    <h1>{{ pageNumLocal }}번째 페이지</h1>
    <dl v-if="dataHide">
      <!-- JSON 객체를 받아와서 v-for 로 데이터를 씌워줌-->
      <div class="listDeco" v-for="notice in new_notices" v-bind:key="notice">
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
  <div class="underButtonsArea" v-if="serverState">
    <div class="underButtons">
      <button @click="page_rest" v-if="pageNumLocal > 1">첫 페이지</button>
      <button @click="back()" v-if="pageNumLocal > 1">이전 페이지</button>
      <button @click="plus()">다음 페이지</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NoticeSection",
  data() {
    return {
      new_notices: [{
        tag: "",
        title: "",
        code: 0,
        writeday: "",
      }],
      pageNumLocal: 1,
      serverState: true,
      errorComponent: false,
      loading: false,
      dataHide: false
    };
  },
  created() {
    this.req_data(0);
  },
  methods: {
    // 글 불러오는 기능
    // inValues 함수를 정의 Parameter 로 code를 받아 게시판 code 정보를 가지고 옴
    inValues(a) {
      this.$router.push('/read-contents?type=notice&number=' + a);
    },
    // 액션시 새로운 페이지를 불러오는 기능
    plus() {
      // pageNum 에 더해진 값을 사용하기
      // 첫 페이지가 두번 나오는 걸 방지하기 위해서 값이 null 일 경우에는 2를 더해줌
      if (this.pageNumLocal === null) {
        // this.pageNumLocal에 데이터가 없으면 2 삽입
        this.pageNumLocal = 2;
      } else {
        // this.pageNumLocal에 데이터가 있으면, 그 데이터에 +1
        this.pageNumLocal += 1;
      }
      // req_data에 pageNume 데이터를 파라미터로 전달
      this.req_data(this.pageNumLocal);
    },

    // 뒤로가는 기능
    back() {
      this.pageNumLocal -= 1;
      this.req_data(this.pageNumLocal);
    },

    page_rest() {
      this.pageNumLocal = 1;
      this.req_data(0);
    },

    // 백엔드에 데이터 요청하는 메소드
    async req_data(number) {
      try {
        // 로딩화면 보여주기
        this.loading = true;
        // 데이터 영역 숨기기
        this.dataHide = false;
        //parameter에 0이 들어오면 첫번째 데이터 화면을 보여줌
        if (number === 0) {
          try {
            let notice = await axios.get(process.env.VUE_APP_IP + '/crawling/notice-list/1');
            this.new_notices = notice.data;
            // 데이터 영역 다시 보여주기
            this.dataHide = true;
          } catch {
            this.serverState = false;
            this.errorComponent = true;
          }
        } else {
          // 백엔드에 데이터 요청
          let get = await axios.get(process.env.VUE_APP_IP + '/crawling/notice-list/' + number);
          console.log('req_data : ' + number + '번째 페이지를 요청하였습니다 code:' + get.status);
          this.new_notices = get.data;
          // 데이터 영역 다시 보여주기
          this.dataHide = true;
        }
      } catch {
        this.serverState = false;
        this.errorComponent = true;
      }
      // 로딩화면 끄기
      this.loading = false
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