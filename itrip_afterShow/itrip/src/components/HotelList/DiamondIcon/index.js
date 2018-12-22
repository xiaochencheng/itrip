import React from 'react'

/*每条列表中钻石渲染组件*/
export default class DiamondIcon extends React.Component {
  render() {
        let DiamondIconSums = [];

        for (let i=0 ;i < this.props.iconSum; i++) {
            DiamondIconSums.push(<i className="fa fa-diamond" />);
        }

        return (
				 <em className="diamondBox">{DiamondIconSums}</em>
				)
        
  }
}