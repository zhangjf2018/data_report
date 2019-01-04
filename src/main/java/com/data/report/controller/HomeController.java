package com.data.report.controller;


import com.data.report.entity.Bank;
import com.data.report.entity.MerchantInfo;
import com.data.report.mapper.MerchantinfoMapper;
import com.data.report.service.BankService;
import com.data.report.service.MerchantinfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/authReport")
public class HomeController {

    private final static Logger log = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private BankService bankService;

    @Autowired
    private MerchantinfoService merchantinfoService;

    @RequestMapping("/report")
    public ModelAndView home(String bizno, String timeStart, String timeEnd){
        String dateRange = "";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        try {
            Date date = sdf.parse(timeStart);
            dateRange = new SimpleDateFormat("yyyy年MM月").format(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("dateRange", dateRange);
        modelAndView.addObject("bizno", bizno);
        modelAndView.addObject("timeStart", timeStart);
        modelAndView.addObject("timeEnd", timeEnd);
        modelAndView.setViewName("report");

        return modelAndView;
    }

    @RequestMapping("/index")
    public ModelAndView index(){

        List<MerchantInfo> list = merchantinfoService.findAll();

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("merList", list);
        modelAndView.setViewName("index");

        return modelAndView;
    }

}
