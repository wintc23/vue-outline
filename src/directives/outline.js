
const OPTIONS =  {
  subtree: true,
  childList: true,
  characterData: true
}

function generateNavTree (dom, selectors, exceptSelector) {
  let list = []
  if (exceptSelector) {
    let exceptList = dom.querySelectorAll(exceptSelector)
    exceptList.forEach(element => {
      element.__nav_except = true
    })
  }
  for (let idx in selectors) {
    let elementList = dom.querySelectorAll(selectors[idx])
    elementList.forEach(element => {
      if (element.__nav_except || element.offsetParent === null) return
      element.__nav_level = idx
    })
  }
  let selector = selectors.join(',')
  let domList = dom.querySelectorAll(selector)
  for (let element of domList) {
    if (!element.__nav_level) {
      delete element.__nav_except
      continue
    }
    let pushList = list
    while (element.__nav_level > 0) {
      pushList = pushList.length ? pushList[pushList.length - 1].children : null
      if (!pushList) break
      element.__nav_level--
    }
    let data = {
      title: element.textContent,
      children: [],
      el: element
    }
    pushList && pushList.push(data)
    delete element.__nav_level
  }
  return list
}

export default {
  bind (el, binding, vNode) {
    el.__generateNav = () => {
      let selectors = binding.value.selectors || ['h1', 'h2']
      let exceptSelector = binding.value.exceptSelector
      let idx = selectors.findIndex(selector => {
        let list = el.querySelectorAll(selector)
        return !!list.length
      })
      selectors = idx < 0 ? selectors : selectors.slice(idx)
      let list = generateNavTree(el, selectors, exceptSelector)
      binding.value.callback(list)
    }
    let MutationObserver = window.MutationObserver
    || window.WebKitMutationObserver
    || window.MozMutationObserver
    el.__observer = new MutationObserver(() => {
      el.__generateNav && el.__generateNav()
    })
    el.__observer.observe(el, OPTIONS)
    el.__generateNav && el.__generateNav()
  },
  unbind (el, binding, vNode) {
    if (el.__generateNav) {
      delete el.__generateNav
    }
    if (el.__observer) {
      el.__observer.takeRecords()
      el.__observer.disconnect()
      delete el.__observer
    }
  }
}
