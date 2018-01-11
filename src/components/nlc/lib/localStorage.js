const ls = window.localStorage

export const addImage = url => {
  const tempArr = []
  for (let i=0; i<4; i++) {
    const temp = ls.getItem('image' + i);
    if (temp) {
      tempArr.push(temp);
    }
  }
  console.log(tempArr);
  if (!tempArr.includes(url)) {
    if (tempArr.length > 3) {
      tempArr.pop();      
    }
    tempArr.unshift(url);
  }
  for (let i=0; i<tempArr.length; i++) {
    ls.setItem('image' + i , tempArr[i])
  }
}

export const getImages = () => {
  const images = [];
  for (let i=0; i<4; i++) {
    const temp = ls.getItem('image' + i);
    if (temp) {
      images.push(temp);
    }
  }
  return images
}

export const clear = () => {
  for (let i=0; i<4; i++) {
    ls.removeItem('image'+i);
  }
}
