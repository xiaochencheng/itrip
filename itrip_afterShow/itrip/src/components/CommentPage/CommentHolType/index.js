import React from 'react'
import { Input, Select } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
import { fetchBiz } from 'components/fetchUtils'

import './style.css'

//评价酒店类型组件情况
export default class CommentHolType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '108',
      travelType: []
    };
  }
  componentWillMount() {

     fetchBiz({
      url: "/comment/gettraveltype",
      callback: (e) => {
        // console.log("类型列表="+JSON.stringify(e.data)  )
        this.setState({
          travelType: e.data
        })
      }
    })
    
    this.state.currency = this.state.currency;
    this.props.selectValue(this.state.currency);
  }

  
  //下拉列表触发提交数据
  handleCurrencyChange = (currency) => {
    this.state.currency = currency;
    this.props.selectValue(this.state.currency);
  }

  render() {
    return (

      <div className="Commenthoteltype">
        {/*<span className="hoteltypecc">酒店类型：</span>*/}
        <InputGroup compact>
          <Select defaultValue="请选择" onChange={this.handleCurrencyChange}>
          {
              this.state.travelType.map(function (val) {
                return (
                  <Option value={val.id}>{val.name}</Option>
                )
              })
            }
            
          </Select>
        </InputGroup>
      </div>

    )
  }
}




