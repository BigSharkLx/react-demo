import React from 'react';
import PCHeader from './pc_header.js';
import PCFooter from './pc_footer.js';
import PCContainer from './pc_container.js';
export default class PCIndex extends React.Component{
  render(){
    return(
      <div>
      <PCHeader/>
      <PCContainer/>
      <PCFooter/>
      </div>
    );
  }
}
