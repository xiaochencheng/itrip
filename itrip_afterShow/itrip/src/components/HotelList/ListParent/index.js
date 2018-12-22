import React from 'react'
import { Button } from 'antd'; 

//列表的头部选项（选定几家酒店、最受欢迎等等项目）
export default class ListParent extends React.Component {
  state = {
    isOkCount: true,
    avgScore: true,
    minPrice: true,
    hotelLevel: true
  }
  onChange = (e) => {
    //取按钮的value值e.currentTarget.value
    if (this.state[e.currentTarget.value]) {
      let state = this.state;
      state[e.currentTarget.value] = false;
      this.setState(state)
      this.props.dataListParent({
        key:e.currentTarget.value,
        val:true
      })
    } else {
      let state = this.state;
      state[e.currentTarget.value] = true;
      this.setState(state)
      this.props.dataListParent({
        key:e.currentTarget.value,
        val:false
      })
    }
    
  }
  render() {
    return (
      <div className="itemParent">
        <div>
          <div style={{ margin: '10px 0' }} className="tavern-params-title">
            <span>您已选择：</span><span style={{ color: 'red', fontWeight: 800, fontSize: 18 }}>{this.props.totalNum}</span>&nbsp;家酒店
          </div>
          <div className="tavern-grid-title"> 
             <Button onClick={this.onChange.bind(this)} value="isOkCount">最受欢迎</Button>
             <Button onClick={this.onChange.bind(this)} value="avgScore">评分</Button>
             <Button onClick={this.onChange.bind(this)} value="minPrice">价格</Button>
             <Button onClick={this.onChange.bind(this)} value="hotelLevel">星级</Button> 
          </div>
        </div>
      </div>
    )
  }
}
