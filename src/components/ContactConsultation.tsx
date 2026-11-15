import React, { useMemo, useState } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData.ts';
import { ArrowUpRight } from 'lucide-react';

type ServiceGroup = '行銷服務' | '視覺設計' | '整合服務';
const serviceOptions: Record<ServiceGroup, string[]> = {
  '行銷服務': ['SEO／GEO 新文章撰寫', '既有文章優化', 'SEO／GEO 策略規劃', 'SEO／GEO 顧問與內容健檢'],
  '視覺設計': ['電子書／白皮書／型錄／DM', '品牌簡報與資訊排版', '社群圖文設計', '平面設計與客製排版'],
  '整合服務': ['搜尋內容與視覺整合專案', '尚未確定，想先討論'],
};
export const ContactConsultation: React.FC = () => {
  const [group, setGroup] = useState<ServiceGroup | ''>('');
  const [service, setService] = useState('');
  const [form, setForm] = useState({name:'', company:'', email:'', contact:'Email', industry:'', website:'', budget:'尚未確定', timing:'', details:'', quantity:'', currentIssue:'', designSize:'', reference:'', materials:''});
  const options = useMemo(() => group ? serviceOptions[group] : [], [group]);
  const update = (key: keyof typeof form, value: string) => setForm(prev => ({...prev, [key]: value}));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      '合作需求洽詢',
      `姓名／稱呼：${form.name}`, `公司／品牌：${form.company || '未提供'}`,
      `Email：${form.email}`, `偏好聯絡方式：${form.contact}`,
      `需求類型：${group}`, `服務項目：${service}`, `產業類別：${form.industry || '未提供'}`,
      `網站網址：${form.website || '未提供'}`, `預算範圍：${form.budget}`, `預計合作時間：${form.timing || '未提供'}`,
      `需求說明：${form.details || '未提供'}`,
      group === '行銷服務' ? `文章篇數／目前問題：${form.quantity || '未提供'}／${form.currentIssue || '未提供'}` : '',
      group === '視覺設計' ? `尺寸／頁數：${form.designSize || '未提供'}；參考風格：${form.reference || '未提供'}；素材狀況：${form.materials || '未提供'}` : '',
    ].filter(Boolean).join('\n');
    const href = `mailto:${AUTHOR_INFO.email}?subject=${encodeURIComponent('網站合作需求洽詢')}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
  };
  return <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5"><p className="text-xs tracking-[0.2em] text-indigo-300 font-semibold mb-4">CONTACT</p><h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">正在尋找適合的<br />內容合作夥伴？</h2><p className="mt-5 text-sm leading-relaxed text-slate-300">簡單描述你的需求，我會先了解專案目標、執行範圍與預算，再討論合適的合作方式。</p><a href={`mailto:${AUTHOR_INFO.email}`} className="mt-7 inline-flex items-center gap-2 text-indigo-300 hover:text-white">{AUTHOR_INFO.email} <ArrowUpRight className="w-4 h-4" /></a></div>
      <form onSubmit={submit} className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#111827] p-6 sm:p-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-xs text-slate-300 space-y-2">姓名／稱呼 *<input required maxLength={60} value={form.name} onChange={e=>update('name',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="請輸入稱呼" /></label>
          <label className="text-xs text-slate-300 space-y-2">公司名稱／品牌<input value={form.company} onChange={e=>update('company',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="選填" /></label>
          <label className="text-xs text-slate-300 space-y-2">Email *<input required type="email" value={form.email} onChange={e=>update('email',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="name@example.com" /></label>
          <label className="text-xs text-slate-300 space-y-2">偏好聯絡方式<select value={form.contact} onChange={e=>update('contact',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white"><option>Email</option><option>LINE</option><option>電話</option></select></label>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-xs text-slate-300 space-y-2">需求類型 *<select required value={group} onChange={e=>{setGroup(e.target.value as ServiceGroup);setService('');}} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white"><option value="">請選擇</option>{Object.keys(serviceOptions).map(x=><option key={x}>{x}</option>)}</select></label>
          <label className="text-xs text-slate-300 space-y-2">具體服務項目 *<select required disabled={!group} value={service} onChange={e=>setService(e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white"><option value="">請先選需求類型</option>{options.map(x=><option key={x}>{x}</option>)}</select></label>
        </div>
        {group && <div className="rounded-xl border border-slate-800 bg-[#0c1422] p-4 space-y-4">
          <p className="text-xs font-semibold text-indigo-200">{group}需求補充</p>
          {group === '行銷服務' && <div className="grid sm:grid-cols-2 gap-4"><label className="text-xs text-slate-300 space-y-2">預計文章篇數／內容數量<input value={form.quantity} onChange={e=>update('quantity',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="例如：每月 4 篇" /></label><label className="text-xs text-slate-300 space-y-2">目前遇到的問題<input value={form.currentIssue} onChange={e=>update('currentIssue',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="例如：自然流量停滯" /></label></div>}
          {group === '視覺設計' && <div className="grid sm:grid-cols-2 gap-4"><label className="text-xs text-slate-300 space-y-2">尺寸／頁數<input value={form.designSize} onChange={e=>update('designSize',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="例如：A4、12 頁" /></label><label className="text-xs text-slate-300 space-y-2">參考風格<input value={form.reference} onChange={e=>update('reference',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="可貼參考連結" /></label><label className="text-xs text-slate-300 space-y-2 sm:col-span-2">素材狀況<input value={form.materials} onChange={e=>update('materials',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="文案、圖片是否已備妥？" /></label></div>}
          {group === '整合服務' && <label className="text-xs text-slate-300 space-y-2">希望整合的內容<input value={form.currentIssue} onChange={e=>update('currentIssue',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="例如：文章規劃＋白皮書設計" /></label>}
        </div>}
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-xs text-slate-300 space-y-2">產業類別<input value={form.industry} onChange={e=>update('industry',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="例如：工業科技、食品、醫療" /></label>
          <label className="text-xs text-slate-300 space-y-2">網站網址<input value={form.website} onChange={e=>update('website',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="https://" /></label>
          <label className="text-xs text-slate-300 space-y-2">預算範圍<select value={form.budget} onChange={e=>update('budget',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white">{['尚未確定','NT$ 5,000 以下','NT$ 5,000–10,000','NT$ 10,000–30,000','NT$ 30,000–50,000','NT$ 50,000 以上'].map(x=><option key={x}>{x}</option>)}</select></label>
          <label className="text-xs text-slate-300 space-y-2">預計合作時間<input value={form.timing} onChange={e=>update('timing',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="例如：12 月初" /></label>
        </div>
        <label className="block text-xs text-slate-300 space-y-2">專案需求說明<textarea rows={4} value={form.details} onChange={e=>update('details',e.target.value)} className="w-full rounded-lg bg-[#0b0e14] border border-slate-700 px-3 py-3 text-sm text-white" placeholder="請描述目前狀況、希望完成的目標或其他補充資訊。" /></label>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-colors">以 Email 寄出需求 <ArrowUpRight className="w-4 h-4" /></button>
        <p className="text-[11px] text-slate-500">送出後會開啟你裝置上的 Email 程式，並帶入需求摘要；網站本身不會儲存表單資料。</p>
      </form>
    </div>
  </section>;
};
