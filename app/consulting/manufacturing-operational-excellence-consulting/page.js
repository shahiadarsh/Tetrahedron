"use client";

import Layout from "@/components/layout/Layout";
import styles from "./Consulting.module.css";
import { useState } from "react";

export default function ConsultingPage() {
  const [openFAQs, setOpenFAQs] = useState({}); // Object to track multiple open states

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the selected FAQ
    }));
  };

  return (
    <Layout>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}>
            <h1>Operational Excellence Solutions</h1>
            <p>Reduce Manufacturing Cost & Increase Productivity</p>
            <ul>
              <li>✅ Boost Profit Margins</li>
              <li>✅ Optimize Resources</li>
              <li>✅ Drive Innovation</li>
              <li>✅ Enhance Quality</li>
              <li>✅ Streamline Processes</li>
            </ul>
          </div>
        </div>

        {/* Improvement Areas */}
        <section className={styles.improvementSection}>
          <div className={styles.improvementCardContainer}>
            {[
              "Productivity Improvement",
              "Delivery Performance Improvement",
              "Quality Improvement",
              "Safety Improvement",
              "Manufacturing Cost Reduction",
              "Manpower Optimization",
            ].map((title, index) => (
              <div key={index} className={styles.improvementCard}>
                <h5>{title}</h5>
              </div>
            ))}
          </div>
        </section>

        {/* About Operational Excellence Consulting */}
        <section className={styles.aboutSection}>
          <p>
            Operational Excellence Consulting provides a holistic approach to
            help your organization achieve its desired goals. Tetrahedron
            deploys various tools and techniques that align the organization’s
            culture, enable employees, and sustain all implemented initiatives.
            The Manufacturing Operational Excellence programs are also used in
            different formats in part or whole with names like Operational
            Excellence, World Class Manufacturing (WCM), Total Productive
            Maintenance (TPM), Total Quality Management (TQM), and many more.
          </p>
          <p>
            The main motive of operational excellence consulting is to reduce
            costs with improvements, with the primary objective being to
            increase growth and gain a competitive edge. By improving
            operational speed, agility, and responsiveness, Tetrahedron enables
            you to grow your profitability (Bottom Line) five times faster than
            your revenue (Top Line). With lean manufacturing consultants,
            businesses and industries can experience our sustainable approach to
            scaling their business.
          </p>
        </section>

        {/* About Section with Image */}
        <section className={styles.aboutImageSection}>
          <div className={styles.aboutImageContainer}>
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_768/https://www.tetrahedron.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-5.52.21-PM-768x492.jpeg"
              alt="Operational Excellence"
              style={{maxWidth:'400px'}}
            />
          </div>
          <div className={styles.aboutTextContainer}>
            <p>
              To stay ahead of competitors and drive desired business outcomes,
              companies must imagine their operations and processes holistically
              in response to evolving marketplace competition and digital
              technology disruption.
            </p>
            <p>
              Our Operational Excellence Services help organizations overcome
              challenges by developing and deploying top-tier business skills.
              As a lean manufacturing consultant, we play a pivotal role in
              successful business transformations.
            </p>
          </div>
        </section>

        {/* Objective Section */}
        <section className={styles.objectiveSection}>
          <h1>Objective of Operational Excellence in Manufacturing</h1>
          <div className={styles.objectiveCardContainer}>
            {[
              "Employee Engagement",
              "Profitability Improvement",
              "Business Sustenance",
            ].map((title, index) => (
              <div key={index} className={styles.objectiveCardWrapper}>
                <div className={styles.objectiveCard}>
                  <img
                    src="https://www.tetrahedron.in/wp-content/uploads/2023/01/11.jpg"
                    alt="Objective Image"
                    // style={{maxWidth:'500px'}}
                  />
                </div>
                <div className={styles.objectiveCardText}>
                  <h5>{title}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Challenges Section */}
        <section className={styles.challengesSection}>
          <h1>
            Key Challenges in Implementing an Operational Excellence Strategy
          </h1>
          <p>
            Manufacturing companies have been facing significant challenges for
            their survival while implementing an operational excellence strategy
            in these areas:
          </p>

          <div className={styles.challengesImageContainer}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={styles.challengesImageWrapper}>
                <img
                  src="https://www.tetrahedron.in/wp-content/uploads/2021/09/Untitled-design-86.jpg"
                  alt={`Challenge ${index + 1}`}
                  className={styles.challengesImage}
                />
                <h5>{`Challenge ${index + 1}`}</h5>
              </div>
            ))}
          </div>

          <p>
            Though these challenges are external factors that can’t be
            controlled by any company, the one and only way to remain
            sustainable is by a structured manufacturing operations strategy
            consulting approach.
          </p>
        </section>

        {/* Comparison Section */}
        <section className={styles.comparisonSection}>
          <h1>Operational Excellence V/s Process Improvement</h1>
          <div className={styles.comparisonContentWrapper}>
            {/* Left side - Table */}
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Operational Excellence</th>
                  <th>Process Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Focuses on Gain and Sustain</td>
                  <td>Focuses on Gain only</td>
                </tr>
                <tr>
                  <td>Strengthening of organization</td>
                  <td>Strengthening of process</td>
                </tr>
                <tr>
                  <td>Includes the whole organization</td>
                  <td>Includes a person/ small team</td>
                </tr>
                <tr>
                  <td>Top-Down Approach</td>
                  <td>Bottom-Up Approach</td>
                </tr>
                <tr>
                  <td>Scope extends to customers & suppliers</td>
                  <td>Scope mostly limited to a department/ section</td>
                </tr>
                <tr>
                  <td>Aligned with organization vision and mission</td>
                  <td>Aligned with processes’ cost, safety, and quality</td>
                </tr>
                <tr>
                  <td>Unique and can’t be copied for another organization</td>
                  <td>Can be replicated/copied to another</td>
                </tr>
                <tr>
                  <td>Works like an immune booster to face challenges</td>
                  <td>Works like medicine to relieve pain quickly</td>
                </tr>
              </tbody>
            </table>

            {/* Right side - Paragraphs */}
            <div className={styles.comparisonTextContent}>
              <p>
                Most of the time, organizations confuse these two terms and are
                under the false impression of driving Operational Excellence
                while implementing Process Improvement Kaizens.
              </p>
              <p>
                So what should the organization go for: A Kaizen/Improvement
                Program or Drive an Operational Excellence Program?
              </p>
              <p>
                The answer is simple → Both of these are required with the right
                context and requirement.
              </p>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className={styles.feedbackSection}>
          <h1>Client's Heartfelt Feedback</h1>
          <div className={styles.feedbackWrapper}>
            {/* Left side - Text */}
            <div className={styles.feedbackTextContent}>
              <p>
                Tetrahedron has rapidly established a new standard in
                manufacturing consulting by consistently earning client trust
                through our dedication to excellence. Our expert team is
                committed to delivering high-quality projects on time. With a
                focus on reliability and superior results, we ensure that each
                project meets the highest standards, setting us apart as a
                leader in the industry and a trusted partner for success.
              </p>
            </div>

            {/* Right side - Video */}
            <div className={styles.feedbackVideoContainer}>
              <video controls src="video.mp4"></video>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className={styles.caseStudySection}>
          <h1>Case Study: Real-World Operational Excellence Examples</h1>

          <div className={styles.caseStudyContainer}>
            {/* Case Study 1 */}
            <div className={styles.caseStudy}>
              <h2>Material Handling and Process Automation</h2>
              <h4>(India’s Largest Precious Metal Exporters)</h4>

              <h3>Challenges:</h3>
              <ul>
                <li>
                  Extremely labor-intensive operations resulting in high costs
                </li>
                <li>High pilferage of precious raw materials</li>
                <li>
                  Quarterly INR 40 Lacs of raw material unaccountable or
                  pilfered
                </li>
              </ul>

              <h3>Approaches:</h3>
              <p>
                Tetrahedron helped the company turn around its operations in an
                industry resistant to change. The following results have been
                achieved:
              </p>

              <h3>Results:</h3>
              <ul>
                <li>15% reduction in manpower; 20% reduction still ongoing</li>
                <li>Truck Loading Time Reduced by 28%</li>
                <li>Contract Worker Cost Reduction by 42% (18 to 10)</li>
              </ul>
            </div>

            {/* Case Study 2 */}
            <div className={styles.caseStudy}>
              <h2>Manufacturing Excellence in Flock Manufacturing</h2>
              <h4>(India’s Leading Velvet Cloth Manufacturing)</h4>

              <h3>Challenges:</h3>
              <ul>
                <li>Low productivity leading to lower VAPE</li>
                <li>High WIP and inventory due to improper planning</li>
                <li>Manual loading leading to high labor and time</li>
              </ul>

              <h3>Approaches:</h3>
              <p>
                Tetrahedron implemented SOPs to improve production planning,
                reduce WIP, and eliminate order production mismatches.
                Additionally, low-cost automation for material handling was
                designed.
              </p>

              <h3>Results:</h3>
              <ul>
                <li>VAPE improved by 17%</li>
                <li>WIP reduction by 23%</li>
              </ul>
            </div>
          </div>

          <button className={styles.readMoreButton}>Read More Case Studies</button>
        </section>

        {/* Serving Section */}
        <section className={styles.servingSection}>
          <h1>Serving These Manufacturing Industries</h1>
          <div className={styles.servingContainer}>
            <img src="/assets/images/m1.jpeg" alt="Industry 1" />
            <img src="/assets/images/m2.jpeg" alt="Industry 2" />
            <img src="/assets/images/m3.jpeg" alt="Industry 3" />
            {/* <img src="/assets/images/m4.jpeg" alt="Industry 4" /> */}
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h1>Benefits of Operational Excellence Consulting</h1>

          <div className={styles.benefitsContainer}>
            {/* Left Side - Benefits List */}
            <div className={styles.benefitsList}>
              <ul>
                <li>Exceeding Organizational Target</li>
                <li>Sustenance of Improvement</li>
                <li>Improving Employee Engagement</li>
                <li>Achieving Zero Defect Condition</li>
                <li>Improving Productivity</li>
                {/* <li>Manufacturing Cost Reduction</li>
                <li>Achieving Zero Effect Environment</li>
                <li>Achieving Zero Delay in Delivery</li>
                <li>Achieving Zero Harm in Workplace</li> */}
              </ul>
            </div>

            {/* Right Side - CTA */}
            <div className={styles.ctaSection}>
              <h3>
                To adhere to operational excellence in your Manufacturing
                Business
              </h3>
              <button className={styles.talkExpertButton}>
                Talk to our expert
              </button>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className={styles.implementationSection}>
          <h1>Operational Excellence Implementation Process</h1>
        </section>

        {/* Our Clients Section */}
        <section className={styles.clientSection}>
          <h1>Our Clients</h1>
          <div className={styles.imageContainer}>
            <img
              src="/assets/images/client.jpg"
              alt="Clients"
              className={styles.clientImage}
            />
          </div>
        </section>


        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h1>FAQs</h1>
          <div className={styles.faqContainer}>

            {/* FAQ 1 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(1)}>
                <span>{openFAQs[1] ? "−" : "+"}</span> What is Operational Excellence in manufacturing?
              </div>
              {openFAQs[1] && <p className={styles.faqAnswer}>Operational Excellence is a philosophy of continuous improvement in efficiency, quality, and business processes to optimize performance.</p>}
            </div>

            {/* FAQ 2 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(2)}>
                <span>{openFAQs[2] ? "−" : "+"}</span> Why is Manufacturing/Operational Excellence important?
              </div>
              {openFAQs[2] && <p className={styles.faqAnswer}>It enhances productivity, reduces costs, and improves overall competitiveness in the market.</p>}
            </div>

            {/* FAQ 3 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(3)}>
                <span>{openFAQs[3] ? "−" : "+"}</span> What are the benefits of Operational Excellence?
              </div>
              {openFAQs[3] && <p className={styles.faqAnswer}>Key benefits include cost savings, better resource utilization, and improved product quality.</p>}
            </div>

            {/* FAQ 4 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(4)}>
                <span>{openFAQs[4] ? "−" : "+"}</span> What are Operational Excellence goals?
              </div>
              {openFAQs[4] && <p className={styles.faqAnswer}>The goals focus on efficiency, waste reduction, employee engagement, and customer satisfaction.</p>}
            </div>

            {/* FAQ 5 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(5)}>
                <span>{openFAQs[5] ? "−" : "+"}</span> What are the KPI for Operational Excellence?
              </div>
              {openFAQs[5] && <p className={styles.faqAnswer}>KPIs include Overall Equipment Effectiveness (OEE), production yield, cycle time, and defect rates.</p>}
            </div>

            {/* FAQ 6 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(6)}>
                <span>{openFAQs[6] ? "−" : "+"}</span> Best Manufacturing consulting firms in India?
              </div>
              {openFAQs[6] && <p className={styles.faqAnswer}>Some top firms include Tetrahedron, McKinsey, and BCG specializing in manufacturing excellence.</p>}
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
}