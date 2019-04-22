const BlockDescription = {
  view(vnode) {
    return m(".block-description-header.grey.lighten-3.center-align.valign-wrapper", 
      m(".row", [
        m(".col.s12", 
          m("h1", vnode.attrs.title)
        ),
        m(".col.s12", 
          m("h5.grey-text.text-telighten-2", vnode.attrs.subtitle)
        )
      ])
    )
  }
}