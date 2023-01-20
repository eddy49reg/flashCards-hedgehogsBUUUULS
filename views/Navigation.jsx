const React = require('react');

function Navigation({ name }) {
  // console.log(name);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              Features
            </a>
            {name && (
              <a className="nav-link" href="/">
                Hello, {name}!
              </a>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}
module.exports = Navigation;
