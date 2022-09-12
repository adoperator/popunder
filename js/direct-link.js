var isFramed = false;

try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

// получение предыдущей страницы
document.referrer
console.log('document.referrer')
console.log(document.referrer)

    var host = window.location.host
    var startLocation = window.location.pathname
    var frame = window.frameElement;
    var hasFrame = false;

(function () {

    var host = window.location.host
    var startLocation = window.location.pathname

    function redirect(rsn, url) {
        if ('0' == 1) console.log('>>> function redirect() -> url=' + url + ' debug=0 reason=' + rsn);
        if ('0' == 0) {
            setTimeout(function () {
                window.onbeforeunload = null;
                window.location.replace(url);
            }, 500);
        }
    }

    var newUrl = `${host}${startLocation}?iframe=${isFramed}`

    redirect("nextRedirect", newUrl);
  })();