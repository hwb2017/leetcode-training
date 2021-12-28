interface Meta {
  bits: number
  len: number
}

const convert2Meta = (word: string): Meta => {
  let bits = 0
  for (let w of word) {
    bits |= 1 << (w.charCodeAt(0) - 97)
  }
  return {
    bits: bits,
    len: word.length
  }
}
function maxProduct(words: string[]): number {
  let max = 0
  let metas = words.map(word => convert2Meta(word))
  for (let i = 0; i < metas.length; i++) {
    for (let j = i+1; j < metas.length; j++) {
      const meta1 = metas[i]
      const meta2 = metas[j]
      if ((meta1.bits & meta2.bits) === 0) {
        max = Math.max(max, meta1.len*meta2.len)
      }
    }
  }
  return max
};