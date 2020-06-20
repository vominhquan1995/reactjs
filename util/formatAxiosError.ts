// TODO refactor lại
let formatError = function(error) {
  let _error: any = {};
  if (error.response) {
    // NOTE Request chạy được và server trả về với status code lớn hơn 2XX
    _error.status = error.response.status;
    _error.stack = [];
    _error.message = error.response.data.message;
    _error.type = error.response.data.type;
  } else if (error.request) {
    // NOTE Request chạy được nhưng ko có response từ server;
    // _error.request = error.request;
    _error.message = error.request.message || 'Server not response';
    _error.stack = error.stack || error.request.stack;
    _error.status = error.request.status || error.status;
  } else {
    // NOTE lỗi khi setup request
    _error.message = error.message || 'BAD ERROR';
    _error.stack = error.stack;
    _error.status = error.status;
  }
  _error.config = error.config;
  return _error;
};

export default formatError;
