const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
//express 모듈 불러오기
const express = require("express");
const cors = require('cors');
const os = require("os");
const mysql = require('mysql');
const {response} = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

request(
    {
        url: "https://www.jeiu.ac.kr/front_2022.asp",
        method: "GET",
        encoding: null
    },
    (error, response, body) => {
        if (response.statusCode === 200) {
            console.log("메인화면 배너 불러오기 성공");

            //iconv를 사용하여 body를 EUC-KR로 디코드
            const bodyDecoded = iconv.decode(body, "euc-kr");
            //디코드 해서 저장
            const $ = cheerio.load(bodyDecoded);

            const title = $('#m_jei_slider > div.jei_slider > a ').text();

            console.log("결과 " + title);

        } else {
            console.log("실패" + response.statusCode);
        }
    }
)
