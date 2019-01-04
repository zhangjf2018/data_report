package com.data.report.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class DateUtils {

    public static List<String> getTimeInterval(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        // 判断要计算的日期是否是周日，如果是则减一天计算周六的，否则会出问题，计算到下一周去了
        int dayWeek = cal.get(Calendar.DAY_OF_WEEK);// 获得当前日期是一个星期的第几天
        if (1 == dayWeek) {
            cal.add(Calendar.DAY_OF_MONTH, -1);
        }
        // System.out.println("要计算日期为:" + sdf.format(cal.getTime())); // 输出要计算日期
        // 设置一个星期的第一天，按中国的习惯一个星期的第一天是星期一
        cal.setFirstDayOfWeek(Calendar.MONDAY);
        // 获得当前日期是一个星期的第几天
        int day = cal.get(Calendar.DAY_OF_WEEK);
        // 根据日历的规则，给当前日期减去星期几与一个星期第一天的差值
        cal.add(Calendar.DATE, cal.getFirstDayOfWeek() - day);
        String imptimeBegin = sdf.format(cal.getTime());
        // System.out.println("所在周星期一的日期：" + imptimeBegin);
        List<String> listDate = new ArrayList<>();
        for(int i=0; i<7; ++i) {
            listDate.add(sdf.format(cal.getTime()));
            cal.add(Calendar.DATE, 1);
        }

        //cal.add(Calendar.DATE, 6);
       // String imptimeEnd = sdf.format(cal.getTime());
        // System.out.println("所在周星期日的日期：" + imptimeEnd);
        return listDate;
    }
    public static List<String> GetDates(String startDate, String endDate){
        Date start = null;//定义起始日期
        Date end = null;//定义结束日期
        try {
            start = new SimpleDateFormat("yyyyMMdd").parse(startDate);
            end = new SimpleDateFormat("yyyyMMdd").parse(endDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        List<String> result = new ArrayList<String>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");

        Date date = start;
        Calendar cd = Calendar.getInstance();//用Calendar 进行日期比较判断
        while (date.getTime()<= end.getTime()){
            result.add(sdf.format(date));
            cd.setTime(date);
            cd.add(Calendar.DATE, 1);//增加一天 放入集合
            date=cd.getTime();
        }
        return result;
    }

    public static void main(String args[]){
        System.out.println(getTimeInterval(new Date()));

        System.out.println(GetDates("20181220","20190103"));
    }
}
