import { Board } from './components/Board'
import { useBoard } from './hooks/useBoard'

const BOARD_ID = 1

export default function App() {
  const { board, loading, error, addCard } = useBoard(BOARD_ID)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-600">
        <p className="text-white text-lg">読み込み中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-600">
        <p className="text-white text-lg">{error}</p>
      </div>
    )
  }

  if (!board) return null

  return <Board board={board} onAddCard={addCard} />
}
