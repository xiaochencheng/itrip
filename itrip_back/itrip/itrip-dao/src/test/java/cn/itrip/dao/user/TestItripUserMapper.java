package cn.itrip.dao.user;

import cn.itrip.beans.pojo.ItripUser;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestItripUserMapper {


    /**
     * 查询所有
     */
    @Test
    public void testGetItripUserById() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext.xml");
        ItripUserMapper itripUserMapper = ctx.getBean(ItripUserMapper.class);
        try {
            ItripUser itripUser = itripUserMapper.getItripUserById((long) 12);
            System.out.println(itripUser.getId() + " " + itripUser.getUserCode() + " " + itripUser.getUserPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 添加
     */
    @Test
    public void insertItripUser() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext.xml");
        ItripUserMapper itripUserMapper = ctx.getBean(ItripUserMapper.class);
        ItripUser itripUser=new ItripUser();
        itripUser.setUserCode("123@qq.com");
        itripUser.setUserPassword("e10adc3949ba59abbe56e057f20f883e");
        itripUser.setUserType(0);
        itripUser.setFlatID((long) 12);
        itripUser.setUserName("可可");
        itripUser.setActivated(1);
        try {
            Integer num = itripUserMapper.insertItripUser(itripUser);
            System.out.println(num+"个添加数目！");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 更新
     */
    @Test
    public void updateItripUser() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext.xml");
        ItripUserMapper itripUserMapper = ctx.getBean(ItripUserMapper.class);
        ItripUser itripUser=new ItripUser();
        itripUser.setUserName("可可");
        itripUser.setFlatID((long)31);
        itripUser.setId((long)30);
        try {
            Integer num = itripUserMapper.updateItripUser(itripUser);
            System.out.println(num+"更新成功！");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除
     */
    @Test
    public void deleteItripUserById() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext(
                "applicationContext.xml");
        ItripUserMapper itripUserMapper = ctx.getBean(ItripUserMapper.class);
        try {
            Integer num = itripUserMapper.deleteItripUserById((long) 30);
            System.out.println(num+"个删除了！");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
