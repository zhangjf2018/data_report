package com.data.report.mapper;

import com.data.report.entity.Bank;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BankMapper {
    public List<Bank> findAll(Bank bank);

    public List<Bank> findSuccTrans(@Param("list") List<String> list, @Param("bizno")String bizno);

    public List<Bank> findBankSt(@Param("list") List<String> list, @Param("bizno")String bizno);
}
