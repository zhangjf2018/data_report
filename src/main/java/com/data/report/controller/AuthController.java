package com.data.report.controller;


import com.data.report.common.ListUtils;
import com.data.report.configuration.BankCodeCnf;
import com.data.report.configuration.ErrorCodeCnf;
import com.data.report.entity.Bank;
import com.data.report.entity.Error;
import com.data.report.entity.TimeInterval;
import com.data.report.service.BankService;
import com.data.report.service.ErrorService;
import com.data.report.service.TimeIntervalService;
import com.data.report.utils.DateUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Time;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/authReport")
public class AuthController {
    private final static Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private BankService bankService;

    @Autowired
    private TimeIntervalService timeIntervalService;

    @Autowired
    private ErrorService errorService;

    @Autowired
    private BankCodeCnf bankCodeCnf;

    @Autowired
    private ErrorCodeCnf errorCodeCnf;


    @RequestMapping("daySt")
    @ResponseBody
    public Map<String,Object> daySt(String bizno, String timeStart, String timeEnd){

        //String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
       // List<String> dates = DateUtils.getTimeInterval(new Date());
        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);
//        dates.add("20181107");
//        dates.add("20181108");
//        dates.add("20181109");
//        dates.add("20181110");
//        dates.add("20181111");
//        dates.add("20181112");
//        dates.add("20181113");

        List<Bank> listBank = bankService.findSuccTrans(dates,bizno);

        List<Integer> succTransData = new ArrayList<>();
        List<String> proData = new ArrayList<>();
        List<String> xAxisData = new ArrayList<>();

        double totalSucc = 0;
        for (Bank bank : listBank){
            totalSucc += bank.getSucCount();
            succTransData.add(bank.getSucCount());
        }

        for (Bank bank: listBank){
            proData.add(String.format("%.2f", (bank.getSucCount()/totalSucc)*100));
        }

        for (String date: dates){
            xAxisData.add(date.substring(date.length()-2,date.length()));
        }

        Map<String,Object> data = new HashMap<>();
        data.put("succData", succTransData);
        data.put("proData", proData);
        data.put("xAxisData", xAxisData);

        return data;
    }



    @RequestMapping("bankSt")
    @ResponseBody
    public Map<String,Object> bankSt(String bizno, String timeStart, String timeEnd){

       // String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
        /*List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/
        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);


        List<Bank> listBank = bankService.findBankSt(dates,bizno);

        List<String> bankData = new ArrayList<>();
        List<Integer> totalData = new ArrayList<>();
        List<Integer> succData = new ArrayList<>();
        Map<String, String> banks = bankCodeCnf.getCode();
        for (Bank bank : listBank) {
            if(StringUtils.isNotBlank(banks.get(bank.getBankId()))){
                bankData.add(banks.get(bank.getBankId()));
                totalData.add(bank.getTotalCount());
                succData.add(bank.getSucCount());
            }
        }

        Map<String,Object> data = new HashMap<>();
        data.put("bankData", bankData);
        data.put("totalData", totalData);
        data.put("succData", succData);

        return data;
    }

    @RequestMapping("bankPassSt")
    @ResponseBody
    public Map<String,Object> bankPassSt(String bizno, String timeStart, String timeEnd){

       // String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
        /*List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/

        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);

        List<Bank> listBank = bankService.findBankSt(dates,bizno);

        List<String> bankData = new ArrayList<>();
        List<String> passData = new ArrayList<>();
        Map<String, String> banks = bankCodeCnf.getCode();
        for (Bank bank : listBank) {
            if(StringUtils.isNotBlank(banks.get(bank.getBankId()))){
                bankData.add(banks.get(bank.getBankId()));
                float ratio = (float) bank.getPassCount()/bank.getTotalCount();
                passData.add(String.format("%.2f", ratio*100 ));
            }
        }

        Map<String,Object> data = new HashMap<>();
        data.put("bankData", bankData);
        data.put("passData", passData);

        return data;
    }

    @RequestMapping("timeSt")
    @ResponseBody
    public Map<String,Object> timeSt(String bizno, String timeStart, String timeEnd){

      //  String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
       /* List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/

        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);

        List<TimeInterval> list = timeIntervalService.findTimeSt(dates,bizno);
        int []avg = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

        for (TimeInterval timeInterval: list){
            if (StringUtils.isNotBlank(timeInterval.getTimeInterval())){
                avg[Integer.parseInt(timeInterval.getTimeInterval())] = (int)timeInterval.getCount()/dates.size();
            }
        }

        Map<String,Object> data = new HashMap<>();
        data.put("avgData", avg);
        return data;
    }

    @RequestMapping("elementSt")
    @ResponseBody
    public Map<String,Object> elementSt(String bizno, String timeStart, String timeEnd){

      //  String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
        /*List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/

        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);



        List<Map<String,Object>> dataList = new ArrayList<>();

        int []element = {3,4,6};
        int maxPos = 0;
        int currVal = 0;
        for(int i =0 ; i < element.length; ++i){
            String transType = "";
            if(element[i] == 3 || element[i] == 4){
                transType = "exact";
            }
            Map<String, Object> map = new HashMap<>();
            List<Error> list = errorService.findElementSt(dates,bizno,element[i] + "",transType);
            map.put("name","精准"+element[i]+"要素");
            if(list.size() == 0){
                map.put("value", 0);
            }else{
                Error error = list.get(0);
                map.put("value", error.getCount());
            }
            if(currVal < (int)map.get("value")){
                currVal = (int)map.get("value");
                maxPos = i;
            }

            if("6".equals(element[i]+"")){
                map.put("name",element[i]+"要素");
            }

            dataList.add(map);
        }
        dataList.get(maxPos).put("selected",true);
        Map<String,Object> data = new HashMap<>();
        data.put("pieData", dataList);
        return data;
    }

    @RequestMapping("elementTimeSt")
    @ResponseBody
    public Map<String,Object> elementTimeSt(String bizno, String timeStart, String timeEnd){

        //String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
        /*List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/

        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);

        Map<String,Object> data = new HashMap<>();
        int []element = {2,3,4,6};
        for(int i =0 ; i < element.length; ++i){
            String transType = "";
            if(element[i] == 3 || element[i] == 4){
                transType = "exact";
            }
            List<TimeInterval> list = timeIntervalService.findElementSt(dates,bizno,element[i]+"",transType);
            int []time = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
            for(TimeInterval timeInterval: list){
                time[Integer.parseInt(timeInterval.getTimeInterval())] = timeInterval.getCount();
            }
            data.put("data"+element[i], time);
        }

        return data;
    }

    @RequestMapping("elementDaySt")
    @ResponseBody
    public Map<String,Object> elementDaySt(String bizno, String timeStart, String timeEnd){

       // String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
        /*List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/

        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);

        Map<String,Object> data = new HashMap<>();
        List<String> xDatas = new ArrayList<>();
        int []element = {2,3,4,6};
        for(int i =0 ; i < element.length; ++i){
            String transType = "";
            if(element[i] == 3 || element[i] == 4){
                transType = "exact";
            }
            List<TimeInterval> list = timeIntervalService.findElementDaySt(dates, bizno,element[i]+"", transType);
            int []time = new int[dates.size()];
            for(int j=0; j < dates.size(); ++j){
                for(TimeInterval timeInterval: list){
                    if(dates.get(j).equals(timeInterval.getDate())){
                        time[j] = timeInterval.getCount();
                    }
                }
            }

            data.put("data"+element[i], time);
        }

        for(String date: dates){
            xDatas.add(date.substring(date.length()-2,date.length()));
        }

        data.put("xData", xDatas);

        return data;
    }

    @RequestMapping("elementErrorSt")
    @ResponseBody
    public Map<String,Object> elementErrorSt(String element, String bizno, String timeStart, String timeEnd, String transtype){

       // String bizno = "b2521d7abd89b719342990538cd157f58fe25c03";
        // List<String> dates = DateUtils.getTimeInterval(new Date());
       /* List<String> dates = new ArrayList<>();
        dates.add("20181107");
        dates.add("20181108");
        dates.add("20181109");
        dates.add("20181110");
        dates.add("20181111");
        dates.add("20181112");
        dates.add("20181113");*/

        List<String> dates = DateUtils.GetDates(timeStart,timeEnd);

        List<String> yDataList = new ArrayList<>();
        List<Integer> errData = new ArrayList<>();
        Map<String, String> codeMap = errorCodeCnf.getCode();
        int totalCnt = 0;
        List<Error> list = errorService.findElementErrorSt(dates, bizno,element,transtype);
        for (Error error: list){

            if( StringUtils.isNotBlank(codeMap.get(error.getErrCode()))){
                yDataList.add(codeMap.get(error.getErrCode()));
            }else{
                yDataList.add(error.getMessage());
            }

            errData.add(error.getCount());
            totalCnt += error.getCount();
        }

        Map<String,Object> data = new HashMap<>();
        data.put("yData", yDataList);
        data.put("errData", errData);
        data.put("totalCnt", totalCnt);
        return data;
    }

}
