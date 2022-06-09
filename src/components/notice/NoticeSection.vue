<template>
  <div class="card">
    <h1>전체</h1>
    <dl>
      <div class="listDeco" v-for="notice in new_notices" v-bind:key="notice">
        <div class="articleType" v-bind:style="notice.color"><a>{{ notice.tag }}</a></div>
        <dt><a v-bind:href="notice.url">{{ notice.title }}</a></dt>
        <dd>{{ notice.writeday }}</dd>
      </div>
    </dl>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NoticeSection",
  data() {
    return {
      new_notices: []
    };
  },
  //mounted 이벤트 어쩌고 저쩌고...
  mounted: function () {
    axios
        .get("http://localhost:3000/all_board")
        .then(res => {
          this.new_notices = res.data;
        })
        .catch(err => {
          console.log(err);
        });
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