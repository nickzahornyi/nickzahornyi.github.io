if (!localStorage.getItem("data")){
  localStorage.setItem("data", "[]");
}

var data = localStorage.getItem("data");

function getFromLocalStorage() {
  data = JSON.parse(data);
}

function saveToLocalStorage() {
  var dataJSON = JSON.stringify(data)
  localStorage.setItem("data", dataJSON)
}

function drawList(data) {
  $(".todo-list").empty();

  for (var i = 0; i < data.length; i++) {
    var ctrlButtons = "<i class='material-icons todo-item__edit'>edit</i><i class='material-icons todo-item__delete'>delete</i>";
    var checked;
    var status;

    if (data[i].isDone) {
      checked = "<i class='material-icons status'>check_box</i>";
      status = ' completed';
    } else {
      checked = "<i class='material-icons status'>check_box_outline_blank</i>";
      status = ''
    }

    $(".todo-list").append("<li class='todo-item" + status + "' data-id=" + data[i].id + ">" + checked + data[i].text + ctrlButtons + "</li>");
  }
  $(".tasks-counter__all span").text(data.length);
  $(".tasks-counter__completed span").text($('.todo-item.completed').length);
  $(".tasks-counter__left span").text($('.todo-item:not(".completed")').length);
}

function addItem() {
  var newItem = {
    id: Date.now(),
    text: $(".todo-form__text").val(),
    isDone: false
  }
  if ($(".todo-form__text").val() !== '') {
    data.push(newItem);
  }
  $(".todo-form__text").val('').focus();
  saveToLocalStorage();
  drawList(data);
}

function removeItem(e) {
  var dataId = $(e.currentTarget).parent().attr("data-id");

  for (var i = 0; i < data.length; i++) {
    if (data[i].id === + dataId) {
      data.splice(i, 1)
    }
  }

  saveToLocalStorage();
  drawList(data);
}

function editItem(e) {
  var dataId = $(e.currentTarget).parent().attr("data-id");
  var itemText;

  for (var i = 0; i < data.length; i++) {
    if (data[i].id === + dataId) {
      itemText = data[i].text
    }
  }

  $(e.currentTarget).parent().empty().append("<form><input class='edit-input' type='text' autofocus value='" + itemText + "'><button class='save'><i class='material-icons'>save</i></buttom></form>");

  $(".edit-input").select();
}

function saveEdits(e) {
  var dataId = $(e.currentTarget).parent().parent().attr("data-id");
  var itemText = $(e.currentTarget).prev().val();

  for (var i = 0; i < data.length; i++) {
    if (data[i].id == dataId) {
      data[i].text = itemText
      if (data[i].isDone) {
        data[i].isDone = !data[i].isDone
        $(".todo-item").toggleClass('completed');
      }
    }
  }
  $(e.currentTarget).parent().remove();

  saveToLocalStorage();
  drawList(data);
}

function changeStatus(e) {
  var dataId = $(e.currentTarget).parent().attr("data-id");

  for (var i = 0; i < data.length; i++) {
    if (data[i].id == dataId) {
      data[i].isDone = !data[i].isDone
      $(".todo-item").toggleClass('completed');
    }
  }
}

function sortNumber() {
  data.sort(function(a, b) {
    return a.id - b.id
  });

  drawList(data);
}

function sortAlphabet() {
  data.sort(function(a, b) {
    return a.text.toLowerCase() > b.text.toLowerCase()
  });

  drawList(data);
}

$(document).ready(function() {
  getFromLocalStorage();
  drawList(data);

  // ADD ITEM
  $(".todo-form__add").click(function(e) {
    e.preventDefault();
    addItem();
  });

  // DELETE ITEM
  $("body").on("click", ".todo-item__delete", function(e) {
    removeItem(e);
  });

  // EDIT ITEM
  $("body").on("click", ".todo-item__edit", function(e) {
    editItem(e);
  });

  // CHANGE STATUS ITEM
  $("body").on("click", ".status", function(e) {
    changeStatus(e);
    saveToLocalStorage();
    drawList(data);
  });

  // SAVE ITEM CHANGES
  $("body").on("click", ".save", function(e) {
    e.preventDefault();

    saveEdits(e);
  });

  // SORT ITEMS
  $(".sort-numb").click(function() {
    sortNumber();
    $(".header button").removeClass('active');
    $(this).addClass('active');
  });
  $(".sort-alphabet").click(function() {
    sortAlphabet();
    $(".header button").removeClass('active');
    $(this).addClass('active');
  });
});
