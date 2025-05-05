import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function PrivacyPolicyPage() {
    return (
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Privacy Policy">
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 sm:px-8 lg:px-16">
                    <h1 className="text-4xl font-semibold text-center mb-10">Privacy Policy</h1>

                    <div className="prose lg:prose-xl text-gray-700">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h2>
                        <p className="text-base text-gray-600 mb-4">
                            When you purchase something from our website, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address.
                        </p>
                        <p className="text-base text-gray-600 mb-4">
                            When you browse our website, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                        </p>
                        <p className="text-base text-gray-600 mb-10 ">
                            <strong>Email marketing (if applicable):</strong> With your permission, we may send you emails about our business, new products, and other updates.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 2 – CONSENT</h2>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">How do you get my consent?</h3>
                        <p className="text-base text-gray-600 mb-4">
                            When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery, or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
                        </p>
                        <p className="text-base text-gray-600 mb-4">
                            If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">How do I withdraw my consent?</h3>
                        <p className="text-base text-gray-600 mb-4">
                            If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information, at any time, by contacting us at <a href="mailto:tms@tetrahedron.in" className="text-blue-600">tms@tetrahedron.in</a> or mailing us at Main Office: G7-Ground Floor, near Hindi Khabar, Sector 63, Noida – 201307.
                        </p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 3 – DISCLOSURE</h2>
                        <p>We may disclose your personal information if required by law or if you violate our Terms of Service.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 4 – PAYMENT</h2>
                        <p className="text-base text-gray-600 mb-4">
                            We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
                        </p>

                        <p className="text-base text-gray-600 mb-4">
                            Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.
                        </p>

                        <p className="text-base text-gray-600 mb-4">
                            PCI-DSS requirements help ensure the secure handling of credit card information by our website and its service providers. For more insight, you may also want to read terms and conditions of Razorpay on <a href="https://razorpay.com" className="text-blue-600">https://razorpay.com</a>.
                        </p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 5 – THIRD-PARTY SERVICES</h2>
                        <p className="text-base text-gray-600 mb-4">
                            In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us.
                        </p>

                        <p className="text-base text-gray-600 mb-4">
                            However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
                        </p>

                        <p className="text-base text-gray-600 mb-4">
                            For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
                        </p>

                        <p className="text-base text-gray-600 mb-4">
                            In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                        </p>

                        <p className="text-base text-gray-600 mb-4">
                            Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
                        </p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 6 – SECURITY</h2>
                        <p>We follow industry standards to protect your personal information from misuse or unauthorized access.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 7 – COOKIES</h2>
                        <p>We use cookies to maintain session data. They are not used to personally identify you on other websites.</p>

                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 8 – AGE OF CONSENT</h2>
                        <p className="text-base text-gray-600 mb-4">
                            By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                        </p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">SECTION 9 – CHANGES TO THIS PRIVACY POLICY</h2>
                        <p className="text-base text-gray-600 mb-4">
                            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
                        </p>
                        <p className="text-base text-gray-600 mb-4">
                            If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">QUESTIONS AND CONTACT INFORMATION</h2>
                        <p className="text-base text-gray-600 mb-4">
                            If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a href="mailto:tms@tetrahedron.in" className="text-blue-600">tms@tetrahedron.in</a> or mailing us at Main Office: G7-Ground Floor, near Hindi Khabar Sector 63, Noida – 201307.
                        </p>                    </div>
                </div>
            </section>
        </Layout>
    );
}
