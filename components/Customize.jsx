'use client';

const Customize = () => {
  const whatsappNumber = '+0201100240856';
  const whatsappMessage = 'Hi Threadix! I want to create a custom design for my order.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="customize">
      <div className="customize-container">
        <div className="customize-content">
          <h2>Create Your Custom Design</h2>
          <p className="customize-subtitle">
            Have an idea? Let's bring it to life!
          </p>
          <div className="customize-description">
            <h4 className="text-2xl mb-10">
              Don't see what you're looking for?
            </h4>
            <p>
              No problem! We offer custom design services where you can:
            </p>
            <ul className="customize-features">
              <li>Design your own unique artwork</li>
              <li>Choose your preferred colors and styles</li>
              <li>Add custom text or logos</li>
              <li>Get professional printing on quality apparel</li>
            </ul>
            <p className="customize-cta">
              Click below to tell us about your vision, and our team will help you create something amazing!
            </p>
          </div>
          <button 
            className="customize-button" 
            onClick={handleWhatsAppClick}
          >
            Contact via WhatsApp
          </button>
        </div>
        <div className="customize-image">
          <div className="customize-icon" role="img" aria-label="Customize design"></div>
        </div>
      </div>
    </section>
  );
};

export default Customize;
