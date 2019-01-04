package com.data.report.service.impl;

import com.data.report.entity.Bank;
import com.data.report.entity.MerchantInfo;
import com.data.report.mapper.BankMapper;
import com.data.report.mapper.MerchantinfoMapper;
import com.data.report.service.BankService;
import com.data.report.service.MerchantinfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MerchantinfoServiceImpl implements MerchantinfoService {


    @Autowired
    private MerchantinfoMapper merchantinfoMapper;


    @Override
    public List<MerchantInfo> findAll() {
        return merchantinfoMapper.findAll();
    }
}
