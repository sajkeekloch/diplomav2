class Counter {

    add() {
        if (sessionStorage.getItem('n') === null) {
            sessionStorage.setItem('n', 3);
        }
        else {
            for (let i = 0; i < 3; i++)
            sessionStorage.setItem('n', parseInt(sessionStorage.getItem('n')) + i);
        }
    }

    setTotal(t) {
        sessionStorage.setItem('t', t);
    }

    reset() {
        sessionStorage.setItem('n', 0);
    }
}
const counter = new Counter;


export { counter };