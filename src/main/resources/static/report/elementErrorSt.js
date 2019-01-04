
var total3Cnt = 0;
var optionElementErrorSt3 = {
    title:{
        text: "2要素统计",
        subtext:'',
        //副标题文本样式
        subtextStyle:{}
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {//显示分割线
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#366FB4'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['验证不通过', '请求身份证号格式错误', '银行卡未开通银联无卡业务', '请求姓名格式错误', '身份证号码格式错误', '渠道超时', '支付卡已超过有效期', '姓名与银行卡预留信息不一致', '银行卡状态异常', '手机号与银行卡预留信息不一致'],
        splitLine: {//显示分割线
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#00B0F0'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        }
    },
    series: [
        {
            name: '',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
                normal: {
                    color: '#00B0F0',
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: '#E75B0F',
                            fontSize: 12,
                        },
                        formatter: function (obj) {
                            //var c = obj['value']/data['data_echarts']['total']*100;
                            if(total3Cnt == 0){
                                return obj['value'];
                            }else{
                                var c =  (obj['value'] / total3Cnt)*100;
                                c = c.toFixed(2);
                                var vals = toThousands(obj['value'])
                                return vals + "(" +c+"%)";
                            }
                        }
                    }
                }
            },
        }
    ]
}

var total4Cnt = 0;
var optionElementErrorSt4 = {
    title:{
        text: "2要素统计",
        subtext:'',
        //副标题文本样式
        subtextStyle:{}
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {//显示分割线
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#366FB4'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['验证不通过', '请求身份证号格式错误', '银行卡未开通银联无卡业务', '请求姓名格式错误', '身份证号码格式错误', '渠道超时', '支付卡已超过有效期', '姓名与银行卡预留信息不一致', '银行卡状态异常', '手机号与银行卡预留信息不一致'],
        splitLine: {//显示分割线
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#00B0F0'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        }
    },
    series: [
        {
            name: '',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
                normal: {
                    color: '#00B0F0',
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: '#E75B0F',
                            fontSize: 12,
                        },
                        formatter: function (obj) {
                            //var c = obj['value']/data['data_echarts']['total']*100;
                            if(total4Cnt == 0){
                                return obj['value'];
                            }else{
                                var c =  (obj['value'] / total4Cnt)*100;
                                c = c.toFixed(2);
                                var vals = toThousands(obj['value'])
                                return vals + "(" +c+"%)";
                            }
                        }
                    }
                }
            },
        }
    ]
}

var total6Cnt = 0;
var optionElementErrorSt6 = {
    title:{
        text: "2要素统计",
        subtext:'',
        //副标题文本样式
        subtextStyle:{}
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {//显示分割线
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#366FB4'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['验证不通过', '请求身份证号格式错误', '银行卡未开通银联无卡业务', '请求姓名格式错误', '身份证号码格式错误', '渠道超时', '支付卡已超过有效期', '姓名与银行卡预留信息不一致', '银行卡状态异常', '手机号与银行卡预留信息不一致'],
        splitLine: {//显示分割线
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#00B0F0'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        }
    },
    series: [
        {
            name: '',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
                normal: {
                    color: '#00B0F0',
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: '#E75B0F',
                            fontSize: 12,
                        },
                        formatter: function (obj) {
                            //var c = obj['value']/data['data_echarts']['total']*100;
                            if(total6Cnt == 0){
                                return obj['value'];
                            }else{
                                var c =  (obj['value'] / total6Cnt)*100;
                                c = c.toFixed(2);
                                var vals = toThousands(obj['value'])
                                return vals + "(" +c+"%)";
                            }
                        }
                    }
                }
            },
        }
    ]
}
/*
var myChartElementErrorSt = echarts.init(document.getElementById('main7'));
myChartElementErrorSt.setOption(optionElementErrorSt);
myChartElementErrorSt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/elementErrorSt",    //请求发送到TestServlet处
    data : {element:"2","bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartElementErrorSt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartElementErrorSt.setOption({        //加载数据图表
                yAxis: [
                    {
                        data: result.yData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '',
                    type: 'bar',
                    data: result.errData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartElementErrorSt.hideLoading();
    }
})*/

var myChartElementErrorSt3 = echarts.init(document.getElementById('main73'));
myChartElementErrorSt3.setOption(optionElementErrorSt3);
myChartElementErrorSt3.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/elementErrorSt",    //请求发送到TestServlet处
    data : {element:"3","bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd,"transtype":"exact"},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartElementErrorSt3.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        total3Cnt = result.totalCnt
        if (result) {
            myChartElementErrorSt3.setOption({        //加载数据图表
                title:{
                    text: "精准3要素统计"
                },
                yAxis: [
                    {
                        data: result.yData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '',
                    type: 'bar',
                    data: result.errData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartElementErrorSt3.hideLoading();
    }
})

var myChartElementErrorSt4 = echarts.init(document.getElementById('main74'));
myChartElementErrorSt4.setOption(optionElementErrorSt4);
myChartElementErrorSt4.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/elementErrorSt",    //请求发送到TestServlet处
    data : {element:"4","bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd, "transtype":"exact"},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartElementErrorSt4.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            total4Cnt = result.totalCnt
            myChartElementErrorSt4.setOption({        //加载数据图表
                title:{
                    text: "精准4要素统计"
                },
                yAxis: [
                    {
                        data: result.yData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '',
                    type: 'bar',
                    data: result.errData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartElementErrorSt4.hideLoading();
    }
})

var myChartElementErrorSt6 = echarts.init(document.getElementById('main76'));
myChartElementErrorSt6.setOption(optionElementErrorSt6);
myChartElementErrorSt6.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/elementErrorSt",    //请求发送到TestServlet处
    data : {element:"6","bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartElementErrorSt6.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            total6Cnt = result.totalCnt
            myChartElementErrorSt6.setOption({        //加载数据图表
                title:{
                    text: "6要素统计"
                },
                yAxis: [
                    {
                        data: result.yData
                    }
                ],
                series: [{
                    // 根据名字对应到相应的系列
                    name: '',
                    type: 'bar',
                    data: result.errData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartElementErrorSt6.hideLoading();
    }
})