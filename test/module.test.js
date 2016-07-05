var module = require('../module.js'),
    assert = require('chai').assert;


describe('модуль', function() {
    var data,
        expect;

    it ('должен возвращать верный вариант объекта', function() {
        data = [
            'class1',
            'class2',
            'class3',
            'cla__ss4',
            'cl-as12s5',
            'c3232la--_ss6',
            'class7'
        ];
        expect = {
            class1: 'a',
            class2 : 'b',
            class3: 'aa',
            cla__ss4: 'ab',
            'cl-as12s5': 'ba',
            'c3232la--_ss6': 'bb',
            class7: 'aaa'
        };

        assert.deepEqual(module(data, ['a','b']), expect);
    });

    it ('должен фильтровать классы с недопустимыми именами', function() {
        data = ['1class', 'class2', 'class3', 'clas__s4'];
        expect = { class2: 'a', class3: 'b', clas__s4: 'aa'};

        assert.deepEqual(module(data, ['a', 'b']), expect);
    });
});
