export default function DashboardPlaceholderSection({ title }) {
  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <p>Cette section est prete pour integrer vos donnees dynamiques.</p>
    </section>
  )
}
