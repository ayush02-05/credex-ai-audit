import { useFieldArray, useForm } from "react-hook-form";

import {
  Menu,
  Search,
  Share2,
  Download,
  UserCircle,
  Building2,
  Boxes,
  Plus,
  Trash2,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const toolOptions = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "Gemini",
  "OpenAI API",
];

export default function SpendForm() {
  const savedData = JSON.parse(localStorage.getItem("credex-form"));

  // React Hook Form
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: savedData || {
      teamSize: "1-10",
      useCase: "Mixed",

      tools: [
        {
          tool: "Curser",
          plan: "Pro",
          spend: 0,
          seats: 0,
        },
      ],
    },
  });

  // Dynamic Fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  // Watch all form values
  const formData = watch();

  // Auto Save to localStorage
  useEffect(() => {
    localStorage.setItem("credex-form", JSON.stringify(formData));
  }, [formData]);

  // Submit
  const onSubmit = (data) => {
    console.log(data);

    // settools(data.tools);
    // console.log(tools);
    // localStorage.setItem("credex-tools", JSON.stringify(tools));
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-64 fixed left-0 top-0 h-screen bg-[#f2f4f6] border-r border-gray-300 flex-col p-6">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold">Credex</h1>
          <p className="text-gray-500 text-sm">SaaS Intelligence</p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2 flex-1">
          <SidebarItem title="Overview" />
          <SidebarItem title="Audits" active />
          <SidebarItem title="SaaS Inventory" />
          <SidebarItem title="Optimization" />
        </nav>

        {/* Bottom */}
        <div className="border-t pt-4 space-y-2">
          <SidebarItem title="Settings" />
          <SidebarItem title="Support" />
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 lg:ml-64">
        {/* HEADER */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center gap-3">
              <Menu className="lg:hidden" />

              <h1 className="text-2xl font-bold">Credex</h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50">
                <Search size={18} className="text-gray-500" />

                <input
                  type="text"
                  placeholder="Search audits..."
                  className="bg-transparent outline-none"
                />
              </div>

              <Share2 className="cursor-pointer" />
              <Download className="cursor-pointer" />
              <UserCircle className="cursor-pointer" />
            </div>
          </div>
        </header>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-7xl mx-auto p-6"
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold mb-2">Start Your SaaS Audit</h2>

            <p className="text-gray-600">
              Enter your current tool usage to uncover optimization
              opportunities.
            </p>
          </div>

          {/* GLOBAL SECTION */}
          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-green-600" />

              <h3 className="text-2xl font-semibold">Global Parameters</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Team Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase">
                  Team Size
                </label>

                <select
                  {...register("teamSize")}
                  className="w-full border border-gray-300 rounded-xl p-4 bg-white outline-none focus:border-green-500"
                >
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                </select>
              </div>

              {/* Use Case */}
              <div>
                <label className="block text-sm font-semibold text-gray-500 mb-2 uppercase">
                  Primary Use Case
                </label>

                <select
                  {...register("useCase")}
                  className="w-full border border-gray-300 rounded-xl p-4 bg-white outline-none focus:border-green-500"
                >
                  <option>Mixed</option>
                  <option>Data</option>
                  <option>Coding</option>
                  <option>Writing</option>
                  <option>Research</option>
                </select>
              </div>
            </div>
          </section>

          {/* TOOLS SECTION */}
          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Boxes className="text-green-600" />

                <h3 className="text-2xl font-semibold">Your Tools</h3>
              </div>

              {/* Add Tool */}
              <button
                type="button"
                onClick={() =>
                  append({
                    tool: "ChatGPT",
                    plan: "Pro",
                    spend: 20,
                    seats: 1,
                  })
                }
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                <Plus size={18} />
                Add Tool
              </button>
            </div>

            {/* TOOL ROWS */}
            <div className="space-y-4">
              {fields.map((field, index) => (
                <ToolRow
                  key={field.id}
                  index={index}
                  register={register}
                  remove={remove}
                />
              ))}
            </div>
          </section>

          {/* SUBMIT */}
          <div className="flex flex-col items-center mt-10 gap-4">
            <button
              type="submit"
              className="bg-black text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-lg hover:scale-[0.98] transition"
            >
              Generate Audit
            </button>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CheckCircle size={18} />
              Your progress is automatically saved.
            </div>
          </div>

          {/* BOTTOM CARD */}
          <div className="mt-20 bg-[#0d1c32] rounded-3xl overflow-hidden grid md:grid-cols-2 text-white">
            {/* LEFT */}
            <div className="p-10">
              <h2 className="text-4xl font-bold mb-4">Unlock Deep Savings</h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Our audit engine cross-references your stack against benchmarked
                companies to find overlaps between Copilot, Cursor and ChatGPT
                plans.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle />
                  Redundancy Detection
                </div>

                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle />
                  Seat Consolidation Advice
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="h-[300px] md:h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuEUffjbtrDI2Hv5BsBntyJG85hI_AQIZZNsj1ZIB0fITWRxvO1KbdDxY3PDUIwxyB7Yymbir8dl8nnUMGEPrOHZ1rTc-zBUBY8X0izcI8MH_yyZB4yfXD3mQ08YIHeEWPAh5dfqAp03JVwI3zyVepU7sMGpvTT0l62hCamWWyQbXqzyAe8pjU3cuEbIXTti-A8OFAOQlczywsMUAsnCxoyEvTpJhx3GABwd00FHN2mABNihmuD1UuhMznABpzK5vWAMAaUeQWIFkF"
                alt="dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </form>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 bg-white mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold">CREDEX</h3>

              <p className="text-gray-500 text-sm">
                © 2024 Credex Technologies Inc.
              </p>
            </div>

            <div className="flex gap-6 text-gray-500">
              <a href="#">Privacy Policy</a>

              <a href="#">Terms of Service</a>

              <a href="#">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// SIDEBAR ITEM
function SidebarItem({ title, active }) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition text-left ${
        active
          ? "bg-green-100 text-green-700 font-semibold"
          : "hover:bg-gray-100 text-gray-600"
      }`}
    >
      <div className="w-2 h-2 rounded-full bg-current"></div>

      {title}
    </button>
  );
}

// TOOL ROW
function ToolRow({ index, register, remove }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-[#f2f4f6] border border-transparent hover:border-gray-300 rounded-2xl p-5 items-end transition">
      {/* Tool */}
      <div className="lg:col-span-3">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Select Tool
        </label>

        <select
          {...register(`tools.${index}.tool`)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-white"
        >
          {toolOptions.map((tool) => (
            <option key={tool}>{tool}</option>
          ))}
        </select>
      </div>

      {/* Plan */}
      <div className="lg:col-span-3">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Plan
        </label>

        <select
          {...register(`tools.${index}.plan`)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-white"
        >
          <option>Free</option>
          <option>Pro</option>
          <option>Team</option>
          <option>Enterprise</option>
        </select>
      </div>

      {/* Spend */}
      <div className="lg:col-span-2">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Monthly Spend
        </label>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>

          <input
            type="number"
            {...register(`tools.${index}.spend`)}
            className="w-full border border-gray-300 rounded-xl p-3 pl-8 bg-white"
          />
        </div>
      </div>

      {/* Seats */}
      <div className="lg:col-span-2">
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Seats
        </label>

        <input
          type="number"
          {...register(`tools.${index}.seats`)}
          className="w-full border border-gray-300 rounded-xl p-3 bg-white"
        />
      </div>

      {/* Delete */}
      <div className="lg:col-span-2 flex justify-end">
        <button
          type="button"
          onClick={() => remove(index)}
          className="p-3 rounded-xl text-red-500 hover:bg-red-100 transition"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
