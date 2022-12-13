const localStorageUtil = () => {
    if (typeof window !== "undefined") {
        localStorage.setItem('theme', 'Dark')
        return localStorage.getItem('theme').toString();
    } 
}

export default localStorageUtil;