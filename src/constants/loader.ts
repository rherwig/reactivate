const FONTS_EXT = [
  'ttf',
  'otf',
  'eot',
  'woff',
  'woff2',
];

const IMAGES_EXT = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'svg',
];

export const FONT_REGEX = new RegExp(
  `\.(${FONTS_EXT.join('|')})$`
);

export const IMAGE_REGEX = new RegExp(
  `\.(${IMAGES_EXT.join('|')})$`
);

export const VENDOR_REGEX = new RegExp(
  `\.(${[...FONTS_EXT, ...IMAGES_EXT].join('|')})$`
);
