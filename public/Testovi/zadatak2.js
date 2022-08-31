let assert = chai.assert;
describe('TestoviParser', function () {
  it('Nemoguće izvršavanje testa - poslan prazan string u funkciju', function () {
    var probniTest = ""
    var rezultat = {
      "tacnost": "0%", "greske": [
        "Testovi se ne mogu izvršiti"
      ]
    }

    assert.deepEqual(TestoviParser.dajTacnost(probniTest), rezultat);
  });

  it('Nemoguće izvršavanje testa - poslan string koji nije u formatu json u funkciju', function () {
      var probniTest = "probatesta"
      var rezultat = {
        "tacnost": "0%", "greske": [
          "Testovi se ne mogu izvršiti"
        ]
      }
      assert.deepEqual(TestoviParser.dajTacnost(probniTest), rezultat);
  });

  it('4 od 4 testa porlaze', function () {
    var ocekivaniStringIzFunckije = { "tacnost": "100%", "greske": [] }
    var probniTest ={
      "stats": {
      "suites": 2,
      "tests": 4,
      "passes": 4,
      "pending": 0,
      "failures": 0,
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
      },{
        "title": "Test3",
        "fullTitle": "Ovo je treci test - PASS",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test4",
        "fullTitle": "Ovo je cetvrti test - PASS",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
      ],
      "pending": [],
      "failures": [],
      "passes": []
    }
    var jsonUTipuString = JSON.stringify(probniTest)
    assert.deepEqual(TestoviParser.dajTacnost(jsonUTipuString), ocekivaniStringIzFunckije);
  });

  it('3 od 4 testa prolaze', function () {
    var ocekivaniStringIzFunckije = { "tacnost": "75%", "greske": ["Ovo je cetvrti test - FAIL"] }
    var probniTest ={
      "stats": {
      "suites": 2,
      "tests": 4,
      "passes": 3,
      "pending": 0,
      "failures": 1,
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
      },{
        "title": "Test3",
        "fullTitle": "Ovo je treci test - PASS",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
      ],
      "pending": [],
      "failures": [{
        "title": "Test4",
        "fullTitle": "Ovo je cetvrti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }],
      "passes": []
    }
    var jsonUTipuString = JSON.stringify(probniTest)
    assert.deepEqual(TestoviParser.dajTacnost(jsonUTipuString), ocekivaniStringIzFunckije);
  });

  it('2 od 4 testa prolaze', function () {
    var ocekivaniStringIzFunckije = { "tacnost": "50%", "greske": ["Ovo je treci test - FAIL","Ovo je cetvrti test - FAIL"] }
    var probniTest ={
      "stats": {
      "suites": 2,
      "tests": 4,
      "passes": 2,
      "pending": 0,
      "failures": 2,
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
      }
      ],
      "pending": [],
      "failures": [{
        "title": "Test3",
        "fullTitle": "Ovo je treci test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test4",
        "fullTitle": "Ovo je cetvrti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }],
      "passes": []
    }
    var jsonUTipuString = JSON.stringify(probniTest)
    assert.deepEqual(TestoviParser.dajTacnost(jsonUTipuString), ocekivaniStringIzFunckije);
  });

  it('1 od 4 testa prolaze', function () {
    var ocekivaniStringIzFunckije = { "tacnost": "25%", "greske": ["Ovo je drugi test - FAIL","Ovo je treci test - FAIL","Ovo je cetvrti test - FAIL"] }
    var probniTest ={
      "stats": {
      "suites": 2,
      "tests": 4,
      "passes": 1,
      "pending": 0,
      "failures": 3,
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
      }
      ],
      "pending": [],
      "failures": [
        {
          "title": "Test2",
          "fullTitle": "Ovo je drugi test - FAIL",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },{
        "title": "Test3",
        "fullTitle": "Ovo je treci test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test4",
        "fullTitle": "Ovo je cetvrti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }],
      "passes": []
    }
    var jsonUTipuString = JSON.stringify(probniTest)
    assert.deepEqual(TestoviParser.dajTacnost(jsonUTipuString), ocekivaniStringIzFunckije);
  });

  it('0 od 4 testa prolaze', function () {
    var ocekivaniStringIzFunckije = { "tacnost": "0%", "greske": ["Ovo je prvi test - FAIL","Ovo je drugi test - FAIL","Ovo je treci test - FAIL","Ovo je cetvrti test - FAIL"] }
    var probniTest ={
      "stats": {
      "suites": 2,
      "tests": 4,
      "passes": 0,
      "pending": 0,
      "failures": 4,
      "start": "2021-11-05T15:00:26.343Z",
      "end": "2021-11-05T15:00:26.352Z",
      "duration": 9
      },
      "tests": [
      {
        "title": "Test1",
        "fullTitle": "Ovo je prvi test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
      ],
      "pending": [],
      "failures": [{
        "title": "Test1",
        "fullTitle": "Ovo je prvi test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
        {
          "title": "Test2",
          "fullTitle": "Ovo je drugi test - FAIL",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },{
        "title": "Test3",
        "fullTitle": "Ovo je treci test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test4",
        "fullTitle": "Ovo je cetvrti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }],
      "passes": []
    }
    var jsonUTipuString = JSON.stringify(probniTest)
    assert.deepEqual(TestoviParser.dajTacnost(jsonUTipuString), ocekivaniStringIzFunckije);
  });

  it('3 od 11 testa prolaze - testiranje zaokruzenosti tacnosti na jednu decimalu', function () {
    var ocekivaniStringIzFunckije = { "tacnost": "27.3%", "greske": ["Ovo je cetvrti test - FAIL","Ovo je peti test - FAIL","Ovo je sesti test - FAIL","Ovo je sedmi test - FAIL","Ovo je osmi test - FAIL","Ovo je deveti test - FAIL","Ovo je deseti test - FAIL","Ovo je jedanaesti test - FAIL"] }
    var probniTest ={
      "stats": {
      "suites": 2,
      "tests": 11,
      "passes": 3,
      "pending": 0,
      "failures": 8,
      "start": "2021-11-05T15:00:26.343Z",
      "end": "2021-11-05T15:00:26.352Z",
      "duration": 9
      },
      "tests": [
      {
        "title": "Test1",
        "fullTitle": "Ovo je prvi test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
      ],
      "pending": [],
      "failures": [{
        "title": "Test4",
        "fullTitle": "Ovo je cetvrti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test5",
        "fullTitle": "Ovo je peti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
        {
          "title": "Test6",
          "fullTitle": "Ovo je sesti test - FAIL",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },{
        "title": "Test7",
        "fullTitle": "Ovo je sedmi test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test8",
        "fullTitle": "Ovo je osmi test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
        {
          "title": "Test9",
          "fullTitle": "Ovo je deveti test - FAIL",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },{
        "title": "Test10",
        "fullTitle": "Ovo je deseti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },{
        "title": "Test11",
        "fullTitle": "Ovo je jedanaesti test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }],
      "passes": [{
        "title": "Test1",
        "fullTitle": "Ovo je prvi test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
        {
          "title": "Test2",
          "fullTitle": "Ovo je drugi test - FAIL",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },{
        "title": "Test3",
        "fullTitle": "Ovo je treci test - FAIL",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }]
    }
    var jsonUTipuString = JSON.stringify(probniTest)
    assert.deepEqual(TestoviParser.dajTacnost(jsonUTipuString), ocekivaniStringIzFunckije);
  });

  
  


});