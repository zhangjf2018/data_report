package com.data.report.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@ConfigurationProperties("errcode")
@Data
public class ErrorCodeCnf {
    private Map<String, String> code = new HashMap<>();
}
