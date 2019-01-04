package com.data.report.service.impl;

import com.data.report.entity.Bank;
import com.data.report.mapper.BankMapper;
import com.data.report.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankServiceImpl implements BankService {


    @Autowired
    private BankMapper bankMapper;

    @Override
    public List<Bank> findAll(Bank bank) {
        return bankMapper.findAll(bank);
    }

    @Override
    public List<Bank> findSuccTrans(List<String> dates, String bizno) {

        List<Bank> listBank = bankMapper.findSuccTrans(dates, bizno);
        return listBank;
    }

    @Override
    public List<Bank> findBankSt(List<String> date, String bizno) {
        List<Bank> listBank = bankMapper.findBankSt(date, bizno);
        return listBank;
    }

}
