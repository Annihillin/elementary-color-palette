function titleCase(word) {
   return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
}

function induvialColor() {
   console.info('use individual color');

   const ele = document.getElementsByClassName('color')

   Object.values(ele).forEach(e => {
      // e.style.backgroundColor = e.dataset.color
      let colorCode = e.dataset.color.trim();
      let badge = colorCode.indexOf('-') < 0 ? colorCode : colorCode.substr(0, colorCode.indexOf('-'));
      let key = colorCode.replace('-', '_');
      
      e.style.color = colors[badge][key]
   })
}

function loadAllColor() {
   console.info('all color palette loaded');

   const value = Object.values(colors);

   for (let i = 0; i < value.length; i++) {
      let ul = document.createElement('ul');
      ul.innerHTML = ''

      Object.entries(value[i]).forEach(([key, value]) => {
         ul.innerHTML += `<li class="${
            ((key.indexOf('_') < 0) ? key : key.substr(0, key.indexOf('_')))
         }" style="background-color:${value};"><span>${
            titleCase(key.replace('_', ' '))
         }</span><span>${value}</span></li>`
      })
      document.querySelector('body').insertAdjacentElement('beforeend', ul)
   }
}

window.onload = function() {
   induvialColor()
   loadAllColor()
}

const colors = {
   strawberry: {
      strawberry: '#c6262e',
      strawberry_100: '#ff8c82',
      strawberry_300: '#ed5353',
      strawberry_500: '#c6262e',
      strawberry_700: '#a10705',
      strawberry_900: '#7a0000'
   },
   orange: {
      orange: '#f37329',
      orange_100: '#ffc27d',
      orange_300: '#ffa154',
      orange_500: '#f37329',
      orange_700: '#cc3b02',
      orange_900: '#a62100'
   },
   banana: {
      banana: '#f9c440',
      banana_100: '#fff394',
      banana_300: '#ffe16b',
      banana_500: '#f9c440',
      banana_700: '#d48e15',
      banana_900: '#ad5f00'
   },
   lime: {
      lime: '#68b723',
      lime_100: '#d1ff82',
      lime_300: '#9bdb4d',
      lime_500: '#68b723',
      lime_700: '#3a9104',
      lime_900: '#206b00'
   },
   mint: {
      mint: '#28bca3',
      mint_100: '#89ffdd',
      mint_300: '#43d6b5',
      mint_500: '#28bca3',
      mint_700: '#0e9a83',
      mint_900: '#007367'
   },
   blueberry: {
      blueberry: '#3689e6',
      blueberry_100: '#8cd5ff',
      blueberry_300: '#64baff',
      blueberry_500: '#3689e6',
      blueberry_700: '#0d52bf',
      blueberry_900: '#002e99'
   },
   grape: {
      grape: '#a56de2',
      grape_100: '#e4c6fa',
      grape_300: '#cd9ef7',
      grape_500: '#a56de2',
      grape_700: '#7239b3',
      grape_900: '#452981'
   },
   bubblegum: {
      bubblegum: '#de3e80',
      bubblegum_100: '#fe9ab8',
      bubblegum_300: '#f4679d',
      bubblegum_500: '#de3e80',
      bubblegum_700: '#bc245d',
      bubblegum_900: '#910e38'
   },
   cocoa: {
      cocoa: '#715344',
      cocoa_100: '#a3907c',
      cocoa_300: '#8a715e',
      cocoa_500: '#715344',
      cocoa_700: '#57392d',
      cocoa_900: '#3d211b'
   },
   silver: {
      silver: '#abacae',
      silver_100: '#fafafa',
      silver_300: '#d4d4d4',
      silver_500: '#abacae',
      silver_700: '#7e8087',
      silver_900: '#555761'
   },
   slate: {
      slate: '#485a6c',
      slate_100: '#95a3ab',
      slate_300: '#667885',
      slate_500: '#485a6c',
      slate_700: '#273445',
      slate_900: '#0e141f'
   },
   black: {
      black: '#333333',
      black_100: '#666666',
      black_300: '#4d4d4d',
      black_500: '#333333',
      black_700: '#1a1a1a',
      black_900: '#000000'
   }
}


