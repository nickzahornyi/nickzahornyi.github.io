// validation
function validateFirstName(text) {
  if (text.value.length === 0 || ! /\S/.test(text.value)) {
        $(".form-first-name .form__img.name").css("background-position", "-20px 0");
        $(".form-first-name .textfield__label").css("color", "#d70000");
    } else {
        $(".form-first-name .form__img.name").css("background-position", "16px 0");
        $(".form-first-name .textfield__label").css("color", "#61c25e");
    }
}

function validateLastName(text) {
    if (text.value.length === 0 || ! /\S/.test(text.value)) {
        $(".form-last-name .form__img.name").css("background-position", "-20px 0");
        $(".form-last-name .textfield__label").css("color", "#d70000");
    } else {
        $(".form-last-name .form__img.name").css("background-position", "16px 0");
        $(".form-last-name .textfield__label").css("color", "#61c25e");
    }
}

function validateEmail(text) {
    function isEmail(text) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(text);
    }
    isEmail(text.value);
    if (isEmail(text.value) === false) {
        $(".form-email .form__img.email").css("background-position", "32px 0");
        $(".form-email .textfield__label").css("color", "#d70000");
    } else {
        $(".form-email .form__img.email").css("background-position", "16px 0");
        $(".form-email .textfield__label").css("color", "#61c25e");
    }
}
var phoneBool1;
var phoneBool2;
var phoneBool3;
var dayBool;
var monthBool;
var yearBool;
function validatePhone1(text) {
    if (text.value.length === 0 || ! /\+\d\d/.test(text.value)) {
        $(".form-phone .form__img.phone").css("background-position", "-18px 0");
        $(".form__phone .phone3 .textfield__label").css("color", "#d70000");
        phoneBool1 = false;
    } else {
        phoneBool1 = true;
    }
      if (phoneBool1 && phoneBool2 && phoneBool3) {
        $(".form-phone .form__img.phone").css("background-position", "-34px 0");
        $(".form__phone .phone3 .textfield__label").css("color", "#61c25e");
      }
}
function validatePhone2(text) {
    if (text.value.length === 0 || ! /\d\d\d/.test(text.value)) {
        $(".form-phone .form__img.phone").css("background-position", "-18px 0");
        $(".form__phone .phone3 .textfield__label").css("color", "#d70000");
        phoneBool2 = false;
    } else {
      phoneBool2 = true;
      if (phoneBool1 && phoneBool2 && phoneBool3) {
        $(".form-phone .form__img.phone").css("background-position", "-34px 0");
        $(".form__phone .phone3 .textfield__label").css("color", "#61c25e");
      }
   }
}
function validatePhone3(text) {
    if (text.value.length === 0 || ! /\d\d\d\d\d\d\d/.test(text.value)) {
        $(".form-phone .form__img.phone").css("background-position", "-18px 0");
        $(".form__phone .phone3 .textfield__label").css("color", "#d70000");
        phoneBool3 = false;
    } else {
      phoneBool3 = true;
    }
    if (phoneBool1 && phoneBool2 && phoneBool3) {
      $(".form-phone .form__img.phone").css("background-position", "-34px 0");
      $(".form__phone .phone3 .textfield__label").css("color", "#61c25e");
    }
}

function validateDay(text) {
    if (text.value.length === 0 || ! (/\d/).test(text.value)) {
        $(".form-date .form__img.date").css("background-position", "-17px 0");
        $(".form__date .phone3 .textfield__label").css("color", "#d70000");
        dayBool = false;
    } else {
        dayBool = true;
  }
  if (dayBool && monthBool && yearBool) {
    $(".form-date .form__img.date").css("background-position", "-36px -1px");
    $(".form__date .phone3 .textfield__label").css("color", "#61c25e");
  }
}
function validateMonth(text) {
    if (text.value.length === 0 || ! (/\d/).test(text.value)) {
        $(".form-date .form__img.date").css("background-position", "-17px 0");
        $(".form__date .phone3 .textfield__label").css("color", "#d70000");
        monthBool = false;
    } else {
      monthBool = true;
    }
    if (dayBool && monthBool && yearBool) {
      $(".form-date .form__img.date").css("background-position", "-36px -1px");
      $(".form__date .phone3 .textfield__label").css("color", "#61c25e");
    }
}
function validateYear(text) {
    if (text.value.length === 0 || ! (/\d\d\d\d/).test(text.value)) {
        $(".form-date .form__img.date").css("background-position", "-17px 0");
        $(".form__date .phone3 .textfield__label").css("color", "#d70000");
        yearBool = false;
    } else {
      yearBool = true;
    }
      if (dayBool && monthBool && yearBool) {
        $(".form-date .form__img.date").css("background-position", "-36px -1px");
        $(".form__date .phone3 .textfield__label").css("color", "#61c25e");
      }
}

$(document).ready(function () {
  var cities = ["Авдеевка", "Акимовка", "Александрия", "Александровка", "Александровка", "Алупка", "Алушта", "Алчевск", "Амвросиевка", "Антрацит", "Апостолово", "Арбузинка", "Армянск", "Артемовск", "Арциз", "Ахтырка", "Балаклея", "Балта", "Бар", "Барановка", "Барвенково", "Барышевка", "Бахмач", "Бахчисарай", "Баштанка", "Белая Церковь", "Белгород-Днестровский", "Беловодск", "Белогорск", "Белогорье", "Белозерка", "Белополье", "Беляевка", "Бердичев", "Бердянск", "Берегово", "Бережаны", "Березанка", "Березино", "Березовка", "Берислав", "Бершадь", "Близнюки", "Бобринец", "Бобровица", "Богодухов", "Богуслав", "Болград", "Болехов", "Борзна", "Борислав", "Борисполь", "Боровая", "Бородянка", "Борщев", "Боярка", "Бровары", "Броды", "Брусилов", "Брянка", "Бузуков", "Бурштын", "Бурынь", "Буск", "Бучач", "Валки", "Варва", "Васильевка", "Васильков", "Васильковка", "Великая Белозерка", "Великая Новоселка", "Верхнеднепровск", "Верхов", "Верховина", "Веселиново", "Веселое", "Вижница", "Винница", "Виноградов", "Виньковцы", "Вишневое", "Владимир-Волынский", "Владимирец", "Вознесенск", "Волноваха", "Воловец", "Володарка", "Володарское", "Волочиск", "Волчанск", "Вольногорск", "Вольнянск", "Врадиевка", "Высокополье", "Вышгород", "Гадяч", "Гайворон", "Гайсин", "Галич", "Гаспра", "Геническ", "Герца", "Глеваха", "Глобино", "Глухов", "Глыбокая", "Голая Пристань", "Голованевск", "Горловка", "Горностаевка", "Городенка", "Городище", "Городня", "Городок", "Горохов", "Гоща", "Гребенка", "Гуляйполе", "Гурзуф", "Гусятин", "Двуречная", "Дебальцево", "Демидовка", "Деражня", "Дергачи", "Джанкой", "Дзержинск", "Диканька", "Днепродзержинск", "Днепропетровск", "Днепрорудное", "Доброполье", "Добрянка", "Докучаевск", "Долина", "Долинская", "Доманевка", "Донецк", "Драбов", "Дрогобыч", "Дружковка", "Дубно", "Дубровица", "Дунаевцы", "Евпатория", "Еланец", "Емильчино", "Енакиево", "Жашков", "Желтые Воды", "Жидачев", "Житомир", "Жмеринка", "Жолква", "Залещики", "Запорожье", "Заречное", "Заставна", "Зачепиловка", "Збараж", "Зборов", "Звенигородка", "Згуровка", "Здолбунов", "Зеньков", "Змиев", "Знаменка", "Золотоноша", "Золочев", "Ивано-Франковск", "Ивановка", "Иванычи", "Измаил", "Изюм", "Изяслав", "Илларионово", "Ильинцы", "Ильичевск", "Ирпень", "Иршава", "Ичня", "Кагарлык", "Казанка", "Казатин", "Каланчак", "Калиновка", "Калуш", "Каменец-Подольский", "Каменка", "Каменка-Бугская", "Каменка-Днепровская", "Камень-Каширский", "Канев", "Карловка", "Катеринополь", "Каховка", "Кегичевка", "Кельменцы", "Керчь", "Киверцы", "Киев", "Килия", "Кировоград", "Кировск", "Кировское", "Кицмань", "Кобеляки", "Ковель", "Кодыма", "Козелец", "Козельщина", "Козова", "Козятин", "Коломак", "Коломыя", "Компанеевка", "Комсомольск", "Конотоп", "Константиновка", "Кореиз", "Корец", "Короп", "Коростень", "Коростышев", "Корсунь-Шевченковский", "Корюковка", "Косов", "Костополь", "Котельва", "Котовск", "Краматорск", "Красилов", "Красноармейск", "Красноград", "Краснодон", "Краснокутск", "Красноперекопск", "Краснополье", "Красные Окны", "Красный Лиман", "Красный Луч", "Кременчуг", "Кривой Рог", "Куйбышево", "Кулиничи", "Купянск", "Ладыжин", "Лисичанск", "Лозовая", "Лопатин", "Лохвица", "Лубны", "Луганск", "Луцк", "Львов", "Люботин", "Макеевка", "Мангуш", "Марганец", "Мариуполь", "Марьинка", "Мелитополь", "Мена", "Мерефа", "Миргород", "Михайловка", "Млинов", "Могилев-Подольский", "Молодецкое", "Монастыриска", "Монастырище", "Моршин", "Мостиска", "Мукачево", "Мурованые Куриловцы", "Народичи", "Недригайлов", "Нежин", "Немиров", "Нетишин", "Нижние Серогозы", "Николаев", "Никополь", "Новая Каховка", "Новая Одесса", "Новая Ушица", "Новгород-Северский", "Новгородка", "Новоазовск", "Новоайдар", "Новоархангельск", "Нововолынск", "Нововоронцовка", "Новоград-Волынский", "Новоднестровск", "Новомиргород", "Новомосковск", "Новопсков", "Новоселица", "Новотроицкое", "Новоукраинка", "Новояворовск", "Новые Санжары", "Новый Буг", "Носовка", "Обухов", "Овидиополь", "Овруч", "Одесса", "Онуфриевка", "Оратов", "Орджоникидзе", "Орехов", "Оржица", "Острог", "Очаков", "Павлоград", "Первомайск", "Первомайский", "Первомайское", "Перевальск", "Перемышляны", "Перечин", "Переяслав-Хмельницкий", "Першотравенск", "Петрово", "Петропавловка", "Печенеги", "Пирятин", "Погребище", "Подволочиск", "Подгайцы", "Полесское", "Пологи", "Полонное", "Полтава", "Попасная", "Попельня", "Приазовское", "Прилуки", "Приморск", "Пустомыты", "Путивль", "Путила", "Пятихатки", "Радехов", "Радомышль", "Радывылив", "Раздельная", "Раздольное", "Ракитное", "Ратнов", "Рахов", "Репки", "Решетиловка", "Ровеньки", "Ровно", "Рогатин", "Рожище", "Рожнятов", "Розовка", "Романов", "Ромны", "Рубежное", "Ружин", "Саврань", "Садовое", "Саки", "Самбор", "Сарата", "Сарны", "Сахновщина", "Свалява", "Сватово", "Свердловск", "Светловодск", "Севастополь", "Северодонецк", "Селидово", "Семеновка", "Семеновка", "Середина-Буда", "Симферополь", "Синельниково", "Скадовск", "Сквира", "Сколе", "Славута", "Славутич Славяносербск", "Славянск", "Смела", "Снежное", "Снигиревка", "Снятин", "Сокаль", "Сокиряны", "Соленое", "Сосница", "Сосновка", "Софиевка", "Ставище", "Старая Выжевка", "Старая Синява", "Старобельск", "Старобешево", "Староконстантинов", "Старый", "Самбор", "Стаханов", "Сторожинец", "Стрый", "Судак", "Сумы", "Счастье", "Талалаевка", "Тальное", "Тараща", "Тарутино", "Татарбунары", "Тельманово", "Теофиполь", "Теплик", "Теребовля", "Терновка", "Тернополь", "Тетиев", "Тлумач", "Токмак", "Томаковка", "Томашполь", "Торез", "Троицкое", "Тростянец", "Трускавец", "Тульчин", "Турийск", "Турка", "Тячев", "Ужгород", "Украинка", "Ульяновка", "Умань", "Устиновка", "Фастов", "Феодосия", "Фрунзовка", "Харцызск", "Харьков", "Херсон", "Хмельник", "Хмельницкий", "Хорол", "Хотин", "Христиновка", "Хуст", "Царичанка", "Цюрупинск", "Чаплинка", "Чемеровцы", "Червоноармейск", "Червоноград", "Черкассы", "Черневцы", "Чернигов", "Черниговка", "Черновцы", "Черногородка", "Черняхов", "Чортков", "Чугуев", "Чутово", "Шаргород", "Шахтерск", "Шацк", "Шепетовка", "Широкое", "Ширяево", "Шишаки", "Шостка", "Шпола", "Шумск", "Щорс", "Энергодар", "Южноукраинск", "Южный", "Яворов", "Яготин", "Ялта", "Ямполь", "Яремча", "Ярмолинцы", "Ясиноватая"]

  for (var i = 0; i < cities.length; i++) {
    $(".cities__list").append("<li>" + cities[i] +"</li>");
  }

  $(".cities__list li").click(function () {
      $(".select span").text($(this).text());
      $(".cities-wrapper").fadeOut();
  })
  $(".select span").click(function () {
    $(".cities-wrapper").fadeToggle("fast");
  })
  $("body").click(function(e) {
        $(".cities-wrapper").fadeOut();
    });
  $(".select span").click(function (e) {
    e.stopPropagation();
  })
  $(".cities-wrapper").click(function(e) {
      e.stopPropagation();
  });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(".small-card.red").click(function () {
  $(".big-card").removeClass("active");
  $(".big-card.red").addClass("active");
  $(".form-hidden").val("red");
})
$(".small-card.blue").click(function () {
  $(".big-card").removeClass("active");
  $(".big-card.blue").addClass("active");
  $(".form-hidden").val("blue");
})
$(".small-card.orange").click(function () {
  $(".big-card").removeClass("active");
  $(".big-card.orange").addClass("active");
  $(".form-hidden").val("orange");
})

$(".form-payment input").click(function () {
  $(".payment-type").fadeToggle("fast");
})
$("body").click(function(e) {
  $(".payment-type").fadeOut("fast");
});
$(".form-payment input").click(function (e) {
  e.stopPropagation();
})
$(".payment-type").click(function(e) {
  e.stopPropagation();
});
$(".payment-type li").click(function() {
  $(".form-payment input").val($(this).text());
  $(".payment-type").fadeOut("fast");
});

$(".mob-menu-button").click(function () {
  $(".header__menu-mobile").fadeToggle("fast");
})

$(".header-callback__button").click(function () {
  $(".callback-modal-wrapper").css("display", "block");
  $("body").css("overflow", "hidden");
});
$("body").click(function(e) {
  $(".callback-modal-wrapper").css("display", "none");
  $("body").css("overflow", "auto");
});
$(".callback-modal img").click(function(e) {
  $(".callback-modal-wrapper").css("display", "none");
  $("body").css("overflow", "auto");
});
$(".callback-modal").click(function (e) {
  e.stopPropagation();
});
$(".header-callback__button").click(function (e) {
  e.stopPropagation();
});
})
