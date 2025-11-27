# 🐍 Snake Game

<div align="center">

![Snake Game](https://img.shields.io/badge/Snake-Game-brightgreen?style=for-the-badge&logo=javascript)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-purple?style=for-the-badge)

**A modern take on the classic Snake game with stunning animations and mobile support**

[Play Now](#-quick-start) • [Features](#-features) • [Controls](#-controls) • [Installation](#-installation)

---

</div>

## 🎮 About

Experience the timeless classic Snake game reimagined with modern web technologies! This project features a beautiful landing page, smooth animations, multiple difficulty levels, customizable backgrounds, and full mobile support with touch controls.

## ✨ Features

### 🎨 **Visual Excellence**
- 🌈 **5 Custom Backgrounds** - Classic, Forest, Ocean, Sunset, and Galaxy themes
- 🎭 **Stunning Animations** - Loading screens, transitions, and smooth gameplay
- 🎪 **Beautiful Landing Page** - Animated particles and gradient effects
- 💫 **Modern UI** - Clean, responsive design with glassmorphism effects

### 🎯 **Gameplay Features**
- 🏆 **3 Difficulty Levels** - Easy, Medium, and Hard modes
- 📊 **Score Tracking** - Real-time score display and high score persistence
- 💾 **Local Storage** - Saves your high scores for each difficulty
- ⏸️ **Pause Function** - Take a break anytime (ESC key)
- 🎲 **Smart Food Generation** - Never spawns on the snake

### 📱 **Mobile Optimized**
- 👆 **Touch Controls** - On-screen directional buttons
- 👋 **Swipe Gestures** - Swipe to control the snake
- 📐 **Responsive Design** - Adapts to all screen sizes
- 🚫 **Scroll Prevention** - No accidental page scrolling during gameplay

### 🛠️ **Technical Features**
- ⚡ **Pure JavaScript** - No heavy frameworks
- 🎨 **HTML5 Canvas** - Smooth rendering
- 💪 **jQuery & Bootstrap** - Enhanced UI components
- 🔒 **No External Data** - Works completely offline after loading

## 🕹️ Controls

### 🖥️ Desktop
| Key | Action |
|-----|--------|
| `↑` | Move Up |
| `↓` | Move Down |
| `←` | Move Left |
| `→` | Move Right |
| `ESC` | Pause/Resume |
| `Enter/Space` | Start Game (on landing page) |

### 📱 Mobile
- **Touch Buttons** - Tap directional buttons
- **Swipe Gestures** - Swipe in any direction on the game canvas
- **Menu Navigation** - Tap menu buttons

## 🚀 Quick Start

### Option 1: Direct Use
1. Download both files:
   - `index.html` (Landing page)
   - `snake-game.html` (Game)
2. Place them in the same folder
3. Open `index.html` in your browser
4. Click "PLAY NOW" and enjoy!

### Option 2: Web Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit: http://localhost:8000
```

## 📂 File Structure

```
snake-game/
│
├── index.html          # Landing page with animations
├── snake-game.html     # Main game file
└── README.md          # This file
```

## 🎯 How to Play

1. **Start the Game** - Click "PLAY NOW" or press Enter
2. **Choose Difficulty** - Select Easy, Medium, or Hard from the menu
3. **Customize** - Change background theme in Settings
4. **Play** - Use arrow keys or swipe to move the snake
5. **Eat Food** - Collect red squares to grow and score points
6. **Avoid** - Don't hit walls or your own tail!
7. **Compete** - Try to beat your high score!

## 🎨 Customization

### Changing the Game Link
In `index.html`, find this line (around line 357):
```javascript
window.location.href = 'snake-game.html';
```
Replace `'snake-game.html'` with your game file path.

### Difficulty Settings
| Level | Speed | Description |
|-------|-------|-------------|
| Easy | 200ms | Perfect for beginners |
| Medium | 130ms | Balanced gameplay |
| Hard | 80ms | Expert challenge |

### Background Themes
1. **Classic** - Dark blue gradient (Default)
2. **Forest** - Green nature theme
3. **Ocean** - Blue water theme
4. **Sunset** - Warm orange/yellow gradient
5. **Galaxy** - Purple/pink space theme

## 🛠️ Technologies Used

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
- ![Canvas](https://img.shields.io/badge/HTML5_Canvas-E34F26?style=flat&logo=html5&logoColor=white)

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Opera | ✅ Full |
| Mobile Browsers | ✅ Full |

## 🎓 Learning Resources

This project demonstrates:
- HTML5 Canvas manipulation
- Game loop implementation
- Collision detection
- Local storage usage
- Responsive design
- Touch event handling
- CSS animations and transitions
- jQuery DOM manipulation

## 🐛 Known Issues

- None currently reported! 🎉

## 🔮 Future Enhancements

- [ ] Power-ups and special items
- [ ] Multiplayer mode
- [ ] Online leaderboard
- [ ] Sound effects and music
- [ ] More game modes (walls, obstacles)
- [ ] Achievement system
- [ ] Custom snake skins

## 📝 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects!

```
MIT License

Copyright (c) 2024 Snake Game

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:
- Fork the project
- Create a feature branch
- Commit your changes
- Push to the branch
- Open a pull request

## 👨‍💻 Developer

Created with ❤️ by passionate developers who love classic games!

## 🌟 Show Your Support

If you enjoyed this game, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with friends

## 📞 Contact & Support

- 💬 **Issues**: Report bugs or request features
- 📧 **Email**: your-email@example.com
- 🌐 **Website**: https://your-website.com

---

<div align="center">

### 🎮 Ready to Play?

**[Start Playing Now](#-quick-start)**

Made with 🐍 and ❤️

</div>
