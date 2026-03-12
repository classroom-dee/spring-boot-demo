import { useEffect, useState } from "react"
import type { SubmitEvent } from "react"
import type { Note } from "./types"

const API = `${import.meta.env.VITE_API_URL}` // relative url /api/notes

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [content, setContent] = useState<string>("")

  
  const loadNotes = async () => {
    const res = await fetch(API)
    const data = (await res.json()) as Note[]
    setNotes(data)
  }

  useEffect(() => {
    // so annoying!
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadNotes()
  }, [])

  const addNote = async (e: SubmitEvent) => {
    e.preventDefault()

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    })

    setContent("")
    loadNotes()
  }

  const deleteNote = async (id: number) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    })

    loadNotes()
  }

  return (
    <div>
      <h1>Amoeba Notes</h1>

      <form onSubmit={addNote}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            {n.content}
            <button onClick={() => deleteNote(n.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App