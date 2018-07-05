const domainWhitelist = [];

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
