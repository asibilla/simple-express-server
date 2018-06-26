const domainWhitelist = [
  'http://localhost:3000', 
  'http://localhost:3001',
  'http://localhost:8080'
];

export const corsOptions = {
  origin: function (origin, callback) {
    if (domainWhitelist.indexOf(origin) > -1) {
      callback(null, true)
    } 
    else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
