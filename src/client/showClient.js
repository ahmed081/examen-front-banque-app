
import React, { useState,useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Redirect, useParams } from 'react-router-dom';


const ShowClient = (props) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
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
  
    const {id} = useParams()
    
    
    const [client,setClient] = useState()
    const [loading,setLoading] = useState(true)
    const [deleted,setDeleted] = useState(false)
    const [edit,setEdit] = useState(false)
    useEffect(()=>{
        setClient({
            fullName:"ahmed",
            email : "ahmed@gmail.com"
        })
        setLoading(false)
    },[])
  
    const editCustomer=()=>{
      //edit 
    }
    const deleteCustomer=()=>{
      //delete
      //setDelete(true)
    }
    
  return ( 
    <>
    Show Client 
    {
      deleted?<Redirect to="/clients" />:""
    }
      {
        loading?<div>Please wait......</div>:
        <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        
        <Form.Item label="Full Name">
          <Input value={client.fullName} onChange={(event)=>{setClient({...client,fullName:event.target.value});setEdit(true)}} placeholder="Full Name" />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={client.email} onChange={(event)=>{setClient({...client,email:event.target.value});setEdit(true)}} placeholder="email" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
        {edit===false?<Button disabled type="primary">Edit Customer</Button>:<Button onClick={()=>editCustomer()} type="primary">Edit Customer</Button>}
          <Button onClick={()=>deleteCustomer()} type="danger">Delete Customer </Button>
        </Form.Item>
      </Form>
      }
    </>
  );
};




export default ShowClient ;