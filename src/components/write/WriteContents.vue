<template>
  {{ this.contents }}
  <form @submit.prevent="sendPost">
    <input type="text"
           v-model="contents.title"
           name="title"
           placeholder="제목을 입력해주세요."
    />
    <input type="text"
           v-model="contents.content"
           name="title"
           placeholder="내용을 입력해주세요."
    />
    <input type="file" name="filename" id="file" ref="user_img" v-on:change="fileSelect($event)">
    <div class="underButtonsArea">
      <div class="underButtons">
        <button @click="back()">뒤로가기</button>
        <button type="submit">제출</button>
      </div>
    </div>
  </form>
</template>

<script>

import axios from "axios";

export default {
  name: "ReadContents",
  data() {
    return {
      // axios 를 통해 res.data 받은 객체를 대입 받을 곳
      contents: {
        id: null,
        title: null,
        user: null,
        date: null,
        content: null,
        image: null,
        table: "CampusBoard_Art"
      }
    };
  },
  created() {
    this.contents.id = this.$store.getters.getUserStore.id
    this.contents.user = this.$store.getters.getUserStore.name

    // 현재 시간 가져오기
    const date = new Date();
    this.contents.date = date.toLocaleDateString('ko-kr');

    // 학생 학과에 따라서 테이블 부여
    if (this.$store.getters.getUserStore.department === "AI컴퓨터정보과") {
      this.contents.table = "CampusBoard_AI"
    }
  },
  methods: {
    fileSelect(event) {
      //input file 태그.
      var file = document.getElementById('file');
      //파일 경로.
      var filePath = file.value;
      //전체경로를 \ 나눔.
      var filePathSplit = filePath.split('\\');
      //전체경로를 \로 나눈 길이.
      var filePathLength = filePathSplit.length;
      //마지막 경로를 .으로 나눔.
      var fileNameSplit = filePathSplit[filePathLength - 1].split('.');
      //파일명 : .으로 나눈 앞부분
      var fileName = fileNameSplit[0];
      //파일 확장자 : .으로 나눈 뒷부분
      var fileExt = fileNameSplit[1];

      this.fileSelectMessage = fileName.substr(0, 3) + "." + fileExt
      this.contents.image = event.target.files[0];
      this.fullFileName = fileName + "." + fileExt
    },
    sendPost() {

      if (this.contents.title === null || this.contents.title === "") {
        this.$toast.warning('글 제목을 입력해주세요.', {
          position: 'bottom'
        });
      } else if (this.contents.content === null || this.contents.content === "") {
        this.$toast.warning('글 내용을 입력해주세요.', {
          position: 'bottom'
        });
      } else {
        const formData = new FormData();
        formData.append('table', this.contents.table);
        formData.append('title', this.contents.title);
        formData.append('stu_id', this.contents.id)
        formData.append('user', this.contents.user)
        formData.append('date', this.contents.date)
        formData.append('content', this.contents.content)
        formData.append('community_image', this.contents.image)

        axios({
          method: "post", // 요청 방식
          url: process.env.VUE_APP_IP + "/community/write", // 요청 주소
          data: formData
        }).then((res) => {
          console.log(res)
        })
            .catch(function (err) {
              console.log(err); // 에러 처리 내용
            });
      }
    },
    back() {
      this.$router.go(-1)
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
  white-space: pre-line;
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
  padding: 0 0 0 15px;
}

.card > dl > .listDeco > dd {
  margin: 1px 0 0 40px;
  font-size: 9pt;
}

.imgBox {
  margin: 0 auto;
  text-align: center;
}

.imgBox > img {
  width: 90%;
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

</style>