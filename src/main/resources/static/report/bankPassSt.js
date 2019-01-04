var optionBankPassSt = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        x: '70%',
        orient: 'vertical',
        selectedMode: false,//不可点击
        data: [{name: '通过率', icon: 'rect'}, {name: '均值', icon: 'line'}],
        padding: 10,
    },
    xAxis: [
        {
            type: 'category',
           // data: ['兴业银行', '交通银行', '民生银行', '建设银行', '农业银行', '华夏银行', '储蓄银行', '平安银行', '中信银行', '广发银行', '上海银行', '光大银行', '浦发银行', '中国银行', '招商银行', '汇丰银行'],
            data: [],
            splitLine: {//显示分割线
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#000',
                }
            },
            axisLabel: {
                interval: 0,
                rotate: 60
            }
        }

    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            splitLine: {//不显示分割线
                show: false
            },
            axisLabel: {
                formatter: '{value}%'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle:{
                    color:'#366FB4',
                }
            },
            splitNumber: 8
        }
    ],
    series: [

        {
            name: '通过率',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#5B9BD5',
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#E75B0F',
                            fontSize: 11,

                        },
                        formatter: function (obj) {
                            //var c = obj['value']/data['data_echarts']['total']*100;
                            //c = c.toFixed(2);
                            return obj['value'] + "%";
                        }
                    }
                }
            },
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#CD950C',
                        lineStyle: {type: 'solid', color: '#666666'},

                        label: {
                            show: true,
                            textStyle: { //数值样式
                                color: '#EF5B0F',
                                fontSize: 16,
                                fontWeight: 800

                            },
                            padding: [0, -60],
                            formatter: function (obj) {
                                //var c = obj['value']/data['data_echarts']['total']*100;
                                //c = c.toFixed(2);
                                return obj['value'] + "%\n";
                            }
                        }
                    }
                },
                data: [{type: 'average', name: '均值'}]
            },
            //data: [2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            data: []
        },
        {
            name: '均值',
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#666666'
                }
            },
        }
    ]
};


var myChartBankPassSt = echarts.init(document.getElementById('main6'));
myChartBankPassSt.setOption(optionBankPassSt);
myChartBankPassSt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/bankPassSt",    //请求发送到TestServlet处
    data : {"bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartBankPassSt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartBankPassSt.setOption({        //加载数据图表
                xAxis: [
                    {
                        data: result.bankData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '通过率',
                    type: 'bar',
                    data: result.passData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartBankPassSt.hideLoading();
    }
})