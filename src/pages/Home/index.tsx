import Tab from "../../components/Tab";
import VulnerabilityTable from "../../components/VulnerabilityTable";
import { RISK_LEVEL, Vulnerability } from "../../types";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const nowTime = new Date();
nowTime.setHours(nowTime.getHours() - 4);

const sampleData: Array<Vulnerability> = [
  {
    id: uuid(),
    title: "Cisco Small Business RV Series - OS Command Injection",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: 4,
    foundedDate: nowTime,
    risk: RISK_LEVEL.LOW,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: null,
  },
  {
    id: uuid(),
    title: "PhpMyAdmin <4.8.2 - Local File Inclusion",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: null,
    foundedDate: nowTime,
    risk: RISK_LEVEL.CRITICAL,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: null,
  },
  {
    id: uuid(),
    title: "Sophos UTM Preauth - Remote Code Execution",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: null,
    foundedDate: nowTime,
    risk: RISK_LEVEL.HIGH,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: `https://www.atlassian.com/jira/example`,
  },
  {
    id: uuid(),
    title: "Citrix ShareFile StorageZones <=5.10.x - Arbitrary File Read",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: null,
    foundedDate: nowTime,
    risk: RISK_LEVEL.LOW,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: `https://www.atlassian.com/jira/example`,
  },
  {
    id: uuid(),
    title: "Microsoft Exchange Server SSRF Vulnerability",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: null,
    foundedDate: nowTime,
    risk: RISK_LEVEL.MEDIUM,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: null,
  },
  {
    id: uuid(),
    title: "GitLab CE/EE - Import RCE",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: 3,
    foundedDate: nowTime,
    risk: RISK_LEVEL.NONE,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: null,
  },
  {
    id: uuid(),
    title: "phpMyAdmin < 5.1.2 - Cross-Site Scripting",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: 4,
    foundedDate: nowTime,
    risk: RISK_LEVEL.CRITICAL,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: `https://www.atlassian.com/jira/example`,
  },
  {
    id: uuid(),
    title: "Apple Server SSRF Vulnerability",
    tags: ["CVE-2021-1472", "CWE-287", "Remote Code Execution"],
    activity: null,
    foundedDate: nowTime,
    risk: RISK_LEVEL.HIGH,
    affectedAssets: new Array(20).fill("sample_asset"),
    jiraUrl: null,
  },
];
const vulnerabilities: Array<Vulnerability> = new Array(1000)
  .fill(0)
  .map((num, index) => ({ ...sampleData[index % 8], id: uuid() }));

export default function HomePage() {
  const [selectedIds, setSelectedIds] = useState<{ [id: string]: boolean }>({});

  const toggleRowSelection = (id: string) => {
    setSelectedIds({ ...selectedIds, [id]: !selectedIds[id] });
  };

  const selectAll = () => {
    setSelectedIds(
      vulnerabilities.reduce((tot, vul) => ({ ...tot, [vul.id]: true }), {})
    );
  };

  const deSelectAll = () => {
    setSelectedIds(
      vulnerabilities.reduce((tot, vul) => ({ ...tot, [vul.id]: false }), {})
    );
  };

  return (
    <div className="w-screen h-screen box-border p-4 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="w-full h-full box-border flex flex-col justify-start align-center py-6 px-0 gap-6 border-solid border border-[#27272A] rounded-[4px]">
        <Header />
        <div className="h-full overflow-x-auto overflow-y-hidden">
          <VulnerabilityTable
            selectedIds={selectedIds}
            data={vulnerabilities}
            toggleRowSelection={toggleRowSelection}
            selectAll={selectAll}
            deSelectAll={deSelectAll}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
