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
          <router-link to="/"><img src="@/assets/main/service_icon/resume.png" alt="자소서작성시스템"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/vision.png" alt="2030비전"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/scholarship.png" alt="장학제도"></router-link>
        </td>
        <td class="allServiceIcon">
          <router-link to="/"><img src="@/assets/main/service_icon/guideMap.png" alt="오시는 길"></router-link>
        </td>
      </tr>
      <tr>
        <td class="allServiceName"><h5>자소서 작성<br>시스템</h5></td>
        <td class="allServiceName"><h5>비전 2030</h5></td>
        <td class="allServiceName"><h5>장학제도</h5></td>
        <td class="allServiceName"><h5>오시는 길</h5></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AllServiceList"
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
  margin: 10px 0 10px 0;
  padding: 0 0 0 20px;
  font-size: 10pt;
  font-weight: bold;
}

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

</style>