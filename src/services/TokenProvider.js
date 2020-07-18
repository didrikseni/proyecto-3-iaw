const createTokenProvider = () => {
  let _token: string = JSON.parse(localStorage.getItem('access_token') || '') || null;
  let observers: Array<(isLogged: boolean) => void> = [];

  const getToken = async () => {
    if (!_token) {
      return null;
    }
    return _token;
  };

  const isLoggedIn = () => {
    return !!_token;
  };

  const setToken = (token: string) => {
    if (token) {
      localStorage.setItem('access_token', JSON.stringify(token));
    } else {
      localStorage.removeItem('access_token');
    }
    _token = token;
    notify();
  };

  const subscribe = (observer: (isLogged: boolean) => void) => {
    observers.push(observer);
  };

  const unsubscribe = (observer: (isLogged: boolean) => void) => {
    observers = observers.filter(_observer => _observer !== observer);
  };

  const notify = () => {
    const isLogged = isLoggedIn();
    observers.forEach(observer => observer(isLogged));
  };

  return {
    getToken,
    isLoggedIn,
    setToken,
    subscribe,
    unsubscribe,
  };
};

export default createTokenProvider;
