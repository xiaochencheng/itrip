package cn.itrip.dao.hotelroom;

import cn.itrip.beans.pojo.ItripHotelRoom;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.pojo.ItripLabelDic;
import cn.itrip.beans.vo.ItripLabelDicVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface HotelRoomMapper {
    public List<ItripImage>  getImageSrc(@Param("targetId") Integer roomId)throws Exception;

    public List<ItripLabelDicVO> getHotelBedType()throws Exception;

}
