import { useRef, useState } from 'react'
import type { BoardColumn, Card } from '../types/board'
import { CardItem } from './Card'

interface Props {
  column: BoardColumn
  onAddCard: (columnId: number, title: string) => Promise<Card>
}

export function Column({ column, onAddCard }: Props) {
  const [isAdding, setIsAdding] = useState(false)
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  function openForm() {
    setIsAdding(true)
    setTitle('')
    setError('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  function closeForm() {
    setIsAdding(false)
    setTitle('')
    setError('')
  }

  async function handleSubmit() {
    if (!title.trim()) {
      setError('タイトルを入力してください')
      return
    }
    setSubmitting(true)
    try {
      await onAddCard(column.id, title.trim())
      closeForm()
    } catch {
      setError('カードの作成に失敗しました')
    } finally {
      setSubmitting(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
    if (e.key === 'Escape') {
      closeForm()
    }
  }

  return (
    <div className="bg-gray-100 rounded-lg p-3 w-72 flex-shrink-0 flex flex-col gap-2">
      <div className="flex items-center gap-2 px-1">
        <h2 className="font-semibold text-gray-700 text-sm">{column.title}</h2>
        <span className="text-xs text-gray-400 bg-gray-200 rounded-full px-2 py-0.5">
          {column.cards.length}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {column.cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>

      {isAdding ? (
        <div className="flex flex-col gap-1">
          <textarea
            ref={inputRef}
            value={title}
            onChange={(e) => { setTitle(e.target.value); setError('') }}
            onKeyDown={handleKeyDown}
            maxLength={100}
            rows={2}
            placeholder="カードのタイトルを入力"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              追加
            </button>
            <button
              onClick={closeForm}
              className="text-gray-500 text-sm px-3 py-1 rounded-md hover:bg-gray-200"
            >
              キャンセル
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={openForm}
          className="flex items-center gap-1 text-gray-500 text-sm px-1 py-1 rounded-md hover:bg-gray-200 hover:text-gray-700"
        >
          <span className="text-lg leading-none">+</span> カードを追加
        </button>
      )}
    </div>
  )
}
