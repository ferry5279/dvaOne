import React from 'react';
import Addbtn from '@/components/Addbtn'
import List from '@/components/List'
import './style.less'

export default class index extends React.Component {
  render() {
    return <div className='home'>
      <Addbtn />
      <List />
    </div>;
  }
}



