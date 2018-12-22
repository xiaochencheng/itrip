package cn.itrip.auth.services;

import cn.itrip.auth.service.UserService;
import cn.itrip.auth.service.UserServiceImpl;
import cn.itrip.beans.pojo.ItripUser;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class TestUserService {

    @Test
    public void getFondAll(){
        ApplicationContext alc=new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService=alc.getBean(UserService.class);
      List<ItripUser> list= null;
      try {
          list=userService.findAll();
          for (ItripUser itripUser : list) {
              System.out.println(itripUser.getUserName()+" "+itripUser.getUserPassword());
          }
      }catch (Exception e){
          e.printStackTrace();
      }

    }

    @Test
    public  void  login(){
        ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService=context.getBean(UserService.class);
        String username="HG@qq.com";
        String password="e10adc3949ba59abbe56e057f20f883e";
        ItripUser itripUser=null;
        try {
            itripUser=userService.findByUsername(username);
            ItripUser iss=userService.login(itripUser.getUserCode(),itripUser.getUserPassword());
          if (iss.getActivated()!=1){
              System.out.println("登陆！");
          }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
