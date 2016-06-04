let notify = require('gulp-notify');

export = function errors(errorObject: Object) {
  notify
    .onError(errorObject.toString().split(': ').join(':\n'))
    .apply(this, arguments);

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};
