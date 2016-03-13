'use strict;'

$(function () {

  var html = $('#test').html();

  var question = [{
    question: 'Что обозначает директива ‘use strict’?',
    answer: ['Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.', 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.', 'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.'],
    rightAnswer: {
      2: true
    }
  }, {
    question: 'К какому участку скрипта применяется строгие правила ‘use strict’?',
    answer: ['Либо во всем скрипте, либо в отдельной функции', 'Строгие правила работают между директивами ‘use strict’ и ‘strict end’.', 'Во всем скрипте.'],
    rightAnswer: {
      1: true
    }
  }, {
    question: 'Какие основное ограничения к объявлению переменных в строгом режиме?',
    answer: ['Название переменных должно быть camel-case с маленькой буквы.', 'Любая переменная должна объявляться с использованием ключевого слова var', 'Глобальные переменные должны объявляться с использованием ключевого слова var'],
    rightAnswer: {
      2: true
    }
  }];

  var content = tmpl(html, {
    data: question
  });

  var answerArray = [];
  var manyAnswerArray = [];
  var $body = $('body');

  $body.append(content);

  function checkAnswer(e) {
    var user = [];

    for (var i = 0; i < question.length; i++) {

      var inputs = $('.question' + i + ' input:radio');

      for (var k = 0; k < inputs.length; k++) {
        var checked = [];
        var right = [];

        if (inputs[k].checked == true) {
          checked[k] = inputs[k].checked;
        }

        right[k] = question[i].rightAnswer[k + 1] == 1;

        if (checked[k] !== right[k]) {

          user.push("0");
        } else {
          user.push("1");
        };
      };
    };

    var resultAverage = 0;
    var resultTest = 0;
    for (var _i = 0; _i < user.length; _i++) {
      if (user[_i]) {
        resultTest += 1;
      };
      if (user[_i] == 1) {
        resultAverage += 1;
      };
    };

    $modal = $('<div class="test-modal"> ' + 'Ваш результат: ' + resultAverage + ' из ' + resultTest / 3 + ' </div><div class="button">OK</div>');
    $overlay = $('<div class="test-overlay"></div>');

    $overlay.one('click', hideModal);
    $body.append($overlay);
    $body.append($modal);
    $('.button').on('click', hideModal);
  };

  function hideModal() {
    $('.radio').removeAttr('checked');
    // this.$modal.remove();
    $modal.remove();
    $overlay.remove();
  }

  var result = $('.result');
  result.on('click', checkAnswer);
});
