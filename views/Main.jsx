const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, name }) {
  return <Layout title={title} name={name}></Layout>;
};
