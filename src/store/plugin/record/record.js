class Record {
  constructor(model, inputObj) {
    this.ModelInfo = {name: model.name}
    this.Revert = function () {
    }
    this.Save = function () {
    }
    this.Destroy = function () {
    }
    this.Changes = function () {
      //soll zurückgeben, was zu was geändert wurde
      //wird auf null gesetzt, wenn gespeichert wurde
    }
    this.HasChanges = function () {
      //true / false wenn änderung
      //false nach speichern
    }
    this.IsNew = function () {
      //true, wenn createRecord ausgeführt wurde
      //nach safe function => false
    }

    for (let key in model.varSchema) {
      this[key] = validateInput(key, model, inputObj)
    }
  }
}

function validateInput(key, model, inputObj) {
  const varSchema = model.varSchema
  if (checkType(key, model, inputObj)) {
    if (varSchema[key] && varSchema[key].required && inputObj[key]) {
      return inputObj[key]
    } else if (!varSchema[key].required && inputObj[key]) {
      return inputObj[key]
    } else if (varSchema[key].required && !inputObj[key]) {
      return errorLog()
    } else {
      return null
    }
  } else {
    return 'type in model: ' + model.name + ' in variable varSchema.' + key + ' is not defined!'
  }
}

function checkType(key, model, inputObj) {
  if (model.varSchema[key].type) {
    return typeof inputObj[key] === model.varSchema[key].type
  } else {
    return false
  }
}

function errorLog() {
  //TODO: delete Object when errorLog is called
  console.log('required Model-Element is not defined in Object')
  return 'required Model-Element is not defined in Object'
}

export default Record
