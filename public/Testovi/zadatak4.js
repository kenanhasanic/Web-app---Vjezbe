let assert = chai.assert;
describe('TestoviParser', function () {

    it('3 od 10 testova prolazi u oba - isti nazivi pitanja - testiranje abecednog poretka greski rezultata2', function () {
        var ocekivaniStringIzFunckije = { "promjena": "30%", "greske": ["4Ovo je cetvrti test - FAIL", "5Ovo je peti test - FAIL", "6Ovo je sesti test - FAIL", "7Ovo je sedmi test - FAIL", "8Ovo je osmi test - FAIL", "9Ovo je deveti test - FAIL", "Ovo je deseti test - FAIL"] }
        var probniTest1 = {
            "stats": {
                "suites": 2,
                "tests": 10,
                "passes": 3,
                "pending": 0,
                "failures": 7,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [



                {
                    "title": "Test1",
                    "fullTitle": "Ovo je prvi test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Ovo je drugi test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test3",
                    "fullTitle": "Ovo je treci test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test5",
                    "fullTitle": "5Ovo je peti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test4",
                    "fullTitle": "4Ovo je cetvrti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test7",
                    "fullTitle": "7Ovo je sedmi test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test6",
                    "fullTitle": "6Ovo je sesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test8",
                    "fullTitle": "8Ovo je osmi test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test10",
                    "fullTitle": "Ovo je deseti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test9",
                    "fullTitle": "9Ovo je deveti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [{




                "title": "Test5",
                "fullTitle": "5Ovo je peti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test4",
                "fullTitle": "4Ovo je cetvrti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test7",
                "fullTitle": "7Ovo je sedmi test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test6",
                "fullTitle": "6Ovo je sesti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test8",
                "fullTitle": "8Ovo je osmi test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test10",
                "fullTitle": "Ovo je deseti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test9",
                "fullTitle": "9Ovo je deveti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }





            ],
            "passes": [{




                "title": "Test1",
                "fullTitle": "Ovo je prvi test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test2",
                "fullTitle": "Ovo je drugi test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test3",
                "fullTitle": "Ovo je treci test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }






            ]
        }

        var probniTest2 = {
            "stats": {
                "suites": 2,
                "tests": 10,
                "passes": 3,
                "pending": 0,
                "failures": 7,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [



                {
                    "title": "Test1",
                    "fullTitle": "Ovo je prvi test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Ovo je drugi test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test3",
                    "fullTitle": "Ovo je treci test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test5",
                    "fullTitle": "5Ovo je peti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test4",
                    "fullTitle": "4Ovo je cetvrti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test7",
                    "fullTitle": "7Ovo je sedmi test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test6",
                    "fullTitle": "6Ovo je sesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test8",
                    "fullTitle": "8Ovo je osmi test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test10",
                    "fullTitle": "Ovo je deseti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test9",
                    "fullTitle": "9Ovo je deveti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [{




                "title": "Test5",
                "fullTitle": "5Ovo je peti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test4",
                "fullTitle": "4Ovo je cetvrti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test7",
                "fullTitle": "7Ovo je sedmi test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test6",
                "fullTitle": "6Ovo je sesti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test8",
                "fullTitle": "8Ovo je osmi test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test10",
                "fullTitle": "Ovo je deseti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test9",
                "fullTitle": "9Ovo je deveti test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }





            ],
            "passes": [{




                "title": "Test1",
                "fullTitle": "Ovo je prvi test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test2",
                "fullTitle": "Ovo je drugi test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test3",
                "fullTitle": "Ovo je treci test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }






            ]
        }
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        assert.deepEqual(TestoviParser.porediRezultate(jsonUTipuString, jsonUTipuString2), ocekivaniStringIzFunckije);
    });

    it('3 od 5 testova prolazi u oba - 1 test s razlicitim nazivom u rez1 - testiranje abecednog poretka greski rezultata2', function () {
        var ocekivaniStringIzFunckije = { "promjena": "50%", "greske": ["144Ovo je cetrnaesti test - FAIL", "14Ovo je cetrnaesti test - FAIL", "15Ovo je petnaesti test - FAIL"] }
        var probniTest1 = {
            "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [




                {
                    "title": "Test11",
                    "fullTitle": "11Ovo je jedanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "12Ovo je dvanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "13Ovo je trinaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test14",
                    "fullTitle": "144Ovo je cetrnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "15Ovo je petnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [




                {
                    "title": "Test14",
                    "fullTitle": "144Ovo je cetrnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "15Ovo je petnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [



                {
                    "title": "Test11",
                    "fullTitle": "11Ovo je jedanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "12Ovo je dvanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "13Ovo je trinaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }


            ]
        }

        var probniTest2 = {
            "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [




                {
                    "title": "Test11",
                    "fullTitle": "11Ovo je jedanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "12Ovo je dvanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "13Ovo je trinaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test14",
                    "fullTitle": "14Ovo je cetrnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "15Ovo je petnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [




                {
                    "title": "Test14",
                    "fullTitle": "14Ovo je cetrnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "15Ovo je petnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [



                {
                    "title": "Test11",
                    "fullTitle": "11Ovo je jedanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "12Ovo je dvanaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "13Ovo je trinaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }


            ]
        }
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        assert.deepEqual(TestoviParser.porediRezultate(jsonUTipuString, jsonUTipuString2), ocekivaniStringIzFunckije);
    });

    it('2 od 5 testova prolazi u rez1- 3 od 5 testova prolazi u rez2 - 3 testa s razlicitim nazivima u rez1 - testiranje abecednog poretka greski oba rezultata - prvo rez1 pa rez2', function () {
        var ocekivaniStringIzFunckije = { "promjena": "62.5%", "greske": ["188Ovo je osamnaesti test - FAIL", "199Ovo je devetnaesti test - FAIL", "200Ovo je dvadeseti test - FAIL", "19Ovo je devetnaesti test - FAIL", "20Ovo je dvadeseti test - FAIL"] }
        var probniTest1 = {
            "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 2,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [




                {
                    "title": "Test16",
                    "fullTitle": "16Ovo je sesnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test17",
                    "fullTitle": "17Ovo je sedamnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test18",
                    "fullTitle": "188Ovo je osamnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test19",
                    "fullTitle": "199Ovo je devetnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test20",
                    "fullTitle": "200Ovo je dvadeseti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [




                {
                    "title": "Test18",
                    "fullTitle": "188Ovo je osamnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test19",
                    "fullTitle": "199Ovo je devetnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test20",
                    "fullTitle": "200Ovo je dvadeseti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [



                {
                    "title": "Test16",
                    "fullTitle": "16Ovo je sesnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test17",
                    "fullTitle": "17Ovo je sedamnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }


            ]
        }

        var probniTest2 = {
            "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [




                {
                    "title": "Test16",
                    "fullTitle": "16Ovo je sesnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test17",
                    "fullTitle": "17Ovo je sedamnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test18",
                    "fullTitle": "18Ovo je osamnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test19",
                    "fullTitle": "19Ovo je devetnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test20",
                    "fullTitle": "20Ovo je dvadeseti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [




                {
                    "title": "Test19",
                    "fullTitle": "19Ovo je devetnaesti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test20",
                    "fullTitle": "20Ovo je dvadeseti test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [



                {
                    "title": "Test16",
                    "fullTitle": "16Ovo je sesnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test17",
                    "fullTitle": "17Ovo je sedamnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test18",
                    "fullTitle": "18Ovo je osamnaesti test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }


            ]
        }
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        assert.deepEqual(TestoviParser.porediRezultate(jsonUTipuString, jsonUTipuString2), ocekivaniStringIzFunckije);
    });

    it('4 od 7 testova prolazi u oba - svi razliciti nazivi pitanja koja padaju', function () {
        var ocekivaniStringIzFunckije = { "promjena": "80%", "greske": ["Razlicit - Ovo je 4. test - FAIL", "Razlicit - Ovo je 6. test - FAIL", "Razlicit - Ovo je 7. test - FAIL", "Ovo je 1. test - FAIL","Ovo je 2. test - FAIL","Ovo je 4. test - FAIL","Ovo je 6. test - FAIL","Ovo je 7. test - FAIL"] }
        var probniTest1 = {
            "stats": {
                "suites": 2,
                "tests": 7,
                "passes": 4,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [



                {
                    "title": "Test1",
                    "fullTitle": "Ovo je 1. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Ovo je 2. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test3",
                    "fullTitle": "Ovo je 3. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test5",
                    "fullTitle": "Ovo je 5. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test4",
                    "fullTitle": "Razlicit - Ovo je 4. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test7",
                    "fullTitle": "Razlicit - Ovo je 7. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test6",
                    "fullTitle": "Razlicit - Ovo je 6. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [



                {
                    "title": "Test4",
                    "fullTitle": "Razlicit - Ovo je 4. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test7",
                    "fullTitle": "Razlicit - Ovo je 7. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test6",
                    "fullTitle": "Razlicit - Ovo je 6. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [
                
                
                {
                "title": "Test1",
                "fullTitle": "Ovo je 1. test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test2",
                "fullTitle": "Ovo je 2. test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test3",
                "fullTitle": "Ovo je 3. test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test5",
                "fullTitle": "Ovo je 5. test - FAIL",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }






            ]
        }

        var probniTest2 = {
            "stats": {
                "suites": 2,
                "tests": 7,
                "passes": 2,
                "pending": 0,
                "failures": 5,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [



                {
                    "title": "Test1",
                    "fullTitle": "Ovo je 1. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Ovo je 2. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test3",
                    "fullTitle": "Ovo je 3. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test5",
                    "fullTitle": "Ovo je 5. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test4",
                    "fullTitle": "Ovo je 4. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test7",
                    "fullTitle": "Ovo je 7. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test6",
                    "fullTitle": "Ovo je 6. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [


                {
                    "title": "Test1",
                    "fullTitle": "Ovo je 1. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Ovo je 2. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
                {
                    "title": "Test4",
                    "fullTitle": "Ovo je 4. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test7",
                    "fullTitle": "Ovo je 7. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test6",
                    "fullTitle": "Ovo je 6. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [
                
                
                 {
                "title": "Test3",
                "fullTitle": "Ovo je 3. test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }, {
                "title": "Test5",
                "fullTitle": "Ovo je 5. test - PASS",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }






            ]
        }


            
        
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        assert.deepEqual(TestoviParser.porediRezultate(jsonUTipuString, jsonUTipuString2), ocekivaniStringIzFunckije);
    });
    
    it('1 od 5 testova prolazi u rez1 - provjera na ispis samo gresaka rez1', function () {
        var ocekivaniStringIzFunckije = { "promjena": "44.4%", "greske": ["Ovo je 11. test - FAIL","Ovo je 12. test - FAIL","Ovo je 13. test - FAIL","Ovo je 14. test - FAIL"] }
        var probniTest1 = {
            "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 1,
                "pending": 0,
                "failures": 4,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [




                {
                    "title": "Test11",
                    "fullTitle": "Ovo je 11. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "Ovo je 12. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "Ovo je 13. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test14",
                    "fullTitle": "Ovo je 14. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "Ovo je 15. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [




                {
                    "title": "Test11",
                    "fullTitle": "Ovo je 11. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "Ovo je 12. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "Ovo je 13. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test14",
                    "fullTitle": "Ovo je 14. test - FAIL",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "passes": [



                {
                    "title": "Test15",
                    "fullTitle": "Ovo je 15. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }


            ]
        }

        var probniTest2 = {
            "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 5,
                "pending": 0,
                "failures": 0,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
            },
            "tests": [




                {
                    "title": "Test11",
                    "fullTitle": "Ovo je 11. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "Ovo je 12. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "Ovo je 13. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test14",
                    "fullTitle": "Ovo je 14. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "Ovo je 15. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }





            ],
            "pending": [],
            "failures": [],
            "passes": [

                
                {
                    "title": "Test11",
                    "fullTitle": "Ovo je 11. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test12",
                    "fullTitle": "Ovo je 12. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test13",
                    "fullTitle": "Ovo je 13. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test14",
                    "fullTitle": "Ovo je 14. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }, {
                    "title": "Test15",
                    "fullTitle": "Ovo je 15. test - PASS",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }

               


            ]
        }
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        var jsonUTipuString = JSON.stringify(probniTest1)
        var jsonUTipuString2 = JSON.stringify(probniTest2)
        assert.deepEqual(TestoviParser.porediRezultate(jsonUTipuString, jsonUTipuString2), ocekivaniStringIzFunckije);
    });


});





