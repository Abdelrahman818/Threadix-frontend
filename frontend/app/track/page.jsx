import '@/styles/track.css'

export default function Tracking() {
  return (
    <div className="tracking-page">

      <h1 className="title">Order Tracking</h1>

      {/* ======== Track Input ======== */}
      <div className="track-box">
        <input type="text" placeholder="Enter Order Number" />
        <button>Track Order</button>
      </div>

      {/* ======== Order Details ======== */}
      <div className="order-info">
        <h2>Order Details</h2>

        <div className="info-row">
          <span>Order Number:</span>
          <span>#123456</span>
        </div>

        <div className="info-row">
          <span>Status:</span>
          <span>Shipped</span>
        </div>

        <div className="info-row">
          <span>Estimated Delivery:</span>
          <span>Dec 5, 2025</span>
        </div>
      </div>

      {/* ======== Tracking Steps ======== */}
      <div className="steps">
        <div className="step completed">
          <div className="circle"></div>
          <p>Order Placed</p>
        </div>

        <div className="step completed">
          <div className="circle"></div>
          <p>Processing</p>
        </div>

        <div className="step completed">
          <div className="circle"></div>
          <p>Shipped</p>
        </div>

        <div className="step">
          <div className="circle"></div>
          <p>Out for Delivery</p>
        </div>

        <div className="step">
          <div className="circle"></div>
          <p>Delivered</p>
        </div>
      </div>

    </div>
  );
}
