import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

const Index = data => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Banner bannerData={data.data.allContentfulHeaderBanner.edges} />
      </Container>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query HomeQuery {
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          buttonText
          buttonLink
        }
      }
    }
  }
`
