import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Printer, Crown, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const WeddingProposalModal = ({ isOpen, onClose }) => {
  const [clientData, setClientData] = useState({
    refNo: 'RE/WP/2026/0482',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    coupleNames: 'Ananya Roy & Rohan Mehra',
    phone: '+91 98765 43210',
    email: 'ananya.rohan.wedding@example.com',
    eventDates: '12th February 2027 – 14th February 2027',
    venue: 'The Rajbari Bawali & ITC Royal Bengal, Kolkata',
    guestCount: '350 – 400 Guests',
    packageLevel: 'Imperial Package (Turnkey Luxury)',
    planningFee: '₹4,50,000',
    crewFee: '₹1,50,000',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Formal Wedding Planning Proposal & Contract"
      subtitle="Official contract document for Royal Enterprise turnkey wedding services. Ready for print or client review."
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Print Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#FAF8F4] dark:bg-[#141210] border border-[#E8E1D5] dark:border-[#38312B] rounded-[2px]">
          <div className="text-xs text-[#554F47] dark:text-slate-300">
            <span className="text-gold-dark dark:text-gold-light font-semibold">Printable Format:</span> Standard Letter / A4 with legal terms & signature blocks.
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={handlePrint}
            icon={Printer}
            iconPosition="left"
          >
            Print Contract / Save PDF
          </Button>
        </div>

        {/* Formal Contract Container (Optimized for Screen & Print) */}
        <div
          id="printable-wedding-contract"
          className="bg-white text-slate-900 p-8 sm:p-12 rounded-sm shadow-xl font-sans text-xs sm:text-sm leading-relaxed border border-slate-300 select-text"
        >
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <img src="/logo-crest.png" alt="Royal Enterprise Official Crest" className="w-12 h-12 object-contain shrink-0" />
                <div>
                  <div className="text-amber-900 font-serif font-black text-2xl tracking-wider uppercase leading-none">
                    ROYAL ENTERPRISE
                  </div>
                  <p className="text-[10px] font-semibold text-slate-600 tracking-wider uppercase mt-1">
                    Turnkey Wedding Planning • Gourmet Catering • Event Production
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Office: {COMPANY_INFO.address}
              </p>
              <p className="text-[11px] text-slate-500">
                Phone: {COMPANY_INFO.phone} | Email: {COMPANY_INFO.email} | Web: www.royalenterprise.com
              </p>
            </div>
            <div className="text-left sm:text-right text-[11px] text-slate-600 space-y-1">
              <p><span className="font-bold text-slate-800">Ref. No:</span> {clientData.refNo}</p>
              <p><span className="font-bold text-slate-800">Date:</span> {clientData.date}</p>
            </div>
          </div>

          {/* Prepared For */}
          <div className="bg-slate-50 p-4 rounded border border-slate-200 mb-6">
            <h4 className="font-bold uppercase text-[11px] text-amber-900 tracking-wider mb-2">
              Prepared For
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p><span className="font-semibold text-slate-700">Client / Couple Names:</span> {clientData.coupleNames}</p>
              <p><span className="font-semibold text-slate-700">Primary Phone:</span> {clientData.phone}</p>
              <p><span className="font-semibold text-slate-700">Email Address:</span> {clientData.email}</p>
              <p><span className="font-semibold text-slate-700">Projected Guest Count:</span> {clientData.guestCount}</p>
              <p><span className="font-semibold text-slate-700">Celebration Dates:</span> {clientData.eventDates}</p>
              <p><span className="font-semibold text-slate-700">Locations / Venues:</span> {clientData.venue}</p>
              <p className="sm:col-span-2"><span className="font-semibold text-slate-700">Selected Service Package:</span> {clientData.packageLevel}</p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 mb-6">
            <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-200 pb-1">
              1. Executive Summary & Event Scope
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm">
              Royal Enterprise is honored to submit this formal proposal for comprehensive wedding planning, event coordination, and production management for the upcoming nuptial celebrations. Our mandate is to oversee end-to-end design, vendor operations, scheduling, and on-ground hospitality to ensure a seamless and memorable celebration.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 mb-6">
            <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-200 pb-1">
              2. Scope of Services & Deliverables
            </h3>
            <p className="text-slate-700 text-xs">
              Under this agreement, Royal Enterprise will provide turnkey management across the following key operational areas:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs">
              <li>
                <strong>Theme & Decor Management:</strong> Conceptualization of 3D visual mockups for all functions (Haldi, Sangeet, Wedding Ceremony, and Reception); oversight of floral arrangements, mandap fabrication, atmospheric illumination, and stage backdrops.
              </li>
              <li>
                <strong>Vendor Orchestration:</strong> Sourcing, contract negotiation, schedule management, and day-of briefing for external specialists (cinematographers, bridal makeup artists, choreographers, priests, musical bands, and DJs).
              </li>
              <li>
                <strong>Catering Supervision:</strong> Coordinating menu tastings, banquet layouts, plate auditing, live food counter sequencing, and service staff monitoring.
              </li>
              <li>
                <strong>Logistics & Guest Relations:</strong> Overseeing travel transfers, hotel check-in desks, room hamper distributions, luggage handling, and dedicated shadow assistance for the bride and groom.
              </li>
              <li>
                <strong>On-Ground Operations:</strong> Deploying a dedicated team of 8–12 on-site coordinators headed by a Senior Event Director to supervise all timelines and emergency contingency plans.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 mb-6">
            <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-200 pb-1">
              3. Financial Proposal & Cost Breakdown
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="p-2 border border-slate-200">Item Description</th>
                    <th className="p-2 border border-slate-200">Package Level / Scope</th>
                    <th className="p-2 border border-slate-200 text-right">Amount (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2 border border-slate-200 font-medium">Wedding Planning & Direction Fee</td>
                    <td className="p-2 border border-slate-200">Complete turnkey coordination and design supervision</td>
                    <td className="p-2 border border-slate-200 text-right">{clientData.planningFee}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-medium">On-Site Operational Crew</td>
                    <td className="p-2 border border-slate-200">8 Event managers, shadow coordinators, runners</td>
                    <td className="p-2 border border-slate-200 text-right">{clientData.crewFee}</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-medium">Taxes & Statutory Levies</td>
                    <td className="p-2 border border-slate-200">Applicable Goods and Services Tax (GST @ 18%)</td>
                    <td className="p-2 border border-slate-200 text-right">₹1,08,000</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold text-slate-900">
                    <td className="p-2 border border-slate-200" colSpan="2">Total Professional Planning Fee (Net Payable)</td>
                    <td className="p-2 border border-slate-200 text-right">₹7,08,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              * Note: Direct production expenses (including physical decor builds, venue booking rentals, external artist appearance fees, sound/generator setups, and per-plate catering costs) will be billed at actuals based on client-approved estimates.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 mb-6">
            <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-200 pb-1">
              4. Payment Schedule
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200">
                <thead className="bg-slate-100 text-slate-800 uppercase font-semibold">
                  <tr>
                    <th className="p-2 border border-slate-200">Installment Milestone</th>
                    <th className="p-2 border border-slate-200 text-center">Percentage</th>
                    <th className="p-2 border border-slate-200">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2 border border-slate-200">1. Retainer Advance (Locks calendar date & initiates design work)</td>
                    <td className="p-2 border border-slate-200 text-center font-semibold">25%</td>
                    <td className="p-2 border border-slate-200">Upon contract signing</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200">2. Production Milestone (Upon approval of 3D themes & vendors)</td>
                    <td className="p-2 border border-slate-200 text-center font-semibold">35%</td>
                    <td className="p-2 border border-slate-200">60 Days prior to first event</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200">3. Final Logistics Review (14 days prior to first event)</td>
                    <td className="p-2 border border-slate-200 text-center font-semibold">30%</td>
                    <td className="p-2 border border-slate-200">14 Days prior to first event</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200">4. On-Ground Settlement (Prior to commencement of reception)</td>
                    <td className="p-2 border border-slate-200 text-center font-semibold">10%</td>
                    <td className="p-2 border border-slate-200">On the final event day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-2.5 mb-8">
            <h3 className="font-serif font-bold text-base text-slate-900 border-b border-slate-200 pb-1">
              5. Terms and Conditions of Service
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs">
              <li>
                <strong>Independent Vendor Contracts:</strong> While Royal Enterprise evaluates and manages third-party vendors (such as independent venues, photographers, or performers), their performance warranties and cancellations remain governed by their respective direct vendor agreements.
              </li>
              <li>
                <strong>Design & Scope Adjustments:</strong> Revisions to technical builds, guest capacities exceeding 15% of the initial agreement, or additional functions requested after confirmation will result in an adjusted supplementary invoice.
              </li>
              <li>
                <strong>Cancellation & Postponement:</strong> The initial 25% booking retainer is non-refundable, reflecting immediate planning and administrative investments. If an event is postponed due to verified unforeseen circumstances, deposits may be transferred to a mutually agreed future date within six (6) calendar months, subject to calendar availability.
              </li>
              <li>
                <strong>Force Majeure:</strong> Neither party shall be held liable for failure to fulfill obligations when hindered by events beyond reasonable control, including natural disasters, governmental mandates, utility disruptions, or civil emergencies.
              </li>
              <li>
                <strong>Permits & Legal Compliances:</strong> The client and venue management remain responsible for venue-specific statutory permits, sound licensing, and commercial permissions, with advisory assistance provided by Royal Enterprise.
              </li>
            </ul>
          </div>

          {/* Section 6: Acceptance & Signatures */}
          <div className="pt-6 border-t-2 border-slate-900">
            <h3 className="font-serif font-bold text-base text-slate-900 mb-6">
              6. Acceptance and Agreement
            </h3>
            <p className="text-slate-700 text-xs mb-8">
              By executing their signatures below, the Parties formally agree to the terms, financial outlines, and scope of work detailed in this document.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">For Royal Enterprise:</p>
                <div className="h-14 border-b border-dashed border-slate-400"></div>
                <div className="text-xs space-y-1 text-slate-700">
                  <p><span className="font-semibold">Authorized Signatory:</span> Subrata Majumdar</p>
                  <p><span className="font-semibold">Title:</span> Managing Director / Lead Planner</p>
                  <p><span className="font-semibold">Date:</span> {clientData.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">For the Client:</p>
                <div className="h-14 border-b border-dashed border-slate-400"></div>
                <div className="text-xs space-y-1 text-slate-700">
                  <p><span className="font-semibold">Primary Signatory:</span> _________________________________</p>
                  <p><span className="font-semibold">Name:</span> {clientData.coupleNames}</p>
                  <p><span className="font-semibold">Relationship to Event:</span> Groom / Bride / Family Head</p>
                  <p><span className="font-semibold">Date:</span> _________________________</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end space-x-3 pt-2">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Preview
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handlePrint}
            icon={Printer}
            iconPosition="left"
          >
            Print Contract / Save PDF
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WeddingProposalModal;
