var isFramed = false;

try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

function $_GET(key) {
    var p = window.location.search;
    p = p.match(new RegExp(key + '=([^&=]+)'));
    return p ? p[1] : false;
}

var feed = $_GET('feed');
var subId = $_GET('subid');

(function () {
    var p = window.location.search;
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
        if (p) {
            newUrl = `https://test.adoppop.com/redirect/${feed}?subid=${subId}&iframe=${isFramed}`;
            console.log(newUrl);
        } else {
            newUrl = `https://test.adoppop.com/redirect`;
        }
    }
    redirect("nextRedirect", newUrl);
  })();