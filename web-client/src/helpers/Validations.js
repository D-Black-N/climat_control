const IP_REGEXP = /192\.168\.0\.(25[0-5]|2[0-4]\d|1\d{2}|\d{1,2})$/

export const validateGreenHouse = (form, body) => {
  let check = true
  if (!IP_REGEXP.test(body.ip_address)) {
    form.ip_address.style.borderColor = 'red'
    form.ip_address.style.borderWidth = '2px'
    check = false
  }
  if (body.name.length < 3 || body.name.length > 100) {
    form.name.style.borderColor = 'red'
    form.name.style.borderWidth = '2px'
    check = false
  }
  if (body.location.length < 3 || body.location.length > 100) {
    form.location.style.borderColor = 'red'
    form.location.style.borderWidth = '2px'
    check = false
  }
  return check
} 

