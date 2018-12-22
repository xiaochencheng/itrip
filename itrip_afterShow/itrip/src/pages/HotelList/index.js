import React from 'react'
import { Pagination } from 'antd'

import ListOption from 'components/HotelList/ListOption'
import ListItem from 'components/HotelList/ListItem'
import ListParent from 'components/HotelList/ListParent'
import { fetchSearch } from 'components/fetchUtils'

import './style.css'


/*var paramfeature;*/
//列表页主页调用组件情况
export default class HotelList extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      beginPos: -10,
      curPage: 0,
      pageCount: 1,
      pageSize: 10,
      total: 0,
      rows: [],
      // hotelPriceSortSearhData: {},
      handleOptionChild: (dataIndex, formValues) => {
        //  paramfeature  = formValues;
        this.setState(dataIndex);
        this.setState({
          sortForm: formValues,
        })

        //  console.warn("parentIndex" + JSON.stringify(dataIndex));
        //  console.log(dataIndex["rows"]);
        //  console.log("formValues++++++++"+JSON.stringify(formValues));
      },
      handelSort: (sortData) => {
        let formValues = this.state.sortForm;
        if (sortData.val) {
          formValues["ascSort"] = sortData.key;
          formValues["descSort"] = null;
        } else {
          formValues["ascSort"] = null;
          formValues["descSort"] = sortData.key;
        }
        this.setState({
          sortForm: formValues,
        })
        // 输出结果 查看是否拼接成功
        /*console.log("sortForm++++++++1" + JSON.stringify(sortData));
        console.log("sortForm++++++++" + JSON.stringify(this.state.sortForm));*/

        //拼接排序之后向后台接口请求数据
        fetchSearch({
          url: "/hotellist/searchItripHotelPage",
          type: "POST",
          param: this.state.sortForm,
          callback: e => {
            //得到后台的请求数据
             //console.log("连接价格adad==" + JSON.stringify(e.data));
            //根据请求的后台数据改变状态值
            this.setState({
              hotelPriceSortSearhData: e.data
            })
            // 将请求数据传递给父组件
            // 通过回调函数中改变的状态值
            // 参数列表是：根据请求的酒店信息--改变的表单参数列表--价格参数列表
            this.state.handleOptionChild(this.state.hotelPriceSortSearhData, this.state.sortForm);
          }
        })

      }

      
    };
  }
  //分页事件
  onChange = (pageNo) => {
    // console.log(pageNo);
    this.state.sortForm["pageNo"] = pageNo;
    //拼接排序之后向后台接口请求数据
        fetchSearch({
          url: "/hotellist/searchItripHotelPage",
          type: "POST",
          param: this.state.sortForm,
          callback: e => {
            //得到后台的请求数据
            this.setState({
              hotelPriceSortSearhData: e.data
            })
            // 将请求数据传递给父组件
            // 通过回调函数中改变的状态值
            // 参数列表是：根据请求的酒店信息--改变的表单参数列表--价格参数列表
            this.state.handleOptionChild(this.state.hotelPriceSortSearhData, this.state.sortForm);
          }
        })
  }


  //耗时操作放在这里面
  /* componentDidMount(){
       this.getNet();
   }*/

  render() {
    return (
      <div className="HotelList">
        <ListOption dataChild={this.state.handleOptionChild} /*feartureId={paramfeature}*//>
        <ListParent totalNum={this.state.total} dataListParent={this.state.handelSort} />
        <ListItem data={this.state.rows} timeData={this.state.sortForm}/>
        <div className="paginationWrapper">
          <Pagination defaultCurrent={1} current={this.state.curPage } total={this.state.total} pageSize={this.state.pageSize} onChange={this.onChange.bind(this)} />
        </div>

      </div>
    )
  }
}
