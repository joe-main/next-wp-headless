start:
	docker-compose up -d
	docker-compose exec front yarn
	docker-compose exec front yarn serve

# Docker
up:
	docker-compose up -d
	docker-compose exec front yarn serve

down:
	docker-compose down

build:
	docker-compose build --no-cache

# Next
front:
	docker-compose exec front sh

dev:
	docker-compose exec front yarn dev

serve:
	docker-compose exec front yarn serve

fix:
	docker-compose exec front yarn fix

# Wordpress
wp:
	docker compose exec wordpress bash