import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PageLayout = ({ data }) => {
  const page = data.wordpressPage
  return (
    <div>
      <Header />
      <main>
      <img className="lazyload" data-src={ page.acf.featured_image.source_url } alt="featured" title="featured" />
        <div className="container innerpage">
          <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      content
      title
      excerpt
      acf {
        featured_image {
          source_url
        }
      }
    }
  }
`
