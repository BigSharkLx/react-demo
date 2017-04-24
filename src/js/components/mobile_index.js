import React from 'react';
import MobileHeader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import {Tabs,Row,Col,BackTop,Carousel } from 'antd';
import MobileNewsImage from './mobile_newsimages_block.js';
const TabPane=Tabs.TabPane;
export default class MobileIndex extends React.Component{
  render(){
    const settings={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true,
      slidesToScroll:1
    };
    return(
      <div>
      <MobileHeader/>
      <Tabs>
      <TabPane tab="头条" key="1">
      <Row>
      <Col span={24}>
      <div class="m_runphoto">
      <Carousel {...settings}>
      <div>
      <img src="./src/image/carousel_1.jpg"/>
      </div>
      <div>
      <img src="./src/image/carousel_2.jpg"/>
      </div>
      <div>
      <img src="./src/image/carousel_3.jpg"/>
      </div>
      <div><img src="./src/image/carousel_4.jpg"/>
      </div>
      </Carousel>
      </div>
      <MobileNewsImage   type="top" count={30}/>
      </Col>
      </Row>
      </TabPane>
      <TabPane tab="社会" key="2">
      <Row>
      <Col span={24}>
      <MobileNewsImage   type="shehui" count={30}/>
      </Col>
      </Row>
      </TabPane>
      <TabPane tab="国内" key="3">
      <Row>
      <Col span={24}>
      <MobileNewsImage   type="guonei" count={30}/>
      </Col>
      </Row>
      </TabPane>
      <TabPane tab="国际" key="4">
      <Row>
      <Col span={24}>
      <MobileNewsImage   type="guoji" count={30}/>
      </Col>
      </Row>
      </TabPane>
      <TabPane tab="娱乐" key="5">
      <Row>
      <Col span={24}>
      <MobileNewsImage   type="yule" count={30}/>
      </Col>
      </Row>
      </TabPane>
      <TabPane tab="科技" key="6">
      <Row>
      <Col span={24}>
      <MobileNewsImage   type="keji" count={30}/>
      </Col>
      </Row>
      </TabPane>
      <TabPane tab="体育" key="7">
      <Row>
      <Col span={24}>
      <MobileNewsImage   type="tiyu" count={30}/>
      </Col>
      </Row>
      </TabPane>
      </Tabs>
      <MobileFooter/>
      <div class="m_backtop">
      <BackTop/>
      </div>
      </div>
    );
  }
}
