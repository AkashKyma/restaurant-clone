"use client";
import { useState } from "react";

const times = [
  "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","7:00 PM",
  "7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM",
];
const sizes = ["1","2","3","4","5","6","7","8+"];

export default function ReservationsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    date: "", time: times[5], partySize: "2", name: "", phone: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="page-hero">
        <h1>Reservations</h1>
        <p>Reserve your table at Bella Vista Bistro.</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          {sent ? (
            <p className="success-msg" style={{ fontSize: "1.1rem", padding: "2rem" }}>
              Your reservation request has been received! We'll confirm by phone or email within 2 hours.
              <br /><br />
              <strong>Date:</strong> {form.date} &nbsp;|&nbsp;
              <strong>Time:</strong> {form.time} &nbsp;|&nbsp;
              <strong>Party:</strong> {form.partySize}
            </p>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    id="date" type="date" required min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time *</label>
                  <select
                    id="time" value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  >
                    {times.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="partySize">Party Size *</label>
                  <select
                    id="partySize" value={form.partySize}
                    onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                  >
                    {sizes.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="rname">Name *</label>
                <input
                  id="rname" type="text" required placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone" type="tel" required placeholder="+1 (212) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
