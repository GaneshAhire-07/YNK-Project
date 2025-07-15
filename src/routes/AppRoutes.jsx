import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


// Yewale Components
import ConstructionForm from "../components/yewalecomponents/ConstructionForm";
import MaterialChecklistForm from "../components/yewalecomponents/MaterialChecklistForm";
import CivilWorkWorkingSteps from "../components/yewalecomponents/CivilWorkWorkingSteps";
import WarrantyForm from "../components/yewalecomponents/WarrantyForm";

// Nadbrahma Components
import WorkStepsForm from "../components/nadbramhacomponents/WorkStepsForm";
import OwnerMaterialChecklistForm from "../components/nadbramhacomponents/OwnerMaterialChecklistForm";
import WarrantyPeriodForm from "../components/nadbramhacomponents/WarrantyPeriodForm";
import Demo1 from "../components/nadbramhacomponents/Demo1";
import Demo2 from "../components/nadbramhacomponents/Demo2";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Yewale Forms */}
      <Route path="/yewale/construction" element={<ConstructionForm />} />
      <Route
        path="/yewale/material-checklist"
        element={<MaterialChecklistForm />}
      />
      <Route
        path="/yewale/civil-work-steps"
        element={<CivilWorkWorkingSteps />}
      />
      <Route path="/yewale/warranty" element={<WarrantyForm />} />

      {/* Nadbrahma Forms */}
      <Route path="/nadbrahma/work-steps" element={<WorkStepsForm />} />
      <Route
        path="/nadbrahma/owner-material"
        element={<OwnerMaterialChecklistForm />}
      />
      <Route
        path="/nadbrahma/warranty-period"
        element={<WarrantyPeriodForm />}
      />
      <Route path="/nadbrahma/Demo1" element={<Demo1 />} />
      <Route path="/nadbrahma/Demo2" element={<Demo2 />} />
    </Routes>
  );
}
