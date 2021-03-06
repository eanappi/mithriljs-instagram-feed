const BlockInstagramFeed = {
  posts: null,
  oninit(vnode) {
    m.request({
      method: "GET",
      url: `https://www.instagram.com/${vnode.attrs.userId}/`,
      deserialize: function(value) {
        let htmlString = value.split("_sharedData = ")[1]
        					  .split(";</script>")[0]
        let htmlJson = JSON.parse(htmlString)
        return htmlJson.entry_data.ProfilePage[0].graphql.user
          			   .edge_owner_to_timeline_media.edges
      }
    })
    .then(function(result) {
      BlockInstagramFeed.posts = result
    })
  },
  view(vnode) {
    return m("div.row", BlockInstagramFeed.posts ? [
      BlockInstagramFeed.posts.map((post) => {
        return m("div.col.s6.m4.l4", 
          m("div.card.small",
            [
              m("div.card-image",
                [
                  m(`img[src='${post.node.display_url}']`),
                  m("span.card-title", 
                    ""
                  )
                ]
              ),
              m("div.card-content", 
                m("p.truncate", 
                  `${post.node.edge_media_to_caption.edges[0].node.text}`
                )
              )
            ]
          )
        )
      })
    ] : m(Loading)
    )
  }
}