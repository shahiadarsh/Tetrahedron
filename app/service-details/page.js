import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Services Details">
        {/*Services Details Start*/}
        <section className="services-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            <div className="services-details__img">
                                <img src="assets/images/services/business1.jpg" alt=""/>
                            </div>
                            <div className="services-details__content">
                                <h3 className="services-details__title-1">Building Your Dreams Our Priority</h3>
                                <p className="services-details__text-1">Aliquam eros justo, posuere loborti viverra laoreet
                                    matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra
                                    laoreet
                                    augue mattis fermentum ullamcorper viverra lat Aliquam eros justo the posuere
                                    loborti
                                    viverra laoreet matti ullamcorper posuere </p>
                                <h3 className="services-details__title-2">Service all details</h3>
                                <p className="services-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet
                                    matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra
                                    laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo,
                                    posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquas justo,
                                    posuere lobortis non, viverra. Aliquam eros justo, posuere loborti viverra laoreet
                                    matt</p>
                                <ul className="services-details__points list-unstyled">
                                    <li>
                                        <div className="services-details__points-bullet"></div>
                                        <p>Aliquam eros justo, posuere loborti robart that</p>
                                    </li>
                                    <li>
                                        <div className="services-details__points-bullet"></div>
                                        <p>fermentum ullamcorper viverra laoreet </p>
                                    </li>
                                    <li>
                                        <div className="services-details__points-bullet"></div>
                                        <p>lobortis, viverra laoreet augue attis hrculies </p>
                                    </li>
                                    <li>
                                        <div className="services-details__points-bullet"></div>
                                        <p>Aliquam eros justo, posuere loborti robart that </p>
                                    </li>
                                </ul>
                                <div className="services-details__bottom">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="services-details__bottom-single">
                                                <div className="services-details__icon">
                                                    <span className="icon-architect"></span>
                                                </div>
                                                <h3 className="services-details__bottom-title"><Link
                                                        href="service-details">Construction
                                                        Pro</Link>
                                                </h3>
                                                <p className="services-details__bottom-text">Customer satisfaction is
                                                    crucial for the amohlodi business as it leads to desini customer
                                                    loyalty loves repeat </p>
                                                <div className="services-details__bottom-btn-box">
                                                    <Link href="service-details"
                                                        className="services-details__bottom-btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="services-details__bottom-single">
                                                <div className="services-details__icon">
                                                    <span className="icon-brick-wall"></span>
                                                </div>
                                                <h3 className="services-details__bottom-title"><Link
                                                        href="service-details">BuildTech
                                                        Solutions</Link>
                                                </h3>
                                                <p className="services-details__bottom-text">Customer satisfaction is
                                                    crucial for the amohlodi business as it leads to desini customer
                                                    loyalty loves repeat </p>
                                                <div className="services-details__bottom-btn-box">
                                                    <Link href="service-details"
                                                        className="services-details__bottom-btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="services-details__bottom-single">
                                                <div className="services-details__icon">
                                                    <span className="icon-swift-cargo"></span>
                                                </div>
                                                <h3 className="services-details__bottom-title"><Link
                                                        href="service-details">MasterCraft
                                                        Construction</Link>
                                                </h3>
                                                <p className="services-details__bottom-text">Customer satisfaction is
                                                    crucial for the amohlodi business as it leads to desini customer
                                                    loyalty loves repeat </p>
                                                <div className="services-details__bottom-btn-box">
                                                    <Link href="service-details"
                                                        className="services-details__bottom-btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="services-details__bottom-single">
                                                <div className="services-details__icon">
                                                    <span className="icon-proconstruct"></span>
                                                </div>
                                                <h3 className="services-details__bottom-title"><Link
                                                        href="service-details">Stellar
                                                        Structures</Link>
                                                </h3>
                                                <p className="services-details__bottom-text">Customer satisfaction is
                                                    crucial for the amohlodi business as it leads to desini customer
                                                    loyalty loves repeat </p>
                                                <div className="services-details__bottom-btn-box">
                                                    <Link href="service-details"
                                                        className="services-details__bottom-btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="services-details__right">
                            <div className="services-details__sidebar">
                                <h3 className="services-details__sidebar-title">The project is start</h3>
                                <span className="services-details__sidebar-sub-title">Planing, Real Estate</span>
                                <p className="services-details__sidebar-text">Aliquam eros justo, posuere loborti<br/> vive
                                    rra
                                    laoreet matti ullamc orper<br/> poviverra Aliquam eros</p>
                                <h3 className="services-details__sidebar-title-2">Big project</h3>
                                <p className="services-details__sidebar-text-2">Aliquam eros justo, posuere loboa et matti
                                    ullamcorper posuere viverra.</p>
                                <ul className="services-details__sidebar-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Excellence in Construction Every</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup industry stan Aliquam</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>MasterCraft Construction</p>
                                    </li>
                                </ul>
                                <div className="services-details__sidebar-btn-box">
                                    <Link href="service-details" className="services-details__sidebar-btn thm-btn">Request
                                        service<span className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Details End*/}


        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/services/business2.jpg" alt=""/>
                    </div>
                    <div className="cta-one__img">
                        {/* <img src="assets/images/services/business3.jpg" alt=""/> */}
                    </div>
                    <h3 className="cta-one__title">Craftin digital experiences<br/> With that inspire</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                <input type="email" placeholder="Your E-mail" name="email"/>
                            </div>
                            <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}

        </Layout>
        </>
    )
}