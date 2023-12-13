export const prettifying = (request: string) => {
    let space = 0;
    let newSpace = 0;
    const regex = /({|}|\{[^{}]*})/g;
    const requestArr = request.split(regex).filter((el) => el);
    const newArr: string[] = [];
    for (let i = 0; i < requestArr.length; i++) {
      let elem = requestArr[i].trim();
      if (requestArr[i + 1] === '{') {
        elem = elem + ' {';
        requestArr.splice(i + 1, 1);
      }
      if (elem) {
        newArr.push(elem);
      }
    }
    return newArr.map(el =>{
      space = newSpace;

        if(el.endsWith('{')){
          newSpace+=2
      return `${' '.repeat(space)}${el}`;
        }
        if (el.includes('}')){
          newSpace-=2
          newSpace = newSpace<0 ? 0: newSpace
      return `${' '.repeat(newSpace)}${el}`;
        }
        return `${' '.repeat(space)}${el}`;
    })
    .join('\n')+'\n'

    // console.log(newArr);
    // dispatch(updateTabContent({ requestContent: newArr.join('\n')+'\n' }));
  };