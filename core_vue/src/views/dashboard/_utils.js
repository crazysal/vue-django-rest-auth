function s4 () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

function guid () {
  return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4()
}

export default {
  s4,
  guid
}
