import React from 'react';
import './index.scss';

function Payment() {
  return (
    <div className="paymentWrapper">
      <div className="leftCol">
        <div className="leftBannerImg"></div>
        <div className="leftContent">
          <h1>訂單資訊</h1>
          <div className="billContent">
            <div className="billLabel">商店名稱</div>
            <div className="billValue">Amazing 3C online Shop</div>
            <div className="billLabel">訂單編號</div>
            <div className="billValue">239234dwnd321</div>
            <div className="billLabel billPriceLabel">本筆訂單將支付</div>
            <div className="billPriceValue"><span>1,250</span>元</div>
            <div className="billLabel billPaymethod">支付方式</div>
            <button className="billPayBtn">信用卡</button>
            <button className="billPayBtn">網路ATM<span>(晶片讀卡機轉帳)</span></button>
            <button className="billPayBtn">ATM櫃員機<span>(實體ATM及網銀)</span></button>
          </div>
        </div>
      </div>
      <div className="rightCol">Payment</div>

    </div>
  );
}

export default Payment;
