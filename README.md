# weigence.github.io

## Development

Run the following command to start the development server:

```bash
python -m http.server 6969
```

> [!TIP]
> You need to use `ifconfig` command to find the IP address of your host machine.
> This is useful for testing changes directly on smartphones without putting them into production.

## Submodule Management

```bash
# Add Official Weigence Embeddings as submodule
git submodule add https://github.com/Weigence/embeddings.git public/imgs

# Sync and update submodule
git submodule sync
git submodule update --init --recursive
```
