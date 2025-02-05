![React](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/ 68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d 7265616374266c6f676f436f6c6f723d253233363144414642)

# Pokédex

A modern and responsive Pokédex web application built with React, featuring all Pokémon generations, search functionality, and detailed information about each Pokémon.

## Demo

![demo](https://github.com/zaqueu-1/pokedex/blob/main/chrome-capture-2023-0-17.gif)

## Deploy

https://pokedex-zaqueu-1.vercel.app/

## Features

- 🎮 Browse through all Pokémon generations (1-9)
- 🔍 Search Pokémon by name
- 📱 Fully responsive design
- ⚡ Real-time search with instant results
- 🎨 Beautiful UI with type-based color themes
- ⌨️ Keyboard navigation support
- 🔄 Smooth animations and transitions
- 📊 Detailed Pokémon statistics

## Technologies

- **React** - Frontend library
- **React Router** - Navigation and routing
- **Material-UI** - UI components and styling
- **Axios** - HTTP client for API requests
- **PokeAPI** - Pokémon data source
- **CSS3** - Custom styling and animations

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/zaqueu-1/pokedex.git
cd pokedex
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar/        # Navigation and search
│   ├── PokemonCard/   # Individual Pokémon card
│   ├── Skeleton/      # Loading placeholders
│   └── Pagination/    # Page navigation
├── context/           # React context for state management
├── pages/             # Application pages
│   ├── Home/         # Main Pokémon list
│   └── [pokeId]/     # Individual Pokémon details
└── img/              # Static images and assets
```

## Usage

- **Browse Generations**: Click on generation buttons to filter Pokémon
- **Search**: Type at least 3 characters to search for Pokémon by name
- **View Details**: Click on any Pokémon card to see detailed information
- **Navigate**: Use previous/next buttons to move between Pokémon in detail view

## API Integration

The application uses the [PokeAPI](https://pokeapi.co/) for fetching Pokémon data. The integration includes:

- Fetching Pokémon by generation
- Searching Pokémon by name
- Retrieving detailed Pokémon information

## Styling

- Custom CSS with responsive design
- Material-UI components and theming
- Dynamic color schemes based on Pokémon types
- Smooth animations and transitions

## Performance Optimizations

- Lazy loading of images
- Debounced search functionality
- Skeleton loading states
- Efficient state management with React Context
- Pagination for large data sets

## Browser Support

The application is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- [Material-UI](https://mui.com/) for the component library
- The Pokémon Company for the original content
