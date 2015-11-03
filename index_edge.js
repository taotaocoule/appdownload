/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['739px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            text: "海量项目，一手掌握",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['665px', '399px', 'auto', 'auto', 'auto', 'auto'],
                            text: "各种投标项目，<br><br>满足不同需求。<br><br>投资收益，触手可及",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.71, "em"], "rgba(156,156,156,1.00)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['739px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            text: "核心功能，一应俱全",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['-325px', '399px', 'auto', 'auto', 'auto', 'auto'],
                            text: "充值、提现、投标、回款<br><br>清晰记录，一目了然<br><br>你的地盘，你做主",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.71, "em"], "rgba(156,156,156,1.00)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['739px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            text: "两端同步，轻松理财",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['665px', '399px', 'auto', 'auto', 'auto', 'auto'],
                            text: "APP与PC数据互通<br><br>让您随时随地<br><br>轻松理财，快意赚钱",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.71, "em"], "rgba(156,156,156,1.00)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['739px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            text: "银行级防护，安全无忧",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['-345px', '399px', 'auto', 'auto', 'auto', 'auto'],
                            text: "手势密码，身份认证<br><br>多重安全防护<br><br>银行级护理，然您安全无忧",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.71, "em"], "rgba(156,156,156,1.00)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'all',
                            type: 'image',
                            rect: ['36px', '973px', '214px', '434px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all.png",'0px','0px']
                        },
                        {
                            id: 'get',
                            type: 'image',
                            rect: ['36px', '353px', '204px', '411px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"get.png",'0px','0px']
                        },
                        {
                            id: 'all_platform',
                            type: 'image',
                            rect: ['11px', '1024px', '373px', '363px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all_platform.png",'0px','0px']
                        },
                        {
                            id: 'safety',
                            type: 'image',
                            rect: ['34px', '353px', '252px', '286px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"safety.png",'0px','0px']
                        },
                        {
                            id: 'IOS',
                            type: 'image',
                            rect: ['108', '424', '170px', '48px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"IOS.png",'0px','0px']
                        },
                        {
                            id: 'Android',
                            type: 'image',
                            rect: ['108px', '523px', '170px', '48px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Android.png",'0px','0px']
                        },
                        {
                            id: 'download',
                            type: 'image',
                            rect: ['361px', '305px', '227px', '411px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"download.png",'0px','0px']
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['45px', '184', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0,
                            text: "免费下载，开启轻松投资之旅",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['90px', '242px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0,
                            text: "为梦想注入希望，让财富触手可及",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.77, "em"], "rgba(164,164,164,1.00)", "400", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '960px', 'auto', 'auto'],
                            sizeRange: ['640px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 18500,
                    autoPlay: true,
                    data: [
                        [
                            "eid178",
                            "left",
                            4250,
                            1170,
                            "linear",
                            "${TextCopy}",
                            '739px',
                            '90px'
                        ],
                        [
                            "eid179",
                            "left",
                            7596,
                            1154,
                            "linear",
                            "${TextCopy}",
                            '90px',
                            '-477px'
                        ],
                        [
                            "eid225",
                            "top",
                            13670,
                            1170,
                            "linear",
                            "${safety}",
                            '1062px',
                            '353px'
                        ],
                        [
                            "eid232",
                            "top",
                            15846,
                            0,
                            "linear",
                            "${safety}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid233",
                            "top",
                            17000,
                            0,
                            "linear",
                            "${safety}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid166",
                            "left",
                            1170,
                            1170,
                            "linear",
                            "${Text3}",
                            '665px',
                            '345px'
                        ],
                        [
                            "eid172",
                            "left",
                            3346,
                            1154,
                            "linear",
                            "${Text3}",
                            '345px',
                            '-275px'
                        ],
                        [
                            "eid226",
                            "left",
                            13670,
                            0,
                            "linear",
                            "${safety}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid227",
                            "left",
                            14840,
                            0,
                            "linear",
                            "${safety}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid230",
                            "left",
                            15846,
                            1154,
                            "linear",
                            "${safety}",
                            '34px',
                            '-279px'
                        ],
                        [
                            "eid218",
                            "left",
                            12500,
                            1170,
                            "linear",
                            "${TextCopy3}",
                            '739px',
                            '90px'
                        ],
                        [
                            "eid219",
                            "left",
                            15846,
                            1154,
                            "linear",
                            "${TextCopy3}",
                            '90px',
                            '-477px'
                        ],
                        [
                            "eid158",
                            "top",
                            5420,
                            1170,
                            "linear",
                            "${all}",
                            '973px',
                            '350px'
                        ],
                        [
                            "eid160",
                            "top",
                            7596,
                            0,
                            "linear",
                            "${all}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid203",
                            "top",
                            9670,
                            1170,
                            "linear",
                            "${all_platform}",
                            '1024px',
                            '353px'
                        ],
                        [
                            "eid208",
                            "top",
                            11846,
                            0,
                            "linear",
                            "${all_platform}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid205",
                            "left",
                            9670,
                            0,
                            "linear",
                            "${all_platform}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid206",
                            "left",
                            10840,
                            0,
                            "linear",
                            "${all_platform}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid209",
                            "left",
                            11846,
                            1154,
                            "linear",
                            "${all_platform}",
                            '11px',
                            '-396px'
                        ],
                        [
                            "eid174",
                            "left",
                            5420,
                            1170,
                            "linear",
                            "${Text3Copy}",
                            '665px',
                            '330px'
                        ],
                        [
                            "eid175",
                            "left",
                            7596,
                            1154,
                            "linear",
                            "${Text3Copy}",
                            '330px',
                            '-325px'
                        ],
                        [
                            "eid185",
                            "left",
                            1170,
                            1170,
                            "linear",
                            "${get}",
                            '41px',
                            '36px'
                        ],
                        [
                            "eid188",
                            "left",
                            3346,
                            1154,
                            "linear",
                            "${get}",
                            '36px',
                            '-238px'
                        ],
                        [
                            "eid287",
                            "opacity",
                            17000,
                            1500,
                            "linear",
                            "${IOS}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid214",
                            "left",
                            13670,
                            1170,
                            "linear",
                            "${Text3Copy3}",
                            '665px',
                            '301px'
                        ],
                        [
                            "eid215",
                            "left",
                            15846,
                            1154,
                            "linear",
                            "${Text3Copy3}",
                            '301px',
                            '-345px'
                        ],
                        [
                            "eid286",
                            "opacity",
                            17000,
                            1500,
                            "linear",
                            "${Android}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid283",
                            "opacity",
                            17000,
                            1500,
                            "linear",
                            "${Text8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid190",
                            "left",
                            9670,
                            1170,
                            "linear",
                            "${Text3Copy2}",
                            '665px',
                            '384px'
                        ],
                        [
                            "eid191",
                            "left",
                            11846,
                            1154,
                            "linear",
                            "${Text3Copy2}",
                            '384px',
                            '-275px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            1170,
                            "linear",
                            "${Text}",
                            '739px',
                            '90px'
                        ],
                        [
                            "eid77",
                            "left",
                            3346,
                            1154,
                            "linear",
                            "${Text}",
                            '90px',
                            '-477px'
                        ],
                        [
                            "eid180",
                            "top",
                            4250,
                            1170,
                            "linear",
                            "${TextCopy}",
                            '190px',
                            '184px'
                        ],
                        [
                            "eid181",
                            "top",
                            7596,
                            0,
                            "linear",
                            "${TextCopy}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid156",
                            "left",
                            5420,
                            0,
                            "linear",
                            "${all}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid161",
                            "left",
                            7596,
                            1154,
                            "linear",
                            "${all}",
                            '36px',
                            '-243px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            1170,
                            "linear",
                            "${Text}",
                            '190px',
                            '184px'
                        ],
                        [
                            "eid75",
                            "top",
                            3346,
                            0,
                            "linear",
                            "${Text}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid284",
                            "opacity",
                            17000,
                            1500,
                            "linear",
                            "${Text7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid184",
                            "top",
                            1170,
                            1170,
                            "linear",
                            "${get}",
                            '984px',
                            '353px'
                        ],
                        [
                            "eid189",
                            "top",
                            3346,
                            1154,
                            "linear",
                            "${get}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid176",
                            "top",
                            5420,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid177",
                            "top",
                            7596,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid285",
                            "opacity",
                            17000,
                            1500,
                            "linear",
                            "${download}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid212",
                            "top",
                            13670,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid213",
                            "top",
                            14840,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '399px',
                            '406px'
                        ],
                        [
                            "eid194",
                            "top",
                            8500,
                            1170,
                            "linear",
                            "${TextCopy2}",
                            '190px',
                            '184px'
                        ],
                        [
                            "eid195",
                            "top",
                            11846,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid216",
                            "top",
                            12500,
                            1170,
                            "linear",
                            "${TextCopy3}",
                            '190px',
                            '184px'
                        ],
                        [
                            "eid217",
                            "top",
                            15846,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid196",
                            "left",
                            8500,
                            1170,
                            "linear",
                            "${TextCopy2}",
                            '739px',
                            '90px'
                        ],
                        [
                            "eid197",
                            "left",
                            11846,
                            1154,
                            "linear",
                            "${TextCopy2}",
                            '90px',
                            '-477px'
                        ],
                        [
                            "eid210",
                            "top",
                            9670,
                            1170,
                            "linear",
                            "${Text3Copy2}",
                            '399px',
                            '406px'
                        ],
                        [
                            "eid211",
                            "top",
                            10840,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '406px',
                            '399px'
                        ],
                        [
                            "eid163",
                            "top",
                            1170,
                            0,
                            "linear",
                            "${Text3}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid169",
                            "top",
                            3346,
                            0,
                            "linear",
                            "${Text3}",
                            '399px',
                            '399px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-9440194");
