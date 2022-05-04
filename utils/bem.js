export default {
  mods: {
    init(_this) {
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
      
      _this.mods = arrayMods;
    },
    add(_this, name) {
      let modeName = _this.block + '_' + name;
      let elementIndex = _this.mods.indexOf(modeName);

      if (elementIndex < 0) {
        _this.mods.push(modeName);
      }
    },
    remove(_this, name) {
      let modeName = _this.block + '_' + name;
      let elementIndex = _this.mods.indexOf(modeName);

      if (elementIndex >= 0) {
        _this.mods.splice(elementIndex, 1);
      }
    },
    include(_this, name) {
      let modeName = _this.block + '_' + name;
      let elementIndex = _this.mods.indexOf(modeName);

      if (elementIndex >= 0) {
        return true;
      } else {
        return false;
      }
    }

  }
}
