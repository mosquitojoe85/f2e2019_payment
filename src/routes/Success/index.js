import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png';

function Success() {
  return (
    <div className="successWrapper">
      <div className="banner"></div>
      <div className="mainContent">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <h1>付款成功</h1>
        <h2>您已支付 1,250 元</h2>
        <div className="successLabel">商店名稱</div>
        <div className="successValue">Amazing 3C online Shop</div>
        <div className="successLabel">訂單編號</div>
        <div className="successValue">239234dwnd321</div>
        <div className="successLabel">支付方式</div>
        <div className="successValue">信用卡付款</div>
        <div className="jumpDesc">畫面將自動轉回<div>Amazing 3C Online Shop</div></div>
      </div>
    </div>
  );
}

export default Success;
