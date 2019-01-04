package com.data.report.service.impl;

import com.data.report.entity.Bank;
import com.data.report.entity.Error;
import com.data.report.mapper.ErrorMapper;
import com.data.report.service.ErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ErrorServiceImpl implements ErrorService {


    @Autowired
    private ErrorMapper errorMapper;


    @Override
    public List<Error> findElementSt(List<String> date, String bizno,  String element, String transtype) {
        return errorMapper.findElementSt(date,bizno, element, transtype);
    }

    @Override
    public List<Error> findElementErrorSt(List<String> list, String bizno, String element, String transtype) {
        return errorMapper.findElementErrorSt(list, bizno, element, transtype);
    }
}
