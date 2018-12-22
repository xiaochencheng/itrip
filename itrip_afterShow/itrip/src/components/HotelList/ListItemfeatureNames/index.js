import React from 'react'

/*每条列表中钻石渲染组件*/
export default class ListItemfeatureNames extends React.Component {
  render() {
    let FeatureName = [],
      arrfeature;

   /* arrfeature = this.props.featureStr.split(",");*/

    if (this.props.featureStr != null) {
      arrfeature = this.props.featureStr.split(",");
      for (let i = 0; i < arrfeature.length; i++) {
        FeatureName.push(<span className="item">{arrfeature[i]}</span>);
      }
    } else {
      FeatureName.push(<span className="item"></span>);
    }
    /*console.log ("arrfeature11="+typeof(this.props.featureStr) );
    console.log ("arrfeature="+ this.props.featureStr.split(","));
    if (!arrfeature) {
        FeatureName.push(<span className="item">商务出行</span>);      
    }else{
      for (let i = 0; i < arrfeature.length; i++) {
        FeatureName.push(<span className="item">{arrfeature[i]}</span>);
      }
    }*/


    return (
      <i className="featureBox">{FeatureName}</i>
    )

  }
}
