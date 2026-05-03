/**
 * Shared constants and mock data for the Election Assistant application.
 * Contains FAQs, official portal links, parliamentary seat data, voter guide steps,
 * election phases, and mock candidate profiles.
 */
import { 
  ShieldCheck, 
  FileText, 
  Users, 
  Smartphone 
} from 'lucide-react';
import { FAQ, OfficialPortal, SeatData, VoterStep, ElectionPhase, Candidate } from './types';

export const FAQS: FAQ[] = [
  {
    q: "How can I check if I am registered to vote?",
    a: "You can check your name in the electoral roll by visiting electoralsearch.eci.gov.in. You will need your EPIC number or personal details like name, father's name, and state."
  },
  {
    q: "What is an EPIC number?",
    a: "EPIC stands for Electors Photo Identity Card. The EPIC number is the unique identification number printed on your Voter ID card."
  },
  {
    q: "Can I vote if I don't have my Voter ID card?",
    a: "Yes, you can vote even if you don't have your physical Voter ID card, provided your name is in the electoral roll. You must carry an alternative photo ID like Aadhaar, Passport, or DL."
  },
  {
    q: "What are the timings for poll day?",
    a: "Generally, polling takes place from 7:00 AM to 6:00 PM. However, these timings can vary slightly in certain constituencies based on local conditions."
  }
];

export const OFFICIAL_PORTALS: OfficialPortal[] = [
  { label: 'ECI Official Website', url: 'https://eci.gov.in/' },
  { label: 'Voter Service Portal', url: 'https://voters.eci.gov.in/' },
  { label: 'Search Your Name', url: 'https://electoralsearch.eci.gov.in/' },
  { label: 'KYC - Know Your Candidate', url: 'https://affidavit.eci.gov.in/' },
  { label: 'Strategic Voter Education (SVEEP)', url: 'https://ecisveep.nic.in/' },
  { label: 'National Grievance Portal', url: 'https://ngsp.eci.gov.in/' }
];

export const SEAT_DATA: SeatData[] = [
  { name: 'Lok Sabha', seats: 543, color: '#2563eb' },
  { name: 'Rajya Sabha', seats: 250, color: '#dc2626' },
];

export const VOTER_STEPS: VoterStep[] = [
  {
    id: 1,
    title: "Check Enrollment",
    desc: "Verify if your name is listed in the Electoral Roll. Without this, even a Voter ID card isn't enough.",
    icon: ShieldCheck,
    tasks: ["Visit electoralsearch.eci.gov.in", "Search by EPIC number or Personal Details", "Save your Polling Station and Part Number"],
    link: "https://electoralsearch.eci.gov.in/"
  },
  {
    id: 2,
    title: "Voter Registration",
    desc: "If you're not registered, apply online for Form 6. You can do this via the Voter Helpline App.",
    icon: FileText,
    tasks: ["Fill Form 6 (New Voter)", "Upload ID and Address Proof", "Note down Reference ID for tracking"],
    link: "https://voters.eci.gov.in/"
  },
  {
    id: 3,
    title: "Locate Your Booth",
    desc: "Find exactly where you need to go to cast your vote. Booths are usually near your home.",
    icon: Users,
    tasks: ["Check via Voter Helpline App", "Find the BLO (Booth Level Officer) contact", "Check accessibility facilities at the booth"]
  },
  {
    id: 4,
    title: "Election Day prep",
    desc: "Ensure you have the right documents to enter the polling station.",
    icon: Smartphone,
    tasks: ["Carry your EPIC (Voter ID) Card", "Keep an alternative ID (Aadhaar, DL) if EPIC is missing", "Check booth timing (usually 7 AM to 6 PM)"]
  }
];

export const ELECTION_PHASES: ElectionPhase[] = [
  {
    phase: 1,
    date: "April 19, 2024",
    status: "Completed",
    states: "UP, MP, Rajasthan, Uttarakhand, Tamil Nadu, etc.",
    constituencies: 102
  },
  {
    phase: 2,
    date: "April 26, 2024",
    status: "Completed",
    states: "Kerala, Karnataka, Rajasthan, Maharashtra, etc.",
    constituencies: 88
  },
  {
    phase: 3,
    date: "May 7, 2024",
    status: "Upcoming",
    states: "Gujarat, Karnataka, MP, Maharashtra, etc.",
    constituencies: 94
  },
  {
    phase: 4,
    date: "May 13, 2024",
    status: "Upcoming",
    states: "Odisha, Telangana, Andhra Pradesh, etc.",
    constituencies: 96
  },
  {
    phase: 5,
    date: "May 20, 2024",
    status: "Upcoming",
    states: "West Bengal, Bihar, UP, etc.",
    constituencies: 49
  },
  {
    phase: 6,
    date: "May 25, 2024",
    status: "Upcoming",
    states: "Delhi, Haryana, West Bengal, etc.",
    constituencies: 58
  },
  {
    phase: 7,
    date: "June 1, 2024",
    status: "Upcoming",
    states: "Punjab, Himachal Pradesh, UP, etc.",
    constituencies: 57
  }
];

export const MOCK_CANDIDATES: Candidate[] = [
  { id: 1, name: "Narendra Modi", party: "BJP", constituency: "Varanasi", education: "MA", cases: 0, profession: "Public Service" },
  { id: 2, name: "Rahul Gandhi", party: "INC", constituency: "Wayanad", education: "M.Phil", cases: 0, profession: "Politics" },
  { id: 3, name: "Arvind Kejriwal", party: "AAP", constituency: "New Delhi", education: "B.Tech", cases: 3, profession: "Public Service" },
  { id: 4, name: "Mamata Banerjee", party: "TMC", constituency: "Kolkata South", education: "LLB", cases: 0, profession: "Politics" },
  { id: 5, name: "M.K. Stalin", party: "DMK", constituency: "Kolathur", education: "Graduate", cases: 0, profession: "Politics" },
  { id: 6, name: "Amit Shah", party: "BJP", constituency: "Gandhinagar", education: "Graduate", cases: 0, profession: "Public Service" }
];
