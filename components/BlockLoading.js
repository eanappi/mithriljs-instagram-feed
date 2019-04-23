var Loading = {
  view() {
    return m(".col.s12.center",
      m("div", {"class":"preloader-wrapper big active"}, 
        m("div", {"class":"spinner-layer spinner-blue-only"},
          [
            m("div", {"class":"circle-clipper left"}, 
              m("div", {"class":"circle"})
            ),
            m("div", {"class":"gap-patch"}, 
              m("div", {"class":"circle"})
            ),
            m("div", {"class":"circle-clipper right"}, 
              m("div", {"class":"circle"})
            )
          ]
        )
      )
    )
  }
}