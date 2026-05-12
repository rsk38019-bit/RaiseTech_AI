import { useEffect, useState } from 'react'
import { fetchBoard, createCard } from '../api/boardApi'
import type { Board, Card } from '../types/board'

interface UseBoardResult {
  board: Board | null
  loading: boolean
  error: string | null
  addCard: (columnId: number, title: string) => Promise<Card>
}

export function useBoard(boardId: number): UseBoardResult {
  const [board, setBoard] = useState<Board | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchBoard(boardId)
      .then(setBoard)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [boardId])

  async function addCard(columnId: number, title: string): Promise<Card> {
    const card = await createCard(columnId, title)
    setBoard((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        columns: prev.columns.map((col) =>
          col.id === columnId
            ? { ...col, cards: [...col.cards, card] }
            : col
        ),
      }
    })
    return card
  }

  return { board, loading, error, addCard }
}
