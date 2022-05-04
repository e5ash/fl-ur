export function toPriceFormat(value) {
  return value.toLocaleString('ru');
}

export function scrollTop() {
  // window.scrollTo(0,0);
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}

export function toLink(href, before, after) {
    if (before) {
      before();
    }

    scrollTop();
    this.$router.push(href);

    if (after) {
      after();
    }
}


export function initMods(_this) {
  if (!_this.mode) {
    return false;
  }

  let block = _this.$options.name;
  block = block.toLowerCase();
  _this.block = block;

  let arrayMods = [];
  _this.mode.split(', ').forEach((mode)=>{
    arrayMods.push(_this.block + '_' + mode);
  })
  
  return arrayMods;
}

export function addMode(_this, name) {
  let mode = _this.name + '_' + name;
  _this.mods.push(mode);
}
