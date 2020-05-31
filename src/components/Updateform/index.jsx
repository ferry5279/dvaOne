import React from 'react';
import { Form, Input, Modal } from 'antd';
import { connect } from 'dva'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
@connect (({home} )=> {
  return {
    visible:home.visible,
  }
})
export default class index extends React.Component {
  handleOk = (e) => {
    console.log('edit',111)
    this.props.dispatch({
      type: 'home/updateData',
      payload:this.refs.form.getFieldsValue()
    }) 
  };
  handleCancel =() => {
    this.props.dispatch({
      type: 'home/hidefn',
    }) 
  };
  render() {
    let { visible } = this.props;
    return <div >
      <Modal
        title="修改"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel} >
        <Form
          {...layout}
          name="basic"
          initialValues={this.props.datas}
          ref='form'>
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]} >
            <Input />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}>
            <Input/>
          </Form.Item>
          <Form.Item
            label="地址"
            name="address"
            rules={[{ required: true, message: 'Please input your address!' }]} >
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
    </div>;
  }
}
 
 
