package com.data.report.service.impl;

import com.data.report.entity.Bank;
import com.data.report.entity.TimeInterval;
import com.data.report.mapper.BankMapper;
import com.data.report.mapper.TimeIntervalMapper;
import com.data.report.service.BankService;
import com.data.report.service.TimeIntervalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeIntervalServiceImpl implements TimeIntervalService {


    @Autowired
    private TimeIntervalMapper timeIntervalMapper;

    @Override
    public List<TimeInterval> findTimeSt(List<String> date, String bizno) {
        return timeIntervalMapper.findTimeSt(date, bizno);
    }

    @Override
    public List<TimeInterval> findElementSt(List<String> date, String bizno, String element, String transtype) {
        return timeIntervalMapper.findElementSt(date,bizno,element,transtype);
    }

    @Override
    public List<TimeInterval> findElementDaySt(List<String> date, String bizno, String element, String transtype) {
        return timeIntervalMapper.findElementDaySt(date, bizno, element, transtype);
    }
}
