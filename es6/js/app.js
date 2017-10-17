'use strict';

/*
    Les type de variables
    let = var
    cont = constante (variable non modifiable)
*/
var userName = 'Julien';
var birthYear = 1979;
var actualYear = 2017;
// 

/*
Concaténation et multiligne
*/
var title = document.querySelector('h1');

title.innerHTML = '\n        Bonjour ' + userName + '\n        <br>\n        <em>Vous avez ' + (actualYear - birthYear) + '</em>\n    ';
// 

/*
Les fonction fléchées
*/
var twice = function twice() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    return attr * 2;
};
console.log(twice());
// 

/*
REST parameter
*/
var hobbies = function hobbies(userName) {
    for (var _len = arguments.length, _hobbies = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        _hobbies[_key - 1] = arguments[_key];
    }

    console.log(userName);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _hobbies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

hobbies('Julien', 'CSS', 'JavaScript', 34, true);
hobbies('Pierre', 'Cuisine');
//

/*
SPREAD operator
*/
var firstArray = ['Julien', 54, true, birthYear];
var secondArray = ['Toto'].concat(firstArray);
console.log(secondArray);
//