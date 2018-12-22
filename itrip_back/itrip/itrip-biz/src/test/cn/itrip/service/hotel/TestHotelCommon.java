package cn.itrip.service.hotel;

import cn.itrip.beans.pojo.ItripComment;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.vo.comment.ItripScoreCommentVO;
import cn.itrip.dao.common.HotelCommonMapper;
import cn.itrip.service.hotelCommon.HotelCommonService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class TestHotelCommon {

    @Test
    public void queryhotelpolicy(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        HotelCommonService itripUserLinkUserService = ctx.getBean(HotelCommonService.class);
        try {
            Integer id=1;
            ItripScoreCommentVO list = itripUserLinkUserService.getHotelCommon(id);
            System.out.println(list);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void queryhotelpolicyCount(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        HotelCommonService itripUserLinkUserService = ctx.getBean(HotelCommonService.class);
        try {
            Integer id=9;
            //Integer list = itripUserLinkUserService.getHotelCommonCount(id);
           // System.out.println(list);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getCommentImgId(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        HotelCommonService itripUserLinkUserService = ctx.getBean(HotelCommonService.class);
        try {
            Integer id=1;
            ItripImage list = itripUserLinkUserService.getCommentImgId(id);
             System.out.println(list.getImgUrl()+">>>"+list.getPosition());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
