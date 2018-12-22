package cn.itrip.service.hotel;

import cn.itrip.beans.pojo.*;
import cn.itrip.beans.vo.hotel.HotelVideoDescVO;
import cn.itrip.beans.vo.hotel.ItripSearchDetailsHotelVO;
import cn.itrip.beans.vo.hotel.ItripSearchFacilitiesHotelVO;
import cn.itrip.service.userlinkuser.ItripUserLinkUserService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TestHotel {

    @Test
    public void getSearch(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {

            Integer cityId=1;
            List<ItripAreaDic> list = itripUserLinkUserService.getItripAreaDic(cityId);
            for (ItripAreaDic itripAreaDic : list) {
                System.out.println(itripAreaDic.getName()+">>>>>"+itripAreaDic.getId());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getItripLableDic(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            List<ItripLabelDic> list = itripUserLinkUserService.getItripLabeDic();
            for (ItripLabelDic itripAreaDic : list) {
                System.out.println(itripAreaDic.getDescription()+">>>>>"+itripAreaDic.getId());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getSearchParent(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {

            String parent="";
            List<ItripAreaDic> list = itripUserLinkUserService.getItriAreaDicParent(parent);
            for (ItripAreaDic itripAreaDic : list) {
                System.out.println(itripAreaDic.getName()+">>>>>"+itripAreaDic.getId()+">>>>"+itripAreaDic.getAreaNo());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getItripHotelId(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            Integer id=1;
            System.out.println(id);
            ItripHotel list = itripUserLinkUserService.getItripHotelId();
            System.out.println(list.getHotelName()+">>>>>"+list.getId()+">>>>>"+list.getDetails());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getItripHotel(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            Integer id=1;
          //  HotelVideoDescVO list = itripUserLinkUserService.getItripHote(id);
          //  for (HotelVideoDescVO itripLabelDic : list) {
//                System.out.println(itripLabelDic.getName()+">>>>>>>>>>>>");
            //}
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getItripHotelTradingArea(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            Integer id=1;
           // List<HotelVideoDescVO> list = itripUserLinkUserService.getItripHotelTradingArea();
            //for (HotelVideoDescVO itripLabelDic : list) {
//                System.out.println(itripLabelDic.getName()+">>>>>>>>>>>>");
          //  }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getItripHotelDetail(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            Integer id=1;
//            Integer id1=2;
//            List<ItripHotel> list1=itripUserLinkUserService.getHotelDetailGetId(id1);
              List<ItripSearchDetailsHotelVO> list = itripUserLinkUserService.getHotelDetail(id);

            //            for (int i=1;i<list.size();i++){
//                System.out.println(list);
            //}
//            for (ItripHotel itripLabelDic : list1) {
//                System.out.println(itripLabelDic.getDetails());
//            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void getItripHotelTool(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            Integer id=3;
            List<String> list = itripUserLinkUserService.getHotelTool(id);
            for (String itripHotel : list) {
                System.out.println(itripHotel+">>>>");
        }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void queryhotelpolicy(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripAreaDicService itripUserLinkUserService = ctx.getBean(ItripAreaDicService.class);
        try {
            Integer id=2;
            List<String> list = itripUserLinkUserService.queryhotelpolicy(id);
            for (String itripHotel : list) {
                System.out.println(itripHotel);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
