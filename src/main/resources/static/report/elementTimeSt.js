var optionElementTimeSt = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: [{
        x: 'right',
        padding: [10, 50, 0, 0],
        selectedMode: false,//不可点击
       // data: [{name: '2要素', icon: 'line'}, {name: '3要素', icon: 'line'}],
        data: [{name: '精准3要素', icon: 'line'}, {name: '精准4要素', icon: 'line'}],

    },
        {
            x: 'right',
            padding: [30, 50, 0, 0],
            selectedMode: false,//不可点击
           // data: [{name: '4要素', icon: 'line'}, {name: '6要素', icon: 'line'}],
            data: [{name: '6要素', icon: 'line'} ],
        }
    ],
    xAxis: [
        {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            splitLine: {//显示分割线
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
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
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitNumber: 8
        },{
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
                show: false
            },
            splitNumber: 8
        }
    ],
    series: [/*{
        name: '2要素',
        type: 'line',
        smooth: true,
        symbol: 'none',
        stack: '总量',
        //data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        data: [],
        itemStyle: {
            normal: {
                color: '#ED833B'
            }
        }
    },*/
        {
            name: '精准3要素',
            type: 'line',
            smooth: true,
            symbol: 'none',
          //  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            data: [],
            itemStyle: {
                normal: {
                    color: '#ED7C30'
                }
            }
        },
        {
            name: '精准4要素',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#00B04C'
                }
            },
           // data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            data: []
        },
        {
            name: '6要素',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#13A4D8'
                }
            },
           // data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            data: []
        }
    ]
};

var myChartElementTimeSt = echarts.init(document.getElementById('main9'));
myChartElementTimeSt.setOption(optionElementTimeSt);
myChartElementTimeSt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/elementTimeSt",    //请求发送到TestServlet处
    data : {"bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartElementTimeSt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartElementTimeSt.setOption({        //加载数据图表
                series: [/*{
                    // 根据名字对应到相应的系列
                    name: '2要素',
                    type: 'line',
                    data: result.data2
                },*/{
                    // 根据名字对应到相应的系列
                    name: '精准3要素',
                    type: 'line',
                    data: result.data3
                },{
                    // 根据名字对应到相应的系列
                    name: '精准4要素',
                    type: 'line',
                    data: result.data4
                },{
                    // 根据名字对应到相应的系列
                    name: '6要素',
                    type: 'line',
                    data: result.data6
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartElementTimeSt.hideLoading();
    }
})