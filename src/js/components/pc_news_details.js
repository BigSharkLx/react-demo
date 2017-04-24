import React from 'react';
import {Row,Col,BackTop} from 'antd';
import PCNewsImage from './pc_news_imageblock.js';
import PCHeader from './pc_header.js';
import PCFooter from './pc_footer.js';
import CommonComments from './common_comments.js';
export default class PCNewsDetails extends React.Component{
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
      <PCHeader/>
      <Row>
      <Col span={2}></Col>
      <Col span={14} class="container">
      <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
      </div>
      <hr/>
      <CommonComments uniquekey={this.props.params.uniquekey}/>
      </Col>
      <Col span={6}>
      <PCNewsImage type="top" count="50" cardname="相关新闻" width="100%" imageWidth="145px"/>
      </Col>
      <Col span={2}></Col>
      </Row>
      <PCFooter/>
      <BackTop/>
      </div>
    );
  }


}
