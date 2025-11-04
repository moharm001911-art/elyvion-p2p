import {useEffect, useState} from 'react'
export default function Settings(){
  const [lang,setLang]=useState(typeof window !== 'undefined' ? localStorage.getItem('ely_lang') || 'ar' : 'ar')
  const [theme,setTheme]=useState(typeof window !== 'undefined' ? localStorage.getItem('ely_theme') || 'dark' : 'dark')

  useEffect(()=>{
    localStorage.setItem('ely_lang', lang)
    localStorage.setItem('ely_theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    // simple locale - in real app we'd use router
  },[lang,theme])

  return (
    <div>
      <h2>الإعدادات</h2>
      <div className="card">
        <label>اختر اللغة</label><br/>
        <select value={lang} onChange={e=>setLang(e.target.value)} style={{padding:8, marginTop:6}}>
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
        <div style={{marginTop:12}}>
          <label>الثيم</label><br/>
          <select value={theme} onChange={e=>setTheme(e.target.value)} style={{padding:8, marginTop:6}}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>
    </div>
  )
}
