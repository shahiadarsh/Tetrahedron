import Link from "next/link";
import { useState } from 'react';
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()
  // const [hover, setHover] = useState(false);

  return (
    <>
      <ul className="main-menu__list" role="menubar">
        <li>
          <Link href="/">Home </Link>
        </li>

        <li className="dropdown">
          <Link href="/about" aria-haspopup="true">
            About
          </Link>
          <ul role="menu" style={{ left: '-70%', top: '100%', width: '70px' }}>
            <li>
              <Link href="/about-us">Who We Are</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                Policies
              </Link>
              <ul role="menu">
                <li>
                  <Link href="/about-us/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about-us/terms-of-services">Terms of Services</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="#" aria-haspopup="true">
            Services
          </Link>
          <ul role="menu" style={{ left: '-50%', top: '100%', width: '70px' }}          >
            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                Consulting
              </Link>
              <ul role="menu">
                <li className="dropdown">
                  <Link href="#" aria-haspopup="true">
                    Manufacturing Excellence Services
                  </Link>
                  <ul role="menu"
                   style={{
                    // height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none', // For Internet Explorer and Edge
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}
                  >
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/manufacturing-operational-excellence-consulting" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Operational Excellence Consulting
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/tpm-consulting" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        TPM Consulting
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/tqm-consulting" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        TQM Consulting
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/lean-manufacturing-cost-reduction" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Lean Manufacturing Cost Reduction
                      </Link>
                    </li>
                    <li className="hover-style" >
                      {/* doing some changes */}
                      <Link href="/consulting/visual-management-consulting" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Visual Management Consulting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li >
                  <Link href="/consulting/plant-layout-design">
                    Plant Layout Design
                  </Link>
                </li>

                <li className="dropdown">
                  {/* doing some changes */}
                  <Link href="#" aria-haspopup="true">
                    Dojo Training Center
                  </Link>
                  <ul role="menu" style={{
                    // height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none', // For Internet Explorer and Edge
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      {/* doing some changes */}
                      <Link href="/consulting/dojo-simulation" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        DOJO Training Center | DOJO Center | DOJO Simulations
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      {/* doing some changes */}
                      <Link href="/consulting/dojo-2-0" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        DOJO 2.0
                      </Link>
                    </li>
                    <li className="hover-style">
                      {/* doing some changes */}
                      <Link href="/consulting/mini-dojo-training-center" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Mini DOJO Training Center Design And Setup
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  {/* doing some changes */}
                  <Link href="/consulting/safety-management-system">
                    Safety Management System
                  </Link>
                </li>

                <li className="dropdown">
                  <Link href="#" aria-haspopup="true">
                    ISO Implementation
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none', // For Internet Explorer and Edge
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      {/* doing some changes */}
                      <Link href="/consulting/iso-9001-2015" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        ISO 9001:2015 (Quality Management System)
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      {/* doing some changes */}
                      <Link href="/consulting/iso-45001-consultancy" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        ISO For Safety Management | ISO 45001 Consultancy | ISO
                        45001 Safety Management System
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/iso-implementation/iso-31000-2018" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        ISO 31000:2018 Enterprise Risk Management System
                        Implementation ERM
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/iso-implementation/iso-14001-2015" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        ISO 14001:2015 (Environmental Management System)
                      </Link>
                    </li>
                    <li className="hover-style" >
                      {/* doing some changes */}
                      <Link
                        href="/consulting/iso-50001-enms"
                        style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                      >
                        ISO 50001 EnMS (Energy Management System)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/consulting/energy-cost-reduction">
                    Energy Cost Reduction Services
                  </Link>
                </li>
              </ul>
            </li>



            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                Skill Training
              </Link>
              <ul role="menu">
                {/* This link likely needs its own page or component, not the dynamic [slug] page */}
                <li>
                  <Link href="/skill-training/corporate-training-course-in-india">
                    Corporate Training Course In India
                  </Link>
                </li>

                <li className="dropdown">
                  {/* This link likely needs its own page or component */}
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Technical Training Courses
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none', // For Internet Explorer and Edge
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-apqp" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Advanced Product Quality Planning Program-APQP
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-dfmea" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Design Failure Mode Effect Analysis – DFMEA
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-pfmea" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Process Failure Mode Effect Analysis – PFMEA
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-spc" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Statistical Process Control Training – SPC
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for MSA !! - Link will 404 unless data added */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-msa" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Measurement System Analysis (MSA)
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-gdt" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        GD&T Training | Geometric Dimensioning and Tolerancing
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-gdt-advanced" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Advanced GD&T Training Course | GD&T
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-inventory-management" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Inventory Management Courses
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-ppap" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Production Part Approval Process – PPAP
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-industry-4-0" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Industry 4.0 Courses | Training
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for Industry 5.0 !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-industry-5-0" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Industry 5.0
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for VR !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-vr" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Virtual Reality – VR
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for DOE !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-doe" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Design Of Experiment – DOE
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for EV !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-ev" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Electric Vehicle – EV
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for DFQ !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-dfq" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Design For Quality | DFQ Training Courses
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for OEE !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-oee" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Overall Equipment Effectiveness Training | OEE
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for TPM !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-tpm" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        TPM In Manufacturing Training Courses
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for UL 60335 !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-ul-60335" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        UL 60335-2-40/CSA Training Harmonized IEC Standard
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for UL 508A !! */}
                    <li className="hover-style">
                      <Link href="/skill-training/training-ul-508a" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Industrial Control Panel Standard UL 508A Training
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  {/* This link likely needs its own page or component */}
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Process Improvement Training Courses
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none',
                    paddingLeft: '10px',
                    paddingRight: '10px' // For Internet Explorer and Edge
                  }}>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-cost-reduction" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Cost Reduction Strategies | Training Courses
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-7-new-qc-tools" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Problem Solving with new 7 QC Tools Training in India
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-line-balancing" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Line Balancing in Manufacturing | Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-rca" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Root Cause Analysis Training | RCA Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-low-cost-automation" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Simple & Low-Cost Automation | Industrial Automation Course
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-5s" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        5s Safety Training in Workplace | Lean Training
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for Value Engineering !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-value-engineering" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Value Engineering & Value Analysis Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-performance-management" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Performance Management and Improvement Plan
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-tqm" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Total Quality Management (TQM) Training Course in India
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for Quality Control !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-quality-control" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Quality Control System
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-lean-cost-reduction" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Cost Reduction by Lean Manufacturing
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-5why-fishbone" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Why Why Analysis | Fish-bone | 5 Why Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style">
                      <Link href="/skill-training/training-kaizen" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Kaizen Training Program | Kaizen Certification
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  {/* This link likely needs its own page or component */}
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Strategic Management And Training Consultants
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none',
                    paddingLeft: '10px',
                    paddingRight: '10px' // For Internet Explorer and Edge
                  }}>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-esg" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Environmental, Social and Governance (ESG) Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-dwm" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Daily Work Management
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-design-thinking" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Design Thinking Course | Online Trainings
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-finance-non-finance" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitec)}ons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Finance For Non Finance Managers Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-triz" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true
                        // onMouseLeave={() => setHover(false)}
                        >
                        Theory Of Inventive Problem Solving (Triz)
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-bsc" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Balance Score Card
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-competency-mapping" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Competency Mapping
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-productivity-skill-mapping" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Productivity Focus Skill Mapping
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-wcm" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        World Class Manufacturing
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style">
                      <Link href="/skill-training/training-dwm-time-management" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        DWM and Time Management Techniques
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  {/* This link likely needs its own page or component */}
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Behavioural Training
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', // For Firefox
                    msOverflowStyle: 'none',
                    paddingLeft: '10px',
                    paddingRight: '10px' // For Internet Explorer and Edge
                  }}>
                    {/* !! NO DATA KEY FOUND for Presentation Skills !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px'}}>
                      <Link href="/skill-training/training-presentation-skills" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Presentation Skills Training Courses
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-art-of-delegation" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        The Art of Delegation Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-planning-prioritization" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Planning & Prioritization Skills Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-team-time-task-management" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Team, Time and Task Management Training & Seminars
                      </Link>
                    </li>
                    {/* !! NO DATA KEY FOUND for Non Verbal Communication !! */}
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-non-verbal-communication" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Non Verbal Communication Online Training
                      </Link>
                    </li>
                    {/* Corrected href */}
                    <li className="hover-style">
                      <Link href="/skill-training/training-team-dev-motivation" style={{ color: 'var(--elitecons-black)'
                          // color: hover ? 'var(--elitecons-white)' : 'var(--elitecons-black)',
                          // textDecoration: 'none'
                        }}
                        // onMouseEnter={() => setHover(true)}
                        // onMouseLeave={() => setHover(false)}
                        >
                        Team Development & Motivation Training Programmes
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>


            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                AMR/AGV
              </Link>
              <ul role="menu">
                <li className="hover-style">
                  <Link href="automated-guided-vehicle-manufacturers">
                    Autonomous Mobile Robot | AGV | AMR
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/career">Career</Link>
        </li>

        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>

        <li>
          <Link href="/blogs">Blogs</Link>
        </li>

        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <style jsx>{`
        .dropdown {
          position: relative;
        }
        .dropdown > ul {
          display: none;
          position: absolute;
          top: 0;
          left: 100%; /* Position to the right of the parent */
          background: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
          min-width: 250px; /* Ensure the box is wide enough */
          z-index: 10; /* Ensure it appears above other elements */
          list-style-type: none;
          text-align: left;
          border-radius:4px;
        }
        .dropdown:hover > ul {
          display: block;
        }
        .dropdown:hover > ul > li   {
          // background-color: var(--elitecons-base);
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--elitecons-base)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          // color: var(--elitecons-white);
        }
        .hover-style {
          color: var(--elitecons-white);
          background-color: transparent;
          transition: background-color 0.3s;
          min-width: 150;
          margin-bottom: 10px;
          font-size: 18px;
          margin-top:10px;
        }

        .hover-style:hover {
          background : var(--elitecons-base);
          // background-color: #333;
          color: var(--elitecons-white);
          font-color:white;
        }

      `}</style>
    </>
  );
}