'use client'

export default function About() {
    return (
        <>

            {/*About Two Start */}
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6" style={{
                            width: "500px", borderRadius: "10px",
                            boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)"
                        }}>
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">ABOUT US</span>
                                    </div>
                                    <h1 className="section-title__title"
                                        style={{ display: "flex", flexDirection: "row", textAlign: "left", fontSize: "clamp(32px, 4vw, 36px)", lineHeight: "1.2" }}>
                                        Tetrahedron Manufacturing Services Pvt Ltd
                                        {/* <span style={{ display: "block" }}>Services Pvt Ltd</span> */}
                                    </h1>

                                </div><p
                                    className="about-two__text"
                                    style={{
                                        textAlign: "justify",
                                        marginBottom: "16px",
                                        fontSize: "20px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        fontWeight: "400"
                                    }}
                                >
                                    Tetrahedron provides manufacturing optimization consulting services. It is one of India’s fastest-growing end-to-end solution providers to 280+ manufacturing companies across 20 different industry segments. TMS supports its customers in improving profitability and sustainability through 3 distinct service verticals.
                                </p>

                                <p
                                    className="about-two__text"
                                    style={{
                                        textAlign: "justify",
                                        fontSize: "20px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        fontWeight: "400"
                                    }}
                                >
                                    Manufacturing Management Consulting, Automation & Industry 4.0, and Training & Skill Development — by designing, developing, and implementing focused solutions.
                                </p>

                                {/* <ul className="list-unstyled about-two__points">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>ConstructoPro Building Your Dreams</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Construction with Precision</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Constructive Innovations</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check-2"></span>
                                    </div>
                                    <div className="text">
                                        <p>Craftsmen Construction</p>
                                    </div>
                                </li>
                            </ul> */}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div
                                    className="about-two__img wow slideInRight"
                                    data-wow-delay="100ms"
                                    data-wow-duration="2500ms"
                                    style={{
                                        borderRadius: "10px",
                                        boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)"
                                    }}
                                >
                                    <img
                                        src="assets/images/resources/about-two-img3.jpg"
                                        alt=""
                                        style={{
                                            borderRadius: "10px",
                                            height: "700px",
                                            width: "600px",
                                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End */}
        </>
    )
}
