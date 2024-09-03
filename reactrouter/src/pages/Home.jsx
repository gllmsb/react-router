import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts"
import { Footer } from "../components/Footer/Footer"
import { Introduction } from "../components/Introduction/Introduction"
import { IntroMsg } from "../components/IntroMsg/IntroMsg"

export const Home = () => {

    return(
    <>
        <Introduction/>
        <IntroMsg/>
        <FeaturedProducts/>
        <Footer/>
    </>  
    )
}