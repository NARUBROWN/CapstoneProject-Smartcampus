const express = require("express");
const app = express();
app.set('view engine', 'jade')
app.set('views', './views_file')

var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
})
var upload = multer({storage: storage})


app.get('/upload', function (req, res) {
    res.render('upload');
});

app.post('/upload', upload.single('userfile'), function (req, res) {
    res.send('Uploaded! : ' + req.file); // object를 리턴함
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
    console.log(req.file['filename'])
});

app.use('/users', express.static('uploads'));

app.listen(3000, '127.0.0.1', () => {
});
