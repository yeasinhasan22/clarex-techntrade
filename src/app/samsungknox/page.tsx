import type { Metadata } from "next";
import SamsungKnoxContent from "@/components/pages/SamsungKnoxContent";

export const metadata: Metadata = {
  title: "Samsung Knox Partnership | CLAREx Tech & Trade",
  description:
    "CLAREx Tech & Trade is Bangladesh's only Samsung Knox license reseller. Enterprise MDM, device security, and 4,000+ Knox licenses delivered in the last year.",
};

export default function SamsungKnoxPage() {
  return <SamsungKnoxContent />;
}
