import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Demo2 from "../components/nadbramhacomponents/Demo2";


const Dashboard = () => {
  const [lang, setLang] = useState("mr");
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === "mr" ? "en" : "mr"));
  };

  const translations = {
    mr: {
      title: "वायएनके",
      dashboardTitle: "डॅशबोर्ड",
      subtitle: "",
      switchLang: "English",
      switchAria: "Switch to English",
      nadbrahmaTitle: "नादब्रम्ह घटक",
      yewaleTitle: "येवले घटक",
      nadbrahmaForms: {
        ownerMaterial: "मालक सामग्री चेकलिस्ट",
        warranty: "वारंटी कालावधी",
        workSteps: "कामाचे पायरी",
        Demo1: "डेमो1",
        Demo2: "डेमो2",
      },
      yewaleForms: {
        civilWork: "सिव्हिल वर्क स्टेप्स",
        construction: "बांधकाम फॉर्म",
        materialChecklist: "सामग्री चेकलिस्ट",
        warrantyForm: "वारंटी फॉर्म",
      },
    },
    en: {
      title: "YNK",
      dashboardTitle: "Dashboard",
      switchLang: "मराठी",
      switchAria: "Switch to Marathi",
      nadbrahmaTitle: "Nadbrahma Components",
      yewaleTitle: "Yewale Components",
      nadbrahmaForms: {
        ownerMaterial: "Owner Material Checklist",
        warranty: "Warranty Period",
        workSteps: "Work Steps",
        Demo1: "Demo1",
        Demo2:"Demo2",
      },
      yewaleForms: {
        civilWork: "Civil Work Steps",
        construction: "Construction Form",
        materialChecklist: "Material Checklist",
        warrantyForm: "Warranty Form",
      },
    },
  };

  const t = translations[lang];

  const sections = [
    {
      title: t.nadbrahmaTitle,
      forms: [
        {
          name: t.nadbrahmaForms.ownerMaterial,
          path: "/nadbrahma/owner-material",
        },
        {
          name: t.nadbrahmaForms.warranty,
          path: "/nadbrahma/warranty-period",
        },
        {
          name: t.nadbrahmaForms.workSteps,
          path: "/nadbrahma/work-steps",
        },
        {
          name: t.nadbrahmaForms.Demo1,
          path: "/nadbrahma/Demo1",
        },
        {
          name: t.nadbrahmaForms.Demo2,
          path: "/nadbrahma/Demo2",
        },
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: "🏗️",
    },
    {
      title: t.yewaleTitle,
      forms: [
        {
          name: t.yewaleForms.civilWork,
          path: "/yewale/civil-work-steps",
        },
        {
          name: t.yewaleForms.construction,
          path: "/yewale/construction",
        },
        {
          name: t.yewaleForms.materialChecklist,
          path: "/yewale/material-checklist",
        },
        {
          name: t.yewaleForms.warrantyForm,
          path: "/yewale/warranty",
        },
        {
          name: t.yewaleForms.construction,
          path: "/yewale/construction",
        },
      ],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🏢",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e3f2fd",
        padding: "15px",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px", width: "40px" }}
          />
          <h1
            style={{ fontSize: "24px", fontWeight: "bold", color: "#1e40af" }}
          >
            {t.title}
          </h1>
        </div>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "14px",
            color: "#4b5563",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={handleLanguageToggle}
          aria-label={t.switchAria}
        >
          {t.switchLang}
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700">{t.dashboardTitle}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">{section.icon}</span>
              <h3 className="text-xl font-semibold text-gray-700">
                {section.title}
              </h3>
            </div>
            <div className="space-y-2">
              {section.forms.map((form, index) => (
                <button
                  key={index}
                  onClick={() => navigate(form.path)}
                  className="w-full text-left px-4 py-2 rounded-md bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 text-gray-800 font-medium transition"
                >
                  {form.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-sm text-gray-500">{t.footer}</div>
    </div>
  );
};

export default Dashboard;
