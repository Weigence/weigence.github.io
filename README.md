# weigence.github.io

## 🚀 Quick Start

```bash
# Install the dependency packages
npm install

# Start the development server on http://localhost:3000
npm run dev

# Mobile preview
npm run dev -- --host
```

## 🛠 Update the dependencies

```bash
# Install npm-check-updates
npm install -g npm-check-updates

# Show the outdated dependencies
ncu

# Update the dependencies
ncu -u

# Install the updated dependencies
npm install
```

## 📂 Submodule Management

```bash
# Add Official Weigence Embeddings as submodule
git submodule add https://github.com/Weigence/embeddings.git public/embeddings

# Sync and update submodule
git submodule sync
git submodule update --init --recursive
```
