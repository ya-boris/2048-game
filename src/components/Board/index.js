import { useState } from "react"
import { Cell } from "../Cell"
import { Tile } from "../Tile"
import { Board } from "../../helper"
import { Header } from "../Header"
import { useEvent } from "../../hooks/useEvent"
import { GameOverlay } from "../GameOverlay"
import { Footer } from "../Footer"

export const BoardView = () => {
  const [board, setBoard] = useState(new Board())

  const handleKeyDown = (event) => {
    if(board.hasWon()) {
      return
    }

    if(event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37
      let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
      let newBoard = boardClone.move(direction)
      setBoard(newBoard)
    }
  }

  useEvent('keydown', handleKeyDown)

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />
        })}
      </div>
    )
  })

  const tiles = board.tiles.filter((tile) => tile.value !== 0).map((tile, index) => {
    return <Tile tile={tile} key={index} />
  })

  const resetGame = () => {
    setBoard(new Board())
  }

  return (
    <div className="container">
      <Header />

      <div className="details-box">
        <button className="resetButton" onClick={resetGame}>new game</button>

        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div className="">{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay
          onRestart={resetGame}
          board={board}
        />
      </div>

      <Footer />
    </div>
  )
}
