import React from 'react'
import { hashHistory } from 'react-router'
import classnames from 'classnames'
import './style.css'


export default class HomeRecommend extends React.Component {
  state = {
    currentIndex: -1
  }

  static defaultProps = {
    accordionTitles: []
  }
  
  handleMouseEnter(index) {
    this.setState({
      currentIndex: index
    })
  }

  handleMouseLeave () {
    this.setState({
      currentIndex: -1
    })
  }

  handleClick(id, e) {
    e.preventDefault()
    hashHistory.push('/hotellist?id=' + id)
  }

  renderAccordion() {
    const { accordionTitles } = this.props
    const { currentIndex } = this.state
    const list = []

    for (let i = 0, len = Math.min(6, accordionTitles.length); i < len; i++) {

      let clsNames = classnames({
        itemBg1: i === 0,
        itemBg2: i === 1,
        itemBg3: i === 2,
        itemBg4: i === 3,
        itemBg5: i === 4,
        itemBg6: i === 5,
        hoverItem: currentIndex === i,
        hoverOtheritem: currentIndex > -1 &&  currentIndex !== i
      })

      list.push(
        <li
          onClick={this.handleClick.bind(this, accordionTitles[i].id)}
          className={clsNames}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this, i)}
          key={i}>
          <div>{accordionTitles[i].name}</div>
        </li>
      )
    }
    return list
  }s

  render() {
    return (
      <div className="HomeRecommend">
        <div className="travel-local-body points-list">

          <div className="HomeHotel-title">
            <h3>特色酒店推荐</h3>
          </div>

          <div id="myAccordion" className="tab-content ">
            <div className="tab-pane fade in active" id="accordion">
              <div className="travel-accordion accordion">
                <div className="box">
                  <ul>
                    {this.renderAccordion()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
