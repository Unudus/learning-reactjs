const SESSION_IDENT = 'sessionKey';
const FAKED_SESSION_VALUE = 'baananana';
let lastMod = new Date().getTime();

const isLoggedIn = () => {
    let val = localStorage.getItem(SESSION_IDENT);
    console.log('inspecting login state', val);
    
    return (val != null && val != '');
};

const updateMod = () => {
    lastMod = new Date().getTime();
}

const login = (watcher) => {
    console.log('starting login');
    localStorage.setItem(SESSION_IDENT, FAKED_SESSION_VALUE);
    updateMod();
    watcher(true);
};

const logout = (watcher) => {
    console.log('starting logout');
    localStorage.removeItem(SESSION_IDENT);
    updateMod();
    watcher(false);
};
export default {isLoggedIn,login,logout};
