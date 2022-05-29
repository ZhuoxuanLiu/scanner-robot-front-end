import { useState } from 'react'


export default function useRefreshModel() {

  const [infoCard, setInfoCard] = useState(0)


  return {
    infoCard,
    setInfoCard,
  }
}


