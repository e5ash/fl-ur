import { toLink } from '~/utils';

export default {
  name: 'Choiser',
  setup() {
    let isShow = useState('isChoiserShow', ()=> false );
    
    return {
      isShow
    }
  },
  data() {
    return {
      cls: {
        modalShow: 'choiser__modal_show',
        currentItem: 'choiser__item_current'
      },
      buttonTextCurrent: '',
      buttonTexts: {
        next: 'Продолжить',
        skip: 'Пропустить',
        reset: 'Сбросить'
      },
      searchValue: '',
      searchList: [],
      currentMark: '',
      currentModel: '',
      currentMode: '',
      level: 0,
      marks: [
        {
          name: 'Volkswagen',
          icon: '/assets/images/marks/volkswagen.svg',
          models: [
            {
              name: 'Golf',
              mods: [
                { name: 'Golf' },
                { name: 'Golf Alltrack' },
                { name: 'Golf Country' },
                { name: 'e-Golf' },
              ]
            },
            {
              name: 'Jetta',
              mods: [
                { name: 'Jetta' },
                { name: 'Jeta GLI' },
              ]
            },
          ]
        },
        {
          name: 'Porsche',
          icon: '/assets/images/marks/porsche.svg',
          models: [
            {
              name: '911',
              mods: [
                { name: '911' },
                { name: '911 Carrera' },
                { name: '911 R' },
                { name: '911 Turbo' },
                { name: '911 Turbo S' },
              ]
            },
            {
              name: 'Cayenne',
              mods: [
                { name: 'Cayenne' },
                { name: 'Cayenne Diesel' },
                { name: 'Cayenne S' },
                { name: 'Cayenne Turbo' },
              ]
            }
          ]
        },
        {
          name: 'Audi',
          icon: '/assets/images/marks/audi.svg',
          models: [
            {
              name: '100',
              mods: [
                { name: '100' },
                { name: '100 S4' },
              ]
            },
            {
              name: 'A5',
              mods: [
                { name: 'A5' },
                { name: 'A5 g-tron' },
              ]
            },

          ]
        },
        {
          name: 'BMW',
          icon: '/assets/images/marks/bmw.svg',
          models: [
            {
              name: 'X1',
              mods: [
                { name: 'X1' },
                { name: 'X1 16d' },
                { name: 'X1 18d' },
                { name: 'X1 18i' },
                { name: 'X1 20d' },
                { name: 'X1 20i' },
                { name: 'X1 23d' },
                { name: 'X1 28i' },
              ]
            },
            {
              name: 'X2',
              mods: [
                { name: 'X2' },
                { name: 'X2 16d' },
                { name: 'X2 18d' },
                { name: 'X2 18i' },
                { name: 'X2 20d' },
                { name: 'X2 20i' },
                { name: 'X2 23d' },
                { name: 'X2 28i' },
              ]
            },
            {
              name: 'X3',
              mods: [
                { name: 'X3' },
                { name: 'X3 16d' },
                { name: 'X3 18d' },
                { name: 'X3 18i' },
                { name: 'X3 20d' },
                { name: 'X3 20i' },
                { name: 'X3 23d' },
                { name: 'X3 28i' },
              ]
            },
          ]
        },
        {
          name: 'Mini',
          icon: '/assets/images/marks/mini.svg',
          models: [
            {
              name: 'Cabrio',
              mods: [
                { name: 'Cabrio Cooper' },
                { name: 'Cabrio Cooper D' },
                { name: 'Cabrio Cooper S' },
              ]
            }
          ]
        },
      ]
    }
  },
  methods: {
    toLink,
    goBack() {
      if (this.level == 0) {
        this.isShow = false;
        return false;
      }

      switch(this.level) {
        case 1: 
          this.currentMark = '';
          break;
        case 2: 
          this.currentModel = '';
          break;
        case 3: 
          this.currentMode = '';
          break;
      }

      this.level--;
    },
    setItem(type, value, addLevel = true, go = false) {
      if (this[type] == value) {
        return false;
      }

      this[type] = value;
      if (addLevel) {
        this.nextLevel();
      }
      if (go) {
        this.toLink(go);
      }
    },
    nextLevel() {
      this.level = this.level + 1;
    },
    close() {
      this.isOpen = false;
    },
    clickToButton() {
      if (this.filterList.length == 0) {
        this.searchValue = ''

        this.$refs.area.value = '';
        this.$refs.area.handleFocusout();
        // this.$refs.area.handleInput();
      }

    }
  },
  computed: {
    filterList() {
      let searchVal = this.searchValue.toLowerCase().trim();
      return this.searchList.filter((el)=>{
        if (el.name.toLowerCase().indexOf(searchVal) >= 0) {
          return el;
        }
      });
    }
  },
  created() {
    this.buttonTextCurrent = this.buttonTexts.next;
    this.searchList = this.marks;

  },
  watch: {
    level() {
      this.$refs.area.value = '';
      this.$refs.area.handleFocusout();
      this.$refs.area.handleInput();


      switch(this.level) {
        case 0:
          this.searchList = this.marks;
          this.buttonTextCurrent = this.buttonTexts.next;
          break;
        case 1:
          this.searchList = this.currentMark.models;
          this.buttonTextCurrent = this.buttonTexts.next;
          break;
        case 2:
          this.searchList = this.currentModel.mods;
          this.buttonTextCurrent = this.buttonTexts.skip;
          break;
      }
    }
  }
}
