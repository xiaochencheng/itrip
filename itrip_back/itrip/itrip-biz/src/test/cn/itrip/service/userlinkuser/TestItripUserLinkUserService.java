package cn.itrip.service.userlinkuser;

import cn.itrip.beans.pojo.ItripUser;
import cn.itrip.beans.pojo.ItripUserLinkUser;
import cn.itrip.service.user.ItripUserService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.DateFormat;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TestItripUserLinkUserService {

    @Test
    public void testGetItripUserLinkUserListByMap() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserLinkUserService itripUserLinkUserService = ctx.getBean(ItripUserLinkUserService.class);
        try {
            Map<String, Object> param = new HashMap<String, Object>();
            param.put("userId", "29");
            param.put("linkUserName","li");
            List<ItripUserLinkUser> list = itripUserLinkUserService.getItripUserLinkUserListByMap(param);
            System.out.println(list.size());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public  void addItripUserLinkUser(){
        ApplicationContext ctx=new ClassPathXmlApplicationContext("applicationContext-mybatis.xml");
        ItripUserLinkUserService itripUserLinkUserService=ctx.getBean(ItripUserLinkUserService.class);
        String date=null;
        Date time=null;
        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            ItripUserLinkUser linkUser=new ItripUserLinkUser();
            linkUser.setLinkUserName("可可");
            linkUser.setLinkIdCard("120103456787654562");
            linkUser.setLinkPhone("15278967908");
            linkUser.setUserId((long) 29);
            date="2018-12-10";
            time=format.parse(date);
            linkUser.setCreationDate(time);
            linkUser.setCreatedBy((long)29);
            linkUser.setModifyDate(new Date());
            linkUser.setModifiedBy((long)29);
            Integer num=itripUserLinkUserService.addItripUserLinkUser(linkUser);
            if (num>0){
                System.out.println("添加成功！");
            }else {
                System.out.println("添加失败！");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public  void modifyItripUserLinkUser(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserLinkUserService itripUserLinkUserService = ctx.getBean(ItripUserLinkUserService.class);
        try {
           ItripUserLinkUser linkUser=new ItripUserLinkUser();
           linkUser.setLinkUserName("可可1");
           linkUser.setId((long)44);
           Integer num=itripUserLinkUserService.modifyItripUserLinkUser(linkUser);
           if (num>0){
               System.out.println("修改成功！");
           }else {
               System.out.println("修改失败！");
           }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public  void deleteItripUserLinkUserByIds(){
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserLinkUserService itripUserLinkUserService = ctx.getBean(ItripUserLinkUserService.class);
       /* try {
            long [] ids =44;
            Integer num=itripUserLinkUserService.deleteItripUserLinkUserByIds(ids);
            if (num>0){
                System.out.println("删除成功！");
            }else {
                System.out.println("删除失败！");
            }
        }catch (Exception e){
            e.printStackTrace();
        }*/
    }

}
