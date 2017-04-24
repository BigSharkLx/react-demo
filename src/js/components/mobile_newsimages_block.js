import React from 'react';
import {Row,Col, Menu, Icon,Button, Modal,Form,Checkbox,Input,message,Card }from 'antd';
import{Link} from 'react-router';
export default class MobileNewsImage
extends React.Component{
  constructor(){
    super();
    this.state={
      newsImage:''
    };
  }
  componentWillMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count , myFetchOptions).then(response=>response.json()).then(json=>this.setState({newsImage:json}));
  }
  render(){
    const {newsImage}=this.state;
    const newsList=newsImage.length
    ?
    newsImage.map((newsItem,index)=>
    (
      <div key={index} class="m_imageblock">
      <Link to={`details/${newsItem.uniquekey}`}>

      <img src={newsItem.thumbnail_pic_s}/>

      <div class="m_custom-card">
      <h3>
      {newsItem.title}
      </h3>
      <p>{newsItem.author_name}</p>
      </div>
      </Link>
      </div>
    ))
    :
    '没加载到新闻';


    return(
      <div class="m_topNewsList">
      {newsList}
      </div>
    );
  }
}
