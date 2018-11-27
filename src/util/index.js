export default {
  initIconFont () {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'hflyicon',
      'src': "url('//at.alicdn.com/t/font_723398_hqtr397jhd4.ttf')"
    })
  }
}
