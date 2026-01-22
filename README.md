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
# Add submodule (first time only)
git submodule add https://github.com/Weigence/embeddings.git public/embeddings

# Initialize submodule after cloning the repository
git submodule update --init --recursive

# Update submodule to latest commit from remote
git submodule update --remote --merge

# After updating submodule, commit the changes
git add public/embeddings
git commit -m "Update embeddings submodule"
git push origin main
```

## 🚀 Trigger GitHub Actions without changes

```bash
git commit --allow-empty -m "Trigger GitHub Actions"
git push origin main
```
