const Header = {
  view() {
    return m("nav.white", 
      m("div.nav-wrapper.container",
        [
          m("a.brand-logo.valign-wrapper", {"href":"#"}, 
            [
              m("i.fas.fa-camera-retro"), 
              " InstaFeed"
            ]
          ),
          m("ul.right.hide-on-med-and-down#nav-mobile", 
            [
              m("li", 
                m("a", {"href":"#"}, 
                  "Link 1"
                )
              ),
              m("li", 
                m("a", {"href":"#"}, 
                  "Link 2"
                )
              ),
              m("li", 
                m("a", {"href":"#"}, 
                  "Link 3"
                )
              )
            ]
          )
        ]
      )
    )
  }
}