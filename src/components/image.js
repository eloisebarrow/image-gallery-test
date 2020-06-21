import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div onClick={() => setCurrentImgIndex(currentImgIndex !== data.allImageSharp.edges.length - 1 ? currentImgIndex + 1 : 0)}>
      <Img fluid={data.allImageSharp.edges[currentImgIndex].node.fluid} />
    </div>
  )
}

export default Image
