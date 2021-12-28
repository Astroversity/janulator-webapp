export default async function calculate(equation: string) {
  const url = new URL('https://janulator.cruftbusters.com')
  url.searchParams.append('equation', equation)
  const response = await fetch(url.toString())
  const text = await response.text()
  return text
}
