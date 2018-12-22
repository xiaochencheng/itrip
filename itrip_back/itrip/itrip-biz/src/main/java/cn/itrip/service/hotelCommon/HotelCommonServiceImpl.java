package cn.itrip.service.hotelCommon;

import cn.itrip.beans.pojo.ItripComment;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.vo.comment.ItripScoreCommentVO;
import cn.itrip.dao.common.HotelCommonMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class HotelCommonServiceImpl implements HotelCommonService {
   @Resource
   private HotelCommonMapper hotelCommon;

    @Override
    public ItripScoreCommentVO getHotelCommon(@Param("hotelId") Integer id) throws Exception {
        return hotelCommon.getHotelCommon(id);
    }

    @Override
    public Integer getHotelCommonCount(Map<String,Object> id) throws Exception {
        return hotelCommon.getHotelCommonCount(id);
    }

    @Override
    public ItripImage getCommentImgId(Integer commentId) throws Exception {
        return hotelCommon.getCommentImgId(commentId);
    }
}
