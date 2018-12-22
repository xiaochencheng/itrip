package cn.itrip.controller;

import cn.itrip.beans.dtos.Dto;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.vo.ItripImageVO;
import cn.itrip.beans.vo.comment.ItripScoreCommentVO;
import cn.itrip.beans.vo.comment.ItripScoreCountVo;
import cn.itrip.common.DtoUtil;
import cn.itrip.service.hotelCommon.HotelCommonService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
@Api(value = "API", basePath = "/http://api.itrap.com/api")
@RequestMapping(value = "/api/comment")
public class HotelCommonController {

    private Logger logger = Logger.getLogger(UserInfoController.class);

    @Resource
    private HotelCommonService hotelCommonService;

    /**
     * 查询酒店评分
     * @param request
     * @return
     */
    @ApiOperation(value = "查询酒店评分接口", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class)
    @RequestMapping(value = "/gethotelscore/{cityId}", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public Dto<ItripScoreCommentVO> getUserList(@PathVariable Integer cityId, HttpServletRequest request) {
        System.out.println("queryhotcity>>>>>>>>>>>>>>>>>>");
        try {
            ItripScoreCommentVO list =hotelCommonService.getHotelCommon(cityId);
            System.out.println(list+">>>>>>>");

            System.out.println(list+">>>>>>>>>>");
            return DtoUtil.returnSuccess("查询酒店评分获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            return DtoUtil.returnFail("系统异常", "100513");
        }
    }


    /**
     * 查询评论数量
     * @param request
     * @return
     */
    @ApiOperation(value = "查询评论数量接口", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class)
    @RequestMapping(value = "/getcount/{cityId}", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public Dto getHotelCommentCount(@PathVariable Integer cityId, HttpServletRequest request) {
        System.out.println("queryhotcity>>>>>>>>>>>>>>>>>>");
        try {
            Integer list = null;
            Map map=new HashMap();
            ItripScoreCountVo count=new ItripScoreCountVo();
            map.put("hotelId",cityId);
            list=hotelCommonService.getHotelCommonCount(map);
            count.setAllcomment(list);
            map.put("isok",0);
            list=hotelCommonService.getHotelCommonCount(map);
            count.setImprove(list);
            map.put("isok",1);
            list=hotelCommonService.getHotelCommonCount(map);
            count.setIsok(list);
            map.remove("isok");

            map.put("ishavingimg",1);
            list=hotelCommonService.getHotelCommonCount(map);
            count.setHavingimg(list);
            map.put("content",cityId);
            list=hotelCommonService.getHotelCommonCount(map);
            count.setAllcomment(list);
            return DtoUtil.returnSuccess("查询评论数量获取成功", count);
        } catch (Exception e) {
            e.printStackTrace();
            return DtoUtil.returnFail("系统异常", "100513");
        }
    }


    /**
     * 查询评论附带的图片
     * @param request
     * @return
     */
    @ApiOperation(value = "查询评论附带的图片接口", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class)
    @RequestMapping(value = "/getimg/{commentId}", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public Dto<ItripImageVO> getItripImgId(@PathVariable Integer commentId, HttpServletRequest request) {
        System.out.println("/getimg/{commentId}>>>>>>>>>>>>>>>>>>");
        try {
            ItripImage list =hotelCommonService.getCommentImgId(commentId);
            System.out.println(list+">>>>>>>");
            ItripImageVO imageVO=new ItripImageVO();
            imageVO.setPosition(list.getPosition());
            imageVO.setImgUrl(list.getImgUrl());
            System.out.println(list+">>>>>>>>>>");
            return DtoUtil.returnSuccess("查询评论附带的图片成功", imageVO);
        } catch (Exception e) {
            e.printStackTrace();
            return DtoUtil.returnFail("系统异常", "100513");
        }
    }


}


