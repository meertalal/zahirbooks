import "./PageHero.css"

type PageHeroProps = {
  title: string
  subtitle: string
  image: string
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}
