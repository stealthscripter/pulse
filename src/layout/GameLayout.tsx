import { useGameStore } from "../store/useGameStore"

function GameLayout() {
    const {isPicking} = useGameStore()
  return (
        {isPicking}
  )
}

export default GameLayout