import imgKeyboard from '../../assets/images/keyboard.gif'
import imgWaves from '../../assets/images/waves.gif'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="game-explanation">
        <img src={imgKeyboard} alt="Keyboard animation - 2048 animated edition" />
        <div className="game-explanation-text">
          Combine the identical numbers and try to reach <strong>the 2048 animation</strong>!
        </div>
      </div>

      <img src={imgWaves} alt="" className="image" />

      <div className="game-credits">
        <p>Motion graphics created by <a href="https://www.romaincousin.fr" target="_blank" rel="noreferrer">Romain Cousin</a></p>
        <p>Based on the open source project <a href="https://gabrielecirulli.github.io/2048/" target="_blank" rel="noreferrer">2048</a> by Gabriele Cirulli</p>
        Coded by <a href="https://github.com/ya-boris" target="_blank" rel="noreferrer">@ya_boris</a>
      </div>
    </div>
  )
}
