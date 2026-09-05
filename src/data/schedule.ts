export type ScheduleEvent = {
  id: string;
  date: string;
  name: string;
  featured?: boolean;
};

const events: ScheduleEvent[] = [
  {
    id: "call-for-entries",
    date: "2026-09-05T00:00:00",
    name: "Call for Entries",
  },
  {
    id: "full-paper-submission",
    date: "2026-10-31T00:00:00",
    name: "Full Paper Submission",
  },
  {
    id: "notification-of-acceptance",
    date: "2026-12-15T00:00:00",
    name: "Notification of Acceptance",
  },
  {
    id: "registration-opens",
    date: "2026-12-16T00:00:00",
    name: "Registration Opens",
  },
  {
    id: "camera-ready-submission",
    date: "2027-01-22T00:00:00",
    name: "Camera-Ready Submission",
  },
  {
    id: "workshops",
    date: "2027-02-25T00:00:00",
    name: "Workshops",
    featured: true,
  },
  {
    id: "conference",
    date: "2027-02-26T00:00:00",
    name: "Conference",
    featured: true,
  },
];

export const schedule: ScheduleEvent[] = [...events].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);
