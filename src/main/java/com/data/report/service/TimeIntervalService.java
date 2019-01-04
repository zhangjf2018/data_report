package com.data.report.service;

import com.data.report.common.ListUtils;
import com.data.report.entity.Bank;
import com.data.report.entity.TimeInterval;

import java.util.List;


public interface TimeIntervalService {

    public List<TimeInterval> findTimeSt(List<String> date, String bizno);
    public List<TimeInterval> findElementSt(List<String> date, String bizno, String element, String transType);
    public List<TimeInterval> findElementDaySt(List<String> date, String bizno, String element, String transtype);

}
