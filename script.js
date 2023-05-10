const deleteElement = () => {
    let display = document.querySelector('#display');
    let lastChild = display.lastElementChild;
    if (lastChild) {
      display.removeChild(lastChild);
    }
  };
  
  const insert = () => {
    let type = document.querySelector('#type').value;
    let label = document.querySelector('#label').value;
  
    switch (type) {
      case 'text':
        appendText(label);
        break;
      case 'button':
        appendButton(label);
        break;
      case 'checkbox':
        appendCheckbox(label);
        break;
      case 'radio':
        appendRadio(label);
        break;
      case 'file':
        appendFile(label);
        break;
      case 'date':
        appendDate(label);
        break;
      case 'submit':
        appendSubmit(label);
        break;


    }
  };
  
  const appendText = (label = 'Default') => {
    let elem = document.createElement('input');
    elem.setAttribute('type', 'text');
    elem.setAttribute('placeholder', label);
    elem.setAttribute('class', 'form-control mt-2');
    document.querySelector('#display').append(elem);
  

  };
  
  const appendButton = (label = 'Default') => {
    let elem = document.createElement('button');
    elem.setAttribute('class', 'btn btn-primary form-control mt-2');
    elem.textContent = label;
    document.querySelector('#display').append(elem);
  
  
  };
  
  
  const appendRadio = (label = 'Default') => {
    let elem = document.createElement('input');
    elem.setAttribute('type', 'radio');
    elem.setAttribute('id', label);
    elem.setAttribute('name', 'radio-group');
    elem.setAttribute('class', 'form-check-input mt-2');
  
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
  
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, elemLabel);
  
    document.querySelector('#display').append(container);
  
   
  };
  
  const appendFile = (label = 'Default') => {
    let fileInputContainer = document.createElement('div');
    fileInputContainer.setAttribute('class', 'custom-file mt-2');
  
    let elem = document.createElement('input');
    elem.setAttribute('type', 'file');
    elem.setAttribute('class', 'custom-file-input');
  elem.setAttribute('id', label);
  elem.setAttribute('name', label);

  let elemLabel = document.createElement('label');
  elems.setAttribute('class', 'custom-file-label');
  elems.setAttribute('for', label);
  elems.textContent = label;

  fileInputContainer.append(elem, elems);

  document.querySelector('#display').append(fileInputContainer);

  
};
const appendCheckbox = (label = 'Default') => {
  let elem = document.createElement('input');
  elem.setAttribute('type', 'checkbox');
  elem.setAttribute('id', label);
  elem.setAttribute('name', label);
  elem.setAttribute('class', 'form-check-input mt-2');

  let elemLabel = document.createElement('label');
  elemLabel.setAttribute('for', label);
  elemLabel.textContent = label;

  let container = document.createElement('div');
  container.setAttribute('class', 'form-check');
  container.append(elem, elemLabel);

  document.querySelector('#display').append(container);

 
};


const appendDate = (label = 'Default') => {
  let elemLabel = document.createElement('label');
  elemLabel.setAttribute('for', label);
  elemLabel.textContent = label;

  let elem = document.createElement('input');
  elem.setAttribute('type', 'date');
  elem.setAttribute('id', label);
  elem.setAttribute('name', label);
  elem.setAttribute('class', 'form-control mt-2');

  let container = document.createElement('div');
  container.setAttribute('class', 'form-group');
  container.append(elemLabel, elem);

    
  document.querySelector('#display').append(container);
     
};





const appendWhitespace = (label = "Default") => {   
        
  let elemP = document.createElement('p');
  elemP.setAttribute('for', p);
  elemP.textContent = label

  

}

const appendSubmit = (label = 'Submit') => {
  let elem = document.createElement('input');
  elem.setAttribute('type', 'submit');
  elem.setAttribute('value', label);
  elem.setAttribute('class', 'btn btn-primary form-control mt-2');
  document.querySelector('#display').append(elem);
};

