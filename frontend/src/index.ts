document.querySelector<HTMLDivElement>('#app')!.innerHTML = 'Hello'

const ws = new WebSocket(`ws://${window.location.hostname}:1972`)

ws.onmessage = (ev) => {
  const message = ev.data

  ws.send(message)
}
