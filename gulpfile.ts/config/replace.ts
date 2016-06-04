export = (appName: string, serviceURL: string) => {
  const randomstring = require('randomstring');

  return {
    patterns: [
      {
        match: 'appName',
        replacement: appName
      },
      {
        match: 'serviceURL',
        replacement: serviceURL
      },
      {
        match: 'localTokenKey',
        replacement: randomstring.generate()
      },
      {
        match: 'notAuthenticated',
        replacement: randomstring.generate()
      }
    ]
  };
};
