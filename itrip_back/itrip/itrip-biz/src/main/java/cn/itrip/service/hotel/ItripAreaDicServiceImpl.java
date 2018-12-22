package cn.itrip.service.hotel;

import cn.itrip.beans.pojo.ItripAreaDic;
import cn.itrip.beans.pojo.ItripHotel;
import cn.itrip.beans.pojo.ItripHotelTradingArea;
import cn.itrip.beans.pojo.ItripLabelDic;
import cn.itrip.beans.vo.hotel.HotelVideoDescVO;
import cn.itrip.beans.vo.hotel.ItripSearchDetailsHotelVO;
import cn.itrip.beans.vo.hotel.ItripSearchFacilitiesHotelVO;
import cn.itrip.dao.hotel.ItripAreaDicMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ItripAreaDicServiceImpl implements ItripAreaDicService {

    @Resource
    private ItripAreaDicMapper itripAreaDicMapper;

    @Override
    public List<ItripAreaDic> getItripAreaDic(Integer cityId) throws Exception {
        return itripAreaDicMapper.getItripAreaDic(cityId);
    }

    @Override
    public List<ItripLabelDic> getItripLabeDic() throws Exception {
        return itripAreaDicMapper.getItripLabeDic();
    }

    @Override
    public List<ItripAreaDic> getItriAreaDicParent(String parent) throws Exception {
        return itripAreaDicMapper.getItriAreaDicParent(parent);
    }

    @Override
    public ItripHotel getItripHotelId() throws Exception {
        return itripAreaDicMapper.getItripHotelId();
    }

    @Override
    public List<String> getItripHote(@Param("cityId")Integer id) throws Exception {
        return itripAreaDicMapper.getItripHote(id);
    }

    @Override
    public List<String> getItripHotelTradingArea() throws Exception {
        return itripAreaDicMapper.getItripHotelTradingArea();
    }

    @Override
    public List<ItripSearchDetailsHotelVO> getHotelDetail(@Param("cityId") Integer id) throws Exception {
        return itripAreaDicMapper.getHotelDetail(id);
    }
    @Override
    public ItripHotel getHotelDetailGetId()throws Exception{
        return itripAreaDicMapper.getHotelDetailGetId();
    }


    @Override
    public List<String> getHotelTool(@Param("cityId")Integer id) throws Exception {
        return itripAreaDicMapper.getHotelTool(id);
    }

    @Override
    public List<String> queryhotelpolicy(@Param("cityId") Integer id) throws Exception {
        return itripAreaDicMapper.queryhotelpolicy(id);
    }
}
