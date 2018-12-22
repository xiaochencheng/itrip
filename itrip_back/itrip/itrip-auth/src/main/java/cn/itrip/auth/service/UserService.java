package cn.itrip.auth.service;

import java.util.List;
import java.util.Set;

import cn.itrip.beans.pojo.ItripUser;

/**
 * 用户管理接口
 * @author hduser
 *
 */
public interface UserService {

	/**
	 * 注册
	 * @param user
	 * @throws Exception
	 */
	public void itriptxCreateUser(ItripUser user) throws Exception;

	/**
	 * 修改
	 * @param user
	 * @throws Exception
	 */
	public void updateUser(ItripUser user) throws Exception;

	/**
	 * 删除
	 * @param userId
	 * @throws Exception
	 */
	public void deleteUser(Long userId) throws Exception;

	/**
	 * 修改密码
	 * @param userId
	 * @param newPassword
	 * @throws Exception
	 */
	public void changePassword(Long userId, String newPassword) throws Exception;

	/**
	 * 根据id查找
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	ItripUser findOne(Long userId) throws Exception;

	/**
	 * 查询所有
	 * @return
	 * @throws Exception
	 */
	List<ItripUser> findAll() throws Exception;

	/**
	 * 根据姓名查找
	 * @param username
	 * @return
	 * @throws Exception
	 */
	public ItripUser findByUsername(String username) throws Exception;

	/**
	 * 判断角色
	 * @param username
	 * @return
	 */
	public Set<String> findRoles(String username);

	public Set<String> findPermissions(String username);

	/**
	 * 登陆
	 * @param name
	 * @param password
	 * @return
	 * @throws Exception
	 */
	public ItripUser login(String name, String password) throws Exception;

	/**
	 * 邮箱激活
	 * @param email 用户注册油箱
	 * @param code 激活码
	 * @return 
	 * @throws Exception 
	 */
	public boolean activate(String email, String code) throws Exception;

	/**
	 * 使用手机号创建用户账号
	 * @param user
	 * @throws Exception 
	 */
	public void itriptxCreateUserByPhone(ItripUser user) throws Exception;

	/**
	 * 短信验证手机号
	 * @param phoneNumber
	 * @return
	 * @throws Exception 
	 */
	public boolean validatePhone(String phoneNumber, String code) throws Exception;


}
