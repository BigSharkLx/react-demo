import React from 'react';
import {Row,Col,BackTop,Icon} from 'antd';
import CommonComments from './common_comments.js';
export default class MobileNewsDetails extends React.Component{
  constructor(){
    super();
    this.state={
      newsItem:''
    };
  }
  componentDidMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    });
  }
  createMarkup(){
    return{__html:this.state.newsItem.pagecontent};
  }
  render(){
    return(
      <div>
      <Row>
      <Col span={24}>
      <a href="javascript:history.go(-1);"><Icon class="goback" type="arrow-left" /></a>
      <hr/>
      <div class="m_articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
      </div>
      <hr/>
      <CommonComments uniquekey={this.props.params.uniquekey}/>
      </Col>
      </Row>
      <BackTop/>
      </div>
    );
  }


}
