import React from 'react'
import { Button } from 'antd';

import './style.css'

//总体评价组件情况
export default class TotalComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOk: 1
    }
  }
  componentWillMount() {
    //组件将要加载时，给参数赋值
    this.state.isOk = this.state.isOk;
    this.props.totalcomment(this.state.isOk);
  }

  //点击值得推荐
  recomment = () => {
    this.state.isOk = 1;
    this.props.totalcomment(this.state.isOk);
  }
  //点击有待改善
  noRecomment = () => {
    this.state.isOk = 0;
    this.props.totalcomment(this.state.isOk);
  }

  render() {
    return (

      <div className="toatlcomwrapper">
        <span>总评</span>
        <div className="commentlike">
          <Button icon="like-o" onClick={this.recomment}>
            值得推荐
          </Button>
        </div>
        <div className="commentdislike">
          <Button icon="dislike-o" onClick={this.noRecomment} >
            有待改善
          </Button>
        </div>
      </div>

    )
  }
}
