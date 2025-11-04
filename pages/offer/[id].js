import {useRouter} from 'next/router'
export default function Offer(){
  const router = useRouter()
  const {id} = router.query
  return (
    <div>
      <h2>تفاصيل العرض #{id}</h2>
      <div className="card">
        <p>البائع: user123</p>
        <p>السعر: 50 USDT</p>
        <p>العمولة: 3% → الموقع يحجز 51.5 USDT (محاكاة)</p>
        <LinkWrap href="#" label="ابدأ الصفقة" />
      </div>
    </div>
  )
}

function LinkWrap({href,label}){
  return <a className="button" href={href}>{label}</a>
}
