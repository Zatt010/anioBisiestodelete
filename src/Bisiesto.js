function bisiesto (anio){
  if (anio%100 != 0 && anio%4 == 0)
  {
    return true
  }
  return false
}

export default bisiesto