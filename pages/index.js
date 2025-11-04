import Link from 'next/link'
export default function Home(){
  return (
    <div>
      <h1>أهلاً بك في Elyvion P2P</h1>
      <p className="card">منصة P2P لبيع وشراء السلع الرقمية (USDT - TRC20). العمولة: 3%.</p>
      <div style={{display:'flex', gap:12}}>
        <Link href="/add-offer" className="button">أضف عرض جديد</Link>
        <Link href="/dashboard" className="button">لوحة التحكم</Link>
      </div>
      <section style={{marginTop:20}}>
        <h3>عروض حالية (تجريبي)</h3>
        <div className="card">
          <strong>رصيد هاتف - 50 USDT</strong>
          <div style={{marginTop:8}}>
            <Link href="/offer/1" className="button">ابدأ الصفقة</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
