$(function() {

    var $search = $('.search');

    var $ajaxSearch = function(a) {
        var $inputText = $('.search_text');
        var $wrapper = $('.wrapper');

        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&start=' + a * 8 + '&q=' + encodeURIComponent($inputText.val()) + '&callback=GoogleCallback&context=?',
            dataType: "jsonp",
            success: function(data) {

                var result = document.createElement('div');
                result.classList.add('result');
                var ul = document.createElement('ul');

                var page_nav = document.createElement('div');
                page_nav.classList.add('page_nav');
                var page_nav_list = document.createElement('p');
                page_nav_list.classList.add('page_nav_list');

                for (i = 0; i < 10; i++) {
                    page_nav_list.innerHTML += '<a href="#" class="page-list">' + (i + 1) + '</a>';
                }
                page_nav_list.innerHTML += '<a href="#" class="page-next">Next</a>';

                $.each(data.results, function(i, val) {

                    var li = document.createElement('li');
                    li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
                    ul.appendChild(li);
                });

                $wrapper.append(result);
                result.appendChild(ul);
                result.appendChild(page_nav);
                page_nav.appendChild(page_nav_list);

                var setAnchors = function(a) {

                    $anchors = $('.page-list');
                    $.each($anchors, function(i) {
                        $anchors[i].addEventListener('click', function(e) {
                            e.preventDefault();
                            $ajaxSearch(i);
                        });
                    });

                    $('.page-next')[0].addEventListener('click', function(e) {
                        e.preventDefault();
                        $ajaxSearch(a + 1);
                    });

                    $anchors[a].classList.add('active');
                };

                setAnchors(a);

            }
        });
        $('.result').remove();
    };


    $search.submit(function(e) {

        e.preventDefault();

        $ajaxSearch(0);
    });
});


function GoogleCallback(func, data) {
    window[func](data);
}


// second part


var human = {
    name: 'Nick',
    age: 22,
    sex: 'male',
    growth: 172,
    weight: 70
};

function Worker() {
    this.workPlace = "President";
    this.salary = 25000;
    this.work = function() {
        alert('Hello!');
    }
};

function Student() {
    this.studyPlace = 'GoIT';
    this.stipend = 2500;
    this.watchTV = function() {
        alert('The Big bang Theory');
    }
};

var newWorker = new Worker();
var newStudent = new Student();

newWorker.__proto__ = human;
newStudent.__proto__ = human;

var Misha = Object.create(newStudent);
Misha.name = 'Misha';
Misha.age = 30;
Misha.weight = 80;

var Oleg = Object.create(newWorker);
Oleg.name = 'Oleg';
Oleg.salary = 5000;
Oleg.hobby = 'Football';

console.log('human', human);
console.log('student ', newStudent);
console.log('worker ', newWorker);
console.log(Misha.name + ' study in ' + Misha.studyPlace + ' have ' + Misha.sex + ' and growth: ' + Misha.growth + 'cm');
console.log(Oleg.name + ' spend ' + Oleg.salary + ' per month and have hobby ' + Oleg.hobby + ' and weight: ' + Oleg.weight + 'kg');