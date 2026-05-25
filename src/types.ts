export interface TerminalLog {
  id: string;
  time: string;
  channel: 'whatsapp' | 'gmail' | 'sms';
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export type SimulatedChannel = 'whatsapp' | 'gmail' | 'sms';

export type SimulationStep = 'idle' | 'sending' | 'sent' | 'verifying' | 'success' | 'failed';

export interface OTPReportData {
  label: string;
  delivered: number;
  failed: number;
  latencyMs: number;
}
