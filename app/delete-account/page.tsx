"use client";

import { motion } from "framer-motion";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-[100dvh] px-4 pb-20 pt-24 text-[#ead9b8] sm:pt-28 md:pt-32">
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full font-explora text-[clamp(3.5rem,10vw,8rem)] leading-[0.82] text-[#ead9b8] italic"
        >
          Delete Account
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 w-full font-montserrat text-lg font-light tracking-wide text-[#bca585]"
        >
          Mimesa by armaaxs
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
              <h2 className="text-2xl font-bold mb-6 text-[#ead9b8]">How to Delete Your Account</h2>
              <p className="mb-6">
                If you wish to delete your account and all associated data from the Mimesa app, please follow these steps:
              </p>
              
              <ol className="list-decimal pl-5 space-y-4 text-[1.05rem]">
                <li>Open the Mimesa app and navigate to the <strong className="text-[#e4c89c]">Library</strong> page.</li>
                <li>Tap on the <strong className="text-[#e4c89c]">cog icon</strong> in the top right corner to open the Settings page.</li>
                <li>Scroll all the way down to the bottom of the Settings menu.</li>
                <li>Tap the <strong className="text-[#e4c89c]">Delete Account</strong> button and confirm your choice.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-[#ead9b8]">What Happens When You Delete Your Account?</h2>
              <p className="mb-4">
                Account deletion is comprehensive and permanent. When your account is deleted, we will remove all personal information associated with your account from our remote systems, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your authentication identifiers and email address.</li>
                <li>All saved books, chapters, and reading or listening progress.</li>
                <li>Your personalized settings and voice/narration preferences.</li>
                <li>Content you have submitted for narration generation.</li>
              </ul>
              
              <p className="mt-6 border-l-2 border-[#d86a10] pl-4 italic text-[#e4c89c]">
                Please note that this action is strictly irreversible. Once an account is deleted, your data cannot be recovered under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#ead9b8]">Contact Support</h2>
              <p className="mb-2">If you have any issues deleting your account directly through the app, please reach out to us:</p>
              <p>Email: <a href="mailto:armaan@armaaxs.com" className="text-[#d86a10] hover:text-[#e4c89c] transition-colors underline underline-offset-4">armaan@armaaxs.com</a></p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}