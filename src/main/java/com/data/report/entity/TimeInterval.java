package com.data.report.entity;

import lombok.Data;

@Data
public class TimeInterval {
    private String date;
    private String timeInterval;
    private String bizNo;
    private String productId;
    private String transType;
    private int count;
    private int countAvg;
}
