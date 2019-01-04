var optionBankSt = {
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
        data: [{name: '交易次数', icon: 'rect'}, {name: '交易成功次数', icon: 'rect'}],
        padding: 10,
    },
    xAxis: [
        {
            type: 'category',
            //data: ['兴业银行', '交通银行', '民生银行', '建设银行', '农业银行', '华夏银行', '储蓄银行', '平安银行', '中信银行', '广发银行', '上海银行', '光大银行', '浦发银行', '中国银行', '招商银行', '汇丰银行'],
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
                formatter: '{value}'
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
        },{
            type: 'value',
            name: '',
            splitLine: {//不显示分割线
                show: false
            },
            axisLabel: {
                formatter: ''
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitNumber: 8
        }
    ],
    series: [

        {
            name: '交易次数',
            type: 'bar',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: '#4682BA'
                }
            },
            data: []
        },
        {
            name: '交易成功次数',
            type: 'bar',
            yAxisIndex: 1,//索引从0开始
            itemStyle: {
                normal: {
                    color: '#FF66CC'
                }
            },
            data: []
        }
    ]
};


var myChartBankSt = echarts.init(document.getElementById('main5'));
myChartBankSt.setOption(optionBankSt);
myChartBankSt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/bankSt",    //请求发送到TestServlet处
    data : {"bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartBankSt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartBankSt.setOption({        //加载数据图表
                xAxis: [
                    {
                        data: result.bankData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '交易次数',
                    type: 'bar',
                    data: result.totalData
                },
                    {
                        // 根据名字对应到相应的系列
                        name: '交易成功次数',
                        type: 'bar',
                        data: result.succData
                    }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartBankSt.hideLoading();
    }
})