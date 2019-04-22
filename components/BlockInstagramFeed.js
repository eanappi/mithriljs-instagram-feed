const BlockInstagramFeed = {
  posts: [],
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
    return m("div.row", BlockInstagramFeed.posts.map((post) => {
        return m("div.col.s6.m4.l4", 
          m("div.card.small",
            [
              m("div.card-image",
                [
                  m(`img[src='${post.node.display_url}']`),
                  m("span.card-title", 
                    "Card Title"
                  )
                ]
              ),
              m("div.card-content", 
                m("p", 
                  `${post.node.edge_media_to_caption.edges[0].node.text}`
                )
              )
            ]
          )
        )
    }))
  }
}