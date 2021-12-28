import calculate from './calculate'

test('Taking equation and returning result', () => {
  return expect(calculate('1+1')).resolves.toBe('2')
})
