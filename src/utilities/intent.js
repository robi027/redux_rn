function detail(from, data = null) {
  from.navigate("Detail", { data: data })
}

function animate(from){
  from.navigate("Animate")
}

export default {
  detail,
  animate
}