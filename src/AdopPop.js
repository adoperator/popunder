export default class AdopPop {
  constructor(params) {
    this.zone = params.zone || null
    this.popUnderOpened = false

    this.redirect()
  }

  redirect() {
    let document = window.document

    const url = `https://pop.tier4apps.com/redirect-zone/${this.zone}`

    const events = [
      "click", "mousedown", "mouseup", "keydown", "keyup", "keypress"
    ];

    let isWindowNotClosed = function(w) {
      return !(w ? w.closed : 1)
    }

    let listener = function (event) {
      setTimeout(function () {
        if (this.popUnderOpened) {
          return
        }

        window.onbeforeunload = null

        let blank = window.open('about:blank', '_blank')

        if (isWindowNotClosed(blank)) {
          this.popUnderOpened = true
          blank.location.href = url
        }
      }, 50)
    }

    events.forEach(function(e) {
      document.addEventListener(e, listener, {
        once : true
      })
    });
  }
}
