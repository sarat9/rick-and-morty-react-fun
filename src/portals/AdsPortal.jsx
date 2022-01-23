import React from 'react'
import ReactDOM from 'react-dom';

export default function AdsPortal(props) {
  
  return ReactDOM.createPortal(
  <>{props.children}</>,
  document.getElementById('ads-portal-dom'))
}
