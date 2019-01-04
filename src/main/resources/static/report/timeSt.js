
var optionTimeSt = {
//title : {
    //       text: '2018年4月鉴权业务日交易时段统计情况',
    // subtext: '纯属虚构',
//	   padding: 0,
    //       x:'center'
    //  },
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
        data: [{name: '平均交易次数', icon: 'line'}],
        padding: 10,
    },
    xAxis: [
        {
            type: 'category',
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
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

            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {show: false},
            axisLine: {show: false,
                lineStyle:{
                    color:'#366FB4',
                } },
            splitNumber: 8
        }
    ],
    series: [

        {
            name: '平均交易次数',
            type: 'line',
            smooth: true,
            symbol: 'none',
            yAxisIndex: 0,//索引从0开始
            itemStyle: {
                normal: {
                    color: '#08B2F1'
                }
            },
            data: [],
            markPoint: {
                symbol: 'path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z,  path://m 0,0 h 48 v 20 h -34 l -6,10 l -6,-10 h -2 z
                symbolSize: function (val) {
                    return [textSize(val, "12px").width + 15, 40]
                },

                symbolOffset: ['34%', '-50%'],
                symbolKeepAspect: true,// 如果 symbol 是 path:// 的形式，是否在缩放时保持该图形的长宽比。
                label: {
                    position: "insideTop",
                    distance: 7,
                    formatter: function (data) {
                        return data.value;
                    }
                },itemStyle: {
                    normal: {
                        color: '#E75B0F'
                    }
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }
    ]
};
var myChartTimeSt = echarts.init(document.getElementById('main4'));
myChartTimeSt.setOption(optionTimeSt);
myChartTimeSt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/timeSt",    //请求发送到TestServlet处
    data : {"bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartTimeSt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartTimeSt.setOption({        //加载数据图表
                series: [{
                    // 根据名字对应到相应的系列
                    name: '平均交易次数',
                    type: 'line',
                    data: result.avgData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartTimeSt.hideLoading();
    }
})

function textSize(text, fontSize) {
    var span = document.createElement("span");
    var result = {
        "width": span.offsetWidth,
        "height": span.offsetHeight
    };
    span.style.visibility = "hidden";
    span.style.fontSize = fontSize || "14px";
    document.body.appendChild(span);

    if (typeof span.textContent != "undefined")
        span.textContent = text || "";
    else span.innerText = text || "";

    result.width = span.offsetWidth - result.width;
    result.height = span.offsetHeight - result.height;
    span.parentNode.removeChild(span);
    return result;
}