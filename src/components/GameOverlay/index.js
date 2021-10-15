import imgTryAgain from '../../assets/images/try-again.gif'

export const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>
  } else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={imgTryAgain}
          alt="Try Again"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    )
  }

  return null
}
