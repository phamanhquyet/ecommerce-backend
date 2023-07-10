//file server chỉ có một nhiệm vụ khai báo port và khởi chạy server

const app = require('./src/app');

const PORT = 8888;
const server = app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
});
// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log('Exit server');
//   });
// });
