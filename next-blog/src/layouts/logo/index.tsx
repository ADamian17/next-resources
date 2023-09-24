import styles from './logo.module.scss'

type LogoProps = {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={styles.logo}>
      Adonis'Next Blog
    </div>
  )
}


export default Logo;