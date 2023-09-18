<template>
  <div class="card">
    <h1>전체 서비스</h1>
    <table>
      <tr>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/LMS.png" alt="원격교육서비스"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/internetCertificate.png" alt="인터넷증명발급"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/post.png" alt="우편증명발급"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/consultant.png" alt="진로체험"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/training.png" alt="현장실습"></router-link>
        </td>
      </tr>
      <tr>
        <td class="allServiceName"><h5>LMS<br>시스템</h5></td>
        <td class="allServiceName"><h5>인터넷<br>증명발급</h5></td>
        <td class="allServiceName"><h5>우편<br>증명발급</h5></td>
        <td class="allServiceName"><h5>진로체험 및<br>상담신청</h5></td>
        <td class="allServiceName"><h5>현장실습<br>(기관용)</h5></td>
      </tr>
      <tr>
        <td class="allServiceIcon">
          <router-link to="/"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"></router-link>
        </td>
      </tr>
    </table>
    <div class="list">
      <div class="shortCut">
        <img class="listImg" src="@/assets/main/service_icon/resume.png" alt="자소서작성시스템">
        <router-link to="/"><h2>자소서 작성 시스템</h2></router-link>
      </div>
      <div class="shortCut">
        <img class="listImg" src="@/assets/main/service_icon/vision.png" alt="2030비전">
        <router-link to="/"><h2>비전 2030</h2></router-link>
      </div>
      <div class="shortCut">
        <img class="listImg" src="@/assets/main/service_icon/scholarship.png" alt="장학제도">
        <router-link to="/"><h2>장학제도</h2></router-link>
      </div>
      <div class="shortCut">
        <img class="listImg" src="" alt="오시는 길">
        <router-link to="/"><h2>오시는 길</h2></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllServiceList"
}
</script>

<style scoped>

.card > table {
  margin: 0 auto;
  width: 90%;
}

.allServiceIcon {
  text-align: center;
}

img {
  margin: 0 0 0 0;
  padding: 2px 2px 2px 2px;
  background-color: #ffffff;
  border-radius: 5px;
  width: 60%;
}

.allServiceName {
  text-align: center;
}

.allServiceName > h5 {
  margin: 0 0 10px 0;
  font-size: 8pt;
  font-weight: normal;
}

.list {
  margin: 0 auto;
  width: 90%;
}

.shortCut {
  margin: 0 5px 5px 0;
  border-radius: 10px;
  width: 100%;
  height: 10%;
  color: var(--text-color);
  display: flex;
  background: var(--notice-list-background);
}

.shortCut > a > h2 {
  font-weight: normal;
}

.listImg {
  margin: 10px 20px 10px 10px;
  width: 6%;
}

.shortCut > a > h2 {
  font-size: 10pt;
  width: 100%;
  padding-top: 6px;
}

</style>