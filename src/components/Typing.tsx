import React, { useRef, useEffect, memo, useState } from 'react'
import { type, type as loopedType } from '@camwiegert/typical'

interface Props {
  steps: (string)[]
  loop: number
  // className?: string
  // wrapper?: string
}

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
//     charIndex++
//     setTimeout(type, typingDelay)
//   } else {
//     cursorSpan.classList.remove('typing')
//     setTimeout(erase, newTextDelay)
//   }
// }

const Typical: React.FC<Props> = ({ steps, loop }) => {
  const [typedText, setTypedText] = useState('')
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    if (typedText.length < steps[stepIndex].length) {
      setTimeout(() => {
        setTypedText(steps[stepIndex].slice(0, typedText.length + 1))
        if (typedText.length === steps[stepIndex].length - 1) {
          setTimeout(() => {
            if (stepIndex < steps.length - 1) {
              setStepIndex(i => i + 1)
            } else {
              steps[steps.length - 1] = ''
            }
            setTypedText('')
          }, 300)
        }
      }, 180)
    }
  }, [typedText])

  // const type = async () => { }
  // const typicalRef = useRef(null)

  // function* writer([...text], startIndex = 0, endIndex = text.length) {
  //   while (startIndex < endIndex) {
  //     yield text.slice(0, ++startIndex).join('')
  //   }
  // }

  // useEffect(() => {
  //   if (loop === Infinity) {
  //     type(typicalRef.current, ...steps, loopedType)
  //   } else if (typeof loop === 'number') {
  //     // type(
  //     //   typicalRef.current,
  //     //   ...Array(loop)
  //     //     .fill(steps)
  //     //     .flat()
  //     // )
  //   } else {
  //     type(typicalRef.current, ...steps)
  //   }
  // })

  return <span>{typedText}</span>
}

export default memo(Typical)
