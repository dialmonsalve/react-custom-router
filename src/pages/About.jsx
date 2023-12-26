import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir al home',
    description:
      '¡Hola! Me llamo Diego Monsalve y estoy creando un clon de React router ',
  },
  en: {
    title: 'About ud',
    button: 'Go to home page',
    description:
      '¡Hi! My name is Diego Monsalve and I am creating a un clon of React router ',
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routerParams }) {
  const i18n = useI18n(routerParams?.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocIqi5ZPdSqPFoLFE1q9h7473-Zrfr_NIGSUFGcGgnw9GP0=s96-c-rg-br100"
          alt="Foto Diego Monsalve"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/"> {i18n.button} </Link>
    </>
  )
}
