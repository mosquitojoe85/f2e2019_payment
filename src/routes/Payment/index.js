import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/logo.png';
import visa from '../../assets/visa.svg';
import master from '../../assets/master.svg';
import jcb from '../../assets/jcb.svg';
import up from '../../assets/up.svg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TextMask from '../../components/TextMask';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
  },
  marginTop :{
    marginTop: 54,
  },
  helfWidth: {
    width: 220,
  },
  label: {
    fontSize: 18
  },
  input: {
    fontSize: 24,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    color: '#F0F0F0',
  },
  helperText: {
    color: '#FFD065',
    fontSize: 14
  }
}));

function Payment(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [mobile, setMobile] = useState('');
  const [err, setErr] = useState({ name: false, creditCard: false, date: false, number: false, mobile: false, });

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = {
      name: name === '',
      mobile: mobile === '',
      creditCard: creditCard === '' || creditCard.match(/\d+/g).join('').length !== 16,
      date: date === '' || date.match(/\d+/g).join('').length !== 4,
      number: number === '' || number.match(/\d+/g).join('').length !== 3,
    };
    setErr(check);
    if(Object.keys(check).every(e => check[e] === false)) {
      props.history.push('/success')
    }
  };


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
          </div>
          <div className="payContent">
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
          <form onSubmit={handleSubmit}>
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
                error={err.name}
              />
              <TextField
                className={`${classes.textField} ${classes.marginTop}`}
                label="信用卡號"
                value={creditCard}
                onChange={(e) => setCreditCard(e.target.value)}
                InputLabelProps={{ shrink: true, className: classes.label  }}
                fullWidth
                required
                InputProps={{
                  inputComponent: TextMask,
                  className: classes.input,
                  type: 'creditCard'
                }}
                error={err.creditCard}
              />
              <div className="creditBlockHalf">
                <TextField
                  className={`${classes.textField} ${classes.marginTop} ${classes.helfWidth}`}
                  label="有效月年"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{ shrink: true, className: classes.label  }}
                  required
                  InputProps={{
                    inputComponent: TextMask,
                    className: classes.input,
                    type: 'date'
                  }}
                  error={err.date}
                />
                <TextField
                  className={`${classes.textField} ${classes.marginTop} ${classes.helfWidth}`}
                  label="信用卡背面末三碼"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  InputLabelProps={{ shrink: true, className: classes.label  }}
                  required
                  InputProps={{
                    inputComponent: TextMask,
                    className: classes.input,
                    type: 'threeNum'
                  }}
                  error={err.number}
                />
              </div>
              <TextField
                className={`${classes.textField} ${classes.marginTop}`}
                label="手機號碼"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                InputLabelProps={{ shrink: true, className: classes.label  }}
                fullWidth
                required
                InputProps={{ className: classes.input, }}
                helperText="如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。"
                FormHelperTextProps={{ className: classes.helperText }}
                error={err.mobile}
              />
              <button type="submit" className="submitBtn" onClick={handleSubmit}>確認付款</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Payment);
