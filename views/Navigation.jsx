const React = require('react');

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link auth" href="/">Login</a>
            <a className="nav-link" href="/">Registration</a>
            <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
module.exports = Navigation;
