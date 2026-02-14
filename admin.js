const db = window.db
const colRef = window.colRef
const getDocs = window.getDocs
const deleteDoc = window.deleteDoc
const docRef = window.docRef

const totalUsersEl = document.getElementById("totalUsers")
const resetBtn = document.getElementById("resetBtn")

async function loadData() {
  const snapshot = await getDocs(colRef(db, "results"))

  let total = 0
  const flowerCount = {}

  snapshot.forEach(doc => {
    total++

    const data = doc.data()
    const flower = data.flower

    if (!flowerCount[flower]) flowerCount[flower] = 0
    flowerCount[flower]++
  })

  totalUsersEl.innerText = `ผู้รับทั้งหมด: ${total}`

  drawChart(flowerCount)
}

function drawChart(data) {
  const ctx = document.getElementById("flowerChart")

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(data),
      datasets: [{
        label: "จำนวนครั้ง",
        data: Object.values(data)
      }]
    }
  })
}

resetBtn.addEventListener("click", async () => {

  if (!confirm("รีเซ็ตทั้งหมดวันนี้?")) return

  const snapshot = await getDocs(colRef(db, "results"))

  const promises = []
  snapshot.forEach(d => {
    promises.push(deleteDoc(docRef(db, "results", d.id)))
  })

  await Promise.all(promises)

  alert("รีเซ็ตแล้ว")
  location.reload()
})

loadData()