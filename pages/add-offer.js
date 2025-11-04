import {useState} from 'react'
export default function AddOffer(){
  const [title,setTitle]=useState(''); const [price,setPrice]=useState('')
  return (
    <div>
      <h2>أضف عرض جديد</h2>
      <div className="card">
        <label>اسم السلعة</label><br/>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="مثال: كود شحن" style={{width:'100%', padding:8, marginTop:6}}/>
        <label style={{marginTop:8}}>السعر (USDT)</label><br/>
        <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="مثال: 50" style={{width:'100%', padding:8, marginTop:6}}/>
        <div style={{marginTop:12}}>
          <button className="button">نشر العرض</button>
        </div>
      </div>
    </div>
  )
}
