const BlockInstagramFeed = {
  posts: {},
  oninit() {
    m.request({
      method: "GET",
      url: "https://www.instagram.com/roxanakovi/",
      deserialize: function(value) {
        let htmlString = value.split("_sharedData = ")[1]
        					  .split(";</script>")[0]
        let htmlJson = JSON.parse(htmlString)
        return htmlJson.entry_data.ProfilePage[0].graphql.user
          			   .edge_owner_to_timeline_media.edges
      }
    })
    .then(function(result) {
      this.posts = result
      // m.render(document.body, 
      //   result.map((post) => {
      // 	  return m("div", [
      //       m("img", {src: post.node.display_url}),
      //       m("p", post.node.edge_media_to_caption.edges[0].node.text)
      //     ])  
      // 	})
      // )
    })
  },
  view() {
    
  }
}