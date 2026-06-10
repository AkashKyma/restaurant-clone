export const metadata = { title: "About | Bella Vista Bistro" };

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Story</h1>
        <p>More than a restaurant — a family tradition since 1998.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Where Every Meal Tells a Story</h2>
              <p>
                Bella Vista Bistro opened its doors in 1998 when brothers Marco and Luca Conti
                arrived in New York carrying their grandmother's handwritten recipe book and a
                dream of sharing authentic Neapolitan cooking with the city. What began as a
                12-seat trattoria in a Greenwich Village back street has grown into one of
                downtown Manhattan's most beloved dining destinations.
              </p>
              <p>
                We source our core ingredients directly from small Italian producers: San Marzano
                tomatoes from the volcanic plains of Campania, 00 flour stone-milled in Napoli,
                and single-estate olive oil pressed each November in Puglia. Seasonal
                adjustments to the menu follow the Italian calendar — risotto gives way to
                fresh-shell-bean ribollita in autumn; citrus-cured fish appears in spring.
              </p>
              <p>
                Today the kitchen is led by Head Chef Elena Marchetti, who trained under
                Marco before spending a decade in Rome and Bologna. Her philosophy is simple:
                buy the best ingredients you can find, then have the discipline to get out of
                their way. We think you'll taste the difference.
              </p>
            </div>
            <div className="about-placeholder" aria-label="Interior photo placeholder">
              Interior Photo
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
