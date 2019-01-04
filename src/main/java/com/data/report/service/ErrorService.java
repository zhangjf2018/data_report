package com.data.report.service;

import com.data.report.entity.Error;

import java.util.List;


public interface ErrorService {


    public List<Error> findElementSt(List<String> date, String bizno, String element,String transtype);
    public List<Error> findElementErrorSt(List<String> list, String bizno, String element, String transtype);


}
