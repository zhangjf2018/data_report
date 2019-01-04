var optionElementSt = {

    legend: {
        type: 'scroll',
        // orient: 'vertical',


        x: 'center', // 'center' | 'left' | {number},

        y: '90%', // 'center' | 'bottom' | {number}
        data: [/*{name: '2要素', icon: 'rect'}, */{name: '精准3要素', icon: 'rect'}, {name: '精准4要素', icon: 'rect'}, {
            name: '6要素',
            icon: 'rect'
        }],
    },
    color: ['#ED7C30', '#00B04C', '#13A4D8'],
    series: [
        {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            // data: [{value: 335, name: '2要素'},
            //     {value: 310, name: '3要素'},
            //     {value: 234, name: '4要素'},
            //     {value: 635, name: '6要素', selected: true}],
            data:[],
            label: {
                normal: {
                    //formatter: '{b}:{c}: ({d}%)',
                    formatter: function(param){
                      var vals = toThousands(param.value);
                      return param.name+":"+vals+"("+param.percent+"%)";
                    },
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 15
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var myChartElementSt = echarts.init(document.getElementById('main10'));
myChartElementSt.clear();
myChartElementSt.setOption(optionElementSt);
myChartElementSt.showLoading();

$.ajax({
    type : "post",
    url : "/authReport/elementSt",    //请求发送到TestServlet处
    data : {"bizno":bizno, "timeStart":timeStart, "timeEnd":timeEnd},
    dataType : "json",        //返回数据形式为json
    success : function(result) {
        myChartElementSt.hideLoading();
        //请求成功时执行该函数内容，result即为服务器返回的json对象
        if (result) {
            myChartElementSt.setOption({        //加载数据图表
                series: [{
                    // 根据名字对应到相应的系列
                    name: '姓名',
                    type: 'pie',
                    data: result.pieData
                }
                ]
            });

        }

    },
    error : function(errorMsg) {
        //请求失败时执行该函数
        alert("图表请求数据失败!");
        myChartElementSt.hideLoading();
    }
})