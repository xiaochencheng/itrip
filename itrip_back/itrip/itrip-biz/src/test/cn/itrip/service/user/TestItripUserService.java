package cn.itrip.service.user;

import cn.itrip.beans.pojo.ItripUser;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestItripUserService {
    /**
     * 根据id查询
     */
    @Test
    public void testAddUser() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserService itripUserService = ctx.getBean(ItripUserService.class);
        try {
            ItripUser itripUser = itripUserService.getItripUserById((long)12);
            System.out.println(itripUser.getId() + " " + itripUser.getUserCode());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 添加
     */
    @Test
    public void itriptxAddItripUser() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserService itripUserService = ctx.getBean(ItripUserService.class);
        ItripUser itripUser=new ItripUser();
        itripUser.setUserCode("HG@qq.com");
        itripUser.setUserPassword("e10adc3949ba59abbe56e057f20f883e");
        itripUser.setUserType(0);
        itripUser.setFlatID((long) 12);
        itripUser.setUserName("乐乐");
        itripUser.setActivated(1);
        try {
            Integer num = itripUserService.itriptxAddItripUser(itripUser);
            System.out.println(num+"个添加数目！");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 修改
     */
    @Test
    public void itriptxModifyItripUser() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserService itripUserService = ctx.getBean(ItripUserService.class);
        ItripUser itripUser=new ItripUser();
        itripUser.setId((long)32);
        itripUser.setUserName("乐乐1");
        try {
            Integer num = itripUserService.itriptxModifyItripUser(itripUser);
            System.out.println(num+"个修改数目！");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除
     */
    @Test
    public void itriptxDeleteItripUserById() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext-mybatis.xml");
        ItripUserService itripUserService = ctx.getBean(ItripUserService.class);
        try {
            Integer num = itripUserService.itriptxDeleteItripUserById((long)32);
            System.out.println(num+"个删除数目！");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
