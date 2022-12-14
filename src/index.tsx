import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './App';    //App.jsからApp関数を取り込んでいる
//import Hello from './components/Hello';
//import Name from './components/Name';
//import Message from './components/Message';
//import Parent from './components/ContainerSample';
//import Page from './components/ContextSample';
//import Counter from './components/CounterUseState';
//import Counter from './components/CounterUseReducer';
//import { Parent } from './components/Parent';
//import { UseMemoSample } from './components/UseMemoSample';
//import { Clock } from './components/Clock';
//import Parent from './components/UseContext';
//import ImageUploader from './components/UseRef';
//import Parent from './components/UseImperativeHandle';
import { Input } from './components/UseInput';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Input />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();