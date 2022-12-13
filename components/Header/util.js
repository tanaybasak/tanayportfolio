const localStorageUtil = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('theme').toString();
    } 
}

export default localStorageUtil;