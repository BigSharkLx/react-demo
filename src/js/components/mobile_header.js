import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col, Menu, Icon,Button, Modal,Form,Checkbox,Input,message }from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
class MobileHeader
extends React.Component{
  constructor(){
    super();
    this.state=({
      current:"top",
      visible:false,
      haslogined:false,
      userName:''
    });
  }
  componentWillMount(){
    if (localStorage.userName!='') {
      this.setState({haslogined:true});
      this.setState({userName:localStorage.userName});
    }
  };
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
        message.success('登录成功');
        var formData = this.props.form.getFieldsValue();
        this.setState({
          visible:false,
          haslogined:true,
          userName:formData.userName
        });
        localStorage.userName=formData.userName;
      }
    });
  }
  logout(){
    this.setState({
      haslogined:false,
    });
      localStorage.userName='';
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const login=this.state.haslogined
    ?
    <div class="linklogin">
    <Link >
    <Icon type="inbox" />
    </Link>
    <Icon type="logout" onClick={this.logout.bind(this)} />
    </div>
    :
    <Icon type="login" onClick={this.showModal.bind(this)} />;
    return(
      <div id="mobileheader">
      <Row>
      <header>
      <Col span={1}></Col>
      <Col span={16}>
      <a href="/" class="logo">
      <img src="./src/image/logo.png" alt="logo"/>
      <span>ReactNews</span>
      </a>
      </Col>
      <Col span={6}>
      {login}
      </Col>
      <Col span={1}></Col>
      </header>
      </Row>
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
      Or <a>立即免费注册!</a>
      </FormItem>
      </Form>
      </Modal>
      </div>
    );
  }
}
export default MobileHeader= Form.create({})(MobileHeader);
