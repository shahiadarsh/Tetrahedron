
import Layout from "@/components/layout/Layout"
import Banner from "@/components/home/Banner"
import Services from "@/components/home/Services"
import About from "@/components/home/About"
import Slidingtext from "@/components/home/Slidingtext"
import Whychoose from "@/components/home/Whychoose"
import Joinus from "@/components/home/Joinus"
import Services2 from "@/components/home/Services2"
import Project from "@/components/home/Project"
import Pricing from "@/components/home/Pricing"
import Team from "@/components/home/Team"
import Success from "@/components/home/Success"
import Faq from "@/components/home/Faq"
import Counter from "@/components/home/Counter"
import Testimonial from "@/components/home/Testimonial"
import Brand from "@/components/home/Brand"
import Blog from "@/components/home/Blog"
import Business from "@/components/home/Business"
import Awards  from "@/components/home/Awards"
import Industry from "@/components/home/Industry"
import TrustedBrands from "@/components/home/TrustedBrands"


export default function Home() {

    return (
        <>
            <Layout >
                <Banner />
                <About />
                <Business />
                <Services />
                {/* <Industry /> */}
                {/* <Slidingtext /> */}
                {/* <TrustedBrands /> */}
                <Awards />
                {/* <Whychoose />
                <Joinus />
                <Services2 />
                <Project /> */}
                {/* <Pricing />
                <Team />
                <Success />
                <Faq />
                <Counter /> */}
                <Testimonial />
                {/* <Brand /> */}
                {/* <Blog /> */}
 
            </Layout>
        </>
    )
}