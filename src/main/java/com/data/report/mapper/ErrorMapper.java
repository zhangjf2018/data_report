package com.data.report.mapper;

import com.data.report.entity.Bank;
import com.data.report.entity.Error;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ErrorMapper {


    public List<Error> findElementSt(@Param("list")List<String> list, @Param("bizno")String bizno,
                                     @Param("element")String element,
                                     @Param("transtype")String transtype);
    public List<Error> findElementErrorSt(@Param("list")List<String> list, @Param("bizno")String bizno,
                                          @Param("element")String element, @Param("transtype")String transtype);
}
