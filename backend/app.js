const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crawling_router = require('./controller/crawling_controller.js');
const user_router = require('./controller/user_controller.js');
const community_router = require('./controller/community_controller');
const cors = require("cors");
require("dotenv").config();

//사용할 IP설정
const ip = process.env.MAIN_HOST

const whitelist = ['http://localhost:3000', `http://${process.env.MAIN_HOST}:3000`, `http://${process.env.PUBLIC_HOST}:3000`]

let corsOption = {
    origin: function (origin, callback) {
        const isWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}

app.use(cors(corsOption));

// json을 위한 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 프로필 사진 사용 가능하게 만들어주는 지점 생성
app.use('/profile_img', express.static('./resource/profile_img'));
// 커뮤니티 사진 사용 가능하게 만들어주는 지점 생성
app.use('/community_img', express.static('./resource/community_img'));

// 크롤링 요청은 크롤링 라우터로 이동
app.use('/crawling', crawling_router);
// 유저 관련 요청은 유저 라우터로 이동
app.use('/user', user_router);
// 커뮤니티 관련 요청은 커뮤니티 라우터로 이동
app.use('/community', community_router);

app.listen(8080, ip, () => {
});

console.log("///////////////////////////////////////////////////////");
console.log("// SmartCampus Backend Server가 시작되었습니다.//");
console.log("///////////////////////////////////////////////////////");
console.log("[SERVER] 알림: 내부(메인) IP가 " + ip + ":8080로 할당되었습니다.");
console.log("[SERVER] 알림: 외부(공개) IP가 " + process.env.PUBLIC_HOST + ":8080로 할당되었습니다.");

module.exports = app; /* use at app.spec.js */