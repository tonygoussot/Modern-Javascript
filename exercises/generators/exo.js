const generator = function* fibonacci() {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;
        [current, next] = [next, current + next]
    }
};

module.exports = {generator};
