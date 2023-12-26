import { 
  useEffect, 
  useState,
  useRef 
}  from 'react'

import Paragraph from './Paragraph'

const App = ({
  app,
  conversation,
  close
}) => {
 
  const [lastMessage, setLastMessage] = useState(1)

  const content = useRef(null)

  useEffect(() => {
    content.current.scroll({
      top      : content.current.offsetHeight,
      left     : 0, 
      behavior : 'smooth',
    })
  }, [lastMessage])

  const character = app.characters.get(conversation[ lastMessage - 1 ].character)
  const isLastMessage = lastMessage !== conversation.length

  return(
    <div style={ styles.container }>
      <div style={ styles.pictureContainer }>
        <img style={ styles.picture } src={ character.image } />
      </div>
      <div style={ styles.content }>
        <div ref={ content } style={ styles.textContainer }>
          { conversation.slice(0, lastMessage).map(
            (messages, currentMessage) => messages.content.map(
              (text, paragraph) => (
                <Paragraph 
                  key={ `${currentMessage}-${paragraph}` }
                  text={ text } 
                  name={ paragraph === 0 ? character.name : false }
                  color={ character.color ?? 'white' }
                  isActive={ (lastMessage - 1) === currentMessage }
                />
              )
            )
          ) }
        </div>
        { isLastMessage
          ? <div style={ styles.next } onClick={ () => setLastMessage(lastMessage + 1) }>
              Next
            </div>
          : <div style={ styles.next } onClick={ close }>
            Close
            </div> }
      </div>
    </div>
  )
}

const styles = {
  container: {
    display        : 'flex',
    justifyContent : 'right',
    width          : '66%',
    fontFamily     : 'arial'
  },
  pictureContainer: {
    width          : '20%',
    marginTop      : 150,
    transform      : 'translateX(20px)',
    minWidth       : '150px'
  },
  picture: {
    width          : '100%',
  },
  content: {
    width          : '65%',
    boxSizing      : 'border-box',
    background     : 'rgba(0, 0, 0, 0.9)',
    height         : '100%',
    color          : 'white',
    padding        : '120px 60px',
    minWidth       : 320
  },
  next: {
    padding        : '10px 30px',
    marginTop      : 20,
    textTransform  : 'uppercase',
    background     : 'white',
    color          : 'black',
    cursor         : 'pointer',
    marginRight    : 30
  },
  textContainer: {
    maxHeight      : '80%',
    overflow       : 'hidden',
    display        : 'flex',
    flexDirection  : 'column',
    fontSize       : 17,
    marginRight    : 30,
    lineHeight     : 1.4
  }
}

export default App
