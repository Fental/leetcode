/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {

    const DIRECT = {
        N: 1,
        S: 2,
        W: 3,
        E: 4
    };

    const TURN_TO = {
        L: -2,
        R: -1
    };

    const directHelper = (direct, to) => {
        switch (direct) {
            case DIRECT.N: {
                return to === TURN_TO.L ? DIRECT.W : DIRECT.E;
            }
            case DIRECT.S: {
                return to === TURN_TO.L ? DIRECT.E : DIRECT.W;
            }
            case DIRECT.W: {
                return to === TURN_TO.L ? DIRECT.S : DIRECT.N;
            }
            case DIRECT.E: {
                return to === TURN_TO.L ? DIRECT.N : DIRECT.S;
            }
        }
    }

    let direct = DIRECT.N;
    let pos = [0, 0];
    let command;
    let max = 0;
    let obstacleSets = new Set();
    obstacles.forEach(val => obstacleSets.add(`${val[0]},${val[1]}`));
    const checkObstacle = pos => obstacleSets.has(pos);

    while ((command = commands.shift()) != null) {

        if (command < 0) {
            direct = directHelper(direct, command);
            continue;
        }

        while (command-- !== 0) {
            let next;

            switch (direct) {
                case DIRECT.N: {
                    next = [pos[0], pos[1] + 1];
                    break;
                }
                case DIRECT.S: {
                    next = [pos[0], pos[1] - 1];
                    break;
                }
                case DIRECT.W: {
                    next = [pos[0] - 1, pos[1]];
                    break;
                }
                case DIRECT.E: {
                    next = [pos[0] + 1, pos[1]];
                    break;
                }
            }

            if (checkObstacle(`${next[0]},${next[1]}`)) {
                break;
            }

            pos = next;
        }

        max = Math.max(max, pos[0] * pos[0] + pos[1] * pos[1]);
    }

    return max;
};