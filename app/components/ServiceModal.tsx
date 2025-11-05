"use client";

interface ServiceDetails {
  title: string;
  description: string;
  details: string[];
  ideal: string;
  price: string;
}

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceDetails | null;
  onClose: () => void;
}) {
  if (!service) return null;

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ fontFamily: '"Cy Grotesk Grand", sans-serif' }}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: '#fffaea' }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black hover:text-gray-700 text-3xl transition-colors font-light leading-none"
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="text-4xl font-bold mb-4 text-black">
          {service.title}
        </h2>

        <p className="text-lg text-black mb-6">{service.description}</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-black mb-3">
            What's included:
          </h3>
          <ul className="space-y-3">
            {service.details.map((detail: string, index: number) => (
              <li key={index} className="flex items-start text-black">
                <span className="text-black mr-3 mt-1 font-bold">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-black mb-2">
            Ideal for:
          </h3>
          <p className="text-black">{service.ideal}</p>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <a
            href="#contact"
            onClick={(e) => {
              handleSmoothScroll(e, "#contact");
              onClose();
            }}
            className="inline-block px-8 py-3 bg-white rounded-full font-semibold text-lg text-black hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}


