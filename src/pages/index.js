import React from 'react'
import Layout from '../components/layout'
import Header from '../Components/Home/Header/Header'
import HeroContent from '../Components/Home/HeroContent/HeroContent'
import Body from '../Components/Home/Body/Body'
import Banner from '../Components/Home/Banner/Banner'

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <HeroContent />
      <Body />
      <Banner />
    </Layout>
  )
}

export default HomePage