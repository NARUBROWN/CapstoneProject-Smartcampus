<template>
  <router-link to="/write-contents">
    <div class="writeButton">
      <h1>글 작성하기</h1>
      <img src="@/assets/community/write.svg" alt="글 작성 아이콘">
    </div>
  </router-link>
</template>

<script>

export default {
  name: "WriteButton",
  data() {
    return {};
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

.writeButton {
  margin: 10px auto 0;
  border-radius: 10px 10px 0 0;
  width: 85.56%;
  height: 40px;
  padding: 2px 0 2px 0;
  background-color: var(--blue-card);
}

.writeButton > hr {
  margin: 0 0 0 25px;
  width: 50%;
  border: var(--blue-card-hr) solid 0.05rem;
}

.writeButton > h1 {
  float: left;
  margin: 10px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: 700;
  color: var(--blue-card-text);
}

.writeButton > h2 {
  margin: 10px 0 5px 0;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.writeButton > p {
  margin: 7px 0 20px 0;
  padding: 0 0 0 25px;
  font-size: 9pt;
  color: var(--blue-card-text);
}

.writeButton > img {
  float: right;
  margin: 5px 25px 0 0;
  padding: 0;
  width: 9%;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(181deg) brightness(104%) contrast(102%);
}

.writeButton > h3 {
  float: right;
  margin: -30px 28px 0 0;
  font-size: 8pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

</style>