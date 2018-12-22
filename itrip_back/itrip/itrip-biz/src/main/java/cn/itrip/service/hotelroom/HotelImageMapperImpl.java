package cn.itrip.service.hotelroom;

import cn.itrip.beans.pojo.ItripHotelRoom;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.pojo.ItripLabelDic;
import cn.itrip.beans.vo.ItripLabelDicVO;
import cn.itrip.dao.hotelroom.HotelRoomMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class HotelImageMapperImpl implements HotelImageMapper {
    @Resource
    private HotelRoomMapper hoteImageMapper;

    @Override
    public List<ItripImage> getImageSrc(@Param("targetId")Integer roomId) throws Exception {
        return hoteImageMapper.getImageSrc(roomId);
    }

    @Override
    public List<ItripLabelDicVO> getHotelBedType() throws Exception {
        return hoteImageMapper.getHotelBedType();
    }
}
