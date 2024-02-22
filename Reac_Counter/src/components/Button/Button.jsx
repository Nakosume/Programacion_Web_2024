export function Button (props) {
  const { content, name, clickAction, downAction, upAction } = props
  return (
    <button className={name} onClick={clickAction} onMouseDown={downAction} onMouseUp={upAction}>{content}</button>
  )
}
