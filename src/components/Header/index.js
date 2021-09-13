import imgLogo from '../../assets/images/2048-animated-edition.gif'

export const Header = () => {
  return (
    <h1 className="title">
      <img src={imgLogo} alt="2048 - Animated edition" />
    </h1>
  )
}
