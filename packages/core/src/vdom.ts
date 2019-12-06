
export { Component, render, h, createRef, VNode, Fragment, ComponentChildren, createContext, Ref, options as preactOptions } from 'preact'
import { Component, h, options, render } from 'preact'


export function flushToDom() {
  let oldDebounceRendering = options.debounceRendering
  options.debounceRendering = execCallbackSync
  render(h(FakeComponent, {}), document.createElement('div'))
  options.debounceRendering = oldDebounceRendering
}

class FakeComponent extends Component {
  render() { return h('div', {}) }
  componentDidMount() { this.setState({}) }
}

function execCallbackSync(callback) {
  callback()
}
