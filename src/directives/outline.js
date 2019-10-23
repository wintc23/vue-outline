import uuidv4 from 'uuid/v4'

let ATTR_NAME = 'navigation_anchor_by_lushg_QAQ_'

function createLinkElement (dom) {
  let id = `id${uuidv4().replace(/-/g, '')}`
  let element = document.createElement('a')
  element.setAttribute('id', id)
  element.setAttribute(ATTR_NAME, true)
  dom.parentNode.insertBefore(element, dom)
  return id
}

function generateNavTree (dom, selectors, exceptSelector) {
  clearLinkElement(dom)
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
  dom.__mutationObverser && dom.__mutationObverser.disconnect()
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
      id: createLinkElement(element)
    }
    pushList && pushList.push(data)
    delete element.__nav_level
  }
  dom.__mutationObverser && dom.__mutationObverser.observe(dom, { subtree: true, childList: true })
  return list
}

function clearLinkElement (dom) {
  dom = dom || document
  let domList = dom.querySelectorAll(`a[${ATTR_NAME}]`)
  for (let idx = domList.length - 1; idx > -1; idx--) {
    let element = domList[idx]
    element.parentNode.removeChild(element)
  }
}

export default {
  bind (el, binding, vNode) {
    el.__navigationGenerateFunction = () => {
      if (el.__generating) return
      let selectors = binding.value.selectors || ['h1', 'h2']
      let exceptSelector = binding.value.exceptSelector
      vNode.context.$nextTick(() => {
        if (el.__generating) return
        el.__generating = true
        let list = generateNavTree(el, selectors, exceptSelector)
        binding.value.callback(list)
        vNode.context.$nextTick(() => {
          delete el.__generating
        })
      })
    }
    let MutationObserver = window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
    el.__mutationObverser = new MutationObserver(() => {
      el.__navigationGenerateFunction && el.__navigationGenerateFunction()
    })
    el.__mutationObverser.observe(el, { subtree: true, childList: true })
    el.__navigationGenerateFunction && el.__navigationGenerateFunction()
  },
  unbind (el, binding, vNode) {
    clearLinkElement()
    if (el.__navigationGenerateFunction) {
      delete el.__navigationGenerateFunction
    }
    if (el.__mutationObverser) {
      el.__mutationObverser.takeRecords()
      el.__mutationObverser.disconnect()
    }
  }
}
