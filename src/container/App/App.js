import { Route, Routes } from "react-router-dom"
import Main from "../Main/Main"
import "./App.scss"
import ServicePage from "../../pages/ServicePage/ServicePage"
import ProductsPage from "../../pages/ProductsPage/ProductsPage"
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage"
import ContactUsPage from "../../pages/ContactUsPage/ContactUsPage"
import LayoutComponent from "../../components/LayoutComponent/LayoutComponent"
import { useRef } from "react"
import SingleArticlePage from "../../pages/SingleArticlePage/SingleArticlePage"
import { Helmet } from "react-helmet-async"
import CokingCoalPage from "../../pages/SingleProductPage/CokingCoalPage/CokingCoalPage"
import ThermalCoalPage from "../../pages/SingleProductPage/ThermalCoalPage/ThermalCoalPage"
import AnthracitePage from "../../pages/SingleProductPage/AnthracitePage/AnthracitePage"
import PciCoalPage from "../../pages/SingleProductPage/PciCoalPage/PciCoalPage"
import OilAndGasPage from "../../pages/SingleProductPage/OilAndGasPage/OilAndGasPage"
import MiningEquipment from "../../pages/SingleProductPage/MiningEquipmentPage/MiningEquipmentPage"
import FertilizersPage from "../../pages/SingleProductPage/FertilizersPage/FertilizersPage"
import CoalSuppliesPage from "pages/SingleServicePage/CoalSuppliesPage/CoalSuppliesPage"
import FertilizerSuppliesPage from "pages/SingleServicePage/FertilizerSuppliesPage/FertilizerSuppliesPage"
import LogisticSolutionsPage from "pages/SingleServicePage/LogisticSolutionsPage/LogisticSolutionsPage"
import CustomsClearancePage from "pages/SingleServicePage/CustomsClearancePage/CustomsClearancePage"
import OceanFreightPage from "pages/SingleServicePage/OceanFreightPage/OceanFreightPage"
import ConsultingPage from "pages/SingleServicePage/ConsultingPage/ConsultingPage"

function App() {
    const submitRef = useRef(null)
    const messageRef = useRef(null)

    return (
        <div className="app">
            <Helmet>
                <title>Ftorex</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
                <meta name="keywords" content="business, coal, coal mining" />
            </Helmet>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LayoutComponent
                            submitRef={submitRef}
                            messageRef={messageRef}
                        />
                    }
                >
                    <Route index element={<Main submitRef={submitRef} />} />
                    <Route
                        path="services"
                        element={<ServicePage messageRef={messageRef} />}
                    />
                    <Route
                        path="services/coal_supplies"
                        element={<CoalSuppliesPage />}
                    />
                    <Route
                        path="services/fertilizer_supplies"
                        element={<FertilizerSuppliesPage />}
                    />
                    <Route
                        path="services/logistic_solutions"
                        element={<LogisticSolutionsPage />}
                    />
                    <Route
                        path="services/customs_clearance"
                        element={<CustomsClearancePage />}
                    />
                    <Route
                        path="services/ocean_freight"
                        element={<OceanFreightPage />}
                    />
                    <Route
                        path="services/consulting"
                        element={<ConsultingPage />}
                    />
                    <Route path="products" element={<ProductsPage />} />
                    <Route
                        path="products/coking_coal"
                        element={<CokingCoalPage />}
                    />
                    <Route
                        path="products/thermal_coal"
                        element={<ThermalCoalPage />}
                    />
                    <Route
                        path="products/anthracite"
                        element={<AnthracitePage />}
                    />
                    <Route path="products/pci_coal" element={<PciCoalPage />} />
                    <Route
                        path="products/oil_and_gas_equipment"
                        element={<OilAndGasPage />}
                    />
                    <Route
                        path="products/mining_equipment"
                        element={<MiningEquipment />}
                    />
                    <Route
                        path="products/fertilizers"
                        element={<FertilizersPage />}
                    />
                    <Route
                        path="articles"
                        element={<ArticlesPage messageRef={messageRef} />}
                    />
                    <Route
                        path="contacts"
                        element={<ContactUsPage messageRef={messageRef} />}
                    />
                    <Route
                        path="articles/:articleId"
                        element={<SingleArticlePage />}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default App
