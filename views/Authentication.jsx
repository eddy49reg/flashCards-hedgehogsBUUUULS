const React = require('react');
const Layout = require('./Layout');

module.exports = function Authentication({ title }) {
  return (
    <Layout title={title}>
      <div className="containerMain">
        <h1 className="reglog">authentication</h1>
        <form action="/authentication" method="post" id="authentication_form">
          <div className="mb-3">
            <label className="form-label">
              Name
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                required
              />
            </label>
          </div>

          <button type="submit" className="btn btn-danger" id="login_user">
            Log user
          </button>
          <button
            type="submit"
            className="btn btn-success"
            id="registration_user"
          >
            Reg user
          </button>
        </form>
      </div>

    </Layout>
  );
};
