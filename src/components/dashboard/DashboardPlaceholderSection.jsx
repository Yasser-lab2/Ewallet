export default function DashboardPlaceholderSection({
  title,
  description = 'Cette section est prete pour integrer vos donnees dynamiques.',
}) {
  return (
    <section className="dashboard-section active">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </section>
  )
}
