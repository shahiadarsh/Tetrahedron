// --- START OF FILE page.js (for Training Pages) ---

"use client";

import { skillTrainingData } from "@/lib/servicesData"; // Keep this import
// Removed: import * as styleThemes from '@/lib/styleThemes';
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { useState, useMemo } from "react";
import * as Icons from "lucide-react";

// --- Theme Definitions (Moved Inside Component Scope) ---
const themes = {
    // Theme 1: Professional Blue/Orange
    themeBlueOrange: {
        name: 'blueOrange',
        primary: '#005f73',     // Dark Teal Blue
        secondary: '#ff7b00',   // Vibrant Orange
        accentLight: '#e0f7fa', // Very Light Cyan
        accentDark: '#003440',  // Darker Blue/Teal
        textPrimary: '#212529',
        textSecondary: '#495057',
        bgLight: '#f8f9fa',
        bgAccent: '#e0f7fa',
        bannerBg: '#004c5a',
        cardRadius: '8px',
        buttonPadding: '0.85rem 2.2rem',
        hoverEffect: {
            transform: 'translateY(-5px)',
            shadow: '0 10px 20px rgba(0, 95, 115, 0.15)',
        },
        iconWrapperBg: 'rgba(0, 95, 115, 0.1)',
        underlineColor: '#ff7b00',
        titleFontWeight: '700', // Default font weight for titles
    },
    // Theme 2: Modern Green/Gray
    themeGreenGray: {
        name: 'greenGray',
        primary: '#2d6a4f',     // Forest Green
        secondary: '#808080',   // Medium Gray
        accentLight: '#edf7f2', // Very Light Green
        accentDark: '#1b4332',  // Darker Green
        textPrimary: '#343a40',
        textSecondary: '#5a6268',
        bgLight: '#fdfdfd',
        bgAccent: '#edf7f2',
        bannerBg: '#1b4332',
        cardRadius: '12px',
        buttonPadding: '0.9rem 2.4rem',
        hoverEffect: {
            transform: 'scale(1.03)',
            shadow: '0 8px 18px rgba(45, 106, 79, 0.2)',
        },
        iconWrapperBg: 'rgba(45, 106, 79, 0.1)',
        underlineColor: '#2d6a4f',
        titleFontWeight: 'bold', // Different weight example
    },
    // Theme 3: Energetic Purple/Yellow
    themePurpleYellow: {
        name: 'purpleYellow',
        primary: '#6a0dad',     // Deep Purple
        secondary: '#ffdd00',   // Bright Yellow (Use carefully for text backgrounds)
        accentLight: '#f3e5f5', // Very Light Purple
        accentDark: '#4a0072',  // Darker Purple
        textPrimary: '#333333',
        textSecondary: '#555555',
        bgLight: '#fafafa',
        bgAccent: '#f3e5f5',
        bannerBg: '#4a0072',
        cardRadius: '6px',
        buttonPadding: '0.8rem 2rem',
        hoverEffect: {
            transform: 'rotate(1deg) translateY(-4px)',
            shadow: '0 6px 15px rgba(106, 13, 173, 0.25)',
        },
        iconWrapperBg: 'rgba(106, 13, 173, 0.1)',
        underlineColor: '#6a0dad',
        titleFontWeight: '600', // Semi-bold example
    },
    // Theme 4: Minimalist Blue/Gray
    themeMinimalist: {
       name: 'minimalist',
       primary: '#0077b6',     // Cerulean Blue
       secondary: '#adb5bd',   // Light Gray
       accentLight: '#f1f3f5', // Very light gray/blue tint
       accentDark: '#023e8a',  // Darker Blue
       textPrimary: '#111',
       textSecondary: '#444',
       bgLight: '#ffffff',
       bgAccent: '#f1f3f5',
       bannerBg: '#03045e', // Very Dark Blue
       cardRadius: '4px', // Sharp corners
       buttonPadding: '0.9rem 2.5rem',
        hoverEffect: {
           transform: 'translateY(-4px)',
           shadow: '0 8px 12px rgba(0, 119, 182, 0.1)', // Subtle blue shadow
       },
       iconWrapperBg: 'rgba(0, 119, 182, 0.08)',
       underlineColor: '#0077b6',
       titleFontWeight: '700',
   },
    // Default theme if slug doesn't match or theme key is missing
    defaultTheme: {
         name: 'default',
        primary: '#005f73',
        secondary: '#ff7b00',
        accentLight: '#e0f7fa',
        accentDark: '#003440',
        textPrimary: '#212529',
        textSecondary: '#495057',
        bgLight: '#f8f9fa',
        bgAccent: '#e0f7fa',
        bannerBg: '#004c5a',
        cardRadius: '8px',
        buttonPadding: '0.85rem 2.2rem',
        hoverEffect: {
            transform: 'translateY(-5px)',
            shadow: '0 10px 20px rgba(0, 95, 115, 0.15)',
        },
        iconWrapperBg: 'rgba(0, 95, 115, 0.1)',
        underlineColor: '#ff7b00',
        titleFontWeight: '700',
    }
};
// --- End of Theme Definitions ---


export default function TrainingPage({ params }) {
    const data = skillTrainingData[params.slug];
    if (!data) return notFound();

    // --- Determine Current Theme ---
    // Access the locally defined themes object
    const currentTheme = useMemo(() => {
        const themeName = data.theme || 'defaultTheme';
        // Access the 'themes' object defined above
        return themes[themeName] || themes.defaultTheme;
    }, [data.theme]);

    // --- State for Hover Effects ---
    const [hoverStates, setHoverStates] = useState({});

    // --- Dynamic Styles Function (Uses currentTheme) ---
    const dynamicStyles = useMemo(() => ({
        // --- Banner Styles ---
        banner: {
            position: "relative", minHeight: "400px", height: "auto", overflow: "hidden",
            backgroundColor: currentTheme.bannerBg, // Use theme color
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '50px 20px', color: 'white',
        },
        bannerImage: {
            position: 'absolute', top: 0, left: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: "0.35", zIndex: 1,
        },
        bannerContent: {
            position: "relative", zIndex: 2, textAlign: "center", width: "90%",
            maxWidth: "1000px", padding: "30px",
            backgroundColor: 'rgba(0, 20, 40, 0.45)', // Keep overlay consistent or theme it
            borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        },
        bannerTitle: {
            fontWeight: "bold", marginBottom: "1rem", color: 'white',
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        },
        bannerSubtitle: {
            fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: "1rem", color: 'rgba(255,255,255,0.9)',
            fontWeight: 300,
        },
        bannerDescription: {
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: "1.5rem", color: 'rgba(255,255,255,0.95)',
            lineHeight: 1.6, fontWeight: 400,
        },
        // --- Section Styles ---
        sectionTitle: {
            fontWeight: currentTheme.titleFontWeight || "700", // Use theme weight
            marginBottom: "3rem", position: "relative", display: "inline-block",
            paddingBottom: "12px", color: currentTheme.accentDark || "#002244", // Use theme color
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', textAlign: 'center', width: '100%',
        },
        sectionTitleAfter: {
            content: "''", position: "absolute", bottom: "0", left: "50%",
            transform: "translateX(-50%)", width: "100px", height: "4px",
            backgroundColor: currentTheme.underlineColor || currentTheme.primary, // Use theme color
            borderRadius: '2px',
        },
        dynamicSection: { padding: '3rem 0', marginBottom: '2rem' },
        dynamicSectionBgLight: {
            backgroundColor: currentTheme.bgLight || '#f9fafb', // Use theme color
            borderRadius: '12px', padding: '4rem 2rem', marginBottom: '2rem',
        },
        dynamicSectionBgAccent: {
            backgroundColor: currentTheme.bgAccent || '#e8f0f8', // Use theme color
            borderRadius: '12px', padding: '4rem 2rem', marginBottom: '2rem',
        },
        // --- Card Styles ---
        cardBase: {
            transition: "all 0.35s ease", backgroundColor: "#ffffff",
            borderRadius: currentTheme.cardRadius || '8px', // Use theme radius
            height: "100%", border: "1px solid #e0e7ef",
            boxShadow: "0 4px 10px rgba(0, 34, 68, 0.06)",
            display: 'flex', flexDirection: 'column', textAlign: 'center', padding: "2rem",
        },
        cardTitle: {
            fontWeight: '600', marginBottom: '0.75rem', fontSize: '1.15rem',
            color: currentTheme.accentDark || '#002244', // Use theme color
            marginTop: '1rem',
        },
        cardDescription: {
            fontSize: '0.98rem', color: currentTheme.textSecondary || '#4a5568', // Use theme color
            lineHeight: 1.6, flexGrow: 1,
        },
        iconWrapper: {
            backgroundColor: currentTheme.iconWrapperBg || 'rgba(0, 34, 68, 0.08)', // Use theme color
            borderRadius: '50%', padding: '1rem', display: 'inline-flex',
            marginBottom: '1rem', color: currentTheme.primary, // Use theme color
            flexShrink: 0,
        },
        // --- List Styles ---
        listGroupIcon: {
            marginRight: '0.8rem', marginTop: '0.1rem', flexShrink: 0,
            color: currentTheme.primary, // Use theme color
            width: '20px', height: '20px',
        },
        listStyleBase: { listStyle: 'none', paddingLeft: 0, maxWidth: '850px', margin: '1.5rem auto', textAlign: 'left' },
        listItemBase: {
            marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start',
            fontSize: '1.05rem', color: currentTheme.textPrimary || '#334155', // Use theme color
        },
        audienceList: {},
        audienceListItem: {},
        audienceColumns: { columns: 2, columnGap: '2.5rem' },
        courseModulesList: {},
        courseModuleItem: {
            paddingLeft: '1.8rem', position: 'relative',
            borderLeft: `3px solid ${currentTheme.secondary || '#d1e0ec'}`, // Use theme color
            paddingBottom: '0.8rem',
        },
        courseModuleItemBefore: {
            content: "''", position: 'absolute', left: '-7px', top: '8px',
            width: '10px', height: '10px', backgroundColor: currentTheme.accentDark || '#002244', // Use theme color
            borderRadius: '50%',
        },
        methodologyList: {},
        methodologyListItem: {},
        // --- Other Styles ---
        stepItem: { display: "flex", alignItems: "flex-start", marginBottom: "1.8rem", fontSize: '1.05rem' },
        stepNumber: {
            backgroundColor: currentTheme.accentDark || "#002244", // Use theme color
            color: "white", minWidth: "40px", height: "40px", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginRight: "1.2rem", flexShrink: "0", fontWeight: "bold", fontSize: '1.1rem',
        },
        prerequisiteNote: {
            fontStyle: 'italic', color: currentTheme.textSecondary || '#4a5568', // Use theme color
            marginTop: '1.5rem', display: 'block', textAlign: 'center', fontSize: '0.95rem',
        },
        ctaButton: {
            backgroundColor: currentTheme.primary, // Use theme color
            border: "none", padding: currentTheme.buttonPadding || '0.85rem 2.2rem', // Use theme padding
            borderRadius: "50px", fontWeight: "600", transition: "all 0.3s ease",
            color: "white", textTransform: "uppercase", letterSpacing: "0.8px",
            display: 'inline-block', textDecoration: 'none', fontSize: '0.95rem',
            boxShadow: `0 4px 10px ${currentTheme.primary}55`, // Shadow using primary color with alpha
        },
        // Form Styles
        formSection: {
            backgroundColor: currentTheme.bgAccent || '#f0f4f8', // Use theme color
            padding: '3rem 1.5rem', borderRadius: '12px', marginTop: '2rem',
        },
        formInput: {
            marginBottom: '1.5rem', padding: '0.9rem 1.2rem', border: '1px solid #cbd5e1',
            borderRadius: '6px', width: '100%', fontSize: '1rem',
        },
        formTextarea: {
            marginBottom: '1.5rem', padding: '0.9rem 1.2rem', border: '1px solid #cbd5e1',
            borderRadius: '6px', width: '100%', fontSize: '1rem', minHeight: '120px',
        },
        formLabel: {
            display: 'block', marginBottom: '0.5rem', fontWeight: '500',
            color: currentTheme.textPrimary || '#334155', // Use theme color
        },
    }), [currentTheme]); // End of useMemo for dynamicStyles


    // --- Helper Functions using dynamicStyles ---
    const getIcon = (iconName, size = 28) => {
        const IconComponent = Icons[iconName];
        if (!IconComponent) return <Icons.HelpCircle size={size} />;
        return (
            <span style={dynamicStyles.iconWrapper}> {/* Apply themed style */}
                <IconComponent size={size} />
            </span>
        );
    };

    const renderSectionTitle = (title) => (
        <h2 style={dynamicStyles.sectionTitle}> {/* Apply themed style */}
            {title}
            <span style={dynamicStyles.sectionTitleAfter}></span> {/* Apply themed style */}
        </h2>
    );

    const renderParagraphs = (text, style = {}) => {
        if (!text) return null;
        const paragraphs = Array.isArray(text) ? text : text.split('\n');
        // Default color from theme's text secondary, unless overridden
        const baseStyle = { lineHeight: 1.7, color: style.color || currentTheme.textSecondary || '#4a5568' };
        return paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-3" style={{ ...baseStyle, ...style }}>
                {paragraph.trim()}
            </p>
        ));
    }

    // Hover Handler for Cards
    const handleMouseEnter = (key) => {
        setHoverStates(prev => ({ ...prev, [key]: true }));
    };
    const handleMouseLeave = (key) => {
        setHoverStates(prev => ({ ...prev, [key]: false }));
    };

    // CTA Button with theme-based hover
     const renderCtaButton = (text, href = "#") => {
        const key = `cta-${text?.replace(/\s+/g, '-') || Math.random()}`; // Unique key for hover state
        const isHovered = hoverStates[key];
        const baseButtonStyle = dynamicStyles.ctaButton;
        // Define hover style changes based on theme's hoverEffect object
        const hoverButtonStyle = {
            backgroundColor: currentTheme.accentDark || '#003440', // Fallback darker color
            transform: currentTheme.hoverEffect?.transform || 'translateY(-3px)', // Use effect or default
            boxShadow: currentTheme.hoverEffect?.shadow || `0 7px 18px ${currentTheme.primary}77`, // Use effect or default
        };

        return (
            <a
                href={href}
                className="btn"
                style={isHovered ? { ...baseButtonStyle, ...hoverButtonStyle } : baseButtonStyle}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={() => handleMouseLeave(key)}
            >
                {text || "Learn More"}
            </a>
        );
    };


    // --- Component Rendering Functions (No major changes needed here, they use dynamicStyles) ---

    const renderBanner = () => (
        <div style={dynamicStyles.banner}>
            {data.image && <img src={data.image} style={dynamicStyles.bannerImage} alt={data.title || "Training Banner"} />}
            <div style={dynamicStyles.bannerContent}>
                {data.bannerTitle && <h1 style={dynamicStyles.bannerTitle}>{data.bannerTitle}</h1>}
                {data.bannerSubtitle && <p style={dynamicStyles.bannerSubtitle}>{data.bannerSubtitle}</p>}
                {data.bannerDescription && <div style={dynamicStyles.bannerDescription}>{renderParagraphs(data.bannerDescription, { color: 'rgba(255,255,255,0.95)' })}</div>}
                {renderCtaButton(data.ctaButtonText || "Enroll Now / Learn More", data.ctaButtonLink)}
            </div>
        </div>
    );

    const renderIntro = () => data.introText && (
        <section style={dynamicStyles.dynamicSection} className="text-center">
            <div className="fs-5 mx-auto" style={{ maxWidth: "900px" }}>
                 {renderParagraphs(data.introText)} {/* Use default paragraph color */}
            </div>
        </section>
    );

    const renderWhyChoose = () => data.whyChoose && (
        <section style={{ ...dynamicStyles.dynamicSection, ...dynamicStyles.dynamicSectionBgLight }} className="text-center">
            {renderSectionTitle(data.whyChoose.title || "Why Choose This Training?")}
            <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "900px" }}>
                {renderParagraphs(data.whyChoose.content)}
            </div>
            {data.whyChoose.subTitle && <h4 className="fw-semibold mt-4 mb-2" style={{ color: dynamicStyles.cardTitle.color }}>{data.whyChoose.subTitle}</h4>}
            <div className="fs-5 mx-auto mb-4" style={{ maxWidth: "900px" }}>
                {renderParagraphs(data.whyChoose.subText)}
            </div>
            {renderCtaButton(data.whyChoose.button?.title || "Register Now", data.whyChoose.button?.link)}
        </section>
    );

     // Generic Card Renderer (Uses dynamicStyles and hover state)
     const renderCard = (item, index, type) => {
        const key = `${type}-${index}`;
        const isHovered = hoverStates[key];
        // Apply hover effect styles directly if hovered
        const cardStyle = {
            ...dynamicStyles.cardBase,
            ...(isHovered ? {
                transform: currentTheme.hoverEffect?.transform, // Use optional chaining
                boxShadow: currentTheme.hoverEffect?.shadow,
            } : {})
        };

        return (
            <div key={key} className="col-lg-4 col-md-6 mb-4">
                <div
                    style={cardStyle}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={() => handleMouseLeave(key)}
                >
                    {item.icon && getIcon(item.icon)}
                    {/* Ensure title uses themed color */}
                    <h5 style={dynamicStyles.cardTitle}>{item.title || item.level || item.phase || item.step}</h5>
                    {/* Paragraphs will inherit color via renderParagraphs */}
                    <div style={dynamicStyles.cardDescription}>
                        {renderParagraphs(item.description || item.desc || item.content)}
                    </div>
                </div>
            </div>
        );
    };


    // Render Pillars (APQP Style - specific structure)
    const renderPillars = () => data.pillars && Array.isArray(data.pillars) && (
        <section style={dynamicStyles.dynamicSection}>
            {data.pillars.find(p => p.isSectionTitle) && renderSectionTitle(data.pillars.find(p => p.isSectionTitle).title)}
            {data.pillars.find(p => p.isImage) && (
                 <div className="mb-5 text-center">
                    <img src={data.pillars.find(p => p.isImage).image} alt={data.pillars.find(p => p.isSectionTitle)?.title || 'Pillars'} className="img-fluid rounded shadow-sm" style={{ maxWidth: '700px' }} />
                </div>
            )}
            <div className="row g-4 justify-content-center">
                {data.pillars.filter(p => !p.isSectionTitle && !p.isImage).map((pillar, index) => renderCard(pillar, index, 'pillar'))}
            </div>
        </section>
    );

     // Render Key Concepts/Focus Areas/Tools/Perspectives/Phases (Common Card Style)
    const renderKeyConcepts = (dataKey, defaultTitle) => {
        const sectionData = data[dataKey];
        if (!sectionData) return null;

        let itemsToRender = sectionData.items || sectionData.technicalPillars || [];
        if (dataKey === 'wcmPillars' && sectionData.managerialPillars) {
             itemsToRender = [...itemsToRender, ...sectionData.managerialPillars];
        }
        if (!Array.isArray(itemsToRender) || itemsToRender.length === 0) return null;

        return (
            <section style={{ ...dynamicStyles.dynamicSection, ...dynamicStyles.dynamicSectionBgAccent }}>
                {renderSectionTitle(sectionData.title || defaultTitle)}
                {sectionData.image && (
                    <div className="mb-5 text-center">
                        <img src={sectionData.image} alt={sectionData.title || defaultTitle} className="img-fluid rounded shadow-sm" style={{ maxWidth: '700px' }} />
                    </div>
                )}
                {sectionData.description && <div className="fs-5 text-center mx-auto mb-5" style={{ maxWidth: "900px" }}>{renderParagraphs(sectionData.description)}</div>}
                <div className="row g-4 justify-content-center">
                    {itemsToRender.map((item, index) => renderCard(item, index, dataKey))}
                </div>
            </section>
        );
    };

    // Render Process Steps (Numbered List Style)
    const renderProcessSteps = () => {
        const sectionData = data.processSteps;
        const steps = sectionData?.steps;
         if (!steps || !Array.isArray(steps) || steps.length === 0) return null;

         return (
             <section style={{ ...dynamicStyles.dynamicSection, ...dynamicStyles.dynamicSectionBgLight }}>
                 {renderSectionTitle(sectionData.title || "Our Approach")}
                 {sectionData.image && (
                     <div className="mb-5 text-center">
                         <img src={sectionData.image} alt={sectionData.title || "Process Steps"} className="img-fluid rounded shadow-sm" style={{ maxWidth: '600px' }} />
                     </div>
                 )}
                 <div className="row justify-content-center">
                     <div className="col-md-10 col-lg-9">
                         <ol className="list-unstyled">
                             {steps.map((step, idx) => (
                                 <li key={idx} style={dynamicStyles.stepItem}>
                                     <div style={dynamicStyles.stepNumber}>{idx + 1}</div>
                                     <div>
                                         {/* Apply themed text color to step title */}
                                         <h6 className="fw-semibold mb-1" style={{ color: currentTheme.textPrimary }}>{step.title}</h6>
                                         {/* renderParagraphs applies themed text color */}
                                         {step.description && renderParagraphs(step.description, {marginBottom: '0'})}
                                     </div>
                                 </li>
                             ))}
                         </ol>
                     </div>
                 </div>
             </section>
         );
     };

    // Render Features/Benefits (Card Style)
    const renderFeatures = () => data.features && Array.isArray(data.features) && data.features.length > 0 && (
        <section style={dynamicStyles.dynamicSection}>
            {renderSectionTitle(data.features.title || "Key Benefits")}
            <div className="row g-4 justify-content-center">
                {data.features.map((feature, idx) => renderCard(feature, idx, 'feature'))}
            </div>
        </section>
    );

    // Render Target Audience
    const renderTargetAudience = () => data.targetAudience && data.targetAudience.list && Array.isArray(data.targetAudience.list) && (
        <section style={{ ...dynamicStyles.dynamicSection, ...dynamicStyles.dynamicSectionBgAccent }}>
            {renderSectionTitle(data.targetAudience.title || "Who Should Attend?")}
            {data.targetAudience.introText && <div className="fs-5 text-center mx-auto mb-4" style={{ maxWidth: "800px" }}>{renderParagraphs(data.targetAudience.introText)}</div>}
            <ul style={{ ...dynamicStyles.listStyleBase, ...dynamicStyles.audienceList, ...(data.targetAudience.list.length > 6 ? dynamicStyles.audienceColumns : {}) }}>
                {data.targetAudience.list.map((item, index) => (
                    <li key={index} style={{ ...dynamicStyles.listItemBase, ...dynamicStyles.audienceListItem }}>
                        <Icons.UserCheck size={20} style={dynamicStyles.listGroupIcon} />
                        {/* Apply themed text color to list item text */}
                        <span style={{color: dynamicStyles.listItemBase.color}}>{item}</span>
                    </li>
                ))}
            </ul>
            {data.targetAudience.prerequisite && (
                <span style={dynamicStyles.prerequisiteNote}>{data.targetAudience.prerequisite}</span>
            )}
        </section>
    );

    // Render Course Content
     const renderCourseContent = () => data.courseContent && data.courseContent.modules && Array.isArray(data.courseContent.modules) && (
        <section style={dynamicStyles.dynamicSection}>
            {renderSectionTitle(data.courseContent.title || "Course Outline")}
            {data.courseContent.introText && <div className="fs-5 text-center mx-auto mb-4" style={{ maxWidth: "800px" }}>{renderParagraphs(data.courseContent.introText)}</div>}
            {data.courseContent.image && (
                <div className="mb-4 text-center">
                    <img src={data.courseContent.image} alt="Course Content Visual" className="img-fluid rounded shadow-sm" style={{ maxWidth: '600px', margin: 'auto' }} />
                </div>
            )}
             <ul style={{ ...dynamicStyles.listStyleBase, ...dynamicStyles.courseModulesList }}>
                {data.courseContent.modules.map((moduleText, index) => (
                    <li key={index} style={{ ...dynamicStyles.listItemBase, ...dynamicStyles.courseModuleItem }}>
                        <span style={dynamicStyles.courseModuleItemBefore}></span>
                         {/* Apply themed text color to module text */}
                        <span style={{color: dynamicStyles.listItemBase.color}}>{moduleText}</span>
                    </li>
                ))}
            </ul>
        </section>
    );

    // Render Methodology
    const renderMethodology = () => data.methodology && data.methodology.points && Array.isArray(data.methodology.points) && (
        <section style={{ ...dynamicStyles.dynamicSection, ...dynamicStyles.dynamicSectionBgLight }}>
            <div className="row g-4 align-items-center">
                <div className={data.methodology.image ? "col-lg-7" : "col-12"}>
                    {renderSectionTitle(data.methodology.title || "Training Methodology")}
                    {data.methodology.introText && <div className="fs-5 mb-4">{renderParagraphs(data.methodology.introText)}</div>}
                    <ul style={{ ...dynamicStyles.listStyleBase, ...dynamicStyles.methodologyList }}>
                        {data.methodology.points.map((point, index) => (
                            <li key={index} style={{ ...dynamicStyles.listItemBase, ...dynamicStyles.methodologyListItem }}>
                                <Icons.CheckCircle size={20} style={dynamicStyles.listGroupIcon} />
                                 {/* Apply themed text color to list item text */}
                                <span style={{color: dynamicStyles.listItemBase.color}}>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {data.methodology.image && (
                    <div className="col-lg-5 text-center">
                        <img src={data.methodology.image} alt="Training Methodology" className="img-fluid rounded shadow" style={{maxWidth: '450px'}}/>
                    </div>
                )}
            </div>
        </section>
    );

    // Render Clients Section
    const renderClients = () => data.clients && (
        <section style={{...dynamicStyles.dynamicSection, paddingBottom: '1rem'}} className="text-center">
            {renderSectionTitle(data.clients.title || "Trusted By")}
            <div className="container">
                 {data.clients.logos && Array.isArray(data.clients.logos) && data.clients.logos.length > 0 ? (
                     <div className="row justify-content-center align-items-center mt-4">
                         {data.clients.logos.map((logo, index) => (
                             <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
                                 <img src={logo.image} alt={logo.name || `Client ${index + 1}`} className="img-fluid" style={{ maxHeight: '60px', filter: 'grayscale(70%)', opacity: 0.8 }} />
                             </div>
                         ))}
                     </div>
                 ) : data.clients.image ? (
                    <img
                        src={data.clients.image}
                        alt="Client Logos"
                        className="img-fluid"
                        style={{ maxHeight: '1000px', width: 'auto', margin: 'auto', filter: 'grayscale(60%)', opacity: 0.75 }}
                    />
                 ) : null}
                {data.clients.text && <div className="fs-5 mt-3 text-muted">{renderParagraphs(data.clients.text)}</div>}
            </div>
        </section>
    );

     // Render Form Section
     const renderForm = () => data.form && (
         <section id="contact-form-section" style={{ ...dynamicStyles.dynamicSection, ...dynamicStyles.formSection }}>
             <div className="row justify-content-center">
                 <div className="col-lg-8 col-md-10">
                     {renderSectionTitle(data.form.title || "Get In Touch")}
                     {data.form.description && <p className="text-center lead mb-4" style={{color: currentTheme.textSecondary}}>{data.form.description}</p>}
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="formName" style={dynamicStyles.formLabel}>Name</label>
                                <input type="text" id="formName" style={dynamicStyles.formInput} placeholder="Your Name" required />
                            </div>
                             <div className="col-md-6 mb-3">
                                <label htmlFor="formEmail" style={dynamicStyles.formLabel}>Email</label>
                                <input type="email" id="formEmail" style={dynamicStyles.formInput} placeholder="Your Email" required />
                            </div>
                        </div>
                         <div className="mb-3">
                             <label htmlFor="formSubject" style={dynamicStyles.formLabel}>Subject</label>
                             <input type="text" id="formSubject" style={dynamicStyles.formInput} placeholder="Training Inquiry: [Training Name]" defaultValue={`Training Inquiry: ${data.title || ''}`} required />
                         </div>
                         <div className="mb-3">
                              <label htmlFor="formMessage" style={dynamicStyles.formLabel}>Message</label>
                             <textarea id="formMessage" style={dynamicStyles.formTextarea} rows="5" placeholder="Your Message / Questions" required></textarea>
                         </div>
                         <div className="text-center mt-4">
                             {renderCtaButton(data.form.buttonTitle || "Submit Request")}
                         </div>
                     </form>
                 </div>
             </div>
         </section>
     );

    // --- Main Render Logic ---
    return (
        <Layout headerStyle={1} footerStyle={1}>
            {renderBanner()}

            <div className="container py-4">
                {/* Conditionally render sections based on data existence */}
                {renderIntro()}
                {renderWhyChoose()}

                 {/* Render the primary content block based on its key */}
                {data.pillars && renderPillars()}
                {data.keyConcepts && renderKeyConcepts('keyConcepts', 'Key Concepts')}
                {data.keyFocusAreas && renderKeyConcepts('keyFocusAreas', 'Key Focus Areas')}
                {data.keyLeanTools && renderKeyConcepts('keyLeanTools', 'Key Lean Tools')}
                {data.designThinkingPhases && renderKeyConcepts('designThinkingPhases', 'Design Thinking Phases')}
                {data.bscPerspectives && renderKeyConcepts('bscPerspectives', 'Balanced Scorecard Perspectives')}
                {data.processSteps && renderProcessSteps()}
                {data.keyTechniques && renderKeyConcepts('keyTechniques', 'Key Techniques')}
                {data.keyConceptsTools && renderKeyConcepts('keyConceptsTools', 'Key Concepts & Tools')}
                {data.keyTechniquesCovered && renderKeyConcepts('keyTechniquesCovered', 'Key Techniques Covered')}
                {data.wcmPillars && renderKeyConcepts('wcmPillars', 'WCM Pillars')}
                {data.ppapElements && renderKeyConcepts('ppapElements', 'Key PPAP Elements')}
                {data.keyStrategies && renderKeyConcepts('keyStrategies', 'Key Strategies')}
                {data.keyTools && renderKeyConcepts('keyTools', 'Key Tools Covered')}

                {renderFeatures()}
                {renderTargetAudience()}
                {renderCourseContent()}
                {renderMethodology()}
                {renderClients()}
                {renderForm()}

            </div>
        </Layout>
    );
}

// --- END OF FILE page.js (for Training Pages) ---