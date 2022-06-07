import { toLink } from '~/utils';

export default {
  name: 'Auto',
  data() {
    return {
      currentMark: '',
      currentModel: '',
      currentMode: '',
      classSelectError: 'auto__select_error',
      classSelectMarks: null,
      classSelectModels: null,
      classSelectMods: null,
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
  watch: {
    currentMark() {
      this.currentModel = '';
      this.currentMode = '';

      if (this.currentMark) {
        this.$refs.selectModels.removeDisabled();
      } else {
        this.$refs.selectModels.setDisabled();
      }
    },
    currentModel() {
      this.currentMode = '';

      if (this.currentMark) {
        this.$refs.selectMods.removeDisabled();
      } else {
        this.$refs.selectMods.setDisabled();
      }
    }
  },
  methods: {
    toLink,
    clickToModels($event) {
      if (!this.currentMark) {
        $event.preventDefault();
        this.classSelectMarks = this.classSelectError; 
        setTimeout(()=>{
          this.classSelectMarks = ''; 
        }, 2000);
      }
    },
    clickToMods($event) {
      if (!this.currentMark) {
        $event.preventDefault();
        this.classSelectMarks = this.classSelectError; 
        setTimeout(()=>{
          this.classSelectMarks = ''; 
        }, 2000);

        return false;
      }

      if (!this.currentModel) {
        $event.preventDefault();
        this.classSelectModels = this.classSelectError; 
        setTimeout(()=>{
          this.classSelectModels = ''; 
        }, 2000);
      }
    },
    scrollToBlock() {
      if (document.body >= 768) {
        this.$refs.selection.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    },
    clickToButton($event) {
      if (!this.currentMark) {
        $event.preventDefault();

        this.classSelectMarks = this.classSelectError; 
        setTimeout(()=>{
          this.classSelectMarks = ''; 
        }, 2000);

        return false;
      }
      
      this.toLink('/catalog');
    }
  },
  props: {
    isPage: Boolean,
    classSelect: String,
    classButton: String,
    selectBg: Boolean,
    showButton: Boolean
  }
}
