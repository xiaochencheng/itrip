package cn.itrip.controller;

import cn.itrip.beans.dtos.Dto;
import cn.itrip.beans.pojo.*;
import cn.itrip.beans.vo.ItripImageVO;
import cn.itrip.beans.vo.ItripLabelDicVO;
import cn.itrip.beans.vo.userinfo.ItripSearchUserLinkUserVO;
import cn.itrip.common.DtoUtil;
import cn.itrip.service.hotelroom.HotelImageMapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Api(value = "API", basePath = "/http://api.itrap.com/api")
@RequestMapping(value = "/api/hotelroom")
public class HotelRoomController {
    private Logger logger = Logger.getLogger(UserInfoController.class);

    @Resource
    private HotelImageMapper hotelImageMapper;

    /**
     * 查询酒店设施
     * @param roomId
     * @param request
     * @return
     */
    @ApiOperation(value = "查询酒店设施 ",httpMethod = "GET",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "查询酒店设施 ")
    @RequestMapping(value = "/getimg/{roomId}",method = RequestMethod.GET)
    @ResponseBody
    public Dto getImg(@PathVariable Integer roomId, HttpServletRequest request){
        try {
            List<ItripImageVO> imageVOS=new ArrayList<>();
            ItripImageVO itripImageVO=new ItripImageVO();
            List<ItripImage> itripHotel1=  hotelImageMapper.getImageSrc(roomId);
            for (ItripImage itripImage : itripHotel1){
                itripImageVO.setImgUrl(itripImage.getImgUrl());
                itripImageVO.setPosition(roomId);
                imageVOS.add(itripImageVO);
            }
            System.out.println("查询酒店设施！");
            return  DtoUtil.returnSuccess("查询酒店设施！",imageVOS);

        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("查询酒店设施", "100401");
        }
    }


    /**
     * 查询所有床型
     * @return
     * @throws Exception
     */
    @ApiOperation(value = "查询所有床型", httpMethod = "GET",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class)
    @RequestMapping(value = "/queryhotelroombed", method = RequestMethod.GET)
    @ResponseBody
    public Dto queryHotelBedType(HttpServletRequest request) {
            try {
                List<ItripLabelDicVO> currentUser = hotelImageMapper.getHotelBedType();
                logger.debug("currentUser size >>>>>>>>>>>>>>>>>>" + currentUser);
                return DtoUtil.returnSuccess("查询所有床型成功", currentUser);
            } catch (Exception e) {
                e.printStackTrace();
                return DtoUtil.returnFail("查询所有床型信息失败", "100401");
            }
    }

}
