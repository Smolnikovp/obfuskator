var module = require('../module_sort.js'),
    assert = require('chai').assert;

describe('Сортировщик', function() {
    var data,
        expect;

    it ('должен сортировать классы по частоте использования', function() {
        data = ['cls1', 'cls2', 'cls3', 'cls2', 'cls4', 'cls3', 'cls2', 'cls4', 'cls4', 'cls4'];
        expect = ['cls4', 'cls2', 'cls3', 'cls1'];

        assert.deepEqual(module(data), expect);
    })
});
