

export default async function getData() {
  const res = await fetch('https://us-central1-tmec-api.cloudfunctions.net/api')
  const data = await res.json()
  return data
}