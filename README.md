# 💰 Money Monitor

A modern, mobile-first Progressive Web App (PWA) for personal budget and expense tracking. Take control of your finances with an intuitive interface designed for on-the-go money management.

![Money Monitor Overview](https://github.com/user-attachments/assets/bda4a0f1-5dfa-409d-afbf-55f539228ee3)

## ✨ Features

### 📱 Mobile-First Design
- **Responsive Layout**: Optimized for mobile devices with touch-friendly interface
- **Bottom Navigation**: Easy thumb navigation with clearly labeled tabs
- **Dark Theme**: Reduces eye strain and saves battery on OLED screens
- **Swipe-Friendly**: Intuitive gestures and mobile-optimized interactions

### 💾 Progressive Web App (PWA)
- **Offline Support**: Full functionality without internet connection
- **App-Like Experience**: Install directly to your home screen
- **Fast Loading**: Service worker caching for instant app startup
- **Auto-Updates**: Seamless updates in the background

### 📊 Budget Management
- **Quick Overview**: At-a-glance financial health dashboard
- **Monthly Tracking**: Organize income and expenses by month
- **Spending Categories**: Essential, subscriptions, discretionary, and custom categories
- **Spending Health Bar**: Visual indicator of budget status

### 🎯 Goal Setting & Planning
- **Savings Goals**: Set and track progress toward financial targets
- **Debt Payoff Goals**: Gamified debt elimination with boss battle themes
- **Goal Planner**: Interactive planning with projection charts
- **"What If" Calculator**: Scenario planning for spending cuts

### 🎮 Gamification
- **Level System**: Earn XP for financial activities
- **Achievement Streaks**: Weekly savings streak tracking
- **Progress Rewards**: Level up notifications and celebrations
- **Victory Celebrations**: Special animations for completing debt goals

### 📈 Smart Analytics
- **Expense Breakdown**: Visual pie charts of spending categories
- **Yearly Summary**: Annual income, expenses, and savings analysis
- **Monthly Trends**: Track spending patterns over time
- **Subscription Monitoring**: Quarterly subscription review alerts

### 🔧 Advanced Features
- **CSV Import**: Bulk import transactions from bank statements
- **Month Copying**: Duplicate recurring bills across months/years
- **Bill Reminders**: Upcoming bill notifications and due date tracking
- **Data Persistence**: All data stored locally in browser storage

## 🚀 Getting Started

### Installation

#### Option 1: Install as PWA (Recommended)
1. Visit the Money Monitor website in your mobile browser
2. Tap the "Add to Home Screen" option in your browser menu
3. Confirm installation when prompted
4. Launch from your home screen like any native app

#### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/kingpinzs/money-monitor.git

# Navigate to project directory
cd money-monitor

# Serve locally (Python 3)
python -m http.server 8000

# Or use any static file server
# Visit http://localhost:8000
```

### First Time Setup
1. **Welcome Screen**: Choose your preferred greeting time
2. **Add Income**: Start by adding your monthly income sources
3. **Add Bills**: Input your regular monthly expenses
4. **Set Goals**: Create savings or debt payoff goals
5. **Start Tracking**: Monitor your spending throughout the month

## 📖 Usage Guide

### Overview Tab
- **Financial Dashboard**: See month's income, expenses, and remaining budget
- **Spending Health**: Visual health bar showing budget status
- **Upcoming Bills**: Next bills due this month
- **Goal Progress**: Savings goal suggestions and progress

### Monthly Tab
- **Transaction Management**: Add, edit, and categorize transactions
- **Bill Tracking**: Mark bills as paid/unpaid
- **Category Breakdown**: Collapsible sections for different expense types
- **Month Navigation**: Browse previous and future months

### Goals Tab
- **Goal Creation**: Set savings goals or debt payoff targets
- **Progress Tracking**: Visual progress bars and completion percentages
- **Goal Management**: Edit amounts, dates, and target objectives

### Planner Tab
- **Goal Planning**: Interactive charts showing savings projections
- **Scenario Testing**: Adjust extra savings to see timeline changes
- **Target Date Calculation**: Automatic calculation of goal completion dates

### Yearly Tab
- **Annual Summary**: Total income, expenses, and net savings
- **Monthly Breakdown**: Month-by-month financial overview
- **Trend Analysis**: Year-over-year comparison capabilities

## 🏗️ Technical Architecture

### Frontend Stack
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Tailwind CSS for responsive, utility-first styling
- **Vanilla JavaScript**: No framework dependencies for maximum performance
- **Chart.js**: Interactive charts and data visualization

### PWA Implementation
- **Service Worker**: Comprehensive caching strategy for offline functionality
- **Web App Manifest**: Proper PWA configuration for installability
- **Local Storage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach with desktop compatibility

### Performance Features
- **Lazy Loading**: Efficient resource loading
- **Code Splitting**: Modular JavaScript architecture
- **Optimized Caching**: Strategic service worker caching
- **Minimal Dependencies**: Lightweight external library usage

## 🔧 Development

### Prerequisites
- Modern web browser with PWA support
- Local web server (Python, Node.js, or any static file server)
- Basic understanding of HTML, CSS, and JavaScript

### Local Development
```bash
# Serve the application
python -m http.server 8000

# Access development server
# http://localhost:8000
```

### File Structure
```
money-monitor/
├── index.html          # Main application file
├── manifest.json       # PWA manifest configuration
├── service-worker.js   # Service worker for offline support
├── icons/             # App icons for installation
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── README.md          # This file
```

### Key Components
- **State Management**: LocalStorage-based persistence
- **UI Components**: Modular JavaScript functions
- **Data Flow**: Event-driven architecture
- **Offline Strategy**: Cache-first with network fallback

## 📱 Mobile Optimization

### Responsive Design
- **Breakpoints**: Mobile-first responsive breakpoints
- **Touch Targets**: Minimum 44px touch targets for accessibility
- **Viewport**: Optimized viewport settings for mobile devices
- **Orientation**: Support for both portrait and landscape modes

### Performance
- **Lazy Loading**: Images and components loaded on demand
- **Minimal Footprint**: Lightweight codebase under 100KB
- **Fast Startup**: Service worker pre-caching for instant loading
- **Smooth Animations**: CSS transitions for fluid interactions

### Accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Clear focus indicators and tab order

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the Repository**: Create your own copy of the project
2. **Create a Branch**: `git checkout -b feature/amazing-feature`
3. **Make Changes**: Implement your feature or bug fix
4. **Test Thoroughly**: Ensure compatibility across devices
5. **Commit**: `git commit -m 'Add amazing feature'`
6. **Push**: `git push origin feature/amazing-feature`
7. **Pull Request**: Submit your changes for review

### Guidelines
- Follow mobile-first design principles
- Maintain PWA functionality
- Keep the codebase lightweight
- Add appropriate comments for complex logic
- Test on multiple devices and browsers

## 📋 Roadmap

- [ ] **Cloud Sync**: Optional cloud backup and sync across devices
- [ ] **Enhanced Analytics**: Advanced spending insights and trends
- [ ] **Budget Templates**: Pre-built budget templates for common scenarios
- [ ] **Multi-Currency**: Support for multiple currencies and exchange rates
- [ ] **Expense Categories**: Customizable expense categories
- [ ] **Bank Integration**: Direct bank account integration (future consideration)

## 🔒 Privacy & Security

- **Local Storage**: All data stored locally on your device
- **No Tracking**: No analytics or user tracking
- **Offline First**: Works completely offline without external connections
- **No Registration**: No account creation or personal information required

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Tailwind CSS**: For the beautiful, responsive styling framework
- **Lucide Icons**: For the clean, consistent icon set
- **Chart.js**: For the interactive data visualization
- **Web API Standards**: For enabling PWA functionality

---

**Made with ❤️ for better financial health**

*Money Monitor - Take control of your finances, one transaction at a time.*