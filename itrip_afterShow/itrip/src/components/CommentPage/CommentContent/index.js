import React from 'react'
import { Icon, Input } from 'antd';

import './style.css'

//评价内容组件情况
export default class CommentContent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      contentValue: ""
    }
  }
  componentWillMount() {
    this.state.contentValue = this.state.contentValue;
    this.props.contentvalue(this.state.contentValue);
  }
  //失去焦点
  handelTextArea = (e) => {
    this.state.contentValue = e.currentTarget.value;
    this.props.contentvalue(this.state.contentValue);
  }
  render() {
    return (

      <div className="commentcontent">
        <Input onBlur={this.handelTextArea} type="textarea" rows={7} placeholder="您可以聊聊酒店服务、位置、设施、环境卫生等方面的真实体验。所有真实有效的评价都会被显示。" />
        <div className="commentcontip">
          <span className="commentcontipleft">寥寥几字，积分唾手可得</span>
          <div className="commentcontipright">
            <i className="commentgift"><Icon type="gift" />写点评赚积分换 <a href="javascript:;">礼品卡！</a></i>
            <span><Icon type="exclamation-circle" />点评积分规则</span>
          </div>
        </div>
      </div>

    )
  }
}
