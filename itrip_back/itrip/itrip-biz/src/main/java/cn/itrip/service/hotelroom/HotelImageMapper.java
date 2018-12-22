package cn.itrip.service.hotelroom;

import cn.itrip.beans.pojo.ItripHotelRoom;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.pojo.ItripLabelDic;
import cn.itrip.beans.vo.ItripLabelDicVO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.security.PrivateKey;
import java.util.List;

public interface HotelImageMapper {


    public List<ItripImage> getImageSrc(@Param("targetId") Integer roomId)throws Exception;

    public List<ItripLabelDicVO> getHotelBedType()throws Exception;


}
