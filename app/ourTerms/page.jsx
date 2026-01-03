export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: January 2026
        </p>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            1. About Threadix
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Threadix is an online e-commerce store based in Egypt, specializing in
            print-on-demand clothing products. The store is currently not a
            registered legal entity and operates as an individual online business.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            2. Products & Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>All products are print-on-demand (POD).</li>
            <li>All designs displayed on the website are original and owned by Threadix.</li>
            <li>Custom printed products are not eligible for return or refund.</li>
            <li>Product colors may slightly vary due to screen settings and lighting.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            3. Orders & Payment
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Orders can only be placed by registered users.</li>
            <li>Orders may be canceled at any time before payment.</li>
            <li>Available payment methods:</li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Cash on Delivery (COD)</li>
              <li>InstaPay</li>
              <li>Vodafone Cash</li>
            </ul>
            <li>All prices are listed in Egyptian Pounds (EGP) and include applicable taxes.</li>
            <li>
              After placing an order, Threadix will confirm your order by phone. 
              Another confirmation call will be made once the order is delivered.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            4. Shipping & Delivery
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Delivery areas: Cairo, Giza, and Qalyubia.</li>
            <li>Shipping fees:</li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Cairo & Giza: 50 EGP</li>
              <li>Qalyubia: 75 EGP</li>
            </ul>
            <li>
              Other governorates are handled by third-party shipping companies or
              arranged by the customer.
            </li>
            <li>Estimated delivery time is approximately 3 days, depending on the area.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            5. Cancellation, Refund & Exchange Policy
          </h2>

          <h3 className="font-medium text-gray-700 mt-4 mb-1">Cancellation</h3>
          <p className="text-gray-600">
            Orders may be canceled only before payment is completed.
          </p>

          <h3 className="font-medium text-gray-700 mt-4 mb-1">Refunds</h3>
          <p className="text-gray-600">
            Refunds are only available if the order has not been delivered. No refunds
            are provided after successful delivery.
          </p>

          <h3 className="font-medium text-gray-700 mt-4 mb-1">Exchanges</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Exchanges are allowed within 14 days of delivery.</li>
            <li>Custom printed products cannot be exchanged.</li>
            <li>Shipping fees for exchanges are covered by the customer.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            6. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All designs, images, logos, and content on Threadix are intellectual
            property of Threadix. Copying or reproducing any content without written
            permission is strictly prohibited and illegal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            7. User Accounts
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Users must create an account to place orders.</li>
            <li>Users are responsible for keeping their passwords secure.</li>
            <li>Threadix is not responsible for unauthorized access caused by user negligence.</li>
            <li>Account deletion is not available at this time.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            Threadix is not liable for delays caused by shipping companies, incorrect
            customer-provided information, color variations, or issues caused by
            third-party services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            9. Third-Party Responsibility
          </h2>
          <p className="text-gray-600">
            Threadix is not responsible for third-party payment providers or shipping
            companies used outside Cairo, Giza, and Qalyubia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            10. Order Confirmation Calls
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For every order placed on Threadix, our team will contact you by phone to confirm your order details.
            Once your order is delivered, we will make an additional call to confirm successful delivery and customer satisfaction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            11. Contact Information
          </h2>
          <div className="text-gray-600 space-y-1">
            <p>Email: <span className="font-medium">cs.threadix@gmail.com</span></p>
            <p>Phone: <span className="font-medium">01100240856</span></p>
          </div>
        </section>

      </div>
    </div>
  );
}
