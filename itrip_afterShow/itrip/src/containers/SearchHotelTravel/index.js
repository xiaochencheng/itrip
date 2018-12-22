import React from 'react'
import { Tabs, message } from 'antd'
import { hashHistory } from 'react-router'
import { stringify } from 'querystring'
import SearchHotelInland from 'components/HomeComponents/SearchHotelInland'
import SearchHotelForeign from 'components/HomeComponents/SearchHotelForeign'
import './style.css'

const TabPane = Tabs.TabPane

export default class SearchHotelTravel extends React.Component {
  category = 1

  handleChange = category => {
    this.category = category
  }

  handleSubmit = formData => {
    formData.category = this.category;
    if (!formData.destination) {
      message.warn('目的地必须要填写哦！')
      return
    }

    const query = stringify(formData)
    hashHistory.push('/hotellist?' + query)
  }

  render() {
    return (
      <div className='SearchHotelTravel'>
        <Tabs defaultActiveKey="1" onChange={this.handleChange}>
          <TabPane tab="国内酒店" key="1">
            <SearchHotelInland onSubmit={this.handleSubmit} />
          </TabPane>
          <TabPane tab="国外酒店" key="2">
            <SearchHotelForeign onSubmit={this.handleSubmit} />
          </TabPane>
          
        </Tabs>
      </div>
    )
  }
}


