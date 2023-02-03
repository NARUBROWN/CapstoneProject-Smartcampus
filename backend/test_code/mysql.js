//express 모듈 불러오기
const express = require("express");
const cors = require('cors');
const os = require("os");
const mysql = require('mysql');
const response = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1q2w3e4r!',
    database: 'jeiue_campus'
});


//SQL 부분

connection.connect();

// mysql에서 정보 불러오기

//샘플 프로필 정보 불러오기
app.get('/proflie', function (req, res) {
    console.log("\n 프로필 정보 불러오기");

    connection.query('SELECT * from Users WHERE id=?', [22], (error, result) => {
        if (error) throw error;
        const data = [{
            id: result[0].id,
            name: result[0].name,
            department: result[0].department,
            stu_rank: result[0].stu_rank,
            stu_number: result[0].stu_number
        }]

        res.send((data))
    });
});

app.get('/', (req, res) => {
    res.send(`
  <form action="/post/login" method="post">
    <input type="text" name="stu_num" placeholder="학번을 입력">
    <input type="text" name="password" placeholder="비밀번호를 입력">
    <input type="submit">
  </form>
  `);
});


// 회원가입 받기
app.post('/post/signup', function (req, res, next) {
    const name = req.body.name;
    const stu_num = req.body.stu_num;
    const password = req.body.password;
    const department = req.body.department;
    const rank = req.body.rank;
    connection.query('INSERT INTO Users VALUES(null, ?, ?, ?, ?, ?)', [name, password, department, rank, stu_num], (error, result) => {
        if (error) throw error;
        res.send((result))
    });
});

// 로그인 확인하기
app.post('/post/login', function (req, res, next) {
    const stu_num = req.body.stu_num;
    const password = req.body.password;
    connection.query('select * from Users where stu_number=?', [stu_num], function (error, result) {
        //존재하지 않는 학번 출력
        if (!result[0]) {
            res.send({
                code: 1,
                massage: "존재하지 않는 학번입니다."
            })
        } else {
            // 패스워드가 맞았을때
            if (password === result[0].password) {
                res.send({
                    // 사용자 정보를 JSON으로 전송
                    id: result[0].id,
                    name: result[0].name,
                    password: result[0].password,
                    department: result[0].department,
                    stu_rank: result[0].stu_rank,
                    stu_number: result[0].stu_number,
                    code: 3
                })
            } else {
                res.send({
                    code: 2,
                    massage: "비밀번호를 확인해주세요"
                })
            }
        }

        //에러 발생
        if (error) {
            res.send({
                massage: "알 수 없는 오류가 발생했습니다. " + error
            })
        }
    });
});

//샘플 프로필 정보 불러오기
app.get('/proflie', function (req, res) {
    console.log("\n 프로필 정보 불러오기");

    connection.query('SELECT * from Users WHERE id=?', [1], (error, result) => {
        if (error) throw error;
        const data = [{
            id: result[0].id,
            name: result[0].name,
            department: result[0].department,
            stu_rank: result[0].stu_rank,
            stu_number: result[0].stu_number
        }]

        res.send((data))
    });
});

// 테스트 리스트 불러오기
app.get('/profile_list', function (req, res) {
    console.log("\n 프로필 리스트 불러오기");

    connection.query('SELECT * from Users', (error, result) => {
        if (error) throw error;
        res.send((result))
    });
});

// 유저 정보 삭제
app.post('/post/delete', function (req, res) {
    const id = req.body.id;

    console.log('프로필 삭제');
    connection.query('DELETE FROM Users WHERE id=?', [id], (error, result) => {
        if (error) throw error;
        res.send(result)
    })
});

// 유저 정보 수정
app.post('/post/profile_update', function (req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const password = req.body.password;
    const department = req.body.department;
    const rank = req.body.rank;

    console.log('프로필 수정');
    connection.query('UPDATE Users SET name = ?, password = ?, department = ?, stu_rank = ?  WHERE id = ?', [name, password, department, rank, id], (error, result) => {
        if (error) throw error;
        res.send(result)
    })
});

app.listen(3000, '127.0.0.1', () => {
});


