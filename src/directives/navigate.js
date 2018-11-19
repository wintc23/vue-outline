import uuidv4 from 'uuid/v4'

let ATTR_NAME = 'navigation_anchor_by_lushg_QAQ_'

function createLinkElement (dom) {
  let id = uuidv4()
  let element = document.createElement('a')
  element.setAttribute('id', id)
  element.setAttribute(ATTR_NAME, true)
  dom.parentNode.insertBefore(element, dom)
  return id
}

function generateNavTree (dom, selectors, exceptSelector, list) {
  clearLinkElement(dom)
  let selector = selectors.join(',')
  let domList = dom.querySelectorAll(selector)
  let expectList = []
  if (exceptSelector) {
    expectList = dom.querySelectorAll(exceptSelector)
    expectList = Array.from(expectList)
  }
  for (let element of domList) {
    if (expectList.includes(element)) continue
    let pushList = list
    for (let idx in selectors) {
      let elementList = dom.querySelectorAll(selectors[idx])
      elementList = Array.from(elementList)
      if (elementList.includes(element)) {
        pushList.push({
          title: element.innerText,
          children: [],
          id: createLinkElement(element)
        })
      } else {
        if (!pushList.length) break
        pushList = pushList[pushList.length - 1].children
      }
    }
  }
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
    console.log('bind')
    el.__navigationGenerateFunction = () => {
      if (el.__generating) return
      let selectors = binding.value.selectors || ['h1', 'h2']
      let exceptSelector = binding.value.exceptSelector
      el.__generating = true
      let list = []
      generateNavTree(el, selectors, exceptSelector, list)
      binding.value.callback(list)
      vNode.context.$nextTick(() => {
        delete el.__generating
      })
    }
  },
  inserted (el, binding, vNode) {
    el.__navigationGenerateFunction && el.__navigationGenerateFunction()
  },
  componentUpdated (el, binding, vNode) {
    console.log('updated')
    el.__navigationGenerateFunction && el.__navigationGenerateFunction()
  },
  unbind (el, binding, vNode) {
    clearLinkElement()
    if (el.__navigationGenerateFunction) {
      delete el.__navigationGenerateFunction
    }
  }
}
