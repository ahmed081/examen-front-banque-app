

import { Route, Switch } from "react-router-dom"
import { Form, Input, Button } from 'antd';
import { useState } from "react";

const EffectuerOperation =()=>{
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const formItemLayout = formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    return (
        <div>
            
        
        <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        
        
        <Form.Item label="operation">
          <Input value='virement'  placeholder="virement" />
        </Form.Item>
        <Form.Item label="compte debiteur">
          <Input value="1"  placeholder="compte" />
        </Form.Item>
        <Form.Item label="compre crediteur">
          <Input value="2"  placeholder="compte" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
        <Button  type="primary"> Effectuer </Button>
        </Form.Item>
      </Form>
      
        </div>
    )
}


export default EffectuerOperation