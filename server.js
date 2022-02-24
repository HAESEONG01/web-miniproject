const express = require("express"); // express 패키지 import

const app = express();

// API Key를 별도 관리 : dot(.)env 활용, .env라는 파일에 key를 보관하고, dotenv가 .env파일을 활용해서, process.env 객체에 포함시킴.
const dotenv = require('dotenv');

dotenv.config();

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

// nodejs 서버가 또 다른 client가 되어 Naver 서버에 요청을 보내기 위해 사용.
const request = require('request');

// express의 static 미들웨어 활용.
app.use(express.static('public'))

// express의 json 미들웨어 활용.
app.use(express.json());

 console.log(`현재 파일명: ${__filename}`);
 console.log(`index.html의 파일 경로: ${__dirname}`);


// root url : localhost:3000/ == localhost:3000
// 해당 경로로 요청이 들어왔을 때 호출될 함수.
// 두 인자값(arguments)을 받음 : request(req), response(res)
app.get("/", (req, res) => {
    // root url, 즉 메인 페이지로 접속했을 때 papago의 메인 페이지가 나와야함.
    // pulic/ ~

    res.sendFile(__dirname, 'index.html');
});

app.get("/searchpage", (req, res) => {
    // '안녕'이라는 텍스트를 받아야함.

    console.log(req.body);
    console.log(typeof req.body); // object?

    res.sendFile(__dirname, 'main.html');

    //const { text: query, targetLanguage } = req.body;
    // console.log(query);
    // console.log(targetLanguage);

});

// // papago 번역 요청 부분. 
// app.get("/translate", (req, res) => {
//     const url = 'https://openapi.naver.com/v1/papago/n2mt';
//     // console.log(req.query, typeof req.query);
//     const options = {
//         url,
//         form: {
//             source: req.query['lang'], // query string으로 받은 값들 mapping or binding.
//             target: req.query['targetLanguage'],
//             text: req.query['query'],
//         },
//         headers: {
//             "X-Naver-Client-Id": clientId,
//             "X-Naver-Client-Secret": clientSecret,
//         },
//     }

//     request.post(options, (error, response, body) => {
//         if (!error && response.statusCode == 200) {
//             //   console.log(body, typeof body);
//             // front에 해당하는 script.js에 응답 데이터 (json) 전송.
//             res.json(body);
//         } else {
//             console.log(`error = ${response.statusCode}`);
//         }
//     });
// });


app.listen(3000, () => {
    console.log('http://127.0.0.1:3000/ app listening on port 3000!');
});