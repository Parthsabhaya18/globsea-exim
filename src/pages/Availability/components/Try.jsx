import { useState, useRef } from "react";

const referrals = [
  { name: "Sabhay Parth", status: "Yet to purchase" },
  { name: "Alex Kim", status: "Purchased" },
  { name: "Jaya Rao", status: "Purchased" },
];

const Try = () => {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false); 
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  const completed = referrals.filter((r) => r.status === "Purchased").length;
  const total = referrals.length;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-2">🚴 Refer & Earn</h1>
          <p className="text-lg text-gray-600">
            Invite 3 friends and get a <span className="text-orange-500 font-semibold">Free E-bike</span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-2">
            Progress: {completed} of {total} referrals complete
          </p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-teal-500 h-3 rounded-full transition-all"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>

        {/* Referral Code Section */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-6 text-center">
          <p className="text-teal-700 text-lg font-medium mb-2">Your Referral Code</p>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium shadow inline-block">
            210356
          </span>
        </div>

        {/* Referral Link Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <p className="text-gray-700 font-medium mb-1">Your Referral Link</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
            <input
              type="text"
              readOnly
              ref={inputRef}
              value="https://yourcompany.com/ref/210356"
              onMouseDown={(e) => e.preventDefault()} // prevent selection
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 font-mono shadow-sm cursor-default"
            />
            <button
              onClick={handleCopy}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition font-medium shadow"
            >
              {copied ? "Link Copied!" : "Copy Link"}
            </button>
          </div>

          {/* Social Media Sharing */}
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-sm font-medium text-gray-600">Share via:</p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent("Join me and earn rewards! 👉 https://yourcompany.com/ref/210356")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline font-medium"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://yourcompany.com/ref/210356")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("https://yourcompany.com/ref/210356")}&text=${encodeURIComponent("Refer and earn a free E-bike! 🚴")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-medium"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Referrals Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">👥 Your Referrals</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {referrals.map((ref, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg">
                  {ref.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-800">{ref.name}</h3>
                  <p className="text-sm mt-1">
                    Status:{" "}
                    <span className={ref.status === "Purchased" ? "text-green-500" : "text-red-500"}>
                      {ref.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Try;
