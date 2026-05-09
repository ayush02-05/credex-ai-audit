import React from "react";

const Result = () => {
  const tools = [
    {
      name: "Slack",
      current: "$400/mo",
      save: "$120/mo",
      action: "Downgrade to Pro",
      note: "15 inactive users detected",
      icon: "forum",
    },
    {
      name: "Zoom",
      current: "$150/mo",
      save: "$45/mo",
      action: "Consolidate seats",
      note: "Duplicate billing on 3 accounts",
      icon: "videocam",
    },
    {
      name: "Datadog",
      current: "$1,200/mo",
      save: "$300/mo",
      action: "Optimize retention",
      note: "Log retention exceeds requirement",
      icon: "monitoring",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-[#191c1e] font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Credex</h1>

          <div className="flex items-center gap-4 text-gray-600">
            <span className="material-symbols-outlined cursor-pointer hover:text-black">
              share
            </span>

            <span className="material-symbols-outlined cursor-pointer hover:text-black">
              download
            </span>

            <span className="material-symbols-outlined cursor-pointer hover:text-black">
              account_circle
            </span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-5xl font-bold mb-3">Tool Audit Results</h1>

          <p className="text-lg text-gray-600">
            Here is a breakdown of your current SaaS spend and optimization
            opportunities.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Savings Card */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-gray-500 text-lg mb-1">
                    Total Monthly Savings
                  </h3>

                  <div className="text-5xl font-bold text-green-600 mb-4">
                    $1,240
                  </div>

                  <h3 className="text-gray-500 text-lg mb-1">
                    Total Annual Savings
                  </h3>

                  <div className="text-3xl font-bold">$14,880</div>
                </div>

                <button className="bg-black text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition">
                  Capture these savings with Credex
                </button>
              </div>

              {/* Progress */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="uppercase tracking-wider text-sm text-gray-500 mb-3">
                  Optimization Progress
                </h4>

                <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
                  <div className="w-[45%] bg-green-600 h-3 rounded-full"></div>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>$0</span>
                  <span>45% Captured</span>
                  <span>$14,880</span>
                </div>
              </div>
            </section>

            {/* AI Summary */}
            <section className="bg-[#d6e3ff] rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-black">
                  auto_awesome
                </span>

                <h2 className="text-2xl font-bold">
                  AI Personalized Audit Summary
                </h2>
              </div>

              <p className="text-gray-700 leading-7">
                Based on your organization's usage patterns over the last 90
                days, we've identified significant inefficiencies across your
                communication and monitoring stack. The primary driver of waste
                is unassigned and dormant licenses, particularly within Slack
                and Zoom, suggesting a need for tighter offboarding protocols.
                Furthermore, your Datadog logging tiers are over-provisioned for
                current data throughput.
              </p>
            </section>

            {/* Tool Breakdown */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-8 border-b border-gray-200 pb-4">
                Per-Tool Breakdown
              </h2>

              <div className="flex flex-col gap-5">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-gray-600">
                          {tool.icon}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">{tool.name}</h3>

                        <p className="text-gray-500">Current: {tool.current}</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex flex-1 items-center px-4">
                      <div className="h-[1px] bg-gray-300 w-full relative">
                        <span className="material-symbols-outlined absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-1 text-gray-400">
                          arrow_forward
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="text-left md:text-right">
                      <h3 className="text-green-600 font-bold text-xl">
                        Save {tool.save}
                      </h3>

                      <p className="font-medium">{tool.action}</p>

                      <div className="mt-2 inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-md">
                        {tool.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Lead Form */}
            {/* <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm sticky top-24">
              <h2 className="text-3xl font-bold mb-2">Secure Your Savings</h2>

              <p className="text-gray-500 mb-6">
                Ready to implement these changes? Connect with a Credex
                specialist today.
              </p>

              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold uppercase mb-2 text-gray-500">
                    Work Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase mb-2 text-gray-500">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase mb-2 text-gray-500">
                    Role
                  </label>

                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black">
                    <option>Select your role</option>
                    <option>Finance Leader</option>
                    <option>IT Operations</option>
                    <option>Founder / Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold uppercase mb-2 text-gray-500">
                    Team Size
                  </label>

                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black">
                    <option>Select team size</option>
                    <option>1 - 50</option>
                    <option>51 - 200</option>
                    <option>201 - 500</option>
                    <option>500+</option>
                  </select>
                </div>

                <button className="bg-black text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
                  Get Started
                </button>

                <p className="text-center text-sm text-gray-500">
                  No credit card required.
                </p>
              </form>
            </section> */}

            {/* Share Section */}
            <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-5">
                <span className="material-symbols-outlined">ios_share</span>
                Share Results
              </h2>

              {/* Preview */}
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-5 hover:shadow-md transition cursor-pointer">
                <div className="h-36 bg-gradient-to-br from-[#0d1c32] to-[#515f78] flex flex-col justify-center items-center text-center text-white">
                  <h3 className="text-2xl font-bold">Credex Audit</h3>

                  <p className="text-green-300 mt-1">
                    $14,880 Potential Savings
                  </p>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">
                    Your SaaS Optimization Report
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    We found $1,240 in monthly savings across your software
                    stack.
                  </p>

                  <p className="uppercase text-xs text-gray-400 mt-3">
                    credex.io
                  </p>
                </div>
              </div>

              <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                <span className="material-symbols-outlined">link</span>
                Copy Link
              </button>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-sm font-bold text-gray-500">
            © 2024 Credex Technologies Inc.
          </h3>

          <div className="flex gap-5 text-sm text-gray-500">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-black">
              Terms of Service
            </a>

            <a href="#" className="hover:text-black">
              Security
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Result;
