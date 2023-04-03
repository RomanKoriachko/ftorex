import React from 'react'
import './Main.scss'
import IndicatorsSection from '../../components/IndicatorsSection/IndicatorsSection'
import IntroduceSection from '../../components/IntroduceSection/IntroduceSection'
import ProductsSection from '../../components/ProductsSection/ProductsSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import MapSection from '../../components/MapSection/MapSection'
import ArticlesSection from '../../components/ArticlesSection/ArticlesSection'
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection'

const Main = () => {
    return (
        <main className="main">
            <IntroduceSection />
            <ProductsSection />
            <IndicatorsSection />
            <ServicesSection />
            <AboutUsSection />
            <MapSection />
            <ArticlesSection />
            <SubscribeSection />
        </main>
    )
}

export default Main
