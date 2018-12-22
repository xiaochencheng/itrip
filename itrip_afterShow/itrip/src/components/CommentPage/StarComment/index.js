import React from 'react'
import { Rate } from 'antd';

import './style.css'

//星评评论组件情况
export default class StarComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //设施评分
      facilitiesScore: 1,
      //卫生评分
      hygieneScore: 1,
      //位置评分
      positionScore: 1,
      //服务评分
      serviceScore: 1,
      param: {}
    }
  }
  componentWillMount() {
    //组件将要加载时，给参数赋值
    this.state.param["positionScore"] = this.state.positionScore;
    this.state.param["facilitiesScore"] = this.state.facilitiesScore;
    this.state.param["hygieneScore"] = this.state.hygieneScore;
    this.state.param["serviceScore"] = this.state.serviceScore;
    this.props.starLeval(this.state.param);

    //console.log("paramWillMount=" + JSON.stringify(this.state.param))
   }

  handleChangePos = (value) => {
    this.setState({
      positionScore: value
    })
    this.state.param["positionScore"] = value;
    //console.log("param=" + JSON.stringify(this.state.param))
    //传递到父组件
     this.props.starLeval(this.state.param);
  }
  handleChangeFac = (value) => {
    this.setState({
      facilitiesScore: value
    })
    this.state.param["facilitiesScore"] = value;
    //console.log("param=" + JSON.stringify(this.state.param))
    //传递到父组件
     this.props.starLeval(this.state.param);
  }
  handleChangeHyg = (value) => {
    this.setState({
      hygieneScore: value
    })
    this.state.param["hygieneScore"] = value;
    //console.log("param=" + JSON.stringify(this.state.param))
    //传递到父组件
     this.props.starLeval(this.state.param);
  }
  handleChangeSev = (value) => {
    this.setState({
      serviceScore: value
    })
    this.state.param["serviceScore"] = value;
    //console.log("param=" + JSON.stringify(this.state.param))
    //传递到父组件
     this.props.starLeval(this.state.param);
  }
  render() {
    return (
      <div className="starcomment">
        <div className="staritem">
          <span>位置 </span> <Rate onChange={this.handleChangePos} value={this.state.positionScore} />
        </div>
        <div className="staritem">
          <span>设施 </span> <Rate onChange={this.handleChangeFac} value={this.state.facilitiesScore} />
        </div>
        <div className="staritem">
          <span>服务 </span> <Rate onChange={this.handleChangeSev} value={this.state.serviceScore} />
        </div>
        <div className="staritem">
          <span>卫生 </span> <Rate onChange={this.handleChangeHyg} value={this.state.hygieneScore} />
        </div>

      </div>


    )
  }
}
