const Paragraph = ({
  text,
  name,
  isActive,
  color
}) => (
  <div
    style={{
      ...styles.text,
      ...(! isActive ? styles.previousText : {}),
      ...(name ? styles.hasName : {})
    }}
  >
    { name &&
      <> 
        <strong style={{
          ...styles.name,
          color: isActive ? color : 'white' 
        }}>
          { name }
        </strong>
        <span style={ styles.afterName }></span>
      </> } 
    { ! text.type || text.type !== 'link'
      ? text
      : <a href={ text.url } target="_blank" style={{
          ...styles.link,
          color: isActive ? color : 'white' 
        }}>
          { text.content }
        </a> }
  </div>
)

const styles = {
  text: {
    padding       : '10px 0px',
    paddingLeft   : '30px'
  },
  previousText: {
    opacity       : 0.5
  },
  name: {
    textTransform : 'uppercase',
  },
  afterName: {
    display       : 'inline-block',
    height        : 1,
    width         : 15,
    background    : 'white',
    verticalAlign : 'middle',
    margin        : '0 10px'
  },
  hasName: {
    textIndent    : '-30px'
  },
  link : {
    display       : 'inherit',
    fontWeight    : 'bold',
    textAlign     : 'center',
  }
}

export default Paragraph
