package cn.itrip.dao.user;
import cn.itrip.beans.pojo.ItripUser;
import org.apache.ibatis.annotations.Param;
import java.util.List;
import java.util.Map;

public interface ItripUserMapper {

	/**
	 * 根据id查询
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public ItripUser getItripUserById(@Param(value = "id") Long id)throws Exception;


	public List<ItripUser>	getItripUserListByMap(Map<String, Object> param)throws Exception;

	/**
	 * 查询数目
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public Integer getItripUserCountByMap(Map<String, Object> param)throws Exception;

	/**
	 * 添加
	 * @param itripUser
	 * @return
	 * @throws Exception
	 */
	public Integer insertItripUser(ItripUser itripUser)throws Exception;

	/**
	 * 更新
	 * @param itripUser
	 * @return
	 * @throws Exception
	 */
	public Integer updateItripUser(ItripUser itripUser)throws Exception;

	/**
	 * 删除
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public Integer deleteItripUserById(@Param(value = "id") Long id)throws Exception;


}
