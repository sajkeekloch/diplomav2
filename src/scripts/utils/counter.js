class Counter {
  add() {
    if (!(localStorage.getItem('n'))) {
      localStorage.setItem('n', 3);
    } else {
      localStorage.setItem('n', parseInt(localStorage.getItem('n')) + 3);
    }
  }

  setTotal(t) {
    localStorage.setItem('t', t);
  }

  reset() {
    localStorage.setItem('n', 0);
  }
}

export default Counter;
