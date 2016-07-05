module.exports = function(data, userDict){
    var hash = [],
        rtn = {},
        dict = userDict || 'abcd'.split('');

    data.forEach(function(v) {
        if (!v.match(/^[a-zA-Z][a-zA-Z0-9-_]+/) || rtn[v]) {
            return
        }

        if (!hash.length) {
            hash.push(0);
        } else {
            hash[hash.length - 1]++;

            for (var i = hash.length - 1; i >= 0; i--) {
                if (hash[i] == dict.length) {
                    hash[i] = 0;

                    if (i == 0) {
                        hash.unshift(0);
                    } else {
                        hash[i - 1]++;
                    }
                }
            }
        }
        rtn[v] = hash.map(function(v) {
            return dict[v];
        }).join('');
    });
    return rtn;
};
