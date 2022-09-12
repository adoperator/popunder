var isFramed = false;

try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

    var host = window.location.host;
    var startLocation = window.location.pathname;
    var params = window.location.search;

(function () {
    function redirect(rsn, url) {
        if ('0' == 1) console.log('>>> function redirect() -> url=' + url + ' debug=0 reason=' + rsn);
        if ('0' == 0) {
            setTimeout(function () {
                window.onbeforeunload = null;
                window.location.replace(url);
            }, 500);
        }
    }

    var newUrl;
    if (isFramed) {
        newUrl = `https://google.com/&output=embed`;
    } else {
        if (params) {
            newUrl = `${host}${startLocation}${params}&iframe=${isFramed}`; 
        } else {
            newUrl = `${host}${startLocation}?iframe=${isFramed}`;
        }
    }
    redirect("nextRedirect", newUrl);
  })();