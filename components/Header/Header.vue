<template>
  <header class="header">
    <Panel class="header__panel" />
    <Case>
      <div class="header__inner row" :class="[isSearchOpen ? 'header__inner_shadow-hide' : null]">
        <Logo class="header__logo" :toMain="true" />
        <nav class="header__links">
          <a v-for="item in links" :key="item.id" :href="item.href ? item.href : 'javascript:;'" class="header__links-item" @click.prevent="item.href ? toLink(item.href, isNavShow = false) : isNavShow = !isNavShow">{{ item.title }}</a>
        </nav>
        <Button class="header__button-search" :class="isSearchOpen ? 'header__button-search_hidden' : null" @click="isSearchOpen = true">
          <template #iconMain><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="10.8958" cy="10.8949" r="9.20833" stroke="#F05454" stroke-width="2"/> <rect x="16.0508" y="18.1133" width="2.91667" height="10.2083" transform="rotate(-45 16.0508 18.1133)" fill="#F05454"/> </svg> </template>
        </Button>
        <Button class="header__button-favorit" href="/profile/favorit" @click="isNavShow = false">
          <template #iconMain><svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.7143 0H3.28571C1.47857 0 0.0164289 1.5 0.0164289 3.33333L0 30L11.5 25L23 30V3.33333C23 1.5 21.5214 0 19.7143 0ZM20.7143 26L11.5 22.5L2.28571 26V2.33333H20.7143V26Z" fill="#F05454"/> </svg> </template>
        </Button>
        <Button class="header__button-cart" href="/basket" @click="isNavShow = false">
          <span class="cart-count">{{ cartCount }}</span>
          <template #iconMain><svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6502 4.82803C27.3078 4.42828 26.8791 4.10678 26.3945 3.88636C25.91 3.66594 25.3815 3.552 24.8466 3.55263H5.1641L5.11297 3.13697C5.00833 2.27299 4.58144 1.47639 3.91323 0.898197C3.24502 0.320001 2.38195 0.000404755 1.48763 0H1.21737C0.894505 0 0.584862 0.124765 0.35656 0.346847C0.128259 0.56893 0 0.870138 0 1.18421C0 1.49828 0.128259 1.79949 0.35656 2.02157C0.584862 2.24366 0.894505 2.36842 1.21737 2.36842H1.48763C1.7858 2.36846 2.0736 2.47495 2.29642 2.66769C2.51924 2.86043 2.66159 3.12602 2.69648 3.41408L4.37159 17.2693C4.54549 18.7103 5.2572 20.039 6.37162 21.0032C7.48604 21.9674 8.9256 22.5 10.4171 22.5H23.1301C23.4529 22.5 23.7626 22.3752 23.9909 22.1532C24.2192 21.9311 24.3475 21.6299 24.3475 21.3158C24.3475 21.0017 24.2192 20.7005 23.9909 20.4784C23.7626 20.2563 23.4529 20.1316 23.1301 20.1316H10.4171C9.66357 20.1295 8.92918 19.9008 8.31458 19.4768C7.69997 19.0528 7.23523 18.4542 6.98407 17.7632H21.4951C22.9223 17.7632 24.304 17.2755 25.399 16.3853C26.4941 15.495 27.2327 14.2587 27.4858 12.8925L28.4415 7.73645C28.5369 7.22488 28.5154 6.69916 28.3787 6.19654C28.2419 5.69393 27.9932 5.22672 27.6502 4.82803ZM26.0518 7.31605L25.0949 12.4721C24.9429 13.2928 24.499 14.0353 23.8409 14.5696C23.1827 15.1039 22.3524 15.396 21.4951 15.3947H6.59694L5.4514 5.92105H24.8466C25.0254 5.92001 25.2023 5.95731 25.3646 6.0303C25.5269 6.10329 25.6708 6.21017 25.7858 6.34335C25.9009 6.47653 25.9843 6.63273 26.0303 6.80085C26.0763 6.96896 26.0836 7.14487 26.0518 7.31605ZM8.74976 29.9998C10.1305 29.9998 11.2498 28.8805 11.2498 27.4998C11.2498 26.119 10.1305 24.9998 8.74976 24.9998C7.36904 24.9998 6.24976 26.119 6.24976 27.4998C6.24976 28.8805 7.36904 29.9998 8.74976 29.9998ZM23.75 27.4998C23.75 28.8805 22.6307 29.9998 21.25 29.9998C19.8693 29.9998 18.75 28.8805 18.75 27.4998C18.75 26.119 19.8693 24.9998 21.25 24.9998C22.6307 24.9998 23.75 26.119 23.75 27.4998Z" fill="#F05454"/></svg> </template>
        </Button>
        <div class="header__ham" :class="isNavShow ? 'header__ham_x' : null" @click="isNavShow = !isNavShow">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Button class="header__button-selection" href="/select" mods="md, bg-red">Подбор по автомобилю</Button>
        <Search class="header__search"  />
      </div>
    </Case>
    <Nav class="header__nav" />
  </header>
</template>
<script src="./Header.js"></script>
<style src='./Header.scss'></style>
