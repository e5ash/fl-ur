export function toPriceFormat(value) {
  if (value)
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



export function getStorage(key) {
  let ls = localStorage.getItem(key);
  ls = JSON.parse(ls);
  return ls;
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getProducts() {
  let products = getStorage('products');

  if (!products) {
    products = [];
  }

  return products;
}

export function findProduct(product) {
  if (this.products?.length > 0) {
    return this.products.find((el, index) => {
      if (el.UID == product.UID) {
        return index;
      }
    });
  } else {
    return false;
  }
}

export function addProduct(product) {
  if (!product) {
    return false;
  }

  let findElement = this.products.find(el => el.UID == product.UID);

  if (!findElement) {
    this.products.push(this.product);
    setStorage('products', this.products);
  }
}

export function removeProduct(product) {
  if (!product) {
    return false;
  }
  
  this.products = this.products.filter(el => {
    if (el.UID != product.UID) {
      return el;
    }
  });

  setStorage('products', this.products);
}
