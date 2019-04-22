const Layout = {
  view(vnode) {
    return m('main', [
      m(Header),
      vnode.children,
      m(Footer)
    ])
  }
}