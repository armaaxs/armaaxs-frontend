"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[100dvh] px-4 pb-20 pt-24 text-[#ead9b8] sm:pt-28 md:pt-32">
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full font-explora text-[clamp(3.5rem,10vw,8rem)] leading-[0.82] text-[#ead9b8] italic"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 w-full font-montserrat text-lg font-light tracking-wide text-[#bca585]"
        >
          Effective date: May 23, 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-12 w-full rounded-2xl border border-[#e4c89c]/12 bg-[#07110a]/72 p-6 text-left font-montserrat sm:p-10 backdrop-blur-sm shadow-xl"
        >
          <div className="space-y-10 text-[#bca585] leading-relaxed">
            <section>
              <p>
                Mimesa (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) provides an audiobook and narration app (&ldquo;App&rdquo;). This Privacy Policy explains what information we collect, how we use it, and your rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Information We Collect</h2>
              <p className="mb-4">We may collect:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#e4c89c]">1. Account Information</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Email address and authentication identifiers when you sign in.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#e4c89c]">2. App Data</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Books you save, chapters, reading/listening progress, playback preferences (for example narration voice), and app settings.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#e4c89c]">3. User Content and Requests</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Text submitted for narration generation.</li>
                    <li>Report/feedback submissions you send in-app.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#e4c89c]">4. Technical and Usage Data</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Device/app diagnostics, crash logs, performance data, and request metadata needed to operate and debug the service.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#e4c89c]">5. Third-Party Source Data</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Metadata and audio links from public catalog providers (for example LibriVox, Gutendex) when you browse/search content.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">How We Use Information</h2>
              <p className="mb-4">We use information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide core app features (library, playback, narration generation, syncing).</li>
                <li>Save your progress and preferences across devices.</li>
                <li>Cache generated audio and improve playback performance.</li>
                <li>Monitor reliability, prevent abuse, and enforce usage limits.</li>
                <li>Respond to support requests and improve the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Legal Bases (where applicable)</h2>
              <p className="mb-4">Depending on your region, we process data under one or more of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Performance of a contract (providing the App).</li>
                <li>Legitimate interests (security, reliability, product improvement).</li>
                <li>Consent (where required).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Sharing</h2>
              <p className="mb-4">We do not sell personal information. We may share data with service providers that help us operate the App, such as:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Authentication/database providers.</li>
                <li>Cloud storage/CDN providers.</li>
                <li>Compute/inference providers.</li>
                <li>Analytics/error monitoring providers.</li>
              </ul>
              <p>These providers process data on our behalf under contractual controls.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Data Retention</h2>
              <p>
                We keep data for as long as needed to provide the App and for legitimate business/legal purposes. You may request deletion of your account data (see Contact section).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, export, or delete your data, and to object to or restrict certain processing. Contact us to exercise rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Children</h2>
              <p>
                The App is not directed to children under 13 (or the minimum age in your country). If you believe a child provided data, contact us and we will take appropriate steps.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Security</h2>
              <p>
                We use reasonable technical and organizational measures to protect data. No method of transmission/storage is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">International Transfers</h2>
              <p>
                Your data may be processed in countries other than your own. We apply appropriate safeguards where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Changes</h2>
              <p>
                We may update this Privacy Policy. We will update the effective date above and, where required, provide additional notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Contact</h2>
              <p className="mb-2">For privacy requests or questions:</p>
              <p>Email: <a href="mailto:privacy@mimesa.app" className="text-[#d86a10] hover:text-[#e4c89c] transition-colors underline underline-offset-4">privacy@mimesa.app</a></p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
