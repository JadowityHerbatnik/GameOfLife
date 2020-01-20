import React from "react"
import SEO from "../components/seo"
// import Canvas from "../components/Canvas.js"
import Layout from "../components/layout.js"
import Game from "../components/Game.js"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Game />
  </Layout>
)

export default IndexPage
