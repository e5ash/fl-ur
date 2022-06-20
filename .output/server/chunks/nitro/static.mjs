import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/404-18964632.mjs": {
    "type": "application/javascript",
    "etag": "\"1fc-iEkivXduWOu3qVTJQO4oAmNe50Y\"",
    "mtime": "2022-06-18T11:25:20.588Z",
    "path": "../public/_nuxt/404-18964632.mjs"
  },
  "/_nuxt/ALSRubl.1865f5cd.ttf": {
    "type": "font/ttf",
    "etag": "\"14e8-9MrQm71wz7DabUgvCjQKeW4koRk\"",
    "mtime": "2022-06-18T11:25:20.587Z",
    "path": "../public/_nuxt/ALSRubl.1865f5cd.ttf"
  },
  "/_nuxt/ALSRubl.72136556.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1592-sHXuUC/7coeVZcaNUkenFSJlHIg\"",
    "mtime": "2022-06-18T11:25:20.586Z",
    "path": "../public/_nuxt/ALSRubl.72136556.eot"
  },
  "/_nuxt/ALSRubl.bc72d739.svg": {
    "type": "image/svg+xml",
    "etag": "\"2909-nLD+/t3PKF6SSS+6FZE0NqhomAk\"",
    "mtime": "2022-06-18T11:25:20.585Z",
    "path": "../public/_nuxt/ALSRubl.bc72d739.svg"
  },
  "/_nuxt/Actual-85849f62.mjs": {
    "type": "application/javascript",
    "etag": "\"11fd-v2YMxN14306aquBaRTm5KIYKSik\"",
    "mtime": "2022-06-18T11:25:20.584Z",
    "path": "../public/_nuxt/Actual-85849f62.mjs"
  },
  "/_nuxt/Alert-6ad83433.mjs": {
    "type": "application/javascript",
    "etag": "\"30f-vlhrIY16XQaFNN73DcKfUowckb8\"",
    "mtime": "2022-06-18T11:25:20.582Z",
    "path": "../public/_nuxt/Alert-6ad83433.mjs"
  },
  "/_nuxt/Auth-1b94d60f.mjs": {
    "type": "application/javascript",
    "etag": "\"ee7-eIF5juh6icmqtcaSQ5rleJ82Xto\"",
    "mtime": "2022-06-18T11:25:20.581Z",
    "path": "../public/_nuxt/Auth-1b94d60f.mjs"
  },
  "/_nuxt/Auto-ec4a8fce.mjs": {
    "type": "application/javascript",
    "etag": "\"11b0-M2u00ada+zLwrVn/iWmN3flDRXA\"",
    "mtime": "2022-06-18T11:25:20.580Z",
    "path": "../public/_nuxt/Auto-ec4a8fce.mjs"
  },
  "/_nuxt/Breadcrumb-f0a493e1.mjs": {
    "type": "application/javascript",
    "etag": "\"5f2-sxD0VO3xUue/OnmdlaRetM32WiU\"",
    "mtime": "2022-06-18T11:25:20.579Z",
    "path": "../public/_nuxt/Breadcrumb-f0a493e1.mjs"
  },
  "/_nuxt/Btop-4c3b41a6.mjs": {
    "type": "application/javascript",
    "etag": "\"25f-LYw3ZqlvikI/GFjKPmqMzyk1NVw\"",
    "mtime": "2022-06-18T11:25:20.578Z",
    "path": "../public/_nuxt/Btop-4c3b41a6.mjs"
  },
  "/_nuxt/Button-f9a60a36.mjs": {
    "type": "application/javascript",
    "etag": "\"6e0-Fcor9n2ST/c/Ef1x9PkZlr6Ak74\"",
    "mtime": "2022-06-18T11:25:20.577Z",
    "path": "../public/_nuxt/Button-f9a60a36.mjs"
  },
  "/_nuxt/Card-74549395.mjs": {
    "type": "application/javascript",
    "etag": "\"4057-ZFLzQ7P3WNfTTGNfolTnic5pUco\"",
    "mtime": "2022-06-18T11:25:20.575Z",
    "path": "../public/_nuxt/Card-74549395.mjs"
  },
  "/_nuxt/Cart-91959174.mjs": {
    "type": "application/javascript",
    "etag": "\"259d-WotdTTMFuEH+rp/iSlrH4NHEJjs\"",
    "mtime": "2022-06-18T11:25:20.574Z",
    "path": "../public/_nuxt/Cart-91959174.mjs"
  },
  "/_nuxt/Case-4978c6ed.mjs": {
    "type": "application/javascript",
    "etag": "\"df-XHKoJXKSMr5+JZ6Hx/FMrM1bokc\"",
    "mtime": "2022-06-18T11:25:20.573Z",
    "path": "../public/_nuxt/Case-4978c6ed.mjs"
  },
  "/_nuxt/Cat-cc89dc5d.mjs": {
    "type": "application/javascript",
    "etag": "\"b27-6q36oXYsz/qavLzjQ7YNFb+R9x8\"",
    "mtime": "2022-06-18T11:25:20.572Z",
    "path": "../public/_nuxt/Cat-cc89dc5d.mjs"
  },
  "/_nuxt/Cats-be4f9ee8.mjs": {
    "type": "application/javascript",
    "etag": "\"210f-QJv0haQ8wtjL/vZNJbF60eqluZM\"",
    "mtime": "2022-06-18T11:25:20.571Z",
    "path": "../public/_nuxt/Cats-be4f9ee8.mjs"
  },
  "/_nuxt/Check-0e177f26.mjs": {
    "type": "application/javascript",
    "etag": "\"397-qKTVKIdppDPtunke/TFSIvZ+/hc\"",
    "mtime": "2022-06-18T11:25:20.570Z",
    "path": "../public/_nuxt/Check-0e177f26.mjs"
  },
  "/_nuxt/Choiser-425be2e9.mjs": {
    "type": "application/javascript",
    "etag": "\"19eb-/K8gEKm3z80JrPgZ9tvU1FUCKaU\"",
    "mtime": "2022-06-18T11:25:20.568Z",
    "path": "../public/_nuxt/Choiser-425be2e9.mjs"
  },
  "/_nuxt/Comp-dc8c1c4b.mjs": {
    "type": "application/javascript",
    "etag": "\"77f-7e8blkFEw4m62oaPoOxPrfmTVL8\"",
    "mtime": "2022-06-18T11:25:20.567Z",
    "path": "../public/_nuxt/Comp-dc8c1c4b.mjs"
  },
  "/_nuxt/Contact-9a8c4dbc.mjs": {
    "type": "application/javascript",
    "etag": "\"ad5-Irse6Ss/B0KgIDcPvKpHdWddEbQ\"",
    "mtime": "2022-06-18T11:25:20.566Z",
    "path": "../public/_nuxt/Contact-9a8c4dbc.mjs"
  },
  "/_nuxt/Dropdown-40705148.mjs": {
    "type": "application/javascript",
    "etag": "\"95-XPdGt5x1BLbiw/Ldh9xgIUn3eqs\"",
    "mtime": "2022-06-18T11:25:20.565Z",
    "path": "../public/_nuxt/Dropdown-40705148.mjs"
  },
  "/_nuxt/Error-07744ea0.mjs": {
    "type": "application/javascript",
    "etag": "\"9e9-PvH5kU6XVO2qq66ieU8SK0cYssk\"",
    "mtime": "2022-06-18T11:25:20.564Z",
    "path": "../public/_nuxt/Error-07744ea0.mjs"
  },
  "/_nuxt/Fav-4800fb7c.mjs": {
    "type": "application/javascript",
    "etag": "\"840-Oyct5qqj7TgeVLQJVJ98yU8FvAk\"",
    "mtime": "2022-06-18T11:25:20.563Z",
    "path": "../public/_nuxt/Fav-4800fb7c.mjs"
  },
  "/_nuxt/Field-09a0bf83.mjs": {
    "type": "application/javascript",
    "etag": "\"1b30-a4acvPS2k+u4n/YUcJaZWoulIqE\"",
    "mtime": "2022-06-18T11:25:20.562Z",
    "path": "../public/_nuxt/Field-09a0bf83.mjs"
  },
  "/_nuxt/Field-891043a1.mjs": {
    "type": "application/javascript",
    "etag": "\"917-Xl805WPdH+VKzr5tRWWAzX7T690\"",
    "mtime": "2022-06-18T11:25:20.561Z",
    "path": "../public/_nuxt/Field-891043a1.mjs"
  },
  "/_nuxt/File-7f426b85.mjs": {
    "type": "application/javascript",
    "etag": "\"33a-moyK9qpz9zhjB/4wnpwHAHk5qbo\"",
    "mtime": "2022-06-18T11:25:20.560Z",
    "path": "../public/_nuxt/File-7f426b85.mjs"
  },
  "/_nuxt/Filter-3ec00a9c.mjs": {
    "type": "application/javascript",
    "etag": "\"1f0c-bp7C2vz9C4CKQiMeQBMJjbCrSxs\"",
    "mtime": "2022-06-18T11:25:20.559Z",
    "path": "../public/_nuxt/Filter-3ec00a9c.mjs"
  },
  "/_nuxt/Footer-34afa854.mjs": {
    "type": "application/javascript",
    "etag": "\"1467-RQx/O0uWVA9YPyk5Yx2afqaqYEI\"",
    "mtime": "2022-06-18T11:25:20.557Z",
    "path": "../public/_nuxt/Footer-34afa854.mjs"
  },
  "/_nuxt/Form-626d83a2.mjs": {
    "type": "application/javascript",
    "etag": "\"1773-VSM31sHpY2v7J9pDGn1FV5cbuSA\"",
    "mtime": "2022-06-18T11:25:20.556Z",
    "path": "../public/_nuxt/Form-626d83a2.mjs"
  },
  "/_nuxt/Group-4e836ad4.mjs": {
    "type": "application/javascript",
    "etag": "\"a67-nKx6vjaKRjZytHT6Qnl/EPirtKQ\"",
    "mtime": "2022-06-18T11:25:20.555Z",
    "path": "../public/_nuxt/Group-4e836ad4.mjs"
  },
  "/_nuxt/H1-7b092942.mjs": {
    "type": "application/javascript",
    "etag": "\"db-euLu17i9zE039hhuS0e5RL2LR/U\"",
    "mtime": "2022-06-18T11:25:20.554Z",
    "path": "../public/_nuxt/H1-7b092942.mjs"
  },
  "/_nuxt/H2-150b0f3f.mjs": {
    "type": "application/javascript",
    "etag": "\"db-AGR2dmMokUwvZNdOmqp00q/B2oc\"",
    "mtime": "2022-06-18T11:25:20.553Z",
    "path": "../public/_nuxt/H2-150b0f3f.mjs"
  },
  "/_nuxt/H3-d94b3637.mjs": {
    "type": "application/javascript",
    "etag": "\"db-LDf2AkRckyOOuIzQ3fNfxF/PoBA\"",
    "mtime": "2022-06-18T11:25:20.552Z",
    "path": "../public/_nuxt/H3-d94b3637.mjs"
  },
  "/_nuxt/Header-7d4061a7.mjs": {
    "type": "application/javascript",
    "etag": "\"14d1-D6wXQhv84VYWCcqJyxqXE8Cc3nU\"",
    "mtime": "2022-06-18T11:25:20.551Z",
    "path": "../public/_nuxt/Header-7d4061a7.mjs"
  },
  "/_nuxt/Icon-99a710f8.mjs": {
    "type": "application/javascript",
    "etag": "\"157-GBrJoYXaKGPtKxf158LRVlavFnQ\"",
    "mtime": "2022-06-18T11:25:20.549Z",
    "path": "../public/_nuxt/Icon-99a710f8.mjs"
  },
  "/_nuxt/Icons-c18320b4.mjs": {
    "type": "application/javascript",
    "etag": "\"7583-5/FBOcNjXTRw8g/OKEZG2QdVR94\"",
    "mtime": "2022-06-18T11:25:20.548Z",
    "path": "../public/_nuxt/Icons-c18320b4.mjs"
  },
  "/_nuxt/Incdec-daa623aa.mjs": {
    "type": "application/javascript",
    "etag": "\"5cd-x8TufpiTfNQP5INEg6eH58ANkDU\"",
    "mtime": "2022-06-18T11:25:20.547Z",
    "path": "../public/_nuxt/Incdec-daa623aa.mjs"
  },
  "/_nuxt/Inf-45ea74eb.mjs": {
    "type": "application/javascript",
    "etag": "\"f07-K+3iSqctK7D4WRzJo2xLxgAd9iM\"",
    "mtime": "2022-06-18T11:25:20.546Z",
    "path": "../public/_nuxt/Inf-45ea74eb.mjs"
  },
  "/_nuxt/Intro-d4569789.mjs": {
    "type": "application/javascript",
    "etag": "\"36ea-XEIOhufWIL3D5ZzcFjTy/FqPiGE\"",
    "mtime": "2022-06-18T11:25:20.545Z",
    "path": "../public/_nuxt/Intro-d4569789.mjs"
  },
  "/_nuxt/List-c459a96e.mjs": {
    "type": "application/javascript",
    "etag": "\"17ab-ZAJZr0a3Jybs+yBFF1yEggUL4mM\"",
    "mtime": "2022-06-18T11:25:20.543Z",
    "path": "../public/_nuxt/List-c459a96e.mjs"
  },
  "/_nuxt/Location-ad39e8f9.mjs": {
    "type": "application/javascript",
    "etag": "\"4e6-HlpCWzYsMXhgph/54x5sTv9KHPA\"",
    "mtime": "2022-06-18T11:25:20.542Z",
    "path": "../public/_nuxt/Location-ad39e8f9.mjs"
  },
  "/_nuxt/Logo-45cc32c1.mjs": {
    "type": "application/javascript",
    "etag": "\"f46-5IH/stMoopsqaq/FCv0d0FQSQYs\"",
    "mtime": "2022-06-18T11:25:20.541Z",
    "path": "../public/_nuxt/Logo-45cc32c1.mjs"
  },
  "/_nuxt/Modal-adaf34f1.mjs": {
    "type": "application/javascript",
    "etag": "\"9a3-SOB9f+/OhzAnN6QS+SdVSFfP7v8\"",
    "mtime": "2022-06-18T11:25:20.540Z",
    "path": "../public/_nuxt/Modal-adaf34f1.mjs"
  },
  "/_nuxt/Myauto-99da7f1e.mjs": {
    "type": "application/javascript",
    "etag": "\"8e5-AxS4otFXkufVDUfyh5wZ4d26xR8\"",
    "mtime": "2022-06-18T11:25:20.539Z",
    "path": "../public/_nuxt/Myauto-99da7f1e.mjs"
  },
  "/_nuxt/Nav-7e6e8243.mjs": {
    "type": "application/javascript",
    "etag": "\"2caf-Hw44SyBQg/PapNkmTvdPAyIUsSQ\"",
    "mtime": "2022-06-18T11:25:20.538Z",
    "path": "../public/_nuxt/Nav-7e6e8243.mjs"
  },
  "/_nuxt/Ord-62344393.mjs": {
    "type": "application/javascript",
    "etag": "\"95e-z5hNHWL2sstmPDkLnGVKPc3qSRM\"",
    "mtime": "2022-06-18T11:25:20.536Z",
    "path": "../public/_nuxt/Ord-62344393.mjs"
  },
  "/_nuxt/Page-b16467ca.mjs": {
    "type": "application/javascript",
    "etag": "\"303-huZob8sWd2HIbvYTbogqolEYfoU\"",
    "mtime": "2022-06-18T11:25:20.535Z",
    "path": "../public/_nuxt/Page-b16467ca.mjs"
  },
  "/_nuxt/Pagination-a4d5b0ab.mjs": {
    "type": "application/javascript",
    "etag": "\"21f-29R/WH51Bs5+G4YlZr7uO9N7/o4\"",
    "mtime": "2022-06-18T11:25:20.534Z",
    "path": "../public/_nuxt/Pagination-a4d5b0ab.mjs"
  },
  "/_nuxt/Panel-37f74667.mjs": {
    "type": "application/javascript",
    "etag": "\"294-XUSLq0YlVG4RCYgiggT4nPD1Vi8\"",
    "mtime": "2022-06-18T11:25:20.533Z",
    "path": "../public/_nuxt/Panel-37f74667.mjs"
  },
  "/_nuxt/Partner-9082ce12.mjs": {
    "type": "application/javascript",
    "etag": "\"340-g57YyHXWcaFT4HQQMGznFXL3tps\"",
    "mtime": "2022-06-18T11:25:20.532Z",
    "path": "../public/_nuxt/Partner-9082ce12.mjs"
  },
  "/_nuxt/Partnership-839e2b4c.mjs": {
    "type": "application/javascript",
    "etag": "\"1829-mZqXYB7Hye1lju/AKvh7iOP4Cr0\"",
    "mtime": "2022-06-18T11:25:20.531Z",
    "path": "../public/_nuxt/Partnership-839e2b4c.mjs"
  },
  "/_nuxt/Plus-3e645920.mjs": {
    "type": "application/javascript",
    "etag": "\"2e9-eVS8UHKiVUyTaoDhhVFguvf0g3Q\"",
    "mtime": "2022-06-18T11:25:20.529Z",
    "path": "../public/_nuxt/Plus-3e645920.mjs"
  },
  "/_nuxt/Product-61f11ef5.mjs": {
    "type": "application/javascript",
    "etag": "\"2441-sZFQIU+FAx9B28zWU+PmbgADDHM\"",
    "mtime": "2022-06-18T11:25:20.528Z",
    "path": "../public/_nuxt/Product-61f11ef5.mjs"
  },
  "/_nuxt/Profile-8d61c4ac.mjs": {
    "type": "application/javascript",
    "etag": "\"179b-hfW9hUhVexp7tJiWLprYLousL38\"",
    "mtime": "2022-06-18T11:25:20.527Z",
    "path": "../public/_nuxt/Profile-8d61c4ac.mjs"
  },
  "/_nuxt/Questions-7cdd3bc1.mjs": {
    "type": "application/javascript",
    "etag": "\"5b4-iPLWU+OH9RgHJz3YYaGhpNcPRSo\"",
    "mtime": "2022-06-18T11:25:20.526Z",
    "path": "../public/_nuxt/Questions-7cdd3bc1.mjs"
  },
  "/_nuxt/Radio-217a70ee.mjs": {
    "type": "application/javascript",
    "etag": "\"317-YgD7WQYct+k90cO87UsICjELycs\"",
    "mtime": "2022-06-18T11:25:20.525Z",
    "path": "../public/_nuxt/Radio-217a70ee.mjs"
  },
  "/_nuxt/Range-4e403dc1.mjs": {
    "type": "application/javascript",
    "etag": "\"37c-5MciCvMlY5N4QWhWp3M9CRVjKzM\"",
    "mtime": "2022-06-18T11:25:20.524Z",
    "path": "../public/_nuxt/Range-4e403dc1.mjs"
  },
  "/_nuxt/Rec-eb632faf.mjs": {
    "type": "application/javascript",
    "etag": "\"3cc-PNGrlBESziPFTOniYNc6dXyJbz0\"",
    "mtime": "2022-06-18T11:25:20.523Z",
    "path": "../public/_nuxt/Rec-eb632faf.mjs"
  },
  "/_nuxt/Return-e7151eca.mjs": {
    "type": "application/javascript",
    "etag": "\"27c-UOqDbIQNK81lQ+2/F6bsMp0s848\"",
    "mtime": "2022-06-18T11:25:20.521Z",
    "path": "../public/_nuxt/Return-e7151eca.mjs"
  },
  "/_nuxt/Review-46eeb9fa.mjs": {
    "type": "application/javascript",
    "etag": "\"1b1-W0bqvBXcoUVI6IDedZg0l2m3A5E\"",
    "mtime": "2022-06-18T11:25:20.520Z",
    "path": "../public/_nuxt/Review-46eeb9fa.mjs"
  },
  "/_nuxt/Search-e0558d42.mjs": {
    "type": "application/javascript",
    "etag": "\"1919-Qw2DWGb8Y1DVTmpVCWetaJyKLXI\"",
    "mtime": "2022-06-18T11:25:20.519Z",
    "path": "../public/_nuxt/Search-e0558d42.mjs"
  },
  "/_nuxt/Select-09b68ac8.mjs": {
    "type": "application/javascript",
    "etag": "\"b99-kFmUeWpvOtaDTTyhMlZYVbgESHU\"",
    "mtime": "2022-06-18T11:25:20.517Z",
    "path": "../public/_nuxt/Select-09b68ac8.mjs"
  },
  "/_nuxt/Selection-bfc578d7.mjs": {
    "type": "application/javascript",
    "etag": "\"84d-vG8gDHEJeoYoWVkwZAeAoJbI3lA\"",
    "mtime": "2022-06-18T11:25:20.516Z",
    "path": "../public/_nuxt/Selection-bfc578d7.mjs"
  },
  "/_nuxt/Share-9e009dfc.mjs": {
    "type": "application/javascript",
    "etag": "\"38a-t/R554QwKw/jgdeuUUBh3dNZdlg\"",
    "mtime": "2022-06-18T11:25:20.515Z",
    "path": "../public/_nuxt/Share-9e009dfc.mjs"
  },
  "/_nuxt/Socials-4c2957bb.mjs": {
    "type": "application/javascript",
    "etag": "\"2a4-566Jr7FVkt2vC8nU2AlSeWxCjyQ\"",
    "mtime": "2022-06-18T11:25:20.514Z",
    "path": "../public/_nuxt/Socials-4c2957bb.mjs"
  },
  "/_nuxt/Sup-7159cb53.mjs": {
    "type": "application/javascript",
    "etag": "\"ad2-IcWoz/qXcIbyCE6kN0skB9bqW1s\"",
    "mtime": "2022-06-18T11:25:20.513Z",
    "path": "../public/_nuxt/Sup-7159cb53.mjs"
  },
  "/_nuxt/T1-27276489.mjs": {
    "type": "application/javascript",
    "etag": "\"d6-0CUFui1MOdXkxIwE8XyS+ZjKbYM\"",
    "mtime": "2022-06-18T11:25:20.511Z",
    "path": "../public/_nuxt/T1-27276489.mjs"
  },
  "/_nuxt/T2-5a341226.mjs": {
    "type": "application/javascript",
    "etag": "\"d6-r9vTS92pPh8x+uO0UIMzAXkNILQ\"",
    "mtime": "2022-06-18T11:25:20.510Z",
    "path": "../public/_nuxt/T2-5a341226.mjs"
  },
  "/_nuxt/Tabs-e635e4eb.mjs": {
    "type": "application/javascript",
    "etag": "\"91-bcyvfQQe4G3zzCtzTsEQFjHKfu4\"",
    "mtime": "2022-06-18T11:25:20.509Z",
    "path": "../public/_nuxt/Tabs-e635e4eb.mjs"
  },
  "/_nuxt/Text-7722708d.mjs": {
    "type": "application/javascript",
    "etag": "\"a49-Yv5G7L5ypE7uAzocvFygoFyaeWk\"",
    "mtime": "2022-06-18T11:25:20.508Z",
    "path": "../public/_nuxt/Text-7722708d.mjs"
  },
  "/_nuxt/Togs-41a8bf7c.mjs": {
    "type": "application/javascript",
    "etag": "\"2e3-M/rTn+scYoJeUqrDydFhkSAZgLo\"",
    "mtime": "2022-06-18T11:25:20.507Z",
    "path": "../public/_nuxt/Togs-41a8bf7c.mjs"
  },
  "/_nuxt/Utp-a1545254.mjs": {
    "type": "application/javascript",
    "etag": "\"23a-1h2aUu7pzsHcv5wumLye4Ih61uY\"",
    "mtime": "2022-06-18T11:25:20.505Z",
    "path": "../public/_nuxt/Utp-a1545254.mjs"
  },
  "/_nuxt/Video-b369d373.mjs": {
    "type": "application/javascript",
    "etag": "\"446-51IqSB0NhIacVcz+f3Ct37tdf4o\"",
    "mtime": "2022-06-18T11:25:20.504Z",
    "path": "../public/_nuxt/Video-b369d373.mjs"
  },
  "/_nuxt/_id_-47eddc14.mjs": {
    "type": "application/javascript",
    "etag": "\"3d5-BWgiBbc8A1nwJOLBPufnj94E2Jo\"",
    "mtime": "2022-06-18T11:25:20.503Z",
    "path": "../public/_nuxt/_id_-47eddc14.mjs"
  },
  "/_nuxt/about-1f30cfa2.mjs": {
    "type": "application/javascript",
    "etag": "\"e58-n5BpCBASUSegfaH319hpn7MlUF8\"",
    "mtime": "2022-06-18T11:25:20.502Z",
    "path": "../public/_nuxt/about-1f30cfa2.mjs"
  },
  "/_nuxt/actual.96acf4ad.jpg": {
    "type": "image/jpeg",
    "etag": "\"114e5c-SFuEKSBuyoMqEhiXvmweZ0P4HqI\"",
    "mtime": "2022-06-18T11:25:20.500Z",
    "path": "../public/_nuxt/actual.96acf4ad.jpg"
  },
  "/_nuxt/auto-lg.d86a8693.png": {
    "type": "image/png",
    "etag": "\"73714-wF5WybfoFOfu44Pc/WLUVwenh+I\"",
    "mtime": "2022-06-18T11:25:20.496Z",
    "path": "../public/_nuxt/auto-lg.d86a8693.png"
  },
  "/_nuxt/auto-notfound-3819b169.mjs": {
    "type": "application/javascript",
    "etag": "\"6fb-VTK+8YC/XIH/NjOiMMpY8u2+SPU\"",
    "mtime": "2022-06-18T11:25:20.493Z",
    "path": "../public/_nuxt/auto-notfound-3819b169.mjs"
  },
  "/_nuxt/basket-30822951.mjs": {
    "type": "application/javascript",
    "etag": "\"376-3lP5QC7RcNc2S7JkFygu1jM+jK0\"",
    "mtime": "2022-06-18T11:25:20.492Z",
    "path": "../public/_nuxt/basket-30822951.mjs"
  },
  "/_nuxt/bbs.331a910a.svg": {
    "type": "image/svg+xml",
    "etag": "\"f10-VF6lg6xLtC6q3tgarqAcnthW/8w\"",
    "mtime": "2022-06-18T11:25:20.491Z",
    "path": "../public/_nuxt/bbs.331a910a.svg"
  },
  "/_nuxt/bg.9eb0f492.png": {
    "type": "image/png",
    "etag": "\"2f8c7-/GOitZK47ebWmgIw+nbnqayi8QU\"",
    "mtime": "2022-06-18T11:25:20.489Z",
    "path": "../public/_nuxt/bg.9eb0f492.png"
  },
  "/_nuxt/compare-6f75a558.mjs": {
    "type": "application/javascript",
    "etag": "\"2f8-3QShm61dhlq7v9an+qjNs1scc4Y\"",
    "mtime": "2022-06-18T11:25:20.488Z",
    "path": "../public/_nuxt/compare-6f75a558.mjs"
  },
  "/_nuxt/components-a7a73087.mjs": {
    "type": "application/javascript",
    "etag": "\"266d-d1nM7sMFUXm8Anj97xirpO4sXxM\"",
    "mtime": "2022-06-18T11:25:20.487Z",
    "path": "../public/_nuxt/components-a7a73087.mjs"
  },
  "/_nuxt/contacts-06ace80a.mjs": {
    "type": "application/javascript",
    "etag": "\"31c-anZTgyrxhl19xAgGCA0i71IvmNY\"",
    "mtime": "2022-06-18T11:25:20.486Z",
    "path": "../public/_nuxt/contacts-06ace80a.mjs"
  },
  "/_nuxt/dealer-967aa435.mjs": {
    "type": "application/javascript",
    "etag": "\"6ef-vqMG8+ba1kFKhmVDN5Az77yAs7c\"",
    "mtime": "2022-06-18T11:25:20.484Z",
    "path": "../public/_nuxt/dealer-967aa435.mjs"
  },
  "/_nuxt/default-3dcba147.mjs": {
    "type": "application/javascript",
    "etag": "\"341-exJ0qU4VjFCObzRnGn0sWB8ZeeE\"",
    "mtime": "2022-06-18T11:25:20.483Z",
    "path": "../public/_nuxt/default-3dcba147.mjs"
  },
  "/_nuxt/delivery-b8cfefd6.mjs": {
    "type": "application/javascript",
    "etag": "\"e53-F9JaJqO5DpkO+rwdJT0JqD5Hdqg\"",
    "mtime": "2022-06-18T11:25:20.482Z",
    "path": "../public/_nuxt/delivery-b8cfefd6.mjs"
  },
  "/_nuxt/empty.961e6f3d.png": {
    "type": "image/png",
    "etag": "\"16575-jeEE3TZZ6TdKQ87R/AR60ImOH/Q\"",
    "mtime": "2022-06-18T11:25:20.481Z",
    "path": "../public/_nuxt/empty.961e6f3d.png"
  },
  "/_nuxt/entry-f900561f.mjs": {
    "type": "application/javascript",
    "etag": "\"4dae9-JucMVvGsbAIozUiu0abjbiYeaQE\"",
    "mtime": "2022-06-18T11:25:20.479Z",
    "path": "../public/_nuxt/entry-f900561f.mjs"
  },
  "/_nuxt/entry.4c2de5e5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20638-CkgjH6TCk+tu1MD3C5g1gO73ccM\"",
    "mtime": "2022-06-18T11:25:20.477Z",
    "path": "../public/_nuxt/entry.4c2de5e5.css"
  },
  "/_nuxt/error.3b8a7e52.png": {
    "type": "image/png",
    "etag": "\"14c2e-qovk3YQN2Ly1zXqy/uPXdHCRHKE\"",
    "mtime": "2022-06-18T11:25:20.475Z",
    "path": "../public/_nuxt/error.3b8a7e52.png"
  },
  "/_nuxt/exchange-6cd76bc4.mjs": {
    "type": "application/javascript",
    "etag": "\"cb-3oYMldExsVilP/1LlW4lL9Lah1c\"",
    "mtime": "2022-06-18T11:25:20.474Z",
    "path": "../public/_nuxt/exchange-6cd76bc4.mjs"
  },
  "/_nuxt/favorit-7ed72392.mjs": {
    "type": "application/javascript",
    "etag": "\"378-/sGfi7AuCHnbgz18gtKYmcff55I\"",
    "mtime": "2022-06-18T11:25:20.473Z",
    "path": "../public/_nuxt/favorit-7ed72392.mjs"
  },
  "/_nuxt/index-5846d19a.mjs": {
    "type": "application/javascript",
    "etag": "\"ef-zKkCJvf5jX1q+OsXnEjUhQDVDLk\"",
    "mtime": "2022-06-18T11:25:20.472Z",
    "path": "../public/_nuxt/index-5846d19a.mjs"
  },
  "/_nuxt/index-73563a24.mjs": {
    "type": "application/javascript",
    "etag": "\"4fd-g9GnXX+Z28eGtDpj9QOHInkyAuw\"",
    "mtime": "2022-06-18T11:25:20.471Z",
    "path": "../public/_nuxt/index-73563a24.mjs"
  },
  "/_nuxt/index-9673fc6e.mjs": {
    "type": "application/javascript",
    "etag": "\"61d-dMrVybiD5evH2Ilxh+DWd2hfByM\"",
    "mtime": "2022-06-18T11:25:20.469Z",
    "path": "../public/_nuxt/index-9673fc6e.mjs"
  },
  "/_nuxt/index-c34b78ec.mjs": {
    "type": "application/javascript",
    "etag": "\"2ee-zGVIFG2+NHwnuyafM8WmpL88CPU\"",
    "mtime": "2022-06-18T11:25:20.468Z",
    "path": "../public/_nuxt/index-c34b78ec.mjs"
  },
  "/_nuxt/index-f1da8e6e.mjs": {
    "type": "application/javascript",
    "etag": "\"333-tVt0WaFUDMiSHNZZqq6QxAmNRN8\"",
    "mtime": "2022-06-18T11:25:20.467Z",
    "path": "../public/_nuxt/index-f1da8e6e.mjs"
  },
  "/_nuxt/index-f8f179e0.mjs": {
    "type": "application/javascript",
    "etag": "\"2ad-DtqJKY3qGWutqiHHVpSxo5dg43w\"",
    "mtime": "2022-06-18T11:25:20.466Z",
    "path": "../public/_nuxt/index-f8f179e0.mjs"
  },
  "/_nuxt/info-8ec0fce8.mjs": {
    "type": "application/javascript",
    "etag": "\"1fd7-vs8Lotq/FZudEelUBLHErqq5jmA\"",
    "mtime": "2022-06-18T11:25:20.465Z",
    "path": "../public/_nuxt/info-8ec0fce8.mjs"
  },
  "/_nuxt/item-3c8d2ab3.mjs": {
    "type": "application/javascript",
    "etag": "\"e14-UNUbYHDeWjYxAI7Kh/XSeIUH5Ps\"",
    "mtime": "2022-06-18T11:25:20.464Z",
    "path": "../public/_nuxt/item-3c8d2ab3.mjs"
  },
  "/_nuxt/item-960432a1.mjs": {
    "type": "application/javascript",
    "etag": "\"3d5-qx75vr5TT51FsJ1wvPefthj48wU\"",
    "mtime": "2022-06-18T11:25:20.463Z",
    "path": "../public/_nuxt/item-960432a1.mjs"
  },
  "/_nuxt/lkp-3850d5d6.mjs": {
    "type": "application/javascript",
    "etag": "\"5ea-7PCcNnMcKDAbvm/2PqfdfVxogog\"",
    "mtime": "2022-06-18T11:25:20.462Z",
    "path": "../public/_nuxt/lkp-3850d5d6.mjs"
  },
  "/_nuxt/login-4bfed2d6.mjs": {
    "type": "application/javascript",
    "etag": "\"394-IkLZLoxIqxrfRlaIfn3V/SYHi4Y\"",
    "mtime": "2022-06-18T11:25:20.460Z",
    "path": "../public/_nuxt/login-4bfed2d6.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"cb86-k3fPZCpa8RKnBsNQ7LQ7vWvmqtQ\"",
    "mtime": "2022-06-18T11:25:20.459Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/order-7ec83954.mjs": {
    "type": "application/javascript",
    "etag": "\"2c5-RgQYfNKGrGkmGa3gN6SQH6oCuz0\"",
    "mtime": "2022-06-18T11:25:20.458Z",
    "path": "../public/_nuxt/order-7ec83954.mjs"
  },
  "/_nuxt/partners-9c4f5d96.mjs": {
    "type": "application/javascript",
    "etag": "\"6cf-H/vFWr2hFK9SPsbMGeHS6hRT3BQ\"",
    "mtime": "2022-06-18T11:25:20.456Z",
    "path": "../public/_nuxt/partners-9c4f5d96.mjs"
  },
  "/_nuxt/pay-fc20d5ee.mjs": {
    "type": "application/javascript",
    "etag": "\"e9d-EBbGFGRZ7USWrEoy/ZwAFOIK+Fo\"",
    "mtime": "2022-06-18T11:25:20.455Z",
    "path": "../public/_nuxt/pay-fc20d5ee.mjs"
  },
  "/_nuxt/reg-db2e8a0f.mjs": {
    "type": "application/javascript",
    "etag": "\"476-mQRHs5mOohWve/ohboSwm1Fjvro\"",
    "mtime": "2022-06-18T11:25:20.454Z",
    "path": "../public/_nuxt/reg-db2e8a0f.mjs"
  },
  "/_nuxt/return-pay-c61295a5.mjs": {
    "type": "application/javascript",
    "etag": "\"e93-IJNTL0RzdaXNgd5Rser5r2rK/eY\"",
    "mtime": "2022-06-18T11:25:20.452Z",
    "path": "../public/_nuxt/return-pay-c61295a5.mjs"
  },
  "/_nuxt/search-b036167c.mjs": {
    "type": "application/javascript",
    "etag": "\"4ac-xwtD5Xuy4N2i2q3J6W2Fr5bHqyo\"",
    "mtime": "2022-06-18T11:25:20.451Z",
    "path": "../public/_nuxt/search-b036167c.mjs"
  },
  "/_nuxt/select-41bea1fe.mjs": {
    "type": "application/javascript",
    "etag": "\"3a3-PU3yBF30pjl/kYhueFy1zBCAQtM\"",
    "mtime": "2022-06-18T11:25:20.450Z",
    "path": "../public/_nuxt/select-41bea1fe.mjs"
  },
  "/_nuxt/selection-car.d9315159.png": {
    "type": "image/png",
    "etag": "\"427dd-sAun9c2q+2MzwJK6OvvgykCFRLI\"",
    "mtime": "2022-06-18T11:25:20.448Z",
    "path": "../public/_nuxt/selection-car.d9315159.png"
  },
  "/_nuxt/suppliers-1583f92f.mjs": {
    "type": "application/javascript",
    "etag": "\"2a4-jDbh/RABM0PiebuGSnDeEQmxSaw\"",
    "mtime": "2022-06-18T11:25:20.446Z",
    "path": "../public/_nuxt/suppliers-1583f92f.mjs"
  },
  "/_nuxt/thumbs-dbbdb6d5.mjs": {
    "type": "application/javascript",
    "etag": "\"d1e-TP0FzDzbp2JGpOQgwdL8Yxa3nX4\"",
    "mtime": "2022-06-18T11:25:20.445Z",
    "path": "../public/_nuxt/thumbs-dbbdb6d5.mjs"
  },
  "/_nuxt/tires.f3c2b46a.png": {
    "type": "image/png",
    "etag": "\"71ccd-bMlgqwEuIpDuogqlHk/KOu6jZyE\"",
    "mtime": "2022-06-18T11:25:20.444Z",
    "path": "../public/_nuxt/tires.f3c2b46a.png"
  },
  "/_nuxt/utp.2e7ae339.png": {
    "type": "image/png",
    "etag": "\"2fcb8-me3JtRh+Mjmua/CITNAfV/zU/os\"",
    "mtime": "2022-06-18T11:25:20.441Z",
    "path": "../public/_nuxt/utp.2e7ae339.png"
  },
  "/_nuxt/welcome-85d31bbb.mjs": {
    "type": "application/javascript",
    "etag": "\"2ec0-QX9r8VP5W+lFYRpmYYOIIdEsPx4\"",
    "mtime": "2022-06-18T11:25:20.438Z",
    "path": "../public/_nuxt/welcome-85d31bbb.mjs"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _static = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

export { _static as default };
//# sourceMappingURL=static.mjs.map
