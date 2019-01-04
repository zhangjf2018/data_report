package com.data.report.service;

import com.data.report.entity.Bank;

import java.util.List;


public interface BankService {

    public List<Bank> findAll(Bank bank);

    public List<Bank> findSuccTrans(List<String> date, String bizno);

    public List<Bank> findBankSt(List<String> date, String bizno);


}
