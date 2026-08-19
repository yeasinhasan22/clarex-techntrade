import type { Metadata } from "next";
import OdooContent from "@/components/pages/OdooContent";

export const metadata: Metadata = {
  title: "Odoo Solutions | CLAREx Tech & Trade",
  description:
    "Odoo 16 certified ERP implementation, customisation, integration, hosting and support. A five phase method covering ERP, CRM, accounting, inventory and e-commerce.",
};

export default function OdooPage() {
  return <OdooContent />;
}
