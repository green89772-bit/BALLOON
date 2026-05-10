/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, Monitor, Heart, Rocket, Sparkles, BookOpen, Clock, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showGuide, setShowGuide] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#0b0b26] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center space-y-10 relative z-10"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex justify-center items-center gap-4">
              <Heart className="text-pink-500 w-12 h-12" fill="currentColor" />
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent italic">
                Balloon Blessings
              </h1>
              <Heart className="text-pink-500 w-12 h-12" fill="currentColor" />
          </div>
          <p className="text-pink-200/40 tracking-[0.4em] uppercase text-sm font-bold">愛心氣球祝福發射站</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            variants={itemVariants}
            href="/display.html"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className="glass p-10 rounded-[40px] flex flex-col items-center gap-6 group"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Monitor className="text-blue-400" size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">大螢幕端 (投影用)</h2>
              <p className="text-white/40 text-xs">展示夜空與漂浮的氣球</p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="/mobile.html"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className="glass p-10 rounded-[40px] flex flex-col items-center gap-6 group border-pink-500/20"
          >
            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
              <Smartphone className="text-pink-400" size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">發射端 (家長用)</h2>
              <p className="text-white/40 text-xs">掃繪圖、自拍、發射祝福</p>
            </div>
          </motion.a>
        </div>

        {/* 引導手冊開關 */}
        <motion.button 
          variants={itemVariants}
          onClick={() => setShowGuide(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-pink-200 hover:bg-white/10 transition-all text-sm font-bold"
        >
          <BookOpen size={18} />
          查看 5 分鐘現場引導腳本
        </motion.button>
      </motion.div>

      {/* 引導手冊彈窗 */}
      <AnimatePresence>
        {showGuide && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0b0b26]/95 backdrop-blur-xl p-6 flex items-center justify-center"
          >
            <div className="max-w-2xl w-full glass p-8 rounded-[40px] relative max-h-[80vh] overflow-y-auto">
              <button 
                onClick={() => setShowGuide(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-pink-300">5 分鐘串場互動腳本</h3>
                  <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">Teacher / MC Guide</p>
                </div>

                <div className="space-y-6">
                  {/* 分鐘數 */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-pink-300 font-black">1'</div>
                    <div className="space-y-1">
                      <h4 className="font-bold">【暖場啟動】邀請與掃碼</h4>
                      <p className="text-sm text-white/60">「請爸爸媽媽拿出手機掃描大螢幕 QR Code，我們要在演講中場，送給寶貝一個最驚喜的夜空祝福！」</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-pink-300 font-black">2'</div>
                    <div className="space-y-1">
                      <h4 className="font-bold">【集體創作】自拍與塗鴉</h4>
                      <p className="text-sm text-white/60">「第一步先拍一張美美的自拍，我們會幫您套上 Q 版濾鏡；第二步在愛心框框裡，畫下您對寶貝的祝福，可以是心形、可以是加油符號！」</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-pink-300 font-black">4'</div>
                    <div className="space-y-1">
                      <h4 className="font-bold">【祝福升空】倒數發射</h4>
                      <p className="text-sm text-white/60">「請大家檢查一下有沒有打上寶貝的名字，這非常重要哦！當我數到三，請大家按下發射鍵！3、2、1，發射！」</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-green-400 font-black">5'</div>
                    <div className="space-y-1">
                      <h4 className="font-bold">【珍貴回憶】卡片儲存</h4>
                      <p className="text-sm text-white/60">「發射後，手機會出現專屬紀念卡位。請長按圖片儲存，記錄今天寶貝最勇敢的競賽時刻！」</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-pink-300 font-bold mb-4 flex items-center gap-2">
                    <Sparkles size={16} /> 給學校端的價值提案 ( pitch 參考 )
                  </h4>
                  <ul className="text-xs text-white/50 space-y-3 list-disc pl-4 leading-relaxed">
                    <li><strong>情緒教育 (SEL)：</strong> 透過「祝福」的具體化行為，引導孩子理解支持的力量，轉化競賽壓力為正向情感。</li>
                    <li><strong>數位美育與表達：</strong> 將科技應用於情感傳遞，示範載具不僅是遊戲機，更是創作與溝通的溫暖工具。</li>
                    <li><strong>增強親子連結：</strong> 在緊張的比賽現場創造 5 分鐘的親子共感時光，留下可保存的數位紀念照。</li>
                    <li><strong>提升活動質感：</strong> 專業的互動特效能顯著提升校方活動的精緻度，讓家長感受到校方的用心。</li>
                  </ul>
                </div>

                <div className="bg-pink-500/10 border border-pink-500/20 p-5 rounded-3xl space-y-5">
                   <h5 className="text-xs uppercase font-black text-pink-400 tracking-widest flex items-center gap-2">
                     <Heart size={14} className="fill-current" /> 🎤 現場活動引導講稿 (大氣、溫馨版)
                   </h5>
                   
                   <div className="space-y-6">
                     <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-pink-500/30 before:rounded-full">
                       <div className="flex items-center gap-2 mb-1">
                         <span className="px-2 py-0.5 bg-pink-500 text-[10px] font-bold rounded-md">2' 暖場啟動</span>
                         <h6 className="text-sm font-bold text-white/90">邀請與掃碼</h6>
                       </div>
                       <p className="text-xs text-white/60 leading-relaxed">
                         「各位爸爸、媽媽，請拿出手機掃描大螢幕上的 QR Code。讓我們在接下來的中場時間，一起為心愛的寶貝，準備一份全宇宙最驚喜的夜空祝福！」
                       </p>
                     </div>

                     <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-500/30 before:rounded-full">
                       <div className="flex items-center gap-2 mb-1">
                         <span className="px-2 py-0.5 bg-blue-500 text-[10px] font-bold rounded-md">4' 集體創作</span>
                         <h6 className="text-sm font-bold text-white/90">相伴自拍與塗鴉</h6>
                       </div>
                       <p className="text-xs text-white/60 leading-relaxed">
                         「第一步，先跟孩子拍張美美的合照，系統會自動在氣球上展現你們最棒的笑容；第二步，請在愛心框框裡，跟寶貝一起畫下祝福，不論是心型、太陽或加油符號，都是最溫暖的印記！」
                       </p>
                     </div>

                     <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-amber-500/30 before:rounded-full">
                       <div className="flex items-center gap-2 mb-1">
                         <span className="px-2 py-0.5 bg-amber-500 text-[10px] font-bold rounded-md">5' 祝福升空</span>
                         <h6 className="text-sm font-bold text-white/90">儀式感倒數</h6>
                       </div>
                       <p className="text-xs text-white/60 leading-relaxed">
                         「最後，請檢查是否打上了寶貝的名字。現在，請所有人伸出手指，跟我一起倒數—— 3、2、1，發射！看！那一顆顆氣球帶著你們的愛，正緩緩升入夜空呢！」
                       </p>
                     </div>

                     <div className="relative pl-6">
                       <div className="flex items-center gap-2 mb-1">
                         <span className="px-2 py-0.5 bg-green-500 text-[10px] font-bold rounded-md">結語</span>
                         <h6 className="text-sm font-bold text-white/90">珍貴回憶儲存</h6>
                       </div>
                       <p className="text-xs text-white/60 leading-relaxed">
                         「發射成功後，手機會出現專屬的紀念卡位，歡迎各位家長『長按圖片儲存』。讓我們一起記錄今天寶貝最勇敢、最閃亮的競賽時刻！」
                       </p>
                     </div>
                   </div>

                   <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] text-pink-300 font-bold italic">💡 親子互動小秘訣：</p>
                      <p className="text-[10px] opacity-70 mt-1">互動時請家長稍微彎下腰，讓手機畫面與孩子平齊。這種「視線交會」的創作過程，比最終飛上去的氣球更讓孩子感到安心與自信。</p>
                   </div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 text-xs text-pink-200/60 leading-relaxed">
                  <Clock size={32} />
                  <div>
                    <h4 className="font-bold text-white/80">互動時機建議</h4>
                    <p>最適合在「演講比賽前 10 分鐘」或「中場休息」。這段時間孩子最需要安全感，透過「製作氣球」能有效穩定孩子情緒並感受到家長陪伴。</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
