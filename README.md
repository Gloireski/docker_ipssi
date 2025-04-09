# 🚀 Déploiement d'une Application MERN avec Docker (sans Docker Compose)

Ce projet reprend une application MERN développée en cours, et la déploie **localement avec Docker** sans utiliser Docker Compose.

## 📦 Objectifs

- Conteneuriser le frontend (Next.js) et le backend (Node.js + Express)
- Lancer une base de données MongoDB dans un conteneur
- Utiliser Redis pour le caching
- Connecter tous les conteneurs via un réseau Docker personnalisé
- Accéder à l'application via `http://localhost:8080`

---

## 🛠️ Étapes

### 1️⃣ Création du réseau Docker

```bash
docker network create hacka-net
```

### 2️⃣ Base de données (MongoDB)

```bash
docker run -d --name hacka-mongo --network hacka-net -v mongo-data:/data/db mongo
```

### 3️⃣ Redis
```bash
docker run -d --name hacka-redis --network hacka-net redis
```

## Backend
### Builder l'image backend
``` bash
docker build -t backend-image ./backend
```
### lancement du conteneur
``` bash
docker run -d --name backend --network hacka-net -p 5000:5000  backend-image
```

## frontend

### Build de l'image frontend
``` bash
docker build -t frontend-image ./frontend
```

### Lancer le conteneur frontend
``` bash
docker run -d --name frontend --network hacka-net -p 8080:3000 frontend-image
```

### Accès 
### Frontend ➝ http://localhost:8080
