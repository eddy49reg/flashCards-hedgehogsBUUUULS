const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, questions }) {
  return (
    <Layout title={title}>
      <div className="containerCard">

        {questions.map((question) => (
          <form
            className="js-card"
            method="POST"
            data-id={question.id}
          >
            <div className="js-answer card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{question.question}</h5>
                <input type="text" className="form-control" name="answer" placeholder="answer" />
                <button type="submit" className="buttonTheme">ok</button>
              </div>
              <p className="right-answer" />
            </div>
          </form>
        ))}
      </div>
    </Layout>
  );
};
