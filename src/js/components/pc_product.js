import React from 'react';
export default class PCProduct extends React.Component{
  render(){
    return(
      <div className="mt35 mod_pageh5">
      <div>
      <div className="idx_cm_title">
      <a href="http://news.163.com/special/h5column/" className="title">网易新闻策划</a>
      </div>
      <div className="wrap" >
      <div className="h5_bg h5_border">
      <div className="h5_body" >
      <div className="h5_main clearfix">
      <div  className="h5_item current" style={{width: 280}}>
      <div className="h5_item_poster">
      <a href="http://news.163.com/special/fdh5_valentines/">
      <img src="http://cms-bucket.nosdn.127.net/a4d81722c4404cb8a047256269c4fac920170220105058.jpeg" width={280} height={436} />
      </a>
      </div>
      </div>
      <div className="h5_item" style={{width: 280}}>
      <div className="h5_item_poster">
      <a href="http://news.163.com/special/beichengjiaotong">
      <img src="http://img2.cache.netease.com/cnews/2016/8/23/20160823110031b5ad9.jpg" width={280} height={436} />
      </a>
      </div>
      </div>
      <div  className="h5_item" style={{width: 280}}>
      <div className="h5_item_poster">
      <a href="http://news.163.com/special/ons/">
      <img src="http://cms-bucket.nosdn.127.net/34ac70842b2d49eda99190dbff209b8920160913185536.png" width={280} height={436} />
      </a>
      </div>
      </div>
      <div  className="h5_item" style={{width: 280}}>
      <div className="h5_item_poster">
      <a href="http://news.163.com/special/tsdizhen_chahua/">
      <img src="http://img6.cache.netease.com/cnews/2016/7/28/20160728114207f5900.jpg" width={280} height={436} />
      </a>
      </div>
      </div>
      </div>
      </div>
      <div className="scrollbtn scrollbtl" ><a  className="f_prev">&lt;</a></div>
      <div className="scrollbtn scrollbtnr" ><a  className="f_next">&gt;</a></div>
      </div>
      <div className="nav clearfix">
      <span className="current" /><span/><span  /><span  />
      </div>
      </div></div>
      </div>
    );
  }
}
