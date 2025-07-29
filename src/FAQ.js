import React from "react";

function FAQ() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-start py-5 sm:py-10 px-5 sm:px-20 sm:ap-x-20 gap-5 sm:gap-10">
      <div>
        <p className="font-semibold sm:text-xl">What is AnuTech?</p>
        <p className="text-justify">
          AnuTech is a product-based startup building modern web tools for
          students, startups, and small businesses. Each product is simple,
          scalable, and designed to solve real-world problems.
        </p>
      </div>
      <div>
        <p className="font-semibold sm:text-xl">Are these tools secure?</p>
        <p className="text-justify">
          Yes, we use Firebase Authentication and Firestore with secure rules.
          No sensitive data is shared or sold.
        </p>
      </div>
      <div>
        <p className="font-semibold sm:text-xl">Are your tools free to use?</p>
        <p className="text-justify">
          Yes! Most tools are free to try or use with basic features. Some
          advanced features may be part of a premium plan in the future.
        </p>
      </div>
      <div>
        <p className="font-semibold sm:text-xl">How can I contact you?</p>
        <p className="text-justify">
          Click the Reach Us button in the top-right or scroll down to the
          contact form. You can also email or message us directly on WhatsApp.
        </p>
      </div>

      <div>
        <p className="font-semibold sm:text-xl">Can I suggest a feature or give feedback?</p>
        <p className="text-justify">
          Absolutely! We’re actively improving. You can reach out via our [Reach
          Us] button or message us directly on WhatsApp/email.
        </p>
      </div>
      <div>
        <p className="font-semibold sm:text-xl"> How do I get started?</p>
        <p className="text-justify">
          Just click Explore Products on the homepage, pick a tool, and start
          using it. No sign-up is needed for most demos.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
