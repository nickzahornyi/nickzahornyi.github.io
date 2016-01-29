var app = {

  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType) {
      element.setAttribute('type', params.inputType);
    }

    if (params.className) {
      element.className = params.className;
    }

    if (params.content) {
      element.innerHTML = params.content;
    }

    if (params.parentElement) {
      params.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

      this.createElement ({
        tagName: 'h2',
        content: 'Вопрос №' + (i + 1),
        parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {

       var label = this.createElement ({
        tagName: 'label',
        content: 'Вариант ответа №' + (j + 1),
        className: 'checkbox',
        parentElement: form
      });

       var checkbox = this.createElement ({
        tagName: 'input',
        inputType: 'checkbox'
      });

       label.insertAdjacentElement('afterBegin', checkbox);
     }

   };

 }

};


var wrapper = app.createElement ({
 tagName: 'div',
 parentElement: document.body,
 className: 'wrapper'
});

app.createElement ({
  tagName: 'h1',
  content: 'Тест по программированию',
  parentElement: wrapper
});

var form = app.createElement ({
  tagName: 'form',
  parentElement: wrapper
});

app.generateQuestions(3, 3);

app.createElement ({
  tagName: 'button',
  inputType: 'submit',
  content: 'Проверить мои результаты',
  className: 'btn btn-primary btn-lg',
  parentElement: form
});
