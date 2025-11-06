"use client";

const processSteps = [
  {
    id: 1,
    title: "Initial Meeting",
    description:
      "We start with a short online or in-person meeting to understand your goals, preferences, and desired style. Together we define the website’s structure, content, and main features.",
    icon: "🤝",
  },
  {
    id: 2,
    title: "Design Concept",
    description:
      "Our design team creates the first visual concept of your website — layout, colors, and overall atmosphere. You’ll receive a preview and can share your feedback before we continue.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Development Phase",
    description:
      "Once the design is approved, our developers bring it to life. We build a responsive, fast, and optimized website using modern technologies tailored to your business needs.",
    icon: "💻",
  },
  {
    id: 4,
    title: "Demo & Feedback",
    description:
      "We present a live demo version of your website. Together we review every page, discuss possible changes, and make adjustments until you’re 100% satisfied.",
    icon: "🧪",
  },
  {
    id: 5,
    title: "Launch & Ongoing Support",
    description:
      "After final approval, we launch your website to the world 🌍. We also provide hosting, maintenance, and continuous support to keep everything running smoothly.",
    icon: "🚀",
  },
];

export default function WorkProcessTree() {
  return (
    <div className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                  <h4 className="text-xl font-semibold text-black">
                    {step.title}
                  </h4>
                </div>
                <p className="text-black text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
