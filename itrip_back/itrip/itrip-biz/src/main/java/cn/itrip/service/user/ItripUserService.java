package cn.itrip.service.user;
import cn.itrip.beans.pojo.ItripUser;
import java.util.List;
import java.util.Map;

import cn.itrip.common.Page;
/**
* Created by shang-pc on 2015/11/7.
*/
public interface ItripUserService {

    /**
     * 根据id查询
     * @param id
     * @return
     * @throws Exception
     */
    public ItripUser getItripUserById(Long id)throws Exception;

    /**
     *
     * @param param
     * @return
     * @throws Exception
     */
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
    public Integer itriptxAddItripUser(ItripUser itripUser)throws Exception;

    /**
     * 修改
     * @param itripUser
     * @return
     * @throws Exception
     */
    public Integer itriptxModifyItripUser(ItripUser itripUser)throws Exception;

    /**
     * 删除
     * @param id
     * @return
     * @throws Exception
     */
    public Integer itriptxDeleteItripUserById(Long id)throws Exception;

    /**
     * 分页
     * @param param
     * @param pageNo
     * @param pageSize
     * @return
     * @throws Exception
     */
    public Page<ItripUser> queryItripUserPageByMap(Map<String, Object> param, Integer pageNo, Integer pageSize)throws Exception;
}
