import { Link } from "../components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router DOM</p>
      <Link to="/about">Ir a sobre nosotros</Link>
    </>
  )
}