function saveCookie(name, value) {
    const date = new Date();
    date.setDate(date.getDate() + 7); // 일주일로 쿠키 값 세팅
    if (getCookie(name)) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
    document.cookie = `${name}=${value};expires=${date.toUTCString};path=/`;
}

function getCookie(name) {
    const regexStr = '(?:(?:^|.*;\\s*){name}\\s*=\\s*([^;]*).*$)|^.*$';
    const regex = new RegExp(regexStr.replace(/{name}/gi, name));
    return document.cookie.replace(regex, '$1');
}
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { saveCookie, getCookie, deleteCookie };
