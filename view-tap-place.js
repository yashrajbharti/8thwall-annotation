(async () => {

  try {
    let requestOptions = { method: 'GET', redirect: 'follow' };
    //let response = await fetch(``, requestOptions);
    let result = await response.json()
    let arrowCoords = result.arrowCoords;
    let textValue = result.textValue;
    let realW = result.realW;
    let realH = result.realH; 
    const place = document.getElementById('place')

    for (let i = 0; i < arrowCoords.length; i++) {
    let newElement = document.createElement('a-entity')
    let new2Element = document.createElement('a-entity')

    // let x = arrowCoords[i][0];
    // let y = arrowCoords[i][1];
    // let z = arrowCoords[i][2];
    newElement.setAttribute('position', { x: arrowCoords[i][0], y: arrowCoords[i][1], z: 0 })
    newElement.setAttribute('visible', 'false')
    newElement.setAttribute('rotation', "0 0 90")
    newElement.setAttribute('scale', '0.001 0.001 0.001')
    newElement.setAttribute('gltf-model', '#arrow')
    // let a = textCoords[i][0];
    // let b = textCoords[i][1];
    // let c = textCoords[i][2];
    new2Element.setAttribute('position', { x: arrowCoords[i][0], y: arrowCoords[i][1], z: 0 })
    new2Element.setAttribute('visible', 'true')
    new2Element.setAttribute('rotation', "0 0 0")
    new2Element.setAttribute('scale', '1 1 1')
    new2Element.setAttribute('text', {
      value: textValue[i],
      color: 'white',
      shader: 'msdf',
      font: './aclonica/Aclonica-Regular.json'
    });

    place.appendChild(newElement)
    place.appendChild(new2Element)
    newElement.addEventListener('model-loaded', () => {
      newElement.setAttribute('visible', 'true')
    })

  }
  }catch (error) {
      console.log('Error in fetching height and width', error);
    }
})();
