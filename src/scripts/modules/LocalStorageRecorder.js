
import Counter from '../utils/Counter';
const newsCounter = new Counter();

class LocalStorageRecorder {
    constructor(res) {
        this.res = res;
    }
    
    redcordLocalStorage() {
      for (let i = 0; i < this.res.length; i++) {
        localStorage.setItem(`item${i}`, JSON.stringify(this.res[i]));
      }
      newsCounter.add();
      newsCounter.setTotal(this.res.length);
    }
}
export {
  newsCounter,
};
export default LocalStorageRecorder;