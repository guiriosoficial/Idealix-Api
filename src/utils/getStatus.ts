export default function getStatus(classifications: any[], imc: number) {
  const classification = {
      max: classifications.find(c => c.reference === 'max') || 0,
      min: classifications.find(c => c.reference === 'min') || 0,
      ideal: classifications.find(c => c.reference === 'ideal') || 0
  }

  let status
  if (imc > classification.max.imc) {
      status = 'Acima do peso'
  } else if (imc < classification.min.imc) {
      status = 'Abaixo do peso'
  } else {
      status = 'Saudável'
  }

  return status
}
