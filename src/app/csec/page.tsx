import type { Metadata } from "next";
import CsecContent from "@/components/pages/CsecContent";

export const metadata: Metadata = {
  title: "Cybersecurity Excellence Center | CLAREx Tech & Trade",
  description:
    "SIEM, XDR, HIDS, FIM, VA and XOAR in one platform, backed by a 24x7 SOC. Threat hunting, incident response, cloud security and PCI DSS, HIPAA and GDPR compliance.",
};

export default function CsecPage() {
  return <CsecContent />;
}
