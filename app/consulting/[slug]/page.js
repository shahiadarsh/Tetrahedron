// --- START OF FILE page.js ---

"use client";

import { consultingPages } from "@/lib/servicesData"; // Assuming servicesData.js is in lib
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import * as Icons from "lucide-react";

// Internal CSS styles (keep the styles object as it is)
const styles = {
  banner: {
    position: "relative",
    minHeight: "450px", // Use minHeight for flexibility
    height: "auto", // Allow height to adjust
    overflow: "hidden",
    // backgroundColor: "#002244", // Dark blue fallback
    display: 'flex', // Use flex for centering
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    padding: '60px 20px', // Add padding for smaller screens / less content
  },
  bannerImage: {
    position: 'absolute', // Position absolutely to be behind content
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.4", // Slightly adjust opacity maybe
    zIndex: 1, // Behind content
  },
  bannerContent: {
    position: "relative", // Relative to allow z-index stacking
    zIndex: 2, // Above image
    textAlign: "center",
    color: "white",
    width: "90%", // Adjust width
    maxWidth: "1100px", // Increase max width
    padding: "20px", // Consistent padding
    backgroundColor: 'rgba(0, 34, 68, 0.3)', // Optional: slight dark background for readability
    borderRadius: '8px', // Optional: rounded corners for content box
  },
  sectionTitle: {
    fontWeight: "700",
    marginBottom: "2.5rem",
    position: "relative",
    display: "inline-block",
    paddingBottom: "10px",
    color: "#002244", // Dark blue title color for sections
  },
  sectionTitleAfter: {
    content: "''",
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "3px",
    backgroundColor: "#ff5722", // Accent color
  },
  featureCard: {
    transition: "all 0.3s ease",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    height: "100%",
    padding: "1.5rem",
    border: "1px solid #e9ecef",
    display: 'flex', // Use flex for alignment within card
    flexDirection: 'column', // Stack content vertically
  },
  featureCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
   featureCardContent: { // New style for text content alignment
    paddingLeft: '40px', // Indent text relative to icon
    textAlign: 'left',
  },
  pillarsTab: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "0.25rem",
    padding: "1rem",
    height: "100%",
    textAlign: "left",
    fontWeight: "500",
    borderBottom: 'none', // Remove individual bottom borders initially
    borderBottomRightRadius: 0, // Ensure square corners for stacking
    borderBottomLeftRadius: 0,
  },
  pillarsTabActive: {
    backgroundColor: "#002244",
    color: "white",
    borderColor: "#002244",
     borderBottomRightRadius: 0, // Ensure square corners for stacking
     borderBottomLeftRadius: 0,
  },
   pillarsTabContainer: { // Style for the container holding the tabs
    borderBottom: '1px solid #dee2e6', // Add a bottom border to the whole container
  },
  pillarsContent: {
    backgroundColor: "#ffffff",
    border: "1px solid #dee2e6",
    borderTop: 'none', // Remove top border as it connects to tabs
    borderRadius: "0 0 0.25rem 0.25rem", // Round bottom corners only
    padding: "1.5rem",
    height: "100%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  ctaButton: {
    backgroundColor: "#ff5722",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "50px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    display: 'inline-block', // Ensure it behaves like a button
    textDecoration: 'none', // Remove underline if used as link
  },
  ctaButtonHover: {
    backgroundColor: "#e64a19",
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(230, 74, 25, 0.4)",
  },
  industryImageContainer: {
     overflow: 'hidden',
     borderRadius: '8px',
     position: 'relative', // For potential caption overlay later
     backgroundColor: '#eee', // Placeholder bg
     boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
     transition: 'all 0.3s ease',
     height: '180px', // Ensure container respects height
  },
  industryImage: {
    width: "100%",
    height: "100%", // Make image fill container height
    objectFit: "cover",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  industryImageHover: { // Apply hover to container for shadow
     transform: "scale(1.03)",
     boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
  certificationSection: {
    backgroundColor: "#eef4f8", // Light blue background
    padding: "3rem 1rem",
    borderRadius: "8px",
    marginBottom: "3rem",
  },
  caseStudySection: {
    backgroundColor: "#fff",
    padding: "3rem 1rem",
    borderRadius: "8px",
    marginBottom: "3rem",
    border: '1px solid #e9ecef',
    boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
  },
  stepItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "1.5rem", // Increased spacing
    fontSize: '1.05rem', // Slightly larger font
  },
  stepNumber: {
    backgroundColor: "#002244",
    color: "white",
    minWidth: "35px", // Slightly larger circle
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
    flexShrink: "0",
    fontWeight: "bold",
    fontSize: '1rem',
  },
  simpleContent: {
    padding: "50px", // Increased padding
    backgroundColor: "#f8f9fa",
    borderRadius: "12px", // More rounded
    marginBottom: "40px",
    border: "1px solid #e0e0e0", // Lighter border
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  faqContainer: { maxWidth: '800px', margin: 'auto', padding: '0 15px' },
  faqItem: { borderBottom: '1px solid #eee', marginBottom: '15px', paddingBottom: '15px' },
  faqQuestion: { fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#333' },
  faqAnswer: { marginTop: '12px', color: '#555', paddingLeft: '25px', lineHeight: '1.6' },
  faqToggle: { fontSize: '1.2em', marginRight: '10px', color: '#002244' },
  comparisonTable: {
    width: '100%',
    borderCollapse: 'separate', // Use separate for border-radius potentially
    borderSpacing: 0, // Remove spacing
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    borderRadius: '8px', // Rounded corners for table
    overflow: 'hidden', // Clip content to rounded corners
    border: '1px solid #dee2e6',
  },
  comparisonTableThTd: {
    borderBottom: '1px solid #dee2e6', // Horizontal lines only
    padding: '0.85rem 1rem', // Adjust padding
    textAlign: 'left',
    verticalAlign: 'top',
  },
   comparisonTableTh: {
    backgroundColor: '#e9ecef',
    fontWeight: '600',
    color: '#333', // Darker header text
    borderBottomWidth: '2px', // Thicker bottom border for header
  },
  comparisonTableTrOdd: {
    backgroundColor: '#f8f9fa',
  },
  comparisonTableTrLastTd: { // Remove bottom border for last row cells
      borderBottom: 'none',
  },
   comparisonTableTdFirst: { // Add left border for first cell (optional)
     borderLeft: 'none', // Or '1px solid #dee2e6' if needed
   },
   comparisonTableTdLast: { // Add right border for last cell (optional)
     borderRight: 'none', // Or '1px solid #dee2e6' if needed
   },
  infoCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    border: '1px solid #e9ecef',
    height: '100%',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
  },
  infoCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  infoCardImage: {
    maxWidth: '100%',
    height: '150px',
    width: 'auto', // Let width adjust based on height
    objectFit: 'contain', // Use contain or cover based on image type
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  infoCardTitle: {
    fontWeight: '600',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    color: '#002244',
    flexGrow: 1, // Allow title to take space if text is short
  },
  infoCardText: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: 1.5,
  },
  iconWrapper: { // Wrapper for icons in cards/features
      backgroundColor: 'rgba(0, 34, 68, 0.1)', // Light blue background for icon
      borderRadius: '50%',
      padding: '12px',
      display: 'inline-flex',
      marginBottom: '1rem',
      color: '#002244', // Icon color
  },
   // Styles for dynamically generated sections
  dynamicSection: {
    marginBottom: '4rem', // Consistent spacing between sections
    padding: '2.5rem 0', // Add vertical padding
  },
  dynamicSectionBgLight: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '3rem 1.5rem', // Adjust padding for background sections
    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
  },
  dynamicSectionBgAccent: { // Example for a different background
     backgroundColor: '#eef4f8', // Light blue
     borderRadius: '8px',
     padding: '3rem 1.5rem',
  },
  listGroupIcon: { // Style for icons in lists (e.g., case study challenges/results)
     marginRight: '0.75rem',
     marginTop: '0.2rem', // Align icon better with text line
     flexShrink: 0,
  },
  // Add styles for specific dynamic sections if needed
  toolsList: {
      listStyle: 'none',
      paddingLeft: 0,
      textAlign: 'center',
      maxWidth: '600px',
      margin: 'auto',
  },
  toolItem: {
      backgroundColor: '#fff',
      border: '1px solid #eee',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      marginBottom: '0.75rem',
      display: 'inline-block', // Make them flow inline if space allows
      marginRight: '0.5rem', // Space between items
      fontWeight: 500,
      color: '#333',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  comparisonPointsTable: { // For Dojo 1 vs 2 table
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
  },
  comparisonPointsTh: {
    border: '1px solid #dee2e6',
    padding: '0.75rem',
    textAlign: 'left',
    backgroundColor: '#e9ecef',
    fontWeight: '600',
    width: '25%', // Approx width for Feature column
  },
  comparisonPointsTd: {
    border: '1px solid #dee2e6',
    padding: '0.75rem',
    textAlign: 'left',
    verticalAlign: 'top',
    width: '37.5%', // Approx width for Dojo columns
  },
};

export default function ServicePage({ params }) {
  const data = consultingPages[params.slug];
  if (!data) return notFound();
  console.log(data.img,"this is new data");
  // Determine if this is a detailed page (has more sections) or a simple one
  // We can infer this by checking for existence of keys beyond title/content/img etc.
  // Or keep the explicit list if preferred. Let's try inferring.
  const simpleKeys = ['title', 'img', 'bannerTitle', 'bannerSubtitle', 'bannerDescription', 'content'];
  const dataKeys = Object.keys(data);
  const isDetailedPage = dataKeys.some(key => !simpleKeys.includes(key) && data[key] !== null && data[key] !== undefined);
  // Alternative: const detailedPages = ["tpm-consulting", "tqm-consulting", "manufacturing-operational-excellence-consulting", "visual-management-consulting", /* add ALL slugs meant to be detailed */];
  // const isDetailedPage = detailedPages.includes(params.slug);

  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openFAQs, setOpenFAQs] = useState({});

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Enhanced getIcon to handle styling within wrapper
  const getIcon = (iconName, size = 28) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? (
        <span style={styles.iconWrapper}>
            <IconComponent size={size} />
        </span>
     ) : null;
  };

  // Apply hover using state is generally safer in React than direct DOM manipulation via ref
  // We'll use onMouseEnter/onMouseLeave on the elements directly where needed.

  // Centralized Title Rendering
  const renderSectionTitle = (title) => (
    <h2 className="text-center" style={styles.sectionTitle}>
      {title}
      <span style={styles.sectionTitleAfter}></span>
    </h2>
  );

  // Helper to render paragraphs from text with newlines
  const renderParagraphs = (text, style = {}) => {
      if (!text) return null;
      return text.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-3" style={style}>
              {paragraph.trim()}
          </p>
      ));
  }

  // Helper to render a standard CTA button
  const renderCtaButton = (text, href = "#") => ( // Added href for potential linking
     <a // Use <a> tag if it's a link, button otherwise
      href={href}
      className="btn"
      style={styles.ctaButton}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.ctaButton, styles.ctaButtonHover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.ctaButton)}
    >
      {text || "Learn More"}
    </a>
  );


  return (
    <Layout>
      {/* Banner Section */}
      <div style={styles.banner}>
        {data.img && (
          <img
            src={data.img}
            style={styles.bannerImage}
            alt={data.title || "Service Banner"}
          />
        )}
        <div style={styles.bannerContent}>
          <h1 className="display-4 fw-bold mb-3" style={{color:'white'}}>{data.bannerTitle || data.title}</h1>
          {data.bannerSubtitle && <p className="lead mb-3 fs-5">{data.bannerSubtitle}</p>}
          {data.bannerDescription && <p className="mb-4 fs-5">{data.bannerDescription}</p>}

          {data.heroFeatures && Array.isArray(data.heroFeatures) && data.heroFeatures.length > 0 && (
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-4 fs-5">
              {data.heroFeatures.map((feature, idx) => (
                <li key={idx} className="d-flex align-items-center">
                    <Icons.CheckCircle size={20} className="me-2 text-success" />
                    <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Use the helper for the button */}
          {renderCtaButton("Start Your Journey")}

        </div>
      </div>

      {/* Main Content Area */}
      <div className="container py-5"> {/* Main container for content */}

        {/* Intro Text Section (Common for detailed pages) */}
        {isDetailedPage && data.introText && (
          <section style={styles.dynamicSection} className="text-center">
             {/* Optionally add a title like "Empowering Your Business" if needed */}
             {/* <h2 className="display-5 fw-semibold mb-4">Empowering Your Business</h2> */}
            <div className="fs-5 mx-auto" style={{ maxWidth: "900px" }}>
                {renderParagraphs(data.introText)}
            </div>
          </section>
        )}

        {/* Conditional Rendering based on Page Type */}
        {isDetailedPage ? (
          // ===========================================
          // DETAILED PAGE CONTENT (Dynamically Rendered)
          // ===========================================
          <>

            {/* Why Choose Us Section */}
            {data.whyChoose && (
              <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgLight}} className="text-center">
                {renderSectionTitle(data.whyChoose.title || "Why Choose Us?")}
                 <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "900px" }}>
                    {renderParagraphs(data.whyChoose.content)}
                 </div>
                {data.whyChoose.subTitle && <h4 className="fw-semibold mt-4 mb-2">{data.whyChoose.subTitle}</h4>}
                 <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "900px" }}>
                    {renderParagraphs(data.whyChoose.subText)}
                 </div>
                 {/* Use the helper for the button, customize text if needed */}
                 {renderCtaButton(data.whyChoose.buttonText || "Book a Consultation")}
              </section>
            )}

             {/* Improvement Areas Section (Generic Info Cards) */}
             {data.improvementAreas && Array.isArray(data.improvementAreas) && (
              <section style={styles.dynamicSection} className="text-center">
                {renderSectionTitle(data.improvementAreas.title || "Key Improvement Areas")}
                <div className="row g-4 justify-content-center">
                  {data.improvementAreas.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                      <div
                        style={{ ...styles.infoCard, ...(hoveredCard === `improve-${index}` ? styles.infoCardHover : {}) }}
                        onMouseEnter={() => setHoveredCard(`improve-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Render icon if provided */}
                        {item.icon && getIcon(item.icon)}
                        {/* Render image if provided */}
                        {item.img && <img src={item.img} alt={item.title || `Improvement Area ${index+1}`} style={styles.infoCardImage} /> }

                        <h5 style={styles.infoCardTitle}>{typeof item === 'string' ? item : item.title}</h5>
                         {/* Render description if provided */}
                        {item.desc && <p style={styles.infoCardText}>{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {/* About Section with Image */}
            {data.aboutSection && (
              <section style={styles.dynamicSection}>
                 {data.aboutSection.title && renderSectionTitle(data.aboutSection.title)}
                <div className="row g-4 align-items-center">
                  {data.aboutSection.image && (
                    <div className="col-md-6">
                        <img
                        src={data.aboutSection.image}
                        alt={data.aboutSection.title || "About Section Image"}
                        className="img-fluid rounded shadow"
                        />
                    </div>
                  )}
                  <div className={data.aboutSection.image ? "col-md-6" : "col-12"}>
                    <div className="fs-5">
                        {renderParagraphs(data.aboutSection.text)}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Objectives Section (Generic Info Cards with Images) */}
            {data.objectives && data.objectives.items && Array.isArray(data.objectives.items) && (
              <section style={styles.dynamicSection} className="text-center">
                {renderSectionTitle(data.objectives.title || "Our Objectives")}
                <div className="row g-4 justify-content-center">
                  {data.objectives.items.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                      <div
                        style={{ ...styles.infoCard, ...(hoveredCard === `obj-${index}` ? styles.infoCardHover : {}) }}
                        onMouseEnter={() => setHoveredCard(`obj-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {item.img && (
                            <img
                            src={item.img}
                            alt={item.title}
                            style={styles.infoCardImage}
                            />
                        )}
                         {item.icon && getIcon(item.icon)}
                        <h5 style={styles.infoCardTitle}>{item.title}</h5>
                        {item.desc && <p style={styles.infoCardText}>{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges Section (Circular Images or Info Cards) */}
            {data.challenges && data.challenges.items && Array.isArray(data.challenges.items) && (
               <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgLight}} className="text-center">
                {renderSectionTitle(data.challenges.title || "Common Challenges")}
                {data.challenges.introText && <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "800px" }}>{renderParagraphs(data.challenges.introText)}</div>}

                {/* Choose layout: Row of images or grid of cards based on data structure? Assuming images for now */}
                <div className="row g-4 justify-content-center mb-4">
                  {data.challenges.items.map((item, index) => (
                    <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                       {item.img && (
                         <img
                            src={item.img}
                            alt={item.title}
                            className="img-fluid rounded-circle shadow-sm mb-2 mx-auto d-block"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                       )}
                        {item.icon && getIcon(item.icon)}
                      <h6 className="fw-semibold mt-2">{item.title}</h6>
                       {item.desc && <p style={{fontSize: '0.9rem'}}>{item.desc}</p>}
                    </div>
                  ))}
                </div>

                {data.challenges.outroText && <div className="fs-5 text-center mx-auto mt-4" style={{ maxWidth: "800px" }}>{renderParagraphs(data.challenges.outroText)}</div>}
              </section>
            )}

             {/* Comparison Section (Table + Text) */}
             {data.comparison && (
                <section style={styles.dynamicSection}>
                    {renderSectionTitle(data.comparison.title || "Comparison")}
                    <div className="row g-4 align-items-start">
                        {data.comparison.table && Array.isArray(data.comparison.table) && (
                            <div className="col-md-7">
                                <div className="table-responsive">
                                    <table style={styles.comparisonTable}>
                                    <thead>
                                        <tr>
                                        {Object.keys(data.comparison.table[0]).map(header => (
                                            <th key={header} style={{ ...styles.comparisonTableThTd, ...styles.comparisonTableTh }}>{header}</th>
                                        ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.comparison.table.map((row, rowIndex) => (
                                        <tr key={rowIndex} style={rowIndex % 2 !== 0 ? styles.comparisonTableTrOdd : {}}>
                                            {Object.values(row).map((cell, cellIndex) => (
                                            <td key={cellIndex} style={{...styles.comparisonTableThTd, ...(rowIndex === data.comparison.table.length - 1 ? styles.comparisonTableTrLastTd : {}), ...(cellIndex === 0 ? styles.comparisonTableTdFirst : {}), ...(cellIndex === Object.values(row).length - 1 ? styles.comparisonTableTdLast: {}) }}>{cell}</td>
                                            ))}
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                         {data.comparison.textContent && (
                             <div className={data.comparison.table ? "col-md-5" : "col-12"}>
                                <div className="p-3 fs-5">
                                    {renderParagraphs(data.comparison.textContent)}
                                </div>
                            </div>
                         )}
                    </div>
                </section>
             )}

              {/* Dojo 1.0 vs 2.0 Comparison Section */}
              {data.comparisonDojo1vs2 && (
                <section style={styles.dynamicSection}>
                    {renderSectionTitle(data.comparisonDojo1vs2.title || "Comparison")}
                    {data.comparisonDojo1vs2.image && (
                         <div className="text-center mb-4">
                            <img src={data.comparisonDojo1vs2.image} alt="Comparison Chart" className="img-fluid rounded shadow-sm" style={{maxWidth: '800px'}} />
                        </div>
                    )}
                    {data.comparisonDojo1vs2.points && Array.isArray(data.comparisonDojo1vs2.points) && (
                         <div className="table-responsive">
                            <table style={styles.comparisonPointsTable}>
                                <thead>
                                <tr>
                                    <th style={styles.comparisonPointsTh}>Feature</th>
                                    <th style={styles.comparisonPointsTh}>Dojo 1.0</th>
                                    <th style={styles.comparisonPointsTh}>Dojo 2.0</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.comparisonDojo1vs2.points.map((point, index) => (
                                    <tr key={index} style={index % 2 !== 0 ? styles.comparisonTableTrOdd : {}}>
                                    <td style={{...styles.comparisonPointsTd, fontWeight: '500'}}>{point.feature}</td>
                                    <td style={styles.comparisonPointsTd}>{point.dojo1}</td>
                                    <td style={styles.comparisonPointsTd}>{point.dojo2}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
                )}


             {/* Feedback Section (Text + Video) */}
            {data.feedback && (
              <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgLight}}>
                {renderSectionTitle(data.feedback.title || "Client Feedback")}
                <div className="row g-4 align-items-center">
                  {data.feedback.textContent && (
                    <div className={data.feedback.videoUrl ? "col-md-6" : "col-12"}>
                      <div className="fs-5">{renderParagraphs(data.feedback.textContent)}</div>
                    </div>
                  )}
                  {data.feedback.videoUrl && (
                    <div className="col-md-6">
                      <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
                        <video controls src={data.feedback.videoUrl} className="w-100">
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                   {!data.feedback.videoUrl && data.feedback.textContent && ( // Placeholder if only text exists
                        <div className="col-md-6 text-center text-muted fst-italic">
                            <Icons.VideoOff size={50} className="mb-2" />
                            <p>Video testimonial coming soon.</p>
                        </div>
                    )}
                </div>
              </section>
            )}


            {/* Industries Served / Project Highlights (Grid of Images) */}
            {/* Handles both data.industries (array of strings) and data.industriesServed (object with images array) */}
             { ( (data.industries && Array.isArray(data.industries)) || (data.industriesServed && data.industriesServed.images && Array.isArray(data.industriesServed.images)) ) && (
                 <section style={styles.dynamicSection} className="text-center">
                    {renderSectionTitle(data.industriesServed?.title || "Industries We Serve")}
                    <div className="row g-4 justify-content-center">
                      {(data.industriesServed?.images || data.industries).map((imgSrc, idx) => (
                         <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                             <div
                                style={{...styles.industryImageContainer, ...(hoveredIndustry === idx ? styles.industryImageHover : {} )}}
                                onMouseEnter={() => setHoveredIndustry(idx)}
                                onMouseLeave={() => setHoveredIndustry(null)}
                             >
                                <img
                                src={typeof imgSrc === 'string' ? imgSrc : imgSrc.url /* Handle object if needed */}
                                className="img-fluid"
                                alt={typeof imgSrc === 'string' ? `Industry ${idx + 1}` : imgSrc.alt || `Industry ${idx + 1}`}
                                style={styles.industryImage}
                                />
                                {/* Optional: Add caption here if imgSrc is object with caption */}
                            </div>
                        </div>
                      ))}
                    </div>
                 </section>
             )}

              {/* Core Strengths / Features (Card Layout) */}
              {data.features && Array.isArray(data.features) && data.features.length > 0 && (
                <section style={styles.dynamicSection}>
                    <div className="text-center">{renderSectionTitle(data.features.title || "Our Core Strengths")}</div>
                    <div className="row g-4">
                    {data.features.map((feature, idx) => (
                        <div className="col-md-6 col-lg-4" key={idx}>
                            <div
                                style={{
                                ...styles.featureCard,
                                ...(hoveredFeature === idx ? styles.featureCardHover : {}),
                                }}
                                onMouseEnter={() => setHoveredFeature(idx)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    {feature.icon && getIcon(feature.icon, 24)} {/* Use the icon wrapper */}
                                    <h5 className="fw-semibold mb-0 ms-3">{feature.title}</h5>
                                </div>
                                <div style={styles.featureCardContent}> {/* Apply indenting style */}
                                    <p className="mb-0">{feature.desc}</p>
                                </div>
                             </div>
                        </div>
                    ))}
                    </div>
                </section>
              )}


            {/* Pillars / Consulting Areas / Key Elements (Tabs Layout) */}
            {data.pillars && Array.isArray(data.pillars) && data.pillars.length > 0 && (
              <section style={styles.dynamicSection}>
                <div className="text-center">{renderSectionTitle(data.pillars.title || "Consulting Areas")}</div>
                 <div className="row g-0"> {/* Use g-0 to remove gutters between columns */}
                  <div className="col-lg-3 col-md-4">
                    <div className="list-group h-100" style={styles.pillarsTabContainer}>
                      {data.pillars.map((pillar, index) => (
                        <button
                          key={index}
                          className={`list-group-item list-group-item-action ${activeTab === index ? "active" : ""}`}
                          onClick={() => setActiveTab(index)}
                          style={{
                            ...(activeTab === index ? styles.pillarsTabActive : styles.pillarsTab),
                            // Apply base or active style
                          }}
                        >
                          {pillar.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8 d-flex">
                    <div className="w-100 align-self-stretch" style={styles.pillarsContent}>
                      <h4 className="fw-bold mb-3">{data.pillars[activeTab].title}</h4>
                      <div className="fs-6"> {/* Slightly smaller font for content */}
                         {renderParagraphs(data.pillars[activeTab].content)}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Certification Section */}
            {data.certification && (
              <section style={{...styles.dynamicSection, ...styles.certificationSection}}>
                <div className="container">
                  <div className="text-center">{renderSectionTitle(data.certification.title || "Certification")}</div>
                  {data.certification.content && <div className="mb-4 fs-5 text-center mx-auto" style={{ maxWidth: "800px" }}>{renderParagraphs(data.certification.content)}</div>}

                  {data.certification.process && Array.isArray(data.certification.process) && data.certification.process.length > 0 && (
                    <>
                      <h4 className="mb-4 text-center fw-semibold">{data.certification.subtitle || "Certification Process"}</h4>
                      <div className="row justify-content-center">
                        <div className="col-md-10">
                          {/* Using ol for semantic ordered list */}
                          <ol className="list-unstyled">
                            {data.certification.process.map((step, idx) => (
                              <li key={idx} style={styles.stepItem}>
                                <div style={styles.stepNumber}>{idx + 1}</div>
                                <div>{step}</div>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </>
                  )}

                  {data.certification.note && (
                    <div className="alert alert-info mt-4 text-center">
                      <p className="mb-0 fw-medium">{data.certification.note}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Implementation Process Section (Similar to Certification Steps) */}
            {data.implementationProcess && (
                 <section style={styles.dynamicSection}>
                     <div className="text-center mb-5">{renderSectionTitle(data.implementationProcess.title || "Our Approach")}</div>
                     <div className="row align-items-center g-4">
                         {data.implementationProcess.image && (
                             <div className="col-md-5 text-center">
                                 <img src={data.implementationProcess.image} alt="Implementation Process" className="img-fluid rounded shadow-sm" />
                             </div>
                         )}
                         {data.implementationProcess.steps && Array.isArray(data.implementationProcess.steps) && (
                             <div className={data.implementationProcess.image ? 'col-md-7' : 'col-12'}>
                                <ol className="list-unstyled">
                                    {data.implementationProcess.steps.map((step, idx) => (
                                    <li key={idx} style={styles.stepItem}>
                                        <div style={styles.stepNumber}>{idx + 1}</div>
                                        <div>{step}</div>
                                    </li>
                                    ))}
                                </ol>
                             </div>
                         )}
                          {data.implementationProcess.process && !data.implementationProcess.steps && Array.isArray(data.implementationProcess.process) && (
                             <div className={data.implementationProcess.image ? 'col-md-7' : 'col-12'}>
                                <ol className="list-unstyled">
                                    {data.implementationProcess.process.map((step, idx) => (
                                    <li key={idx} style={styles.stepItem}>
                                        <div style={styles.stepNumber}>{idx + 1}</div>
                                        <div>{step}</div>
                                    </li>
                                    ))}
                                </ol>
                             </div>
                         )}
                     </div>
                 </section>
             )}

            {/* Case Study Section (Handles single or multiple studies, old and new formats) */}
            { (data.caseStudy || data.caseStudies) && (
              <section style={{...styles.dynamicSection, ...styles.caseStudySection}}>
                <div className="container">
                  <div className="text-center">{renderSectionTitle(data.caseStudies?.title || data.caseStudy?.title || "Case Study")}</div>

                  {/* Logic to handle both single object and array */}
                  {(() => {
                    // Create a unified array of studies
                    let studies = [];
                    if (data.caseStudies && Array.isArray(data.caseStudies.studies)) {
                        studies = data.caseStudies.studies;
                    } else if (data.caseStudy && typeof data.caseStudy === 'object') {
                        // Include outcomes directly if they exist at top level with single caseStudy
                        studies = [{ ...data.caseStudy, outcomes: data.outcomes }];
                    }

                    return studies.map((study, studyIndex) => {
                      // Determine where to get challenges/approach/results from
                       const challenges = study.challenges || study.outcomes?.challenges || [];
                       const approach = study.approach || study.outcomes?.approach || [];
                       const results = study.results || study.outcomes?.results || [];

                       return (
                          <div key={studyIndex} className={`mb-5 ${studyIndex < studies.length - 1 ? 'border-bottom pb-4' : ''}`}>
                            {study.title && <h4 className="mb-1 fw-semibold">{study.title}</h4>}
                            {study.company && <h6 className="text-muted mb-3">{study.company}</h6>}
                            {study.content && <div className="mb-4 fs-5">{renderParagraphs(study.content)}</div>}

                            {(challenges.length > 0 || approach.length > 0 || results.length > 0) && (
                              <div className="row mt-4 g-4">
                                {/* Challenges */}
                                {challenges.length > 0 && (
                                <div className="col-md-4">
                                  <div className="card h-100 shadow-sm">
                                    <div className="card-header bg-danger text-white"><h5 className="mb-0 fw-semibold">Challenges</h5></div>
                                    <div className="card-body">
                                      <ul className="list-unstyled mb-0">
                                        {challenges.map((item, idx) => (
                                          <li key={idx} className="mb-2 d-flex align-items-start">
                                            <Icons.XCircle size={18} className="text-danger flex-shrink-0" style={styles.listGroupIcon}/> <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                )}
                                {/* Approach */}
                                {approach.length > 0 && (
                                <div className="col-md-4">
                                  <div className="card h-100 shadow-sm">
                                    <div className="card-header bg-primary text-white"><h5 className="mb-0 fw-semibold">Approach</h5></div>
                                    <div className="card-body">
                                      {/* Check if approach is text or list */}
                                      {typeof approach === 'string' ? (
                                        <p>{approach}</p>
                                      ) : (
                                        <ul className="list-unstyled mb-0">
                                          {approach.map((item, idx) => (
                                            <li key={idx} className="mb-2 d-flex align-items-start">
                                              <Icons.ArrowRightCircle size={18} className="text-primary flex-shrink-0" style={styles.listGroupIcon}/> <span>{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                )}
                                {/* Results */}
                                {results.length > 0 && (
                                <div className="col-md-4">
                                  <div className="card h-100 shadow-sm">
                                    <div className="card-header bg-success text-white"><h5 className="mb-0 fw-semibold">Results</h5></div>
                                    <div className="card-body">
                                      <ul className="list-unstyled mb-0">
                                        {results.map((item, idx) => (
                                          <li key={idx} className="mb-2 d-flex align-items-start">
                                            <Icons.CheckCircle size={18} className="text-success flex-shrink-0" style={styles.listGroupIcon}/> <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                )}
                              </div>
                            )}
                          </div>
                       );
                    });
                  })()}

                  {/* Read More Button (Conditional) */}
                  {data.caseStudies?.readMoreButton && (
                    <div className="text-center mt-4">
                      {renderCtaButton("Read More Case Studies")}
                    </div>
                  )}
                </div>
              </section>
            )}


             {/* Benefits Section (List + CTA) */}
            {data.benefits && (
              <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgAccent }}>
                <div className="container">
                  {renderSectionTitle(data.benefits.title || "Benefits")}
                  <div className="row g-4 align-items-center">
                    {data.benefits.list && Array.isArray(data.benefits.list) && (
                        <div className={data.benefits.cta ? "col-md-7" : "col-12"}>
                        <ul className="list-unstyled row">
                            {data.benefits.list.map((item, index) => (
                            <li key={index} className="mb-2 d-flex align-items-center fs-5 col-sm-6">
                                <Icons.CheckSquare size={20} className="text-success flex-shrink-0" style={styles.listGroupIcon} />
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    {data.benefits.cta && (
                        <div className="col-md-5 text-center text-md-start ps-md-5">
                            {data.benefits.cta.text && <h3 className="fw-semibold mb-3">{data.benefits.cta.text}</h3>}
                            {renderCtaButton(data.benefits.cta.buttonText || "Get Started")}
                        </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Visual Tools Section (Grid of Cards with Images) */}
            {data.visualTools && data.visualTools.items && Array.isArray(data.visualTools.items) && (
              <section style={styles.dynamicSection} className="text-center">
                {renderSectionTitle(data.visualTools.title || "Visual Tools Examples")}
                 {data.visualTools.introText && <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "800px" }}>{renderParagraphs(data.visualTools.introText)}</div>}
                <div className="row g-4 justify-content-center">
                  {data.visualTools.items.map((tool, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        style={{ ...styles.infoCard, ...(hoveredCard === `tool-${index}` ? styles.infoCardHover : {}) }}
                        onMouseEnter={() => setHoveredCard(`tool-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                         {tool.img && <img src={tool.img} alt={tool.title} style={styles.infoCardImage} />}
                         {tool.icon && getIcon(tool.icon)}
                        <h5 style={styles.infoCardTitle}>{tool.title}</h5>
                        {tool.desc && <p style={styles.infoCardText}>{tool.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Layout Types Section (Similar to Visual Tools) */}
             {data.layoutTypes && data.layoutTypes.items && Array.isArray(data.layoutTypes.items) && (
              <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgLight}} className="text-center">
                {renderSectionTitle(data.layoutTypes.title || "Layout Types")}
                <div className="row g-4 justify-content-center">
                  {data.layoutTypes.items.map((layout, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        style={{ ...styles.infoCard, ...(hoveredCard === `layout-${index}` ? styles.infoCardHover : {}) }}
                        onMouseEnter={() => setHoveredCard(`layout-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                         {layout.img && <img src={layout.img} alt={layout.title} style={styles.infoCardImage} />}
                         {layout.icon && getIcon(layout.icon)}
                        <h5 style={styles.infoCardTitle}>{layout.title}</h5>
                        {layout.desc && <p style={styles.infoCardText}>{layout.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

             {/* AGV Types Section (Similar to Visual Tools/Layouts) */}
            {data.agvTypes && data.agvTypes.items && Array.isArray(data.agvTypes.items) && (
              <section style={styles.dynamicSection} className="text-center">
                {renderSectionTitle(data.agvTypes.title || "Types of AGVs")}
                 {data.agvTypes.introText && <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "800px" }}>{renderParagraphs(data.agvTypes.introText)}</div>}
                <div className="row g-4 justify-content-center">
                  {data.agvTypes.items.map((agv, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        style={{ ...styles.infoCard, ...(hoveredCard === `agv-${index}` ? styles.infoCardHover : {}) }}
                        onMouseEnter={() => setHoveredCard(`agv-${index}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                         {agv.img && <img src={agv.img} alt={agv.title} style={styles.infoCardImage} />}
                         {agv.icon && getIcon(agv.icon)}
                        <h5 style={styles.infoCardTitle}>{agv.title}</h5>
                        {agv.desc && <p style={styles.infoCardText}>{agv.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

             {/* AGV Applications Section (Grid of Cards with Icons) */}
            {data.applications && data.applications.items && Array.isArray(data.applications.items) && (
                 <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgLight}} className="text-center">
                     {renderSectionTitle(data.applications.title || "Applications")}
                     <div className="row g-4 justify-content-center">
                         {data.applications.items.map((app, index) => (
                             <div key={index} className="col-lg-4 col-md-6">
                                 <div
                                     style={{ ...styles.infoCard, ...(hoveredCard === `app-${index}` ? styles.infoCardHover : {}) }}
                                     onMouseEnter={() => setHoveredCard(`app-${index}`)}
                                     onMouseLeave={() => setHoveredCard(null)}
                                 >
                                     {app.icon && getIcon(app.icon)}
                                     <h5 style={styles.infoCardTitle}>{app.title}</h5>
                                     {app.desc && <p style={styles.infoCardText}>{app.desc}</p>}
                                 </div>
                             </div>
                         ))}
                     </div>
                 </section>
             )}

              {/* Tools Used / Skills Developed / Tech Components / Use Cases (Simple List Format) */}
              { (data.toolsUsed || data.skillsDeveloped || data.technologyComponents || data.useCases || data.safetyServices || data.auditTypes) && (
                <section style={styles.dynamicSection} className="text-center">
                  {/* Determine title based on available data */}
                   {renderSectionTitle(
                     data.toolsUsed?.title ||
                     data.skillsDeveloped?.title ||
                     data.technologyComponents?.title ||
                     data.useCases?.title ||
                     data.safetyServices?.title ||
                     data.auditTypes?.title ||
                     "Key Elements"
                   )}

                   {/* Render image if present (e.g., auditTypes) */}
                   { data.auditTypes?.image && <img src={data.auditTypes.image} alt={data.auditTypes.title} className="img-fluid rounded mb-4 shadow-sm" style={{maxWidth: '600px'}} /> }


                    {/* Render intro text if present */}
                    { (data.toolsUsed?.introText || data.skillsDeveloped?.introText || data.technologyComponents?.introText || data.useCases?.introText || data.safetyServices?.introText || data.auditTypes?.introText) &&
                        <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "800px" }}>
                            {renderParagraphs(data.toolsUsed?.introText || data.skillsDeveloped?.introText || data.technologyComponents?.introText || data.useCases?.introText || data.safetyServices?.introText || data.auditTypes?.introText)}
                        </div>
                    }

                  {/* Render list based on available data */}
                    <ul style={styles.toolsList}>
                        {(data.toolsUsed?.items || data.skillsDeveloped?.items || data.technologyComponents?.items || data.useCases?.items || data.safetyServices?.items || data.auditTypes?.items || []).map((item, index) => (
                            <li key={index} style={styles.toolItem}>
                                {typeof item === 'string' ? item : (item.title || item.level)} {/* Handle string array or object with title/level */}
                                {item.desc && <div className="d-block small text-muted mt-1">{item.desc}</div>} {/* Optional description */}
                            </li>
                        ))}
                    </ul>
                </section>
              )}

             {/* Core Concepts Section (Image + List/Cards) */}
             {data.coreConcepts && data.coreConcepts.items && Array.isArray(data.coreConcepts.items) && (
                 <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgAccent}} className="text-center">
                     {renderSectionTitle(data.coreConcepts.title || "Core Concepts")}
                     {data.coreConcepts.image && (
                         <div className="mb-4">
                             <img src={data.coreConcepts.image} alt={data.coreConcepts.title} className="img-fluid rounded shadow-sm" style={{maxWidth: '600px'}} />
                         </div>
                     )}
                     <div className="row g-4 justify-content-center">
                         {data.coreConcepts.items.map((concept, index) => (
                             <div key={index} className="col-md-6">
                                 <div style={{...styles.infoCard, textAlign: 'left'}}>
                                     {concept.icon && getIcon(concept.icon)}
                                     <h5 style={styles.infoCardTitle}>{concept.title}</h5>
                                     {concept.desc && <p style={styles.infoCardText}>{concept.desc}</p>}
                                 </div>
                             </div>
                         ))}
                     </div>
                 </section>
             )}


            {/* Clients Section (Generic Image) */}
            {data.clients && (
              <section style={{...styles.dynamicSection, ...styles.dynamicSectionBgLight}} className="text-center">
                {renderSectionTitle(data.clients.title || "Our Clients")}
                <div className="container">
                   {data.clients.image && (
                     <img
                        src={data.clients.image}
                        alt="Client Logos"
                        className="img-fluid"
                        style={{ maxHeight: '1000px', width: 'auto' }}
                    />
                   )}
                   {data.clients.text && <div className="fs-5 mt-3">{renderParagraphs(data.clients.text)}</div> }
                </div>
              </section>
            )}

            {/* FAQ Section */}
            {data.faq && data.faq.items && Array.isArray(data.faq.items) && data.faq.items.length > 0 && (
              <section style={styles.dynamicSection}>
                <div className="text-center">{renderSectionTitle(data.faq.title || "Frequently Asked Questions")}</div>
                <div style={styles.faqContainer}>
                  {data.faq.items.map((faqItem, index) => (
                    <div key={index} style={styles.faqItem}>
                      <div style={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                        <span>{faqItem.question}</span>
                        <span style={styles.faqToggle}>{openFAQs[index] ? <Icons.Minus size={20} /> : <Icons.Plus size={20} />}</span>
                      </div>
                      {openFAQs[index] && <div style={styles.faqAnswer}>{renderParagraphs(faqItem.answer)}</div>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Final Generic Section (Optional/Fallback) */}
            {/* Consider removing or making this data-driven too if needed */}
            {/*
            <div className="text-dark rounded p-5 mb-5" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="text-center">{renderSectionTitle("How We Create Impact")}</div>
              <div className="row text-center g-4">
                {[
                  { title: "Business Strategy", desc: "Analyzing market shifts and competitor trends to define a future-proof path.", icon: "Target" },
                  { title: "Technology Advisory", desc: "Leveraging technology to optimize operations and drive innovation.", icon: "Cpu" },
                  { title: "Organizational Change", desc: "Managing transitions smoothly, ensuring employee buy-in and sustainable results.", icon: "Users" },
                ].map((item, i) => (
                  <div className="col-md-4 mb-3" key={i}>
                     <div style={{ ...styles.infoCard, border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}>
                      {getIcon(item.icon)}
                      <h5 className="fw-bold mt-2 mb-2">{item.title}</h5>
                      <p style={styles.infoCardText}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            */}

          </>
        ) : (
          // ==================================================
          // SIMPLE CONTENT FOR NON-DETAILED PAGES
          // ==================================================
          <div style={styles.simpleContent}>
            <h2 className="mb-4 fw-bold text-center">{data.title}</h2>
            <div className="mb-4 fs-5">
                {renderParagraphs(data.content || "Detailed information about this service is tailored to specific client needs. Please contact us for more details.")}
            </div>

            <div className="text-center mt-5">
                {renderCtaButton("CONTACT US FOR MORE INFORMATION")}
            </div>
          </div>
        )}
      </div> {/* End Main Content Container */}
    </Layout>
  );
}

// --- END OF FILE page.js ---