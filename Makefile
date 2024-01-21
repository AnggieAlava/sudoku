##@ Help
help:                ## Shows this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@ Backend
run: ## Runs api.
	@uvicorn api:app


##@ Frontend

build: ## Builds production scripts
	@npx parcel build --dist-dir static/dist frontend/js/main.js frontend/css/main.scss

watch: ## Runs parcel in watch mode
	@npx parcel watch --dist-dir static/dist frontend/js/main.js frontend/css/main.scss