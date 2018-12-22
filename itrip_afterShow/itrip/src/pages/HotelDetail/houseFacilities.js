/*
* @Author: zhzbin
* @Date:   2017-05-08 13:58:01
* @Last Modified by:   zhzbin
* @Last Modified time: 2017-05-08 13:59:32
*/
import React from 'react'
import { fetchBiz } from '../../components/fetchUtils'
'use strict';


export default class HouseFacilities extends React.Component {
  state={
    group:[]
  }
  componentWillMount() {
    fetchBiz({
      url: "/hotel/queryhotelfacilities/"+this.props.hotelId,
      callback: (data) => {
        this.setState({
          group: eval("("+data.data+")")
        })
      }
    })
    }
  render() {
    if(!this.state.group) return;
    return (

      <div className="i_cost i_cost_con clearfix">
        <span className="i_icon1">
          <h4>酒店设施</h4>
          <i className="icon-key" />
        </span>
        <div className="i_cost_list">
          <div className="i_list_shang">
            {
              this.state.group.map(function (val, i, array) {
                return (
                  <div className="facility_list clearfix">
                    <h5>【{val.rootName}】</h5>
                    <ul>
                      {val.leafs.map(value => {
                        return <li><i className={value.pic} />{ value.name}</li>
                      })}
                    </ul>
                  </div>
                )

              })
            }

          </div>
        </div>
      </div>


    )

  }
}
