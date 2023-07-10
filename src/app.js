const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const app = express();

//init middlewares
app.use(morgan('dev'));
/*
    morgan dùng để lưu lại log khi có một request được thực hiện
    morgan có 5 chế độ:
    morgan('dev'): in ra log bao gồm http method, route, http status (theo màu), thời gian thực hiện request 
        ví dụ: GET / 200 2.089 ms - 19
        note: dev sẽ hợp lý khi sử dụng trong môi trường dev
    morgan('combined'): in ra log theo chuẩn apache, bao gồm IP, ngày giờ, http method, route, chuẩn http, http status, chạy bằng gì
        ví dụ: ::1 - - [10/Jul/2023:07:39:11 +0000] "GET / HTTP/1.1" 500 19 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        note: combined sẽ hợp lý khi sử dụng trong môi trường product
    morgan('common')
        ví dụ: ::1 - - [10/Jul/2023:07:46:12 +0000] "GET / HTTP/1.1" 500 19
    morgan('short')
        ví dụ: ::1 - GET / HTTP/1.1 500 19 - 2.351 ms
    morgan('tiny')
        ví dụ: GET / 500 19 - 4.482 ms
*/
app.use(helmet()); //helmet dùng để ẩn đi những công nghệ được sử dụng trong dự án, từ đó hạn chế việc bị tấn công dựa vào lỗ hổng của công nghệ đó
app.use(compression()); //cải thiện tốc độ truyền và sử dụng băng thông bằng cách nén các file ở server nhằm giảm dung lượng file, giúp quá trình gửi xuống client trở lên nhanh hơn.
//init db

//init routes
app.get('/', (req, res, next) => {
  return res.status(500).json({
    message: 'hello',
  });
});

//handling errors

module.exports = app;
