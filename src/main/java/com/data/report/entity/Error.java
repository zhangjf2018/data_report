package com.data.report.entity;

import lombok.Data;

@Data
public class Error {
    private String date;
    private String bizNo;
    private String productId;
    private String transType;
    private String errCode;
    private String message;
    private int count;

}
