export default class AdopPop {
  constructor(params) {
    this.zone = params.zone || null

    this.redirect()
  }

  redirect() {
    const url = `https://pop.tier4apps.com/redirect-zone/${this.zone}`
    setTimeout(function () {
      window.onbeforeunload = null
      window.open(url, '_blank')
    }, 500)
  }
}
