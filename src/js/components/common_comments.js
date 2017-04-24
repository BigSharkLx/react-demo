import React from 'react';
import {Row, Col,Card,Menu, Icon,Tabs,message,Form,Input,Button,CheckBox,Modal,notification} from 'antd';
import {Link}from 'react-router';
const FormItem=Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane=Tabs.TabPane;
class CommonComments extends React.Component{
  constructor(){
    super();
    this.state={
      comments:''
    };
  }
  componentDidMount(){
    const myFetchOptions={
      method:'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey,myFetchOptions).then(response=>response.json()).then(json=>{
      this.setState({comments:json});
    });
  }
  handleSubmit(e){
    e.preventDefault();
    if(localStorage.userName!=''){
      const myFetchOptions={
        method:'GET'
      };
      const formData=this.props.form.getFieldsValue();
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark, myFetchOptions).then(response=>response.json()).then(json=>{
        this.componentDidMount();
      });
    }
    else{
      message.warning('您还未登录！');
    }
  }
  addCollection(){
    if(localStorage.userName!=''){
      var myFetchOptions = {
        method: 'GET'
      };
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
        //收藏成功以后进行一下全局的提醒
        notification['success']({
          message: 'ReactNews提醒',
          description: '收藏此文章成功'});
        });

      }
      else {
        message.warning("您还未登录！");
      }
    }
    render(){
      let{getFieldDecorator}=this.props.form;
      const {comments}=this.state;
      const commentList=comments.length
      ?
      comments.map((comment,index)=>
      (
        <Card key={index} title={comment.UserName} extra={<span>发表于{comment.datetime}</span>}>
        <p>{comment.Comments}</p>
        </Card>
      )
    )
    :
    '没有加载到任何评论';
    return(
      <div>
      {commentList}
      <Row>
      <Col span={24}>
      <Form onSubmit={this.handleSubmit.bind(this)}>
      <FormItem label="您的评论">
      {getFieldDecorator('remark')
      (
        <Input type="textarea" rows={4} placeholder="随便说两句吧！"/>
      )
    }
    </FormItem>
    <div class="commont_button">
    <Button type="primary" htmlType="submit">
    提交评论</Button>
    &nbsp;&nbsp;
    <Button type="primary" htmlType="button" onClick={this.addCollection.bind(this)}>
    收藏该文章
    </Button>
    </div>
    </Form>
    </Col>
    </Row>
    </div>
  );
}
}
export default CommonComments=Form.create({})(CommonComments);
