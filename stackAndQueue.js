const createQueue = () => {
  const item = {}
  let frontIndex = 0;
  let lastIndex = 0; 


  return {
    enqueue: () => {
      item[lastIndex++] = e
    },
    dequeue: () => {
      if(frontIndex === lastIndex){
        return 
      }
    },
    front: () => {},
    isEmpty: () => {},
    size: () => {}
  }
}

const createStackUsingTwoQueue = () => {




}
