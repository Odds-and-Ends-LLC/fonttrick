module.exports = function fonttrick() {
  const fs = require('fs')
  const path = require("path");

  const { COPYFILE_EXCL } = fs.constants;
  const { COPYFILE_FICLONE } = fs.constants;

  const fonts = [
    { fontFamily: "Chelsea Market", path: "ChelseaMarket-Regular.ttf" },
    { fontFamily: "Pacifico", path: "Pacifico-Regular.ttf" },
    { fontFamily: "Coconut House", path: "Coconut House.ttf" },
    { fontFamily: "Aloha", path: "Aloha.ttf" },
    { fontFamily: "Wakiki", path: "Wakiki.ttf" },
    { fontFamily: "Futura Condensed", path: "Futura Condensed Extra Bold.otf" },
    { fontFamily: "Surfing Capital", path: "Surfing Capital.ttf" },
  ];
  const fontList = {};

  fonts.forEach(font => {
    if (fs.existsSync(`/tmp/${font.path}`)) {
      console.log(`${font.path} lives in tmp!!!!`)
    } else {
      const FontFile = require.resolve(`./fonts/${font.path}`)

      console.log(FontFile);

      fs.copyFileSync(FontFile, `/tmp/${font.path}`, COPYFILE_FICLONE | COPYFILE_EXCL);

      fontList[font.fontFamily] = `/tmp/${font.path}`;
    }
  })

  return fontList;
};
