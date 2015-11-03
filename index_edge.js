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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['636px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            text: "海量项目，一手掌握",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['42px', '349px', '240px', '317px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 10, 17, 1, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['303px', '533px', '197px', '134px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['298px', '399px', 'auto', 'auto', 'auto', 'auto'],
                            text: "各种投标项目，<br>满足不同需求。<br>投资收益，触手可及",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.71, "em"], "rgba(156,156,156,1.00)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['636px', '190px', 'auto', 'auto', 'auto', 'auto'],
                            text: "海量项目，一手掌握",
                            font: ['Arial, Helvetica, sans-serif', [2.69, "em"], "rgba(255,159,0,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['42px', '349px', '240px', '317px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 10, 17, 1, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['303px', '533px', '197px', '134px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['298px', '399px', 'auto', 'auto', 'auto', 'auto'],
                            text: "各种投标项目，<br>满足不同需求。<br>投资收益，触手可及",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [1.71, "em"], "rgba(156,156,156,1.00)", "700", "none solid rgb(255, 159, 0)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '640px', '960px'],
                            sizeRange: ['100%','100%','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid146",
                            "left",
                            3500,
                            1287,
                            "linear",
                            "${TextCopy}",
                            '636px',
                            '90px'
                        ],
                        [
                            "eid147",
                            "left",
                            7180,
                            320,
                            "linear",
                            "${TextCopy}",
                            '90px',
                            '-477px'
                        ],
                        [
                            "eid128",
                            "top",
                            5430,
                            1287,
                            "linear",
                            "${Rectangle2Copy}",
                            '535px',
                            '533px'
                        ],
                        [
                            "eid129",
                            "top",
                            7180,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '533px',
                            '533px'
                        ],
                        [
                            "eid50",
                            "left",
                            1755,
                            1170,
                            "linear",
                            "${Text3}",
                            '562px',
                            '298px'
                        ],
                        [
                            "eid79",
                            "left",
                            3346,
                            291,
                            "linear",
                            "${Text3}",
                            '298px',
                            '-269px'
                        ],
                        [
                            "eid118",
                            "left",
                            5430,
                            1287,
                            "linear",
                            "${Text3Copy}",
                            '562px',
                            '298px'
                        ],
                        [
                            "eid119",
                            "left",
                            7180,
                            320,
                            "linear",
                            "${Text3Copy}",
                            '298px',
                            '-269px'
                        ],
                        [
                            "eid134",
                            "boxShadow.blur",
                            4787,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid135",
                            "boxShadow.blur",
                            6073,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid144",
                            "width",
                            4787,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid145",
                            "width",
                            6073,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid7",
                            "height",
                            1170,
                            0,
                            "linear",
                            "${Rectangle}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid33",
                            "height",
                            2340,
                            0,
                            "linear",
                            "${Rectangle}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid5",
                            "boxShadow.spread",
                            1170,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid37",
                            "boxShadow.spread",
                            2340,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            1170,
                            "linear",
                            "${Text}",
                            '636px',
                            '90px'
                        ],
                        [
                            "eid77",
                            "left",
                            3346,
                            291,
                            "linear",
                            "${Text}",
                            '90px',
                            '-477px'
                        ],
                        [
                            "eid3",
                            "boxShadow.offsetV",
                            1170,
                            0,
                            "linear",
                            "${Rectangle}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid35",
                            "boxShadow.offsetV",
                            2340,
                            0,
                            "linear",
                            "${Rectangle}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid142",
                            "left",
                            4787,
                            1287,
                            "linear",
                            "${RectangleCopy}",
                            '35px',
                            '42px'
                        ],
                        [
                            "eid143",
                            "left",
                            7180,
                            320,
                            "linear",
                            "${RectangleCopy}",
                            '42px',
                            '-525px'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            2924,
                            222,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            3147,
                            199,
                            "linear",
                            "${Rectangle2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid132",
                            "boxShadow.offsetH",
                            4787,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid133",
                            "boxShadow.offsetH",
                            6073,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid46",
                            "left",
                            1755,
                            1170,
                            "linear",
                            "${Rectangle2}",
                            '567px',
                            '303px'
                        ],
                        [
                            "eid76",
                            "left",
                            3346,
                            291,
                            "linear",
                            "${Rectangle2}",
                            '303px',
                            '-264px'
                        ],
                        [
                            "eid4",
                            "boxShadow.blur",
                            1170,
                            0,
                            "linear",
                            "${Rectangle}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid36",
                            "boxShadow.blur",
                            2340,
                            0,
                            "linear",
                            "${Rectangle}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            2924,
                            222,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            3147,
                            199,
                            "linear",
                            "${Rectangle2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid47",
                            "top",
                            1755,
                            1170,
                            "linear",
                            "${Rectangle2}",
                            '535px',
                            '533px'
                        ],
                        [
                            "eid71",
                            "top",
                            3346,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '533px',
                            '533px'
                        ],
                        [
                            "eid140",
                            "boxShadow.offsetV",
                            4787,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid141",
                            "boxShadow.offsetV",
                            6073,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid138",
                            "height",
                            4787,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid139",
                            "height",
                            6073,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid148",
                            "top",
                            3500,
                            1287,
                            "linear",
                            "${TextCopy}",
                            '190px',
                            '184px'
                        ],
                        [
                            "eid149",
                            "top",
                            7180,
                            0,
                            "linear",
                            "${TextCopy}",
                            '184px',
                            '184px'
                        ],
                        [
                            "eid9",
                            "width",
                            1170,
                            0,
                            "linear",
                            "${Rectangle}",
                            '240px',
                            '240px'
                        ],
                        [
                            "eid32",
                            "width",
                            2340,
                            0,
                            "linear",
                            "${Rectangle}",
                            '240px',
                            '240px'
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
                            "eid136",
                            "boxShadow.spread",
                            4787,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid137",
                            "boxShadow.spread",
                            6073,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid130",
                            "top",
                            4787,
                            1287,
                            "linear",
                            "${RectangleCopy}",
                            '973px',
                            '349px'
                        ],
                        [
                            "eid131",
                            "top",
                            7180,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '349px',
                            '349px'
                        ],
                        [
                            "eid120",
                            "top",
                            5430,
                            1287,
                            "linear",
                            "${Text3Copy}",
                            '399px',
                            '393px'
                        ],
                        [
                            "eid121",
                            "top",
                            7180,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '393px',
                            '393px'
                        ],
                        [
                            "eid126",
                            "left",
                            5430,
                            1287,
                            "linear",
                            "${Rectangle2Copy}",
                            '567px',
                            '303px'
                        ],
                        [
                            "eid127",
                            "left",
                            7180,
                            320,
                            "linear",
                            "${Rectangle2Copy}",
                            '303px',
                            '-264px'
                        ],
                        [
                            "eid124",
                            "scaleY",
                            6716,
                            244,
                            "linear",
                            "${Rectangle2Copy}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid125",
                            "scaleY",
                            6961,
                            219,
                            "linear",
                            "${Rectangle2Copy}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            7180,
                            320,
                            "linear",
                            "${Rectangle2Copy}",
                            '1',
                            '1.01'
                        ],
                        [
                            "eid49",
                            "top",
                            1170,
                            1170,
                            "linear",
                            "${Rectangle}",
                            '973px',
                            '349px'
                        ],
                        [
                            "eid73",
                            "top",
                            3346,
                            0,
                            "linear",
                            "${Rectangle}",
                            '349px',
                            '349px'
                        ],
                        [
                            "eid122",
                            "scaleX",
                            6716,
                            244,
                            "linear",
                            "${Rectangle2Copy}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid123",
                            "scaleX",
                            6961,
                            219,
                            "linear",
                            "${Rectangle2Copy}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid48",
                            "left",
                            1170,
                            1170,
                            "linear",
                            "${Rectangle}",
                            '35px',
                            '42px'
                        ],
                        [
                            "eid78",
                            "left",
                            3346,
                            291,
                            "linear",
                            "${Rectangle}",
                            '42px',
                            '-525px'
                        ],
                        [
                            "eid2",
                            "boxShadow.offsetH",
                            1170,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid34",
                            "boxShadow.offsetH",
                            2340,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "top",
                            1755,
                            1170,
                            "linear",
                            "${Text3}",
                            '399px',
                            '393px'
                        ],
                        [
                            "eid69",
                            "top",
                            3346,
                            0,
                            "linear",
                            "${Text3}",
                            '393px',
                            '393px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-9440194");
