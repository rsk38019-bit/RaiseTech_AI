import { useEffect, useState } from 'react'
import { fetchBoard } from '../api/boardApi'
import type { Board } from '../types/board'

interface UseBoardResult {
  board: Board | null
  loading: boolean
  error: string | null
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

  return { board, loading, error }
}
