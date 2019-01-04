var optionDaySt = {
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
        data: ['', {name: '成功交易次数', icon: 'rect'}, {name: '占比', icon: 'line'}],
    },
    xAxis: [
        {
            type: 'category',
            //data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            data: [],
            splitLine: {//显示分割线
                show: false},
            axisTick: {show: false},
            axisLine: {show: false}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            splitLine: {//不显示分割线
                show: false
            },
            axisLabel: {formatter: '{value}'},
            axisTick: {show: false},
            axisLine: {show: false,
                lineStyle:{
                    color:'#366FB4',
                }
            },
            splitNumber: 8
        },
        {
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            splitNumber: 8
        }
    ],
    series: [
        {
            name: '成功交易次数',
            type: 'bar',
            //data: [20, 100, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 20, 40, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 20, 40, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            data:[],
            itemStyle: {
                normal: {
                    color: '#4682BA'
                }
            }
        },
        {
            name: '占比',
            type: 'line',
            smooth: true,
            symbol: 'none',
            yAxisIndex: 1,//索引从0开始
            itemStyle: {
                normal: {
                    color: '#ED7D31'
                }
            },
            //data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            data: []
        }
    ]
};
var myChartDaySt = echarts.init(document.getElementById('main3'));
myChartDaySt.setOption(optionDaySt);
myChartDaySt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/daySt",    //请求发送到TestServlet处
    data : {"bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartDaySt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartDaySt.hideLoading();    //隐藏加载动画
            myChartDaySt.setOption({        //加载数据图表
                xAxis: [
                    {
                        data: result.xAxisData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '成功交易次数',
                    type: 'bar',
                    data: result.succData
                },
                    {
                        // 根据名字对应到相应的系列
                        name: '占比',
                        type: 'line',
                        data: result.proData
                    }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartDaySt.hideLoading();
    }
})