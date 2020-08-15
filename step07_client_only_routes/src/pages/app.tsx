import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import ClientPage1 from "../components/Client1"
import Default from "../components/DefaultClient"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <ClientPage1 path="/page1" />
        <Default path="/" />
      </Router>
    </Layout>
  )
}

export default App