import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal,Tabs,message,  Form,Input,Button,Checkbox,Card,notification,Icon} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
export default class MobilePerson extends React.Component {
  constructor(){
    super();
    this.state={
      userCollection:'',
      userComments:''
    };
  }
  componentDidMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({userCollection:json});
    });
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions).then(response=>response.json()).then(json=>{
      this.setState({userComments:json});
    });
    document.title=`${localStorage.userName}的个人中心- React News | React 驱动的新闻平台`;
  }
  render(){
    const{userCollection,userComments}=this.state;
    const userCollectionList=userCollection.length
    ?
    userCollection.map(
      (uc,index)=>(
        <Card key={index} title={uc.uniquekey} extra={<Link to={`details/${uc.uniquekey}`} >
        查看</Link>}>
        <p>{uc.Title}</p>
        </Card>
      )
    )
    :
    '您还没有收藏任何的新闻，快去收藏一些新闻吧!';
    const userCommentsList=userComments.length
    ?
    userComments.map((comment,index)=>(
      <Card key={index} title={`于${comment.datetime}评论了文章${comment.uniquekey}`} extra={<Link to={`details/${comment.uniquekey}`} >
      查看
      </Link>}>
      <p>{comment.Comments}</p>
      </Card>
    )
  )
  :
  '您还没发表过任何评论';
  return(
    <div>
    <Row>
    <Col span={2}>
    <a href="javascript:history.go(-1);"><Icon class="goback" type="arrow-left" /></a>
    </Col>
    <Col span={20}>
    <Tabs>
    <TabPane tab="我的收藏列表" key="1">
    <div class="comment">
    <Row>
    <Col span={24}>
    {userCollectionList}
    </Col>
    </Row>
    </div>
    </TabPane>
    <TabPane tab="我的评论列表" key="2">
    <div class="comment">
    <Row>
    <Col span={24}>
    {userCommentsList}
    </Col>
    </Row>
    </div>
    </TabPane>
    </Tabs>
    </Col>
    <Col span={2}/>
    </Row>
    </div>
  );
}
}
