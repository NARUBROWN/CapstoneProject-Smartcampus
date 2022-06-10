<template>
  <div class="card" v-for="component in contents" v-bind:key="component">
    <h1>{{ component.title }}</h1>
    <div>
      <h3>{{ component.view }}</h3>
      <h3>{{ component.date }}</h3>
    </div>
    <dl>
      <div class="listDeco">
        <dt><a v-bind:href="component.fileLink">{{ component.fileName }}</a></dt>
      </div>
    </dl>
    <p>
      {{ component.contents }}
      <img v-bind:src="component.img" alt="본문 첨부 사진">
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReadContents",
  data() {
    return {
      // axios 를 통해 res.data 받은 객체를 대입 받을 곳
      contents: []
    };
  },
  mounted: function () {
    axios
        // 이전 페이지에서 받아온 code Parameter 와 함께 Server 에 요청을 보냄
        // Express 에는 이미 해당 url 이 정의되어있음
        .get("http://localhost:3000/" + this.$route.query.number + "/notice")
        .then(res => {
          // data 에 정의된 contents 객체에 data 를 대입
          this.contents = res.data;
        })
        .catch(err => {
          console.log(err);
        });
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
  margin: 10px 0 0 0;
  padding: 0 0 0 20px;
  font-size: 16pt;
  font-weight: bold;
}

.card > div > h3 {
  margin: 5px 0 5px 0;
  padding: 0 0 0 20px;
  font-size: 9pt;
}

.card > p {
  margin: 0 auto;
  width: 90%;
  padding: 0 0 3% 0;
}

.articleType > a {
  width: 100%;
  height: 100%;
  font-size: 8pt;
  color: var(--blue-card-text);
  font-weight: bold;
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

.card > dl > .listDeco > dd {
  margin: 1px 0 0 40px;
  font-size: 9pt;
}

</style>