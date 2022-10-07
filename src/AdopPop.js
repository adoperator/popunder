export default class AdopPop {
  constructor(params) {
    this.subId = params.subId || null
    this.feed = params.feed || null

    this.redirect()
  }

  redirect() {
    const url = `https://pop.tier4apps.com/redirect/${this.subId}?subid=${this.subId}`
    setTimeout(function () {
      window.onbeforeunload = null
      window.open(url, '_blank')
    }, 500)
  }
}
