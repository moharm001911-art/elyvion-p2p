export default function handler(req, res){
  const { action } = req.body || {}
  if(!action) return res.status(400).json({ error: 'action required' })
  res.status(200).json({ ok: true, action })
}
