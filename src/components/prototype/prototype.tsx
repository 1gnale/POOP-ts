import React from "react"

interface PrototypeProps {
  poem: string
}

const Prototype: React.FunctionComponent<PrototypeProps> = ({ poem }) => {
  let splitedPoemText: string[] = poem.split('|')

  return (
    <div>
      {splitedPoemText.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )
}

export default Prototype