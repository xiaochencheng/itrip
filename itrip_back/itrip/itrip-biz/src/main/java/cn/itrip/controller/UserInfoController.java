package cn.itrip.controller;

import cn.itrip.beans.dtos.Dto;
import cn.itrip.beans.pojo.ItripUser;
import cn.itrip.beans.pojo.ItripUserLinkUser;
import cn.itrip.beans.vo.userinfo.ItripAddUserLinkUserVO;
import cn.itrip.beans.vo.userinfo.ItripModifyUserLinkUserVO;
import cn.itrip.beans.vo.userinfo.ItripSearchUserLinkUserVO;
import cn.itrip.common.DtoUtil;
import cn.itrip.common.ValidationToken;
import cn.itrip.service.userlinkuser.ItripUserLinkUserService;
import cn.itrip.service.userlinkuser.ItripUserLinkUserServiceImpl;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.spring.web.json.Json;

import javax.annotation.Resource;
import javax.mail.Session;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.util.*;
import java.util.List;


/**
 * 用户信息Controller
 * <p>
 * 包括API接口：
 * 1、根据UserId、联系人姓名查询常用联系人接口
 * 2、指定用户下添加联系人
 * 3、修改指定用户下的联系人信息
 * 4、删除指定用户下的联系人信息
 * <p>
 * 注：错误码（100401 ——100500）
 * <p>
 * Created by hanlu on 2017/5/9.
 */

@Controller
@Api(value = "API", basePath = "/http://api.itrap.com/api")
@RequestMapping(value = "/api/userinfo")
public class UserInfoController {
    private Logger logger = Logger.getLogger(UserInfoController.class);


    @Resource
    private ValidationToken validationToken;
    @Resource
    private ItripUserLinkUserService itripUserLinkUserService;


    /**
     * 根据UserId,联系人姓名查询常用联系人-add by donghai
     *
     * @return
     * @throws Exception
     */
    @ApiOperation(value = "查询常用联系人接口", httpMethod = "POST",
            protocols = "HTTP", produces = "application/json",
            response = Dto.class, notes = "查询常用联系人信息(可根据联系人姓名进行模糊查询)" +
            "<p>若不根据联系人姓名进行查询，不输入参数即可 | 若根据联系人姓名进行查询，须进行相应的入参，比如：{\"linkUserName\":\"张三\"}</p>" +
            "<p>成功：success = ‘true’ | 失败：success = ‘false’ 并返回错误码，如下：</p>" +
            "<p>错误码：</p>" +
            "<p>100401 : 获取常用联系人信息失败 </p>" +
            "<p>100000 : token失效，请重登录</p>")
    @RequestMapping(value = "/queryuserlinkuser", method = RequestMethod.POST)
    @ResponseBody
    public Dto<ItripUserLinkUser> queryUserLinkUser(@RequestBody ItripSearchUserLinkUserVO itripSearchUserLinkUserVO, HttpServletRequest request) {
        String tokenString = request.getHeader("token");
        logger.info("tokenString>>>>>>>>>>>>>" + tokenString);
        logger.info("linkUserName>>>>>>>>>" + itripSearchUserLinkUserVO.getLinkUserName());
        ItripUser currentUser = validationToken.getCurrentUser(tokenString);
        System.out.println("currentUser>>>>>>>>>>"+currentUser);
        List<ItripUserLinkUser> userLinkUserList = new ArrayList<ItripUserLinkUser>();
        String linkUserName = (null == itripSearchUserLinkUserVO) ? null : itripSearchUserLinkUserVO.getLinkUserName();
        Dto dto = null;
        if (null != currentUser) {
            Map param = new HashMap();
            param.put("userId", currentUser.getId());
            param.put("linkUserName", linkUserName);
            try {
                userLinkUserList = itripUserLinkUserService.getItripUserLinkUserListByMap(param);
                logger.debug("userLinkUserList size >>>>>>>>>>>>>>>>>>" + userLinkUserList.size());
                return DtoUtil.returnSuccess("获取常用联系人信息成功", userLinkUserList);
            } catch (Exception e) {
                e.printStackTrace();
                return DtoUtil.returnFail("获取常用联系人信息失败", "100401");
            }
        } else {
            return DtoUtil.returnFail("token失效，请重新登录", "100000");
        }
    }

    /**
     * 添加
     * @param itripAddUserLinkUserVO
     * @param request
     * @return
     */
   @ApiOperation(value = "添加常用联系人接口",httpMethod = "POST",produces = "application/json",protocols = "HTTP",
     response = Dto.class,notes = "添加")
    @RequestMapping(value = "/adduserlinkuser",method = RequestMethod.POST)
    @ResponseBody
    public Dto<ItripUserLinkUser> addLinkUser(@RequestBody ItripAddUserLinkUserVO itripAddUserLinkUserVO,HttpServletRequest request){
       String tokenString = request.getHeader("token");
       logger.info("tokenString>>>>>>>>>>>>>" + tokenString);
       logger.info("linkUserName>>>>>>>>>" + itripAddUserLinkUserVO.getLinkUserName());
       ItripUser currentUser = validationToken.getCurrentUser(tokenString);
       System.out.println("currentUser>>>>>>>>>>"+currentUser);
       ItripUserLinkUser linkUser=new ItripUserLinkUser();
       linkUser.setLinkUserName(itripAddUserLinkUserVO.getLinkUserName());
       linkUser.setLinkPhone(itripAddUserLinkUserVO.getLinkPhone());
       linkUser.setLinkIdCardType(itripAddUserLinkUserVO.getLinkIdCardType());
       linkUser.setLinkIdCard(itripAddUserLinkUserVO.getLinkIdCard());
       linkUser.setUserId(currentUser.getId());
        try {
            Integer num=itripUserLinkUserService.addItripUserLinkUser(linkUser);
            if(num>0){
                System.out.println("添加成功！");
                return  DtoUtil.returnSuccess("添加成功！",num);
            }else {
                return DtoUtil.returnFail("添加失败","100000");
            }
        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("添加常用联系人信息失败", "100401");
        }
   }


    /**
     * 根据id查询
     * @param itripSearchUserLinkUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "根据id查询",httpMethod = "POST",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "查询")
    @RequestMapping(value = "/getIdFind",method = RequestMethod.POST)
    @ResponseBody
    public Dto<ItripSearchUserLinkUserVO> getLinkUserId(@RequestBody ItripSearchUserLinkUserVO itripSearchUserLinkUserVO,HttpServletRequest request) throws Exception {
        System.out.println("谢老板进来了！");
        System.out.println(itripSearchUserLinkUserVO.getId()+"id---------------");
        System.out.println("id----------------"+itripSearchUserLinkUserVO.getId());
        List<ItripUserLinkUser> userLinkUserList = new ArrayList<ItripUserLinkUser>();
        userLinkUserList.add(itripUserLinkUserService.getItripUserLinkUserById(itripSearchUserLinkUserVO.getId()));
        System.out.println("userLinkUserList size " + userLinkUserList.size()+"//////////////"+userLinkUserList.get(0).getLinkPhone());
        return DtoUtil.returnSuccess("获取常用联系人信息成功", userLinkUserList);
    }

    /**
     * 修改
     * @param itripModifyUserLinkUserVO
     * @param request
     * @return
     */
    @ApiOperation(value = "修改常用联系人接口",httpMethod = "POST",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "修改")
    @RequestMapping(value = "/modifyuserlinkuser",method = RequestMethod.POST)
    @ResponseBody
    public Dto<ItripUserLinkUser> modifyLinkUser(@RequestBody ItripModifyUserLinkUserVO itripModifyUserLinkUserVO, HttpServletRequest request){
        String tokenString = request.getHeader("token");
        logger.info("tokenString>>>>>>>>>>>>>" + tokenString);
        logger.info("linkUserName>>>>>>>>>" + itripModifyUserLinkUserVO.getLinkUserName());
        ItripUser currentUser = validationToken.getCurrentUser(tokenString);
        System.out.println("currentUser>>>>>>>>>>"+currentUser+">>>>>>>"+currentUser.getId()+">>>>>");
        ItripUserLinkUser linkUser=new ItripUserLinkUser();
        linkUser.setLinkUserName(itripModifyUserLinkUserVO.getLinkUserName());
        linkUser.setLinkPhone(itripModifyUserLinkUserVO.getLinkPhone());
        linkUser.setLinkIdCardType(itripModifyUserLinkUserVO.getLinkIdCardType());
        linkUser.setLinkIdCard(itripModifyUserLinkUserVO.getLinkIdCard());
        linkUser.setId(itripModifyUserLinkUserVO.getId());
        System.out.println(linkUser.getLinkUserName()+">>>>"+linkUser.getLinkPhone()+">>>>>"+linkUser.getLinkIdCard()+"》》》"+linkUser.getId());
        try {
            Integer num=itripUserLinkUserService.modifyItripUserLinkUser(linkUser);
            System.out.println("num????????"+num+">>>>>>>>>>>>>>>");
            if(num>0){
                System.out.println("修改成功！");
                return  DtoUtil.returnSuccess("修改成功！",num);
            }else {
                return DtoUtil.returnFail("修改失败","100000");
            }
        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("修改联系人信息失败", "100401");
        }
    }

    /**
     * 删除
     * @param ids
     * @param request
     * @return
     */
    @ApiOperation(value = "删除常用联系人接口",httpMethod = "GET",produces = "application/json",protocols = "HTTP",
            response = Dto.class,notes = "删除")
    @RequestMapping(value = "/deluserlinkuser",method = RequestMethod.GET)
    @ResponseBody
    public Object deleteLinkUser( long[] ids, HttpServletRequest request){
        System.out.println(ids.length+">>>>id.length>");
        try {
            Integer num=itripUserLinkUserService.deleteItripUserLinkUserByIds(ids);
            if(num>0){
                System.out.println("删除成功！");
                //JSON.toJSON(num)
                return  DtoUtil.returnSuccess("删除成功！",num);
            }else {
                return DtoUtil.returnFail("删除失败","100000");
            }
        }catch (Exception e){
            e.printStackTrace();
            return DtoUtil.returnFail("修改联系人信息失败", "100401");
        }
    }

    @RequestMapping(value = "/add.html")
    public String refrToken() {
        return "userlink/add";
    }

    @RequestMapping(value = "/index.html")
    public String index() {
        return "userlink/index";
    }

    @RequestMapping(value = "/modify.html")
    public String modifLinkUser() {
        return "userlink/modify";
    }

}
