package com.data.report.mapper;

import com.data.report.entity.Bank;
import com.data.report.entity.TimeInterval;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TimeIntervalMapper {

    public List<TimeInterval> findTimeSt(@Param("list") List<String> list, @Param("bizno") String bizno);
    public List<TimeInterval> findElementSt(@Param("list")List<String> list, @Param("bizno") String bizno,
                                            @Param("element") String element,
                                            @Param("transtype") String transtype);
    public List<TimeInterval> findElementDaySt(@Param("list")List<String> list,
                                               @Param("bizno") String bizno,
                                               @Param("element") String element,
                                               @Param("transtype") String transtype);
}
