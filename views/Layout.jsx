const React = require('react');
const Navigation = require('./Navigation');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/style.css" />
        <script src="https://code.jquery.com/jquery-3.6.3.min.js" />
        <title>{title}</title>
      </head>

      <body className="back-row-toggle splat-toggle">
        <div className="rain front-row" />
        <div className="rain back-row" />
        <div className="mainContainer">
          <Navigation />
          {children}
        </div>
        <script src="/scripts/rain.js" />
        <script src="/scripts/themes.js" />
      </body>
    </html>
  );
};
