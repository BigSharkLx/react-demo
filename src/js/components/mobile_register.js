import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,message,Card,Modal,Spin} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class MobileRegistrationForm extends React.Component {
  constructor(){
    super();
    this.state=({
      confirmDirty: false,
      loading:false,
    });
  }
  handleSubmit  (e)  {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        message.success("注册成功！");
        this.setState({loading:true});
        setTimeout(function(){
          location.href=history.back(-1);
        }, 2000);
        var formData = this.props.form.getFieldsValue();
        var myFetchOptions = {
          method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_username="+formData.r_userName+"&r_password="+formData.r_password,myFetchOptions);
      }
    });
  }
  handleConfirmBlur (e)  {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword  (rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('r_password')) {
      callback('两次输入的的密码不一致!');
    } else {
      callback();
    }
  }
  checkConfirm  (rule, value, callback)  {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['r_confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Spin  spinning={this.state.loading}>
      <div class="backgroundImage">
      <Row>
      <Col span={2}>
      <a href="javascript:history.go(-1);"><Icon class="register_goback" type="arrow-left" /></a>
      </Col>
      <Col span={20}>
      <div class="m_main_register">
      <Card title="新用户注册" key="1">
      <Form onSubmit={this.handleSubmit.bind(this)}>
      <FormItem
      {...formItemLayout}
      label="邮箱"
      hasFeedback
      >
      {getFieldDecorator('email', {
        rules: [{
          type: 'email', message: '您输入的不是正确的邮箱类型',
        }, {
          required: true, message: '请输入邮箱地址!',
        }],
      })(
        <Input />
      )}
      </FormItem>
      <FormItem
      {...formItemLayout}
      label="密码"
      hasFeedback
      >
      {getFieldDecorator('r_password', {
        rules: [{
          required: true, message: '请输入密码!',
        }, {
          validator: this.checkConfirm.bind(this),
        }],
      })(
        <Input type="password" />
      )}
      </FormItem>
      <FormItem
      {...formItemLayout}
      label="确认密码"
      hasFeedback
      >
      {getFieldDecorator('r_confirm', {
        rules: [{
          required: true, message: '请再次输入您的密码!',
        }, {
          validator: this.checkPassword.bind(this),
        }],
      })(
        <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} />
      )}
      </FormItem>
      <FormItem
      {...formItemLayout}
      label={(
        <span>
        昵称&nbsp;
        <Tooltip title="您的昵称?">
        <Icon type="question-circle-o" />
        </Tooltip>
        </span>
      )}
      hasFeedback
      >
      {getFieldDecorator('r_userName', {
        rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
      })(
        <Input />
      )}
      </FormItem>
      <FormItem
      {...formItemLayout}
      label="居住地址"
      >
      {getFieldDecorator('residence', {

        rules: [{required: true, message: '请输入您的居住地址!'}],
      })(
        <Input/>
      )}
      </FormItem>
      <FormItem
      {...formItemLayout}
      label="手机号码"
      >
      {getFieldDecorator('phone', {

        rules: [
          { required: true, message: '请输入您的手机号!' }],
        })(
          <Input/>
        )}
        </FormItem>
        <FormItem
        {...formItemLayout}
        label="验证码"
        >
        <Row gutter={8}>
        <Col span={12}>
        {getFieldDecorator('captcha', {
          rules: [{ required: true, message: '请输入您获得的验证码!' }],
        })(
          <Input size="large" />
        )}
        </Col>
        <Col span={12}>
        <Button size="large">Get captcha</Button>
        </Col>
        </Row>
        </FormItem>
        <FormItem
        {...tailFormItemLayout}
        style={{ marginBottom: 8 }}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(
          <Checkbox>I have read the <a>agreement</a></Checkbox>
        )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" size="large">提交</Button>
        </FormItem>
        </Form>
        </Card>
        </div>
        </Col>
        <Col span={2}/>
        </Row>
        </div>
        </Spin>
      );
    }
  }

  export default MobileRegistrationForm = Form.create({})(MobileRegistrationForm);
