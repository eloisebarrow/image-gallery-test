import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// images

// const [ img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13 ] = require('images');

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              aspectRatio
              base64
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `)

  return <Img fluid={data.allImageSharp.edges[2].node.fluid} />
}

export default Image
