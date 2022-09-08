// https://adoppop.com/redirect/387768 исходный адрес

// Возможно пригодится, получение заголовков из запроса
// var request = new XMLHttpRequest();
// request.open('GET', document.location, false);
// request.send(null);
// request.getAllResponseHeaders().toLowerCase();
//

// получение параметров из адреса
var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

console.log( params['data']);

(function () {
    // пример feed
    var feed = 387768
    // пример subId
    var subId = d387768

    var host = window.location.host
    var startLocation = window.location.pathname
    let params = (new URL(document.location)).searchParams;
    var frame = window.frameElement;
    var hasFrame = false;

    // проверка наличия iframe``
    if (frame) {
        hasFrame = true;
    }

    function redirect(rsn, url) {
        if ('0' == 1) console.log('>>> function redirect() -> url=' + url + ' debug=0 reason=' + rsn);
        if ('0' == 0) {
            setTimeout(function () {
                window.onbeforeunload = null;
                window.location.replace(url);
            }, 500);
        }
    }

    var newUrl = `${host}${startLocation}iframe=${hasFrame}`
    // var newUrl = host + startLocation + 'iframe=' + hasFrame;
    // var newUrlParams = `${host}${startLocation}feed=${feed}&subId=${subId}&iframe=${hasFrame}`

    redirect("nextRedirect", newUrl);
  })();

//   Location.reload() - перезагрузка по url