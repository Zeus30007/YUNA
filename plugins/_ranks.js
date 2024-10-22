global.rpg = {
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }

    const role = [
      { name: '🧱 Slaves', level: 0 },
      { name: '🔗 Serfs', level: 5 }, //»»————⍟——««\n
      { name: '🛡️ Sergeants-at-Arms', level: 10 },
      { name: "🌾 Yeomen", level: 15 },
      { name: '📜 Bailiffs/Stewards', level: 20 },
      { name: '🔨 Master Craftsmen', level: 25 }, //𐏓・,〔𒁷, 𒆜〢
      { name: '💰 Wealthy Merchants', level: 30 },
      { name: '⛪ Lower Clergy', level: 35 },
      { name: "⭐Lower Nobles", level: 40 },
      { name: '🗡squires', level: 45 },
      { name: '⚔️ Knights', level: 50 },
      { name: '🗿 Royal Knights', level: 60 },
      { name: '💒 High Clergy', level: 70 },
      { name: '🏰 High Nobles', level: 80 },
      { name: '⚜ Lord/Mistress', level: 90 },
      { name: '👑 King/Queen', level: 100 },
    ]

    return role.reverse().find(role => level >= role.level)
  },
}
