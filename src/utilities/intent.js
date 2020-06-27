function detail(from, data = null) {
  from.navigate("Detail", { data: data })
}

function animate(from){
  from.navigate("Animate")
}

function chat(from){
  from.navigate("Chat")
}

export default {
  detail,
  animate,
  chat
}