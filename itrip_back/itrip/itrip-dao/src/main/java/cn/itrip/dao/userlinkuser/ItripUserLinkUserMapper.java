package cn.itrip.dao.userlinkuser;

import cn.itrip.beans.pojo.ItripUserLinkUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface ItripUserLinkUserMapper {

	/**
	 * 根据id查询
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public ItripUserLinkUser getItripUserLinkUserById(@Param(value = "id") Long id)throws Exception;

	/**
	 * 根据用户id查询常用联系人-add by donghai
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	public List<ItripUserLinkUser> getItripUserLinkUserByUserId(@Param(value = "userId") Long userId)throws Exception;

	/**
	 * 返回集合
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public List<ItripUserLinkUser>	getItripUserLinkUserListByMap(Map<String, Object> param)throws Exception;

	/**
	 * 返回集合个数
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public Integer getItripUserLinkUserCountByMap(Map<String, Object> param)throws Exception;


	/**
	 * 添加联系人
	 * @param itripUserLinkUser
	 * @return
	 * @throws Exception
	 */
	public Integer insertItripUserLinkUser(ItripUserLinkUser itripUserLinkUser)throws Exception;

	/**
	 * 修改联系人
	 * @param itripUserLinkUser
	 * @return
	 * @throws Exception
	 */
	public Integer updateItripUserLinkUser(ItripUserLinkUser itripUserLinkUser)throws Exception;

	/**
	 * 删除联系人
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	public Integer deleteItripUserLinkUserByIds(@Param(value = "ids") long [] ids)throws Exception;

}
