# techdocs-core

This is the base [Mkdocs](https://mkdocs.org) plugin used when using Mkdocs with Spotify's TechDocs. It is written in Python and packages all of our Mkdocs defaults, such as theming, plugins, etc in a single plugin.

[Python Package](https://pypi.org/project/mkdocs-techdocs-core/)

## Usage

```bash
$ pip install mkdocs-techdocs-core
```

Once you have installed the `mkdocs-techdocs-core` plugin, you'll need to add it to your `mkdocs.yml`.

```yaml
site_name: Backstage Docs

nav:
  - Home: index.md
  - Developing a Plugin: developing-a-plugin.md

plugins:
  - techdocs-core
```

## Running Locally

You can install this package locally using `pip` and the `--editable` flag used for making developing Python packages.

```bash
pip install --editable .
```

You'll then have the `techdocs-core` package available to use in Mkdocs and `pip` will point the dependency to this folder.

## Running with Docker

In the parent `Dockerfile` we add this folder to the build and install the package locally in the container. In the future, we'll probably move away from this approach and have it download directly from a Python registry (and this folder will publish to one).

See the `README.md` located in the `techdocs-container/` folder for more details on how to build and run the Docker container.

## Linting

```bash
pip install -r requirements.txt
python -m black src/
```

**Note:** This will write to all Python files in `src/` with the formatted code. If you would like to only check to see if it passes, simply append the `--check` flag.

## Changelog

### 0.0.7

- Fix an issue with configuration of emoji support

### 0.0.6

- Further adjustments to versions to find ones that are compatible

### 0.0.5

- Downgrade some versions of markdown extensions to versions that are more stable

### 0.0.4

- Added support for more mkdocs extensions
  - mkdocs-material
  - mkdocs-monorepo-plugin
  - plantuml-markdown
  - markdown_inline_graphviz_extension
  - pygments
  - pymdown-extensions
