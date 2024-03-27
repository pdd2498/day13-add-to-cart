import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pro1 , setPro1] = useState(0);
  const [pro2 , setPro2] = useState(0);
  const [pro3 , setPro3] = useState(0);
  let [total , setTotal] = useState(0);

  useEffect(()=>{
    const a = pro1*100;
    const b = pro2*200;
    const c = pro3*300;
    setTotal(a+b+c);
  },[pro1 , pro2 , pro3])
  return (
    <div className='flex'>
    <div className="left">
        <h1>Products</h1>
        <div className="cart">
            <h4>Product-1</h4>
            <h4>100</h4>
            <div className="buton">
                <h3 id="pls1" style={{cursor: 'pointer'}} onClick={() => setPro1(pro1+1) }>+</h3>
                <h4 id="count1">{pro1}</h4>
                <h3 id="mines1" style={{cursor: 'pointer'}} onClick={() => setPro1(pro1-1)}>-</h3>
            </div>
        </div>
        <div className="cart">
            <h4>Product-2</h4>
            <h4>200</h4>
            <div className="buton">
                <h3 id="pls2" style={{cursor: 'pointer'}} onClick={() => setPro2(pro2+1)}>+</h3>
                <h4 id="count2">{pro2}</h4>
                <h3 id="mines2"style={{cursor: 'pointer'}} onClick={() => setPro2(pro2-1)}>-</h3>
            </div>
        </div>
        <div className="cart">
            <h4>Product-3</h4>
            <h4>300</h4>
            <div className="buton">
                <h3 id="pls3" style={{cursor: 'pointer'}} onClick={() => setPro3(pro3+1)}>+</h3>
                <h4 id="count3">{pro3}</h4>
                <h3 id="mines3" style={{cursor: 'pointer'}} onClick={() => setPro3(pro3-1)}>-</h3>
            </div>
        </div>
    </div>
    <div style={{
      display:total===0?'block':'none'
    }}>
      <h1>No Product added to the cart</h1>
    </div>
    <div className="right" style={{
      display:total===0?'none':'block'
    }}>
        <h1>Cart</h1>
        <div className="pro">
            <h4>Product-1</h4>
            <h4 id="pro1">{pro1}</h4>
        </div>
        <div className="pro">
            <h4>Product-2</h4>
            <h4 id="pro2">{pro2}</h4>
        </div>
        <div className="pro">
            <h4>Product-3</h4>
            <h4 id="pro3">{pro3}</h4>
        </div>
        <div className="total">
            <h2>Total</h2>
            <h2 id="tota">{total}</h2>
        </div>
    </div>
    </div>
  );
}

export default App;
