const React = require('react');
const Layout = require('./Layout');


module.exports = function Main({ title, themes, name }) {
  return (
    <Layout title={title} name={name}>
      <div className="containerCard">
        {themes.map((theme) => (
          <div className="buttonDiv" key={theme.id} data-id={theme.id}>
            <p>{theme.topic}</p>
            <img src={theme.link} />
            {/* <button className="buttonTheme" type="button">Выбрать</button>
             */}
             <a href={`/${theme.id}`}>выбрать</a>
          </div>
        ))}
      </div>
    </Layout>
  );

};
