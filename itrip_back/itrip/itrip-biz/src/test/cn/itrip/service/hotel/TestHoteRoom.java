package cn.itrip.service.hotel;

import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.pojo.ItripLabelDic;
import cn.itrip.beans.vo.ItripLabelDicVO;
import cn.itrip.service.hotelroom.HotelImageMapper;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class TestHoteRoom {

    @Test
    public void queryhotelpolicy(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        HotelImageMapper itripUserLinkUserService = ctx.getBean(HotelImageMapper.class);
        try {
            Integer id=1;
            List<ItripImage> list = itripUserLinkUserService.getImageSrc(id);
            for (ItripImage itripImage : list) {
                System.out.println(itripImage.getImgUrl()+">>>>>"+itripImage.getPosition());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Test
    public void queryhotelBedType(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        HotelImageMapper itripUserLinkUserService = ctx.getBean(HotelImageMapper.class);
        try {

            List<ItripLabelDicVO> list = itripUserLinkUserService.getHotelBedType();
            for (ItripLabelDicVO itripImage : list) {
                System.out.println(itripImage.getDescription()+">>>>"+itripImage.getName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
