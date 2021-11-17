import React from 'react'
import Layout from '../components/layout'
import Header from '../Components/Home/Header/Header'
import HeroContent from '../Components/Home/HeroContent/HeroContent'
import Body from '../Components/Home/Body/Body'

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <HeroContent />
      <Body />
    </Layout>
  )
}

export default HomePage