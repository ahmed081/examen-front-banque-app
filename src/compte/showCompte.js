
import React, { useState,useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Redirect, useParams } from 'react-router-dom';


const ShowCompte = (props) => {
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
    
    
    const [compte,setCompte] = useState()
    const [loading,setLoading] = useState(true)
    const [deleted,setDeleted] = useState(false)
    const [edit,setEdit] = useState(false)
    useEffect(()=>{
        setCompte({
            client:"ahmed",
            type : "EPARGNE",
            solde : 30000,
            etat : "ACTIVE",
        })
        setLoading(false)
    },[])
  
    const editCustomer=()=>{
      //edit 
    }
    const deleteCompte=()=>{
      //delete
      //setDelete(true)
    }
    
  return ( 
    <>
    Show Compte 
    {
      deleted?<Redirect to="/comptes" />:""
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
        
        <Form.Item label="client">
          <Input disabled value={compte.client} onChange={(event)=>{setCompte({...compte,fullName:event.target.value});setEdit(true)}} placeholder="Full Name" />
        </Form.Item>
        <Form.Item label="Solde">
          <Input disabled  value={compte.solde} onChange={(event)=>{setCompte({...compte,email:event.target.value});setEdit(true)}} placeholder="email" />
        </Form.Item>
        <Form.Item label="Type">
          <Input disabled value={compte.type} onChange={(event)=>{setCompte({...compte,email:event.target.value});setEdit(true)}} placeholder="email" />
        </Form.Item>
        <Form.Item label="Etat">
          <Input disabled value={compte.etat} onChange={(event)=>{setCompte({...compte,email:event.target.value});setEdit(true)}} placeholder="email" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
        <Button onClick={()=>editCustomer()} type="primary">changer état</Button>
          <Button onClick={()=>deleteCompte()} type="danger">Delete Compte </Button>
        </Form.Item>
      </Form>
      }
    </>
  );
};




export default ShowCompte ;