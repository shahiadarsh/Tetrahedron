// import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from "@/components/layout/Layout"; // Assuming Layout is in this path

// Metadata for SEO
// export const metadata: Metadata = {
//   title: 'Terms of Service | Tetrahedron', // Customize Your Company Name
//   description: 'Read the Terms of Service governing the use of the Tetrahedron website and associated services.',
// };

// The Page Component
export default function TermsOfServicePage() {
  // --- Configuration Variables (Update These) ---
  const effectiveDate = "October 26, 2023"; // <-- IMPORTANT: Keep this date accurate!
  const companyName = "Tetrahedron";
  const companyWebsiteDomain = "tetrahedron.in"; // Just the domain for clarity in text
  const companyWebsiteUrl = "https://www.tetrahedron.in";
  const companyEmail = "info@tetrahedron.in"; // Or your legal/support email
  const privacyPolicyPath = "/privacy-policy"; // Path to your privacy policy
  // --- End Configuration Variables ---

  return (
    // Use the Layout component, passing props as needed (like breadcrumbTitle)
    <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Terms of Service">

      {/* Main content section for the Terms */}
      {/* Using py-* for padding, bg-white for background */}
      <section className="terms-content py-12 md:py-16 lg:py-20 bg-white">
        {/* Centered container with max-width for readability */}
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">

          {/* Optional: Explicit Title within the content area if Layout doesn't handle it prominently */}
          {/* <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center border-b pb-4">
             Terms of Service
           </h1> */}

          <p className="text-sm text-gray-600 mb-10 text-center">
            Effective Date: {effectiveDate}
          </p>

          {/* Using Tailwind Typography plugin classes (`prose`) for nice default text styling */}
          {/* If not using @tailwindcss/typography, style h2, p, ul, ol manually */}
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:underline">

            <h2>1. Introduction and Acceptance</h2>
            <p>
              Welcome to {companyName}. These Terms of Service ("Terms") govern your access to and use of the website located at {companyWebsiteDomain} (the "Website") and any related services, features, content, or applications offered by {companyName} (collectively, the "Services").
            </p>
            <p>
              By accessing or using the Website or Services, you agree to be bound by these Terms and our <Link href={privacyPolicyPath}>Privacy Policy</Link>. If you do not agree to these Terms or the Privacy Policy, you must not access or use the Website or Services. Please read these Terms carefully.
            </p>

            <h2>2. Use of the Website and Services</h2>
            <p>
              You agree to use the Website and Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate {companyName}, a {companyName} employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm {companyName} or users of the Services, or expose them to liability.</li>
              <li>In any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Services.</li>
            </ul>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              The Website and Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by {companyName}, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms permit you to use the Services for your personal, non-commercial use only, or for legitimate business purposes related to your role as a current or prospective customer, supplier, or partner of {companyName}. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as generally and ordinarily permitted through the Services according to these Terms.
            </p>

            <h2>4. User Contributions (If Applicable)</h2>
            <p>
              [If your site allows user comments, submissions, forum posts, etc., include a section here outlining rules, ownership, and licenses related to that content. If not applicable, you can omit this section or state that user contributions are not permitted.]
            </p>
            {/* Example placeholder: <p>The Services may contain features that allow users to post, submit, publish, display, or transmit content. All user contributions must comply with these Terms...</p> */}

            <h2>5. Disclaimers</h2>
            <p>
              The information presented on or through the Services is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.
            </p>
            <p>
              YOUR USE OF THE WEBSITE AND SERVICES IS AT YOUR OWN RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NEITHER {companyName} NOR ANY PERSON ASSOCIATED WITH {companyName} MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL {companyName}, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, OR ANY SERVICES OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless {companyName}, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
            </p>

            <h2>8. Governing Law and Jurisdiction</h2>
            <p>
              All matters relating to the Services and these Terms, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of [Your Jurisdiction, e.g., India, or State of Delaware, USA] without giving effect to any choice or conflict of law provision or rule.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the courts located in [Your City/Region of Jurisdiction, e.g., Ludhiana, Punjab, India]. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
            </p>

            <h2>9. Changes to the Terms of Service</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Services thereafter. The date the Terms were last revised is identified at the top of the page.
            </p>
            <p>
              Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: <a href={`mailto:${companyEmail}`}>{companyEmail}</a><br />
              Website: <a href={companyWebsiteUrl}>{companyWebsiteUrl}</a>
              {/* Optionally add physical address */}
            </p>

          </div> {/* End prose container */}
        </div> {/* End centered container */}
      </section> {/* End terms-content section */}

    </Layout> // End Layout wrapper
  );
}