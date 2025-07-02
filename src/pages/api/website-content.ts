import type { NextApiRequest, NextApiResponse } from 'next';

// Example: Centralized content for key pages. In a real app, you might import or read from files, DB, or CMS.
const websiteContent = [
  {
    page: 'project-overview',
    title: 'Project Overview',
    content: `Discover the comprehensive vision behind Noble Health Services – a state-of-the-art university hospital set to redefine regional standards.\n\nThe University Hospital Concept: A multi-specialty tertiary care hospital offering comprehensive medical services, advanced diagnostics, and specialized treatment units, all designed for patient comfort and efficient care delivery.\n\nAdvanced Medical Education: A premier medical education center with programs for doctors, nurses, and allied health professionals. The curriculum focuses on practical training within the hospital, fostering future healthcare leaders.\n\nCutting-Edge Research: Dedicated research facilities will be at the core of our mission, enabling clinical trials, innovation in treatment, and contributing to global medical knowledge.\n\n3D Master Plan: Explore the visionary layout of our integrated campus. (Interactive 3D model coming soon)\n\nProject Location & Demographics: Strategically located on Ring Road, Peshawar, ensuring accessibility for a vast population in KPK and neighboring regions. Easy access via Ring Road, connecting major urban and rural areas. Serving a population of over 40 million in Khyber Pakhtunkhwa, with significant demand for quality healthcare and education. Poised to become a medical hub for Northern Pakistan and potentially attract patients from neighboring Afghanistan.`
  },
  {
    page: 'about',
    title: 'About Us',
    content: `Noble Health Services is dedicated to transforming healthcare and medical education in Pakistan. Our mission is to build a world-class university hospital in Peshawar, integrating patient care, education, and research. The leadership team includes Dr. Faiz-ur-Rahman (CEO) and Dr. Daud Khan (Chairman), supported by a diverse group of specialists and professionals. We are committed to innovation, community impact, and excellence in all aspects of healthcare delivery.`
  },
  {
    page: 'our-team',
    title: 'Our Team',
    content: `Our leadership includes Dr. Faiz-ur-Rahman (CEO) and Dr. Daud Khan (Chairman). The team features top specialists in cardiology, oncology, and other fields, all working together to provide the highest standard of care and education. Our team is passionate about advancing healthcare in the region and mentoring the next generation of medical professionals.`
  },
  {
    page: 'investment-opportunities',
    title: 'Investment Opportunities',
    content: `We offer multiple investment models: Equity Partnerships (ownership and profit-sharing in hospital departments or the university), and Operational Ventures (manage and invest in specific units like labs or clinics). The project is designed for strong ROI, robust governance, and significant community impact. Institutional and individual investors are welcome. Download our investor brochure for detailed financials and partnership terms.`
  },
  {
    page: 'contact',
    title: 'Contact',
    content: `For inquiries, partnership proposals, or more information, please use our contact form or reach out via WhatsApp. Our team will respond promptly to all questions about the project, investment, or collaboration opportunities.`
  },
  {
    page: 'faq',
    title: 'Frequently Asked Questions',
    content: `The project's goal is to provide world-class healthcare integrated with medical education and research. Key features include an integrated, multi-specialty university hospital that combines patient care, academic learning, and research facilities. Investment opportunities include equity and operations partnerships. The project focuses on strong ROI, transformative health impact, and future potential. Founding doctors are Dr. Ayesha Khan (Cardiology) and Dr. Usman Ahmed (Oncology). The project is designed to serve the large population of KPK and surrounding regions.`
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ content: websiteContent });
}
