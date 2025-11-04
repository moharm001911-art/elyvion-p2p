export default function Dashboard(){
  return (
    <div>
      <h2>لوحة المستخدم</h2>
      <div className="card">
        <p>العروض الخاصة بك</p>
        <ul>
          <li>عرض #1 - 50 USDT</li>
        </ul>
      </div>
      <div className="card">
        <p>الصفقات</p>
        <ul>
          <li>صفقة #1001 - قيد التنفيذ</li>
        </ul>
      </div>
    </div>
  )
}
