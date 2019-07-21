/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import LogoImg from '../../public/images/logo.svg';

class Logo extends React.Component {
  render() {
    return (
      <span className="logo-box">
        <img src={LogoImg} alt="Logo" />
      </span>
    );
  }
}
export default Logo;
