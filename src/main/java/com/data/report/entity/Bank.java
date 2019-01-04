package com.data.report.entity;

import lombok.Data;

@Data
public class Bank {
    private String date;
    private String bizNo;
    private String bankId;
    private String bankName;
    private int totalCount;
    private int sucCount;
    private int passCount;

}
