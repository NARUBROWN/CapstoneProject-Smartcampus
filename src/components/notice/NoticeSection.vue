<template>
  <div class="card">
    <h1>전체</h1>
    <dl>
      <!-- JSON 객체를 받아와서 v-for 로 데이터를 씌워줌-->
      <div class="listDeco" v-for="notice in new_notices" v-bind:key="notice">
        <!-- v-bind 를 통해서 속성에도 값을 넣어줄 수 있음-->
        <div class="articleType" v-bind:style="notice.color"><a>{{ notice.tag }}</a></div>
        <dt>
          <a @click="inValues(notice.code)">{{ notice.title }}</a>
        </dt>
        <dd>{{ notice.writeday }}</dd>
      </div>
      <a @click="plus()">{{ plusRs }}</a>
    </dl>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NoticeSection",
  data() {
    return {
      new_notices: [],
      plusRs: 1
    };
  },
  //mounted 이벤트 어쩌고 저쩌고...
  mounted: function () {
    axios
        .get("http://localhost:3000/all_board/" + this.$route.query.pageNum + "/board")
        .then(res => {
          this.new_notices = res.data;
        })
        .catch(err => {
          console.log(err);
        });
  },
  methods: {
    // inValues 함수를 정의 Parameter 로 code를 받아 게시판 code 정보를 가지고 옴
    inValues(a) {
      // data 에 정의된 number 에 a를 대입
      this.number = a;

      // axios 를 통해 GET 요청을 보냄
      // con 에 parameter 로 게시판 code 를 담아서 보냄
      // 이제 express 에서 parameter 를 받아 사용자가 요청한 게시판을 크롤링해줌
      axios.get('http://localhost:3000/con/' + a)
          .then(res => {
            // 요청 성공 코드 출력
            console.log(`status code: ${res.status}`);
            // 요청 성공시 /read-contents 페이지로 Parameter 로 게시판 code 와 함께 이동시킴
            this.$router.push('/read-contents?number=' + a);
          })
          .catch(err => {
            // 오류 코드 출력
            console.log(err);
          })
    },
    plus() {
      this.plusRs = this.plusRs + 1;
      let pageNum = this.plusRs;

      axios.get('http://localhost:3000/all_board/' + pageNum)
          .then(res => {
            // 요청 성공 코드 출력
            console.log(`status code: ${res.status}`);
            // 요청 성공시 /read-contents 페이지로 Parameter 로 게시판 code 와 함께 이동시킴
            this.$router.push('/notice?pageNum=' + pageNum);
            location.reload();

            // 값이 새로고침 할때 유지되지 않는 부분 수정해야 함.
            // 메인화면에서 이 페이지로 올때 값이 없어서 페이지를 못 불러오는 문제도 해결해야 함
          })
          .catch(err => {
            // 오류 코드 출력
            console.log(err);
          })
    }
  },
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


</style>