import type { FC } from 'react'

interface Props {
  a: number
  b: number
}

const array = [1, 2, 3]
const Esas: FC<Props> = ({ b, a }) => {
  return (
    <div>
      {a} + {b} = 123
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Esas
