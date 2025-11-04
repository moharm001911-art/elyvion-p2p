import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [theme,setTheme]=useState('dark')
  const [locale,setLocale]=useState('ar')
  const router = useRouter()

  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme) },[theme])

  const changeLocale = (loc) => {
    setLocale(loc)
    router.push(router.pathname, router.asPath, { locale: loc })
  }

  return (
    <div>
      <header className="header">
        <div className="container" style={{display:'flex',alignItems:'center',gap:12}}>
          <strong>Elyvion P2P</strong>
          <nav style={{marginLeft:16,gap:8,display:'flex',alignItems:'center'}}>
            <a href="/" className="button">الصفحة الرئيسية</a>
            <a href="/add-offer" className="button">أضف عرض</a>
            <a href="/dashboard" className="button">لوحة المستخدم</a>
          </nav>
          <div style={{marginLeft:'auto', display:'flex', alignItems:'center'}}>
            <div style={{fontSize:14, color:'var(--muted)'}}>اللغة</div>
            <select className="lang-toggle" value={locale} onChange={(e)=>changeLocale(e.target.value)}>
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
            <button className="theme-toggle button" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')}>تبديل الثيم</button>
          </div>
        </div>
      </header>
      <main className="container" style={{paddingTop:20}}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
export default MyApp
