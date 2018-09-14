import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom";
import { renderToString } from 'react-dom/server';
import App from '../client/app/App';
import reducers from '../client/app/store/reducers';
import initState from '../client/app/store/initState';


function returnHtml(reactApp, state) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sample Isomorphic App</title>    
      </head>
      <body>
        <div id="root">${reactApp}</div>
      </body>
      <script>
          window.REDUX_STATE = ${ JSON.stringify( state ) }
      </script>
      <script src='index_bundle.js'></script>
    </html>
  `;
}

const app = express();
app.use(express.static('dist'))
app.get('/*', (req, res) => {
  const context = {};
  const store = createStore(reducers, initState);
  const state = store.getState();

  const app = (
    <Provider store={store}>
      <StaticRouter context={ context } location={ req.url }>
        <App />
      </StaticRouter>
    </Provider>
  );
  const dom = renderToString(app);
  
  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end(returnHtml(dom, state));
});

app.listen(8080, () => console.log(`Example app listening on port 8080`));
