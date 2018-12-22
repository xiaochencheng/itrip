package cn.itrip.controller;

import cn.itrip.beans.dtos.Dto;
import cn.itrip.beans.pojo.*;
import cn.itrip.beans.vo.ItripLabelDicVO;
import cn.itrip.beans.vo.hotel.HotelVideoDescVO;
import cn.itrip.beans.vo.hotel.ItripSearchDetailsHotelVO;
import cn.itrip.beans.vo.hotel.ItripSearchFacilitiesHotelVO;
import cn.itrip.beans.vo.hotel.ItripSearchPolicyHotelVO;
import cn.itrip.beans.vo.userinfo.ItripModifyUserLinkUserVO;
import cn.itrip.common.DtoUtil;
import cn.itrip.service.hotel.ItripAreaDicService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;



@Controller
@Api(value = "API", basePath = "/http://api.itrap.com/api")
@RequestMapping(value = "/api/hotel")
public class HotelController {

    private Logger logger = Logger.getLogger(UserInfoController.class);

    @Resource
    private ItripAreaDicService itripAreaDicService;

    /**
     * 查询热门城市列表
     * @param request
     * @return
     */
    @ApiOperation(value = "查询热门城市接口", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class, notes = "查询热门城市信息" +
            "<p>成功：success = ‘true’ | 失败：success = ‘false’ 并返回错误码，如下：</p>" +
            "<p>错误码：</p>" +
            "<p>100000 : token失效，请重登录</p>")
    @RequestMapping(value = "/queryhotcity/{cityId}", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public Dto getUserList(@PathVariable Integer cityId, HttpServletRequest request) {
        System.out.println("queryhotcity>>>>>>>>>>>>>>>>>>");
        List<ItripAreaDic> list = null;
        try {
            list=itripAreaDicService.getItripAreaDic(cityId);
            return DtoUtil.returnSuccess("获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            return DtoUtil.returnFail("系统异常", "100513");
        }
    }

    /**
     * 查询城市商圈
     * @param request
     * @return
     */
    @ApiOperation(value = "查询城市商圈接口", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class, notes = "查询热门城市信息" +
            "<p>成功：success = ‘true’ | 失败：success = ‘false’ 并返回错误码，如下：</p>" +
            "<p>错误码：</p>" +
            "<p>100000 : token失效，请重登录</p>")
    @RequestMapping(value = "/querytradearea/{cityId}", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public Dto getUserLists(@PathVariable String cityId, HttpServletRequest request) {
        System.out.println("querytradearea>>>>>>>>>>>>>>>>>>");
        List<ItripAreaDic> list = null;
        try {
            list=itripAreaDicService.getItriAreaDicParent(cityId);
            return DtoUtil.returnSuccess("获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            return DtoUtil.returnFail("系统异常", "100513");
        }
    }


    /**
     * 查询所有酒店特色
     * @return
     * @throws Exception
     */
    @ApiOperation(value = "查询所有酒店特色接口", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class)
    @RequestMapping(value = "/queryhotelfeature", method = RequestMethod.GET)
    @ResponseBody
    public Dto<ItripLabelDicVO> queryUserLinkUser(HttpServletRequest request) {
        List<ItripLabelDic> userLinkUserList = null;
        try {
            userLinkUserList = itripAreaDicService.getItripLabeDic();
            logger.debug("userLinkUserList size >>>>>>>>>>>>>>>>>>" + userLinkUserList.size());
            return DtoUtil.returnSuccess("获取常用联系人信息成功", userLinkUserList);
        } catch (Exception e) {
            e.printStackTrace();
            return DtoUtil.returnFail("获取常用联系人信息失败", "100401");
        }
    }

    /**
     * 查询酒店视频信息
     * @param cityId
     * @param request
     * @return
     */
    @ApiOperation(value = "查询酒店视频信息",httpMethod = "GET",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "查询酒店视频信息")
    @RequestMapping(value = "/getvideodesc/{cityId}",method = RequestMethod.GET)
    @ResponseBody
    public Dto<HotelVideoDescVO> modifyLinkUser(@PathVariable Integer cityId, HttpServletRequest request){
        try {
            System.out.println("获取酒店视频信息！");
            HotelVideoDescVO hotelVideoDescVO1=new HotelVideoDescVO();
            ItripHotel itripHotel1=itripAreaDicService.getItripHotelId();
            System.out.println(itripHotel1.getHotelName()+">>>>>>>>>>"+cityId+">>>>>>");
            List<String>  list=itripAreaDicService.getItripHotelTradingArea();
            List<String> listArea=itripAreaDicService.getItripHote(cityId);
            System.out.println(">>"+list+">>>>>"+listArea);
            hotelVideoDescVO1.setHotelName(itripHotel1.getHotelName());
            hotelVideoDescVO1.setHotelFeatureList(listArea);
            hotelVideoDescVO1.setTradingAreaNameList(list);
            System.out.println(hotelVideoDescVO1.getHotelName()+">>>>"+hotelVideoDescVO1.getHotelFeatureList()+">>>>"+hotelVideoDescVO1.getTradingAreaNameList());
            System.out.println("查询酒店视频信息！");
            return  DtoUtil.returnSuccess("获取酒店视频文字描述成功！",hotelVideoDescVO1);

        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("获取酒店视频文字描述失败", "100401");
        }
    }

    /**
     * 查询酒店描述和特色
     * @param cityId
     * @param request
     * @return
     */
    @ApiOperation(value = "查询酒店描述和特色 ",httpMethod = "GET",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "查询酒店描述和特色 ")
    @RequestMapping(value = "/queryhoteldetails/{cityId}",method = RequestMethod.GET)
    @ResponseBody
    public Dto<ItripSearchDetailsHotelVO> getHotelDatail(@PathVariable Integer cityId, HttpServletRequest request){
        ItripHotel hotels=null;
        try {
            System.out.println(cityId+"}}}}}}}");
            hotels=itripAreaDicService.getHotelDetailGetId();
            ItripSearchDetailsHotelVO detail=new ItripSearchDetailsHotelVO();
            List<ItripSearchDetailsHotelVO> itripHotel1=  itripAreaDicService.getHotelDetail(cityId);
            System.out.println(itripHotel1+"{{{{{{{{{{{{{{{{");
            detail.setName("酒店介绍");
            detail.setDescription(hotels.getDetails());
            itripHotel1.add(detail);
            System.out.println("查询酒店描述和特色 ！");
            return  DtoUtil.returnSuccess("查询酒店描述和特色 ！",itripHotel1);
        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("查询酒店描述和特色信息失败", "100401");
        }
    }

    /**
     * 查询酒店设施
     * @param cityId
     * @param request
     * @return
     */
    @ApiOperation(value = "查询酒店设施 ",httpMethod = "GET",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "查询酒店设施 ")
    @RequestMapping(value = "/queryhotelfacilities/{cityId}",method = RequestMethod.GET)
    @ResponseBody
    public Dto<ItripSearchFacilitiesHotelVO> getHotelDatailTool(@PathVariable Integer cityId, HttpServletRequest request){
       try {
           List<String> itripHotel1= itripAreaDicService.getHotelTool(cityId);
            System.out.println("查询酒店设施！"+itripHotel1);
            return  DtoUtil.returnSuccess("查询酒店设施！",itripHotel1);
        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("查询酒店设施", "100401");
        }
    }

    /**
     * 查询酒店设施
     * @param cityId
     * @param request
     * @return
     */
    @ApiOperation(value = "查询酒店设施 ",httpMethod = "GET",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "查询酒店设施 ")
    @RequestMapping(value = "/queryhotelpolicy/{cityId}",method = RequestMethod.GET)
    @ResponseBody
    public Dto<ItripSearchPolicyHotelVO> queryhotelpolicy(@PathVariable Integer cityId,
                                                        HttpServletRequest request){

        List<String> itripHotel1=new ArrayList<>();
        try {
            itripHotel1= itripAreaDicService.queryhotelpolicy(cityId);
            System.out.println("查询酒店设施！");
            return  DtoUtil.returnSuccess("查询酒店设施！",itripHotel1);
        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("查询酒店设施", "100401");
        }
    }
}
