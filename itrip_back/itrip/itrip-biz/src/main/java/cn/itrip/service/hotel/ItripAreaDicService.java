package cn.itrip.service.hotel;

import cn.itrip.beans.pojo.*;
import cn.itrip.beans.vo.hotel.HotelVideoDescVO;
import cn.itrip.beans.vo.hotel.ItripSearchDetailsHotelVO;
import cn.itrip.beans.vo.hotel.ItripSearchFacilitiesHotelVO;
import io.swagger.models.auth.In;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ItripAreaDicService {

    public List<ItripAreaDic> getItripAreaDic(@Param(value = "isChina")Integer cityId)throws Exception;

    public List<ItripLabelDic> getItripLabeDic()throws Exception;

    public List<ItripAreaDic> getItriAreaDicParent(@Param(value = "areaNo")String parent)throws Exception;

    public ItripHotel getItripHotelId()throws Exception;

    public List<String> getItripHote(@Param("cityId")Integer id)throws Exception;

    public List<String> getItripHotelTradingArea()throws Exception;

    /**
     * 查询酒店描述和特色
     */
    public List<ItripSearchDetailsHotelVO> getHotelDetail(@Param("cityId")Integer id)throws Exception;
    public ItripHotel getHotelDetailGetId()throws Exception;

    /**
     * 查询酒店设施
     * @param id
     * @return
     * @throws Exception
     */
    public List<String> getHotelTool(@Param("cityId")Integer id)throws  Exception;


    public List<String> queryhotelpolicy(@Param("cityId")Integer id)throws Exception;

}
