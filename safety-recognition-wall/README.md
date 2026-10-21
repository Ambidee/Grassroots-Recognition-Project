ESSA Safety Culture Wall of Recognition



1.Recognition Page: A list of all recognized safety contributors organized alphabetically
2.Safety Leaders: Top 3 champions from each year based on nomination count
3.Grassroots Team**: The team that developed and implemented the recognition program



## Features

1. Multi-Language Support
- Languages: English (en) and Portuguese (pt)
- Translation System: Uses `data-translate` attributes on HTML elements
- Toggle Button: Located in the top-right corner to switch between languages
- All static text and dynamic content can be translated

### 2. Year Filtering

- Filter recognitions by year: **All Years**, **2024**, or **2025**
- When "All Years" is selected:
  - Recognition cards show year badges for each year
  - Cards with multiple years are consolidated with year dividers
  - Safety Leaders tab shows top 3 from 2024 AND top 3 from 2025 (6 total)
- When a specific year is selected:
  - Only recognitions from that year are displayed
  - Safety Leaders show only top 3 from that year

### 3. Quarter Filtering

- Filter recognitions by quarter: **All Quarters**, **Q1**, **Q2**, or **Q3**
- Available only on the Recognition Page (hidden on Safety Leaders tab)
- Each recognition card can have multiple quarter entries

### 4. Tab Navigation

- Recognition Page: Main view with all recognitions organized alphabetically
- Safety Leaders: Displays top 3 champions per year with special design
- Grassroots Team: Shows the implementation team

### 5. Alphabetical Navigation

- Quick navigation links (A-Z) to jump to specific letter sections
- Active letter highlighting as you scroll
- Only visible on Recognition Page tab

### 6. Safety Leaders Special Features
-Top 3 Selection: 
  - 2024: Hardcoded top 3 (Antonio Casimiro Andre, Arlito De Jesus Domingos Nhiala, Jose Matata)
  - 2025: Hardcoded top 3 (Antonio Casimiro Andre, Stela Pilartes da Silva, Estevao Barros Beco)
  - All Years: Shows 6 champions (3 from 2024 + 3 from 2025)
-Special Design: 
  - Circular profile photos above yellow cards
  - Grey connecting lines
  - Consolidated descriptions from all quarters
  - Year labels when "All Years" is selected
-Quarter Filter: Hidden on Safety Leaders tab (not applicable)

## File Structure

```
safety-recognition-wall/
├── index.html          # Main HTML structure
├── script.js           # All JavaScript functionality
├── styles.css          # All styling
├── images/
│   └── champions/      # Champion profile photos
│       ├── antonio-casimiro-andre.jpg
│       ├── arlito-de-jesus-domingos-nhiala.JPG
│       └── jose-matata.JPG
└── README.md           # This file
```

## Key Functions

### JavaScript (script.js)

#### Initialization Functions
- `initApplication()`: Main initialization function that sets up all event listeners
- `initializeYearSelection()`: Sets up year filter buttons
- `initializeTabSelection()`: Sets up tab navigation
- `initializeQuarterFiltering()`: Sets up quarter filter buttons
- `initializeLetterNavigation()`: Sets up alphabetical navigation
- `initializeLanguageToggle()`: Sets up language toggle button

#### Filtering Functions
- `applyCombinedFiltering()`: Main filtering function that applies both year and quarter filters
- `filterByYear()`: Filters recognitions by year
- `filterByQuarter()`: Filters recognitions by quarter
- `getTopChampionsByYear()`: Calculates top 3 champions for a given year

#### Data Consolidation Functions
- `consolidateCardsForAllYears()`: Merges cards for the same person across multiple years
- `updateYearBadges()`: Adds year badges to recognition cards and champions
- `generateChampionDescription()`: Creates consolidated descriptions for top 3 champions

#### Translation Functions
- `updateLanguage()`: Updates all translatable elements to the current language
- `generateChampionDescription()`: Uses translation keys when generating descriptions

#### Utility Functions
- `normalizePersonName()`: Normalizes names for comparison (lowercase, trimmed)
- `normalizeLetterSectionsOrder()`: Ensures alphabetical order of letter sections
- `normalizeChampionOrder()`: Ensures alphabetical order of champions

### HTML Structure (index.html)

#### Main Sections
1.Header: Title, subtitle, tab navigation, filters
2.Letter Navigation: A-Z quick links (only on Recognition Page)
3.Recognition Content: 
   - Alphabetical sections (A-Z)
   - Recognition cards with quarter entries
4.Safety Leaders Content: 
   - Champion cards with photos and descriptions
5.Grassroots Team Content: 
   - Team member cards

#### Data Attributes

- `data-year`: Year of recognition (2024, 2025)
- `data-quarter`: Quarter filter (all, Q1, Q2, Q3)
- `data-tab`: Tab identifier (recognition, champions, grassroots)
- `data-translate`: Translation key for multilingual content
- `data-champion`: Champion name for matching

### CSS (styles.css)

#### Key Styles
-Responsive Design: Mobile-first approach with media queries
-Card Layouts: Grid-based layouts for recognition cards and champions
-Champion Design: Special styling for top 3 champions with circular photos
-Year Badges: Styled badges showing years on consolidated cards
-Smooth Transitions: CSS transitions for interactive elements

## Data Structure

### Recognition Cards
Each recognition card contains:
-Name: Person's full name
-Year: Data attribute `data-year` (2024 or 2025)
-Quarters: Array of quarter entries, each with:
  - Quarter label (Q1, Q2, Q3)
  - Quarter text (description)
  - Optional translation key (`data-translate`)

### Translation Keys
Translation keys follow the pattern:
- `q{quarter}-{year}-{person}-{number}` for quarter entries
- Example: `q1-2025-casimiro-1` means Q1 2025, Casimiro, entry 1

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox
- Intersection Observer API for scroll detection

## Usage

1. Open `index.html` in a web browser
2. Navigate tabs using the tab buttons at the top
3. Filter by year using the year buttons
4. Filter by quarter using the quarter buttons (Recognition Page only)
5. Switch language using the toggle button in the top-right
6. Navigate alphabetically using the A-Z links (Recognition Page only)

## Maintenance

### Adding New Recognitions
1. Add a new `<article class="card">` element in the appropriate letter section
2. Set `data-year` attribute (2024 or 2025)
3. Add quarter entries with `<div class="quarter">` elements
4. Add translation keys with `data-translate` attributes
5. Add translations to the `translations` object in `script.js`

### Adding Translations
1. Add translation key to HTML element: `data-translate="key-name"`
2. Add English translation to `translations.en.key-name`
3. Add Portuguese translation to `translations.pt.key-name`

### Updating Top 3 Champions
1. For 2024: Update the `top3For2024` array in `getTopChampionsByYear()`
2. For 2025: The system calculates automatically based on nomination count
3. Add champion photos to `images/champions/` folder
4. Update image paths in HTML

## Notes


- Cards with multiple years are automatically consolidated when "All Years" is selected
- Year badges are added dynamically to show which years data belongs to
- Quarter filter is hidden on Safety Leaders tab since champions are selected by total nominations
