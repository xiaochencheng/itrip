package cn.itrip.dao.common;

import cn.itrip.beans.pojo.ItripComment;
import cn.itrip.beans.pojo.ItripImage;
import cn.itrip.beans.vo.comment.ItripScoreCommentVO;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface HotelCommonMapper {

    public ItripScoreCommentVO getHotelCommon(@Param("hotelId")Integer id)throws Exception;

    public Integer getHotelCommonCount(Map<String,Object> id)throws Exception;

    public ItripImage getCommentImgId(@Param("id")Integer commentId)throws Exception;

}
