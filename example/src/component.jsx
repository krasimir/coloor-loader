import React from 'react';
import ReactDOM from 'react-dom';

export default class Component extends React.Component {
  componentDidMount() {
    Coloor();
  }
  render() {
    return (
      <section>
        <img src='./photos/img.jpg' alt='something' />
        <img src='./photos/green.jpg' alt='else' />
      </section>
    )
  }
}

window.onload = function () {
  ReactDOM.render(<Component />, document.querySelector('#container'));
};