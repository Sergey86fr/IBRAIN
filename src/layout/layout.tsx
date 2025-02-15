import Banner from "../components/banner/banner"
import Content from "../components/content/content"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"


function Main() {
   return (
    <div className="container">
     <Header/>
     <Banner/>
     <Content/>
     <Footer/>
    </div>
   )
}

export default Main