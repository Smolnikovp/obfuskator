module.exports = function(data) {
    var counters = {},
        result = [];

    data.forEach(function(v) {
        counters[v] = counters[v] || 0;
        counters[v]++;
    });

    for (var k in counters) {
        result[counters[k]] = result[counters[k]] || [];
        result[counters[k]].push(k);
    }

    result.reverse();
    data = [];

    result.forEach(function(v) {
        data = data.concat(v);
    });

    return data;
};
