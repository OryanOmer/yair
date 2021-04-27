import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <div>
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5Y2MYNXTZ"/>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());

          gtag("config", "G-E5Y2MYNXTZ");
          `
        }
      </script>
    </Helmet>
    <Layout>
      <Header></Header>
      <Work></Work>
      <Footer></Footer>
    </Layout>
  </div>
)

export default IndexPage
