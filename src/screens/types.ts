/**
 * Core type definitions and interfaces for the Election Assistant application.
 * Defines the structure for candidates, election phases, parliamentary data,
 * voter steps, FAQs, and legislative entities.
 */
import { LucideIcon } from 'lucide-react';

export interface Candidate {
  id: number;
  name: string;
  party: string;
  constituency: string;
  education: string;
  cases: number;
  profession: string;
}

export interface ElectionPhase {
  phase: number;
  date: string;
  status: 'Completed' | 'Upcoming';
  states: string;
  constituencies: number;
}

export interface SeatData {
  name: string;
  seats: number;
  color: string;
}

export interface VoterStep {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  tasks: string[];
  link?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface OfficialPortal {
  label: string;
  url: string;
}

export interface LegislativeHouse {
  name: string;
  type: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  shadowClass: string;
  accentIcon: LucideIcon;
  description: string;
  maxSeats: number;
  tenure: string;
  features: { icon: LucideIcon; label: string }[];
}
