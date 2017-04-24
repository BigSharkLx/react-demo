import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col, Menu, Icon,Button, Modal,Form,Checkbox,Input,message }from 'antd';
import {Link} from 'react-router';
const FormItem = Form.Item;
class PCHeader
extends React.Component{
  constructor(){
    super();
    this.state=({
      current:"top",
      visible:false,
      haslogined:false,
      userName:'',
      UserId:''
    });
  }
  componentWillMount(){
    if (localStorage.userName!='') {
      this.setState({haslogined:true});
      this.setState({userName:localStorage.userName});
    }
  };
  handleClick(e){
    this.setState({
      current: e.key,
    });
  }
  showModal(){
    this.setState({
      visible: true
    });
  }
  handleCancel(e){
    this.setState({
      visible:false
    });
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var formData = this.props.form.getFieldsValue();
        var myFetchOptions = {
          method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&username="+formData.userName+"&password="+formData.password,myFetchOptions).then(response=>response.json()).then(json=>{
          if(json==null)
          {
            message.error('用户不存在！');
          }
          else{
            message.success('登录成功！');
            this.setState({
              userName:json.NickUserName,
              UserId:json.UserId,
              visible:false,
              haslogined:true
            });
            localStorage.userName=json.NickUserName;
            localStorage.userid=json.UserId;
          }
        });
      }
    });
  }
  logout(){
    this.setState({
      haslogined:false,
    });
    localStorage.userName='';
    localStorage.userid='';
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const login=this.state.haslogined
    ?
    <div>
    <label>{this.state.userName}</label>
    <Link to="person" target="_blank">
    <Button class="login" type="primary">
    <Icon type="inbox" />个人中心</Button>
    </Link>
    <Button class="login" type="dashed" onClick={this.logout.bind(this)}>
    <Icon type="logout" />退出</Button>
    </div>
    :
    <div>
    <Button type="primary" class="login" onClick={this.showModal.bind(this)} >
    <Icon type="login" />登录
    </Button>
    <Link to="register" target="_blank">
    <Button type="primary">
    <Icon type="login" />注册
    </Button>
    </Link>
    </div>;
    return(
      <header>
      <Row>
      <Col span={2}></Col>
      <Col span={4}>
      <a href="#/" class="logo">
      <img src="./src/image/logo.png" alt="logo"/>
      <span>ReactNews</span>
      </a>
      </Col>
      <Col span={13}>
      <div class="menu">
      <Menu mode="horizontal"
      onClick={this.handleClick.bind(this)}
      selectedKeys={[this.state.current]}>
      <Menu.Item key="top">
      <Icon type="appstore"/>头条
      </Menu.Item >
      <Menu.Item key="shehui">
      <Icon type="appstore"/>社会
      </Menu.Item>
      <Menu.Item key="guonei">
      <Icon type="appstore"/>国内
      </Menu.Item>
      <Menu.Item key="guoji">
      <Icon type="appstore"/>国际
      </Menu.Item>
      <Menu.Item key="yule">
      <Icon type="appstore"/>娱乐
      </Menu.Item>
      <Menu.Item key="tiyu">
      <Icon type="appstore"/>体育
      </Menu.Item>
      <Menu.Item key="keji">
      <Icon type="appstore"/>科技
      </Menu.Item>
      </Menu>
      </div>
      </Col>
      <Col span={5}>
      {login}
      </Col>
      </Row>
      <div>
      <Modal title="用户登录" visible={this.state.visible}
      onCancel={this.handleCancel.bind(this)}
      footer={null}
      >
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
      <FormItem>
      {getFieldDecorator('userName', {
        rules: [{ required: true, message: '请输入您的用户名!' }],
      })(
        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
      )}
      </FormItem>
      <FormItem>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: '请输入您的密码!' }],
      })(
        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
      )}
      </FormItem>
      <FormItem>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(
        <Checkbox>Remember me</Checkbox>
      )}
      <a className="login-form-forgot">Forgot password</a>
      <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
      </Button>
      Or   <Link to="register" target="_blank">立即免费注册!</Link>
      </FormItem>
      </Form>
      </Modal>
      </div>
      </header>
    );
  }
}
export default PCHeader = Form.create({})(PCHeader);
