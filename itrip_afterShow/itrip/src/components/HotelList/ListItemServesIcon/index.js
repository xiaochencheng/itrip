import React from 'react'

/*每条列表中服务小图标渲染组件*/
export default class ListItemServesIcon extends React.Component {
  render() {
    let FeatureName = [],
      arrfeature;

    if (this.props.serveIcon != null) {
      arrfeature = this.props.serveIcon.split(",");
      for (let i = 0; i < arrfeature.length; i++) {
        FeatureName.push(<i className={arrfeature[i]} />);
      }
    } else {
      FeatureName.push(<i className="" />);
    }


    return (
      <i className="featureBox">{FeatureName}</i>
    )

  }
}
