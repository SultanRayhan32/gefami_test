async function hashData() {
  
  const tanggalHariIni = "21062025" 
  const namaDepanAnda = "rayhan"    
  const gabungan = tanggalHariIni + namaDepanAnda + "pria" + "ifabula"

  const encoder = new TextEncoder()
  const data = encoder.encode(gabungan)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  
  console.log("String yang di-hash:" + gabungan)
  console.log("Hasil SHA-256:" + hashHex)
}

hashData()
