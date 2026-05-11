import type { Board as BoardType } from '../types/board'
import { Column } from './Column'

interface Props {
  board: BoardType
}

export function Board({ board }: Props) {
  return (
    <div className="flex flex-col h-screen bg-blue-600">
      <header className="px-6 py-4">
        <h1 className="text-white font-bold text-lg">{board.title}</h1>
      </header>
      <main className="flex gap-4 px-6 pb-6 overflow-x-auto">
        {board.columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </main>
    </div>
  )
}
