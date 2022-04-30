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
