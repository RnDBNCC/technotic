const isStringEmpty = (value: string | undefined): boolean => {
  return (value ?? '') !== ''
}

export default isStringEmpty
