export class CookieUtil {
    static setCookie(name, value, exdays) {
        const date = new Date();
        date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expire = date.toUTCString();
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )};expires=${expire}`;
        // console.log(expire);
    }
    static getCookie(name) {
        // console.log(decodeURIComponent(document.cookie));
        const cookie_string = document.cookie
            .split(";")
            .map((c) => (c.charAt(0) == " " ? c.substring(1) : c));
        const start_length = `${encodeURIComponent(name)}=`.length;
        let cookie = cookie_string.find((c) => c.includes(name));
        if (cookie) {
            return decodeURIComponent(cookie.substring(start_length));
        } else {
            return;
        }
    }
    static unset(name) {
        this.setCookie(name, "", new Date(0));
    }
}