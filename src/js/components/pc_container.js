import React from 'react';
import {Row,Col, Menu, Icon,Button, Modal,Form,Checkbox,Input,message,Carousel,Tabs }from 'antd';
import{Link} from 'react-router';
import PCNewsBlock from './pc_news_block.js';
import PCNewsImage from './pc_news_imageblock.js';
import PCProduct from './pc_product.js';
const TabPane=Tabs.TabPane;
export default class PCContainer
extends React.Component{
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
      <Row>
      <Col span={2}>
      </Col>
      <Col span={14} class="mainContainer">
      <div class="carousel">
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
      <PCNewsImage cardname="国际头条"  type="guoji" count={6} width="100%"
      imageWidth="110px"  />
      </div>
      <div class="middleContainer">
      <Tabs >
      <TabPane tab="最新" key="1">
      <PCNewsBlock count={22} type="top" width="100%" bordered="false"  />
      </TabPane>
      <TabPane tab="国际" key="2">
      <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"  />
      </TabPane>
      <TabPane tab="国内" key="3">
      <PCNewsBlock count={22} type="guonei" width="100%" bordered="false"  />
      </TabPane>
      <TabPane tab="科技" key="4">
      <PCNewsBlock count={22} type="keji" width="100%" bordered="false"  />
      </TabPane>
      </Tabs>
      </div>
      <div class="bottomContainer">
      <PCNewsImage cardname="国内新闻"  type="guonei" count={10} width="100%"
      imageWidth="150px"  />
      <PCNewsImage cardname="娱乐新闻"  type="yule" count={15} width="100%"
      imageWidth="150px"  />
      <PCNewsImage cardname="社会新闻"  type="shehui" count={10} width="100%"
      imageWidth="150px"  />
      </div>
      </Col>
      <Col span={6}>
      <Tabs>
      <TabPane tab="网易产品" key="1">
      <PCProduct/>
      </TabPane>
      </Tabs>
      </Col>
      <Col span={2}>
      </Col>
      </Row>
    );
  }

}
