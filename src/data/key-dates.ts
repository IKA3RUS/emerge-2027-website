export type KeyDateEvent = {
  id: string;
  date: string;
  endDate?: string;
  name: string;
};

const events: KeyDateEvent[] = [
  {
    id: "call-for-papers",
    date: "2026-09-05T00:00:00",
    name: "Call for Papers Starts",
  },
  {
    id: "full-paper-submission",
    date: "2026-10-31T00:00:00",
    name: "Full Paper Submission Due",
  },
  {
    id: "notification-of-acceptance",
    date: "2026-12-15T00:00:00",
    name: "Acceptance Notifications Sent",
  },
  {
    id: "registration-opens",
    date: "2026-12-16T00:00:00",
    name: "Registration Starts",
  },
  {
    id: "camera-ready-submission",
    date: "2027-01-22T00:00:00",
    name: "Camera-Ready Submission Due",
  },
  {
    id: "workshops",
    date: "2027-02-25T00:00:00",
    name: "Workshops",
  },
  {
    id: "conference",
    date: "2027-02-26T00:00:00",
    endDate: "2027-02-27T00:00:00",
    name: "Conference",
  },
];

export const keyDates: KeyDateEvent[] = [...events].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);
