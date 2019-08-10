import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/logo.png';
import visa from '../../assets/visa.svg';
import master from '../../assets/master.svg';
import jcb from '../../assets/jcb.svg';
import up from '../../assets/up.svg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
  },
  label: {
    fontSize: 18
  },
  input: {
    fontSize: 24,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    color: '#F0F0F0',
  }
}));

function Payment() {
  const classes = useStyles();
  const [name, setName] = useState('');

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
            <div role="button" className="billPayBtn act">信用卡</div>
            <div role="button" className="billPayBtn">網路ATM<span>(晶片讀卡機轉帳)</span></div>
            <div role="button" className="billPayBtn">ATM櫃員機<span>(實體ATM及網銀)</span></div>
          </div>
          <div className="logoBlock"><img src={logo} alt="logo" /></div>
        </div>
      </div>
      <div className="rightCol">
        <div className="rightContent">
          <h1>信用卡付款</h1>
          <form noValidate autoComplete="off">
            <div className="creditBlock">
              <div className="creditType">
                <button><img src={visa} alt="visa" /></button>
                <button><img src={master} alt="master" /></button>
                <button><img src={jcb} alt="jcb" /></button>
                <button><img src={up} alt="up" /></button>
              </div>
              <TextField
                label="持卡人"
                className={classes.textField}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                placeholder="請輸入持卡人姓名"
                InputLabelProps={{ shrink: true, className: classes.label  }}
                InputProps={{ className: classes.input }}
                error
              />
              <FormControl>
                <TextField
                label="持卡人"
                className={classes.textField}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                placeholder="請輸入持卡人姓名"
                InputLabelProps={{ shrink: true, className: classes.label  }}
                InputProps={{ className: classes.input }}
              />
              </FormControl>

              <button type="submit">mm</button>

            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Payment;
