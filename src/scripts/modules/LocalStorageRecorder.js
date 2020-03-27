import Counter from '../utils/Counter';
const newsCounter = new Counter();

class LocalStorageRecorder {
  
    redcordLocalStorage(res) {
      for (let i = 0; i < res.length; i++) {
        localStorage.setItem(`item${i}`, JSON.stringify(res[i]));
      }
      newsCounter.add();
      newsCounter.setTotal(res.length);
    }
}
export {
  newsCounter,
};
export default LocalStorageRecorder;