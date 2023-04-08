// Colocar ipv4 da maquina hospedeira
const _webSocket = new WebSocket('ws://192.168.1.12:3000')

function sendMessage() {
  const message = document.getElementById('message').value
  if (message) {

    _webSocket.send(
      JSON.stringify({
        type: 'message',
        data: message
      })
    )
    appendMessage('me', message)

  } else { return false } 
}

function appendMessage(who = '', message) {
  const chat = document.getElementById("chat")

  if (who == 'me') {
    // clear input
    document.getElementById('message').value = ''

    const node = `
    <div class="relative w-[4.5rem] min-w-fit ml-64 flex items-center p-3 bg-sky-500 shadow-sky-300 justify-self-end
        box-border rounded-md rounded-tr-none shadow-md text-white text-sm">
      <span class="mr-3">${message}</span> 
      <span class="absolute bottom-0 right-0 text-[0.45rem] -mb-0.5 mr-1">19:54</span>
    </div>
    `
    chat.insertAdjacentHTML('beforeend', node)
    chat.scrollTop = chat.scrollHeight

  } else {
    const node = `
    <div class="relative w-[4.5rem] mr-auto max-w-[25rem] ml-0 min-w-fit flex items-center p-3 h-fit bg-white text-slate-900 
        box-border rounded-md rounded-tl-none  shadow-md text-sm">
      <span class="mr-3">${message}</span> 
      <span class="absolute bottom-0 right-0 text-[0.45rem] -mb-0.5 mr-1">19:54</span>
    </div>
    `

    chat.insertAdjacentHTML('beforeend', node)
    chat.scrollTop = chat.scrollHeight
  }
}

_webSocket.addEventListener('message', event => {
  const content = JSON.parse(event.data)
  if (content.type == 'message') {
    appendMessage('', content.data)
  }
  if (content.type == 'userName') {

  }
})
