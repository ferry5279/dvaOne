import React from 'react';
import {  Button } from 'antd';
import { connect } from 'dva'
import Addform from '@/components/Addform'
import './style.less'
@connect (({home} )=> {
  return {
  }
})
export default class index extends React.Component {
    showfn = () => {
      this.props.dispatch({
        type: 'home/showfn',
      }) 
    }

    render() {
        return <div className='addbtn'>
          <Button type = "primary" onClick = { this.showfn }>
            添加 </Button>
          <Addform   />
        </div>;
    }
}






